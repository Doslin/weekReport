<template>
    <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper" v-cloak>
            <!-- 第一屏 -->
            <div class="swiper-slide swiper-slide1" v-cloak>
                <div class="first-view-overview">
                    <div class="first-view-overview-imag1-wrapper">
                        <div class="first-view-overview-img1">
                            <div class="first-view-overview-img1-line1">
                                <p><span class="complete-task">45</span>个</p>
                            </div>
                            <div class="first-view-overview-img1-line2">
                                <p class="complete-task">
                                    本周完成任务
                                </p>
                            </div>
                            <div class="first-view-overview-img1-line3">
                                <p>超过了<span class="complete-task">99%</span>的学生
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="first-view-overview-img2">
                        <div class="first-view-overview-img-line1">
                            <p><span class="complete-task">800</span>道</p>
                        </div>
                        <div class="first-view-overview-img-line2">
                            <p class="complete-task">
                                本周完成题数
                            </p>
                        </div>
                        <div class="first-view-overview-img-line3">
                            <p class="complete-task"></p><p>超过了<span class="complete-task">99%</span>的学生</p>
                        </div>
                    </div>
                    <div class="first-view-overview-img3">
                        <div class="first-view-overview-img-line1">
                            <p><span class="complete-task">800</span>时</p>
                        </div>
                        <div class="first-view-overview-img-line2">
                            <p class="complete-task">
                                本周学习时间
                            </p>
                        </div>
                        <div class="first-view-overview-img-line3">
                            <p>超过了<span class="complete-task">99%</span>的学生</p>
                        </div>
                    </div>
                </div>
                <div class="first-view-total-task">
                    <div class="total-task-text">
                        <p>总任务进度<span>80</span>/<span>100</span></p>
                    </div>
                    <div class="task-progress-view">
                    <el-progress :show-text="false" :stroke-width="9" :percentage="90" class="current-task-progress"></el-progress>
                    <el-progress :show-text="false" :stroke-width="9" :percentage="70" class="planned-task-progress"></el-progress>
                    </div>
                    <div class="task-progress-view-notes">
                        <div class="illustrate-color-block-current"></div>
                        <div class="forcefontsize10">当前任务进度</div>
                        <div class="illustrate-color-block-planned"></div>
                        <div class="forcefontsize10">计划任务进度</div>
                    </div>
                </div>
            </div>
            <!-- 第二屏 -->
            <div class="swiper-slide swiper-slide2 " v-cloak>
                <div class="daily-task">
                    <div class="daily-task-subtitle">每日任务</div>
                    <img src="../assets/images/subtitle-desc.png" alt="">
                    <div class="daily-task-text-item">
                        <div class="daily-task-text">
                            <p>这周任务中<br/>完成了 <span>{{}}</span>道练习题 综合正确率为 <span>{{}}</span>\n <span>{{}}</span> 正确率较低</p>
                            <p>共观看了 <span>{{}}</span> 节课程视频<br/> 学习了 <span>{{}}</span> 个新单词 单词掌握率为 <span>{{}}</span></p>
                        </div>
                        <div class="daily-task-text">                    </div>

                    </div>
                </div>
                <div class="intensive-practice">
                    <div class="daily-task-subtitle">强化练习</div>
                    <img src="../assets/images/subtitle-desc.png" alt="">
                    <div class="daily-task-text-item">
                        <div class="daily-task-text">
                            <p>这一周<br/>完成了 <span>{{}}</span>道题 综合正确率为 <span>{{}}</span></p>
                            <p>共学习了 <span>{{}}</span> 篇作文的常用写作方式<br/>  提笔出文不在话下</p>
                        </div>
                    </div>
                </div>

            </div>
            <!-- 第三屏 -->
            <div class="swiper-slide swiper-slide3 daily-task-details-wrapper" v-cloak>
               <div class="daily-task-details-text">
                   <p>这周任务中</p>
                   <p>完成了<span>58</span>道练习题 </p>
                   <p>综合正确率为 <span>{{}}</span>，比上周提高了 <span>{{}}</span></p>
                   <p>本周做题正确率如图</p>
                </div>
                <div class="daily-task-details-graph-wrapper">
                        <div id="daily-task-details-graph-echart" >
                        </div>
                </div>
                <div class="daily-task-details-text">
                    <p>其中 <span>完型填空</span> 正确率最高 为<span>56%</span></p>
                    <p><span>阅读理解</span>正确率最低 为<span>16%</span></p>
                </div>
            </div>
            <!-- 第四屏 -->
            <div class="swiper-slide swiper-slide3 daily-task-details-wrapper" v-cloak>
                <div class="daily-task-details-text">
                    <p>这周任务中</p>
                    <p>观看了<span>58</span>节课程视频 </p>
                    <p>学习了 <span>{{}}</span>个新单词</p>
                    <p>还有 <span>{{}}</span>个单词没有掌握</p>
                    <p>单词掌握率为 <span>{{}}</span> 比上周提升了 <span>{{}}</span> </p>
                </div>
                <div class="daily-task-details-words-text">
                    <div class="daily-task-details-words">
                        <div class="week-studied-word">本周已学单词 <span>{{}}</span>/<span>{{}}</span></div>
                        <el-progress class="zl-progress" :text-inside="false"
                                     :stroke-width="10" :percentage="50"
                                     :show-text="false"   />
                    </div>
                    <div class="daily-task-details-words">
                        <div class="week-studied-word">本周单词掌握率 <span>{{}}</span>/<span>{{}}</span></div>
                        <el-progress class="zl-progress" :text-inside="false"
                                     :stroke-width="10" :percentage="50"
                                     :show-text="false"   />
                    </div>
                    <div class="daily-task-details-words">
                        <div class="week-studied-word">累计单词掌握情况 <span>{{}}</span>/<span>{{}}</span></div>
                        <el-progress class="zl-progress" :text-inside="false"
                                     :stroke-width="10" :percentage="50"
                                     :show-text="false"   />
                    </div>
                </div>
                <div class="daily-task-details-tips">
                    <p>单词学习超越了平台 <span>{{}}</span>的学生</p>
                </div>
            </div>
            <!-- 第五屏 -->
            <div class="swiper-slide swiper-slide5 daily-task-details-wrapper" v-cloak>
                <div class="daily-task-details-text">
                    <p>这一周</p>
                    <p>共做了<span>58</span>套试卷</p>
                    <p>平均分 <span>{{}}</span>分</p>
                    <p>比上周提升了 <span>{{}}</span>分</p>
                </div>
                <div class="calendar-questions-week-scores">
                    <div class="only-look-this-week">
                        <div class="only-look-this-week-img">
                            <img src="../assets/images/light-green-selected.png" >
                        </div>
                        <span>只看本周分数</span>
                    </div>
                    <div id="ExamPaper"></div>
                </div>
                <!-- swiper -->
                <div class="swiper-container3">
                    <div class="swiper-wrapper" v-cloak v-show='renderData&&renderData.listExamPaper.listPaper!=null'>
                        <div class="swiper-slide flex_between" v-for="(item,index) in renderData&&renderData.listExamPaper.listPaper">
                            <div class="swiper-container3-item" v-cloak>
                                <h4><span></span><span>{{item.paperName==""||item.paperName==null?'随机考试':item.paperName}}</span></h4>
                                <p>用时:{{item.duration==null?'--':MillisecondToDate(item.duration)}}</p>
                                <p>{{item.submitTime==null?'--':item.submitTime}}</p>
                            </div>
                            <div class="swiper-container3-item"  v-cloak>
                                <p class="score">
                                    {{item.score}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination3" v-show='renderData&&renderData.listExamPaper.listPaper!=null'> </div>
                    <div class="noData" v-cloak v-show="renderData==null||renderData==''||(renderData&&renderData.listExamPaper.listPaper==null)">暂无数据</div>
                </div>
            </div>
            <!-- 第六屏 -->
            <div class="swiper-slide swiper-slide5 daily-task-details-wrapper" v-cloak>
                <div class="daily-task-details-text">
                    <p>这一周</p>
                    <p>共作答了<span>58</span>道题</p>
                    <p>综合正确率 <span>{{}}</span></p>
                    <p>比上周提升了 <span>{{}}</span></p>
                </div>
                <div class="swiper-slide-item swiper-slide4-content">
                    <!-- 图表 -->
                    <div class="listQuestionBank">
                        <div id="listQuestionBank" v-show="renderData&&renderData.listQuestionBank.questionNum!=null"></div>
                        <div class="noData" v-cloak v-show="renderData==''||renderData==null||renderData&&renderData.listQuestionBank.questionNum==null">暂无数据</div>
                    </div>
                    <div class="questionBank">
                        <div>
                            <p v-for="(item,index) in questionBank">
                                <span :style="'background:'+item.color"></span>{{item.text}}
                                <span v-show="index!=questionBank.length-1">{{item.questionNum==null?'--':item.questionNum}} 道</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import zlProgress from '../utils/zlProgress'
  import lprogress from '../utils/lprogress'
  import Swiper from "swiper"
  export default {
    name: '',
    mounted () {
      this.initSwiper()
    },
    data () {
      return {
        studentName: '小白',
        progressValue: 10,
        colorStart:'#03B4FDFF',
        colorEnd: '#FFEE22FF'
      }
    },
    methods: {
      // 加载swiper
      initSwiper () {
        var that=this;
        var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          on: {
            slideChangeTransitionEnd: function () {
              that.setData(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },
        });
      },
      setData (activeIndex) {
        var that = this;
        if (activeIndex == 0) {//第一屏
          this.setaa = false;
          // this.setHome1();
        } else if (activeIndex == 1) {//第二屏
          this.setaa = true;
        }
        else if (activeIndex == 2) {//第三屏
          var dailyTaskDetailGraph = this.$echarts.init(document.getElementById('daily-task-details-graph-echart'));
          console.log(dailyTaskDetailGraph)
          dailyTaskDetailGraph.setOption({
            grid: {
              left: '0%',
              right: '4%',
              bottom: '10%',
              top: '15%',
              containLabel: true
            },
            tooltip: {},
            xAxis : [{
              type : 'category',
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
              axisTick: {alignWithLabel: false},
              splitLine: {show: false},
              axisLine :{show:false},//显示坐标轴轴线
              axisTick:{show :false},//刻度
              axisLabel:{
                interval:0,
                color: "#A3A9AF",  //X轴文字颜色
                fontSize:10,
              },
            }],
            yAxis: [{
              splitLine: {show: false},
              show: false
            }],
            series: [
              {
                name: '进度条背景',
                type: 'bar',
                barGap: '-100%',//不同系列的柱间距离，为百分比。
                // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
                // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
                // 并且是对此坐标系中所有 'bar' 系列生效。
                barWidth: 7,
                data: [100, 100, 100, 100, 100, 100],
                color: '#0587C4',//柱条颜色
                itemStyle: {
                  normal: {
                    barBorderRadius: 46
                  }
                }
              },
              {
              name: '销量',
              type: 'bar',
              barWidth: '7',
              // barShadow:'#BFDDFF',
              label:{
                show:true,
                position:'top',
                distance:5,
                formatter: '{@score}%',
                color:'#140F26',
                fontWeight:'bold',
                fontSize:14,
              },
              itemStyle:{
                normal: {
                  barBorderRadius:46,

                  color:  new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 1, color: '#03B4FDFF'},
                        {offset: 0.9, color: '#03B4FDFF'},
                        {offset: 0, color: '#FFEE22FF'}
                      ]
                    ),
                  pieces: [{gte: 7, lte: 95, color: 'green'}],
                },
                emphasis: {

                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 1, color: '#03B4FDFF'},
                      {offset: 0, color: '#FFEE22FF'}
                    ]
                  )
                }
              },
              data: [5, 20, 36, 100, 10, 20]
            }

            ]
          });
        }

      }
    },
    components: {
      'zl-progress': zlProgress,
      'l-progress': lprogress
    }
  }
</script>

<style  type="text/scss" lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/global";
    .swiper-container {
        height: 100%;
        .swiper-wrapper {
            height: 100%;
            .swiper-slide1 {
                width: 100%;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                .first-view-overview {
                    position: relative;
                    margin-top: 41px;
                    height: 378px;
                    box-sizing: border-box;

                    .first-view-overview-imag1-wrapper {
                        display: flex;
                        justify-content: center;
                        .first-view-overview-img1 {
                            position: absolute;
                            height: 352px;
                            width: 350px;
                            margin: auto;
                            background-image: url("../assets/images/hexagon.png");
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            .first-view-overview-img1-line1 {
                                margin-top: -.533rem;
                                margin-left: .3rem;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                margin-bottom: 10px;
                                p {
                                    font-size: 20px;
                                    font-weight: 500;
                                    color: #FFEE22FF;
                                    span {
                                        font-size: 120px;
                                    }
                                }
                            }
                            .first-view-overview-img1-line2 {
                                margin-left: 99.5px;
                                margin-top: -14px;
                                p {
                                    font-size: 25px;
                                    font-weight: 500;
                                    color: #FFFFFFFF;
                                }
                            }
                            .first-view-overview-img1-line3 {
                                margin-left: 80px;
                                p {
                                    font-size: 20px;
                                    font-weight: 500;
                                    color: #60DAFFFF;
                                }
                            }

                        }
                    }
                    .first-view-overview-img2 {
                        position: absolute;
                        top: 300px;
                        width: 276px;
                        height: 278px;
                        left: 34px;
                        background-image: url("../assets/images/hexagon.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .first-view-overview-img-line1 {
                            margin-top: -.333rem;
                            margin-left: .3rem;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            margin-bottom: 10px;
                            p {
                                font-size: 20px;
                                font-weight: 500;
                                color: #FFEE22FF;
                                span {
                                    font-size: 70px;
                                    font-weight: 500;
                                }
                            }
                        }
                        .first-view-overview-img-line2 {
                            margin-left: 67px;
                            margin-top: -12px;
                            p {
                                font-size: 23px;
                                font-weight: 500;
                                color: #FFFFFFFF;
                            }
                        }
                        .first-view-overview-img-line3 {
                            margin-left: 40px;
                            p {
                                font-size: 20px;
                                font-weight: 500;
                                color: #60DAFFFF;
                            }
                        }
                    }
                    .first-view-overview-img3 {
                        position: absolute;
                        top: 300px;
                        width: 276px;
                        height: 278px;
                        right: 34px;
                        background-image: url("../assets/images/hexagon.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .first-view-overview-img-line1 {
                            margin-top: -.333rem;
                            margin-left: .3rem;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            margin-bottom: 10px;
                            p {
                                font-size: 20px;
                                font-weight: 500;
                                color: #FFEE22FF;
                                span {
                                    font-size: 70px;
                                    font-weight: 500;
                                }
                            }
                        }
                        .first-view-overview-img-line2 {
                            margin-left: 67px;
                            margin-top: -12px;
                            p {
                                font-size: 23px;
                                font-weight: 500;
                                color: #FFFFFFFF;
                            }
                        }
                        .first-view-overview-img-line3 {
                            margin-left: 40px;
                            p {
                                font-size: 20px;
                                font-weight: 500;
                                color: #60DAFFFF;
                            }
                        }
                    }
                }
                .first-view-total-task {
                    position: relative;
                    width: 100%;
                    height: 142px;
                    margin-top: 320px;
                    box-sizing: border-box;
                    background-image: url("../assets/images/progress-gun.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .total-task-text {
                        position: absolute;
                        font-size: 20px;
                        color: #FFFFFFFF;
                        font-weight: 500;
                        top: 10px;
                        padding-left: 0.36rem;
                    }
                    .task-progress-view {
                        padding-left: 29px;
                        position: absolute;
                        width: 424px;
                        height: 28px;
                        margin-top: .12rem;
                        .current-task-progress {
                            position: absolute;
                            width: 100%;
                        }
                        .planned-task-progress {
                            position: absolute;
                            width: 100%;
                        }

                    }
                    .task-progress-view-notes {
                        position: absolute;
                        top: 58%;
                        margin-left: 27px;
                        display: flex;
                        flex-direction: row;
                        .illustrate-color-block-current {
                            margin-top: .15rem;
                            background: #0E9FD2FF;
                            margin-right: .2rem;
                            height: 8px;
                            width: 14px;
                        }
                        .illustrate-color-block-planned {
                            background: #FFFF9BFF;
                            margin-top: .15rem;
                            margin-right: .2rem;
                            height: 8px;
                            width: 14px;
                            margin-left: .4rem;
                        }
                        div {
                            font-size: 4px;
                            color: #41B1F9FF;
                        }
                    }

                }
            }
            .swiper-slide2 {}
            .swiper-slide {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                .daily-task-details-text {
                    margin-left: 48px;
                    margin-top: 23px;
                    margin-bottom: 89px;
                    font-weight: 500;
                    p {
                        color: #FFFFFFFF;
                        font-size: 26px;
                        padding: 8px;
                        span {
                            color: #FFEE22FF;
                            font-size: 26px;
                            padding: 0 4px;
                        }
                    }
                }
                .daily-task-details-graph-wrapper {
                    position: relative;
                    margin: 0 31px 0 35px;
                    height: 384px;
                    background-image: url("../assets/images/middle_data_rectangle.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    #daily-task-details-graph-echart {
                        position: absolute;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                    }
                }
                .daily-task-details-words-text {
                    margin-top: -48px;
                    padding-left: 44px;
                    padding-right: 39px;
                    .daily-task-details-words {
                        position: relative;
                        width: 100%;
                        height: 142px;
                        box-sizing: border-box;
                        background-image: url("../assets/images/progress-gun.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        margin: 40px 0;
                        .week-studied-word {
                            position: absolute;
                            left: 36px;
                            top: 28px;
                            font-size:20px;
                            font-weight:500;
                            color:rgba(205,243,255,1);
                        }
                        .zl-progress {
                            position: absolute;
                            left: 0.470rem;
                            top: 0.89043rem;
                            width: 5.18333rem;
                            height: 0.22667rem;
                        }
                    }
                }
                .daily-task-details-tips {
                    position: absolute;
                    bottom: 40px;
                    left: 79px;
                    font-weight: 500;
                    color: #FFFFFFFF;
                    font-size: 36px;
                    span {
                        color: #FFEE22FF;
                    }

                }
            }
            .swiper-slide5 {
                .calendar-questions-week-scores {
                    position: relative;
                    height: 384px;
                    left: 35px;
                    width: 571px;
                    background-image: url("../assets/images/middle_data_rectangle.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    .only-look-this-week {
                        position: absolute;
                        left: 379px;
                        top: 33px;
                        display: flex;
                        align-items: center;

                        .only-look-this-week-img {
                            box-sizing: border-box;
                            width: 18px;
                            height: 18px;
                            background-image: url("../assets/images/light-blue-slect.png");
                            background-repeat: no-repeat;
                            background-size: 100% 100%;

                            img {
                               margin: 3px 3px;
                                width: 12px;
                                height: 12px;
                            }
                        }
                        span {
                            height:30px;
                            font-size:22px;
                            font-weight:400;
                            color:rgba(96,218,255,1);
                            line-height:30px;
                            margin-left: 7px;
                        }
                    }
                }
            }
        }
    }

</style>
