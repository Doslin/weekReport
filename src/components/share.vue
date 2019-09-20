<template>
    <div style="">
        <div class="share-content" id="photo">
            <div class="share" id="shareContent" v-cloak >
                <div class="share-container" v-cloak >
                    <div class="userName"><span v-if=" this.userName !='' " v-cloak>{{this.userName}} | 本周成绩单</span></div>
                    <div class="share-AlmostAlways">
                        <div v-for="(item,index) in this.list" class="share-item">
                            <p class="share-item-title" :style="'background:'+item.color">{{item.title}}</p>
                            <div class="share-item-line" v-cloak>
                                <div class="flex_between globalColor">
                                    <p style="font-weight:500">{{item.text}}<span>
				                	<span v-show="index==0">{{this.$store.state.pageData==null||this.$store.state.pageData==''||this.$store.state.pageData.taskNumber==null?'--':this.$store.state.pageData.taskNumber}}</span>
				                	<span v-show="index==1">{{this.$store.state.pageData==null||this.$store.state.pageData==''||this.$store.state.pageData.paperNum==null?'--':this.$store.state.pageData.paperNum}}</span>
				                	<span v-show="index==2">{{this.$store.state.pageData==null||this.$store.state.pageData==''||this.$store.state.pageData.practiceQuestionNum==null?'--':this.$store.state.pageData.taskNumber}}</span>
				                </span>{{item.describe}}</p>
                                    <p>超越了
                                        <span v-if="index==0">
								    {{this.$store.state.pageData==null||this.$store.state.pageData==''||this.$store.state.pageData.taskNumberSurpass==null?'--':this.$store.state.pageData.taskNumberSurpass}}%
								    </span>
                                        <span v-if="index==1">
								    {{this.$store.state.pageData==null||this.$store.state.pageData==''||this.$store.state.pageData.practiceQuestionCorrectSurpass==null?'--':this.$store.state.pageData.practiceQuestionCorrectSurpass}}%
								    </span>
                                        <span v-if="index==2">
								    	{{this.$store.state.pageData==null||this.$store.state.pageData==''||this.$store.state.pageData.listQuestionBank.surpass==null?'--':this.$store.state.pageData.listQuestionBank}}%
								    </span>
                                        的学生
                                    </p>
                                </div>
                                <p class="share-item-lineItem">
                                    <span :id="'bar'+index" v-if="renderData!=null" :style="setStyle(index)" v-cloak></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="share-img">
                        <img src="../assets/images/wCode.png" alt="">
                        <p>长按识别二维码，了解领斐英语</p>
                    </div>
                    <img  class="score" alt="" v-if="renderData!=null" v-cloak>
                </div>
            </div>
            <div class="share-bottom">
                <p>分享到</p>
                <div class="share-bottomShare">
                    <div class="toCanvas" @click="setSaveImg"><img src="../assets/images/xiangce.png" alt=""><p>保存到相册</p></div>
                    <!-- <div @click="shareFriend"><img src="static/images/weixin.png" alt=""><p>微信好友</p></div> -->
                    <div @click="shareTimeline"><img src="../assets/images/pengyouquan.png" alt=""><p>朋友圈</p></div>
                </div>
            </div>
        </div>
        <div class="bg" v-show="this.save" v-cloak @click="this.save=false">
            <img id="saveImg" :src="this.saveImg" alt="">
            <p>点击任意位置继续操作</p>
        </div>
    </div>
</template>

<script>
  import page from './page'
  export default {
    data () {
      return {
        list:[
          {title:'任务',color:'#4A90E2',text:'已完成',describe:'个'},
          {title:'真题考核',color:'#F42850',text:'完成',describe:'套试卷'},
          {title:'题库',color:'#7ED321',text:'练习',describe:'道习题'},
        ],
        baseUrl:'http://192.168.1.72:8081/onlineEducation/',
        save:false,
        saveImg:'../assets/images/photobg.png',
        isPhoto:false,
        renderData: null,
        userName: '李白',
        setScore:''
      }
    },
    components: {
      page
    },
    mounted(){
      var weekReportId = this.GetQueryString('weekReportId');
      this.paperDetailsJsonArray = this.$store.state.pageData.paperDetailsJson
      console.log("this.paperDetailsJsonArray: " + this.paperDetailsJsonArray)
    },
    methods:{
      setWchat(){
        this.$http.get(this.baseUrl+'wechat/getWechatAuthorizationDto',{params:{url:location.href}}).
        then((res)=>{
          if(!this.isWeiXin()){
            alert('请在微信环境下分享');
            return;
          }
          var datas=res.data;
          wx.config({
            debug: false,               // 开启调试模式
            appId: datas.appId,         // 必填，公众号的唯一标识
            timestamp: datas.timestamp, // 必填，生成签名的时间戳
            nonceStr: datas.noncestr,   // 必填，生成签名的随机串
            signature: datas.signature, // 必填，签名，见附录1
            jsApiList: [
              'onMenuShareTimeline',  // 分享到朋友圈接口
              'onMenuShareAppMessage',//  分享到朋友接口
              'downloadImage',        //下载图片
              'showOptionMenu',       // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            ]
          });
          var shareDesc=this.userName+'同学上周的学习报告出炉了，点击查看学生一周的学习成果';
          var that = this;
          var shareUrl=this.baseUrl+'static/images/sharelogo.jpg';
          wx.ready(function(){
            //朋友圈
            wx.onMenuShareTimeline({
              "imgUrl" :shareUrl,// 分享显示的缩略图地址
              "link" : location.href,                   // 分享地址
              "desc" : shareDesc,                                     // 分享描述
              "title" : '上周学习周报已生成',                                    // 分享标题
              success: function (res) {
                console.log('分享朋友圈成功');
                that.save=false;
              },
              cancel: function (res) {
              },
              fail: function (res) {
                alert(JSON.stringify(res));
              }
            },function(res){
            });
            //朋友
            wx.onMenuShareAppMessage({
              "imgUrl" :shareUrl,// 分享显示的缩略图地址
              "link" : location.href,                   // 分享地址
              "desc" : shareDesc,                                     // 分享描述
              "title" : '上周学习周报已生成',                                    // 分享标题
              success: function (res) {
                that.save=false;
              },
              cancel: function (res) {
              },
              fail: function (res) {
              }
            },function(res){});
          });
          wx.error(function(res){});
        })
      },
      setStyle(index){
        setTimeout(()=>{
          if(index==0){
            document.getElementById('bar'+index).style.width=((this.renderData.listHundredExamination.days/this.renderData.listLearningSituation.planDays)*100)>100?'100%':((this.renderData.listHundredExamination.days/this.renderData.listLearningSituation.planDays)*100)+'%';
          }else if(index==1){
            document.getElementById('bar'+index).style.width=((this.renderData.listExamPaper.paperNum/this.renderData.listLearningSituation.planSets)*100)>100?'100%':((this.renderData.listExamPaper.paperNum/this.renderData.listLearningSituation.planSets)*100)+'%';
          }else if(index==2){
            document.getElementById('bar'+index).style.width=((this.renderData.listQuestionBank.questionNum/this.renderData.listLearningSituation.planQuestions)*100)>100?'100%':((this.renderData.listQuestionBank.questionNum/this.renderData.listLearningSituation.planQuestions)*100)+'%';
          }
          document.getElementById('bar'+index).style.background=this.list[index].color;
        },30);
      },
      isWeiXin() {//判断是否在微信浏览器micromessenger
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          return true;
        } else {
          return false;
        }
      },
      GetQueryString(name){
        var after = window.location.href.split("?")[1];
        if(after){
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = after.match(reg);
          if(r != null){
            return  decodeURIComponent(r[2]);
          }else{
            return null;
          }
        }
      },
      // 分享到朋友圈
      shareTimeline() {
        this.saveImg = "../assets/images/shareTimeline.png";
        $('#saveImg').css('top','0');
        this.save = true;
      },
      setSaveImg() {
        this.saveImg = "../assets/images/photobg.png";
        $('#saveImg').css('top','10%');
        this.save = true;
        if(!this.isPhoto){
          this.isPhoto=true;
          var shareContent = document.getElementById("shareContent");
          html2canvas(shareContent).then(function(canvas) {
            var img = new Image();
            var mUrl = canvas.toDataURL();
            img.src = mUrl;
            img.style.position = "absolute";
            img.style.bottom = '15%';
            img.style.left = 0;
            img.style.opacity = 0;
            document.getElementById("photo").appendChild(img);
            let w = shareContent.offsetWidth*2;
            let h = shareContent.offsetHeight*2;
            // Canvas2Image.saveAsImage(canvas, w, h, 'png', '学习周报');
          })
        }
      },
    }
  }
</script>

<style  type="text/scss" lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/global";
    .share-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background-image: url("../assets/images/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .share {
        width: 100%;
        height: 100%;
        background-image: url("../assets/images/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 42px 55px 245px 55px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }

    .share .score {
        position: absolute;
        top: -1rem;
        right: -1rem;
        width: 8.1rem;
        height: 6rem;
    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, .7);
    }

    .bg img {
        zoom: .5;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .bg p {
        position: absolute;
        font-size: 1rem;
        color: #fff;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
    }

    .share-container {
        width: 100%;
        height: 100%;
        /*height: 46rem;*/
        background: #fff;
        border-radius: 0.375rem;
        /*padding: 2rem 1.5rem 1.5rem 1.5rem;*/
        padding: 0 50px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }

    .share-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 17%;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .share .userName {
        text-align: center;
        color: #333333;
        font-size: 36px;
        font-weight: bold;
        /*padding-bottom: 2rem;*/
        border-bottom: 1px dashed #C2C2C2;
        padding-top: 40px;
        padding-bottom: 40px;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 48px;
        /*margin-bottom: 2rem;*/
    }

    .share-AlmostAlways {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 47%;
    }

    .share-item {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    .share-item .share-item-title {
        width: 88px;
        height: 88px;
        line-height: 88rem;
        border-radius: 50%;
        border: 4px solid rgba(255, 255, 255, .5);
        text-align: center;
        color: #ffd4a1;
        font-size: 30px;
        white-space: wrap;
    }

    .share-item-line {
        margin-left: 20px;
        flex: 1;
        color: #0D0E10;
        font-size: 30px;
    }
    .flex_between {
        display: flex;
        position: relative;
        align-items: center;
    }

    .share-item-line .globalColor p:nth-child(2) {
        color: #666666;
        font-size: 22px;
        position: absolute;
        right: 0;
    }

    .share-item-lineItem {
        width: 100%;
        height: 8px;
        background: #EFF0F1;
        border-radius: 3px;
        margin-top: 5%;
        position: relative;
    }

    .share-item-lineItem span {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        border-radius: 3px;
        width: 0;
        transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .share-img {
        text-align: center;
        font-size: 0;
        height: 28%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .share-img img {
        width: 193px;
        height: 193px;
    }

    .share-img p {
        color: #555555;
        font-size: 20px;
        margin-top: 19px;
    }

    .share-bottom > p {
        text-align: center;
        color: #333333;
        font-size: 28px;
    }

    .share-bottomShare {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .share-bottomShare div {
        padding-top: 20px;
        margin: 0 50px;
    }

    .share-bottomShare img {
        width: 60px;
        height: 60px;
    }

    .share-bottomShare p {
        color: #333333;
        font-size: 20px;
    }

    .bubble {
        height: 42%;
        width: 100%;
        position: relative;
    }

    .renderData {
        background: #fff;
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
    }

    .renderData img {
        zoom: .5;
        margin-top: 45%;
    }

    .renderData p {
        font-size: 1.5rem;
        color: #666666;
    }

    .renderData .tip {
        width: 100%;
        font-size: 1.3rem;
        position: absolute;
        left: 50%;
        bottom: 10%;
        transform: translateX(-50%);
    }
</style>
