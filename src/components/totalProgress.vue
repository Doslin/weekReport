<template>
    <div>
        <div class="userProgress_title" v-if="renderData">
            <span></span>
            <span>总计划完成情况</span>
            <span></span>
        </div>
        <div class="user_Progress" v-if="renderData">
            <div class="userProgress_item hundred_question">
                <div class="userProgress_item_title flex_between">
                    <p>
                        <span style="background: #61AAFF"></span>
                        <span>百日考</span>
                    </p>
                    <span v-cloak>{{renderData.hundredExaminationCurrent?renderData&&renderData.hundredExaminationCurrent:0}}/100</span>
                </div>
                <div class="userProgress_item_progress flex_between">当前完成 <p><span id="hundredExaminationCurrent" :style="setStyle('hundredExaminationCurrent',renderData.hundredExaminationCurrent)"></span></p><span style="color: #FF4C6F">{{renderData.hundredExaminationCurrent?renderData&&renderData.hundredExaminationCurrent:0}}%</span></div>
                <div class="userProgress_item_progress flex_between">计划完成 <p><span id="hundredExaminationPlan" :style="setStyle('hundredExaminationPlan',renderData.hundredExaminationPlan)"></span></p><span style="color: #FF4C6F">{{renderData.hundredExaminationPlan?renderData&&renderData.hundredExaminationPlan:0}}%</span></div>
                <div class="userProgress_item_title flex_between" style="margin-top: 1.5rem">
                    <p>
                        <span style="background: #7ED321"></span>
                        <span>题库</span>
                    </p>
                    <span>{{renderData.questionBankAnswerNum?renderData&&renderData.questionBankAnswerNum:0}}/{{renderData&&renderData.questionBankTotalNum}}</span>
                </div>
                <div class="userProgress_item_progress flex_between">当前完成 <p><span id="questionBankCurrent" :style="setStyle('questionBankCurrent',renderData.questionBankCurrent)"></span></p><span style="color: #FF4C6F">{{renderData.questionBankCurrent?renderData&&renderData.questionBankCurrent:0}}%</span></div>
                <div class="userProgress_item_progress flex_between">计划完成 <p><span id="question" :style="setStyle('question',renderData.questionBankPlan)"></span></p><span style="color: #FF4C6F">{{renderData.questionBankPlan?renderData&&renderData.questionBankPlan:0}}%</span></div>
            </div>
            <div style="margin-top: 3.5rem" class="completePaper_word">
                <!--真题练习-->
                <div class="userProgress_item">
                    <div class="userProgress_item_title flex_between">
                        <p>
                            <span style="background: #F42850"></span>
                            <span>真题练习</span>
                        </p>
                        <span>已完成{{renderData&&renderData.completePaperNum}}套试卷</span>
                    </div>
                    <div class="userProgress_item_progress flex_between">当前完成 <p><span id="complete" :style="setStyle('complete',renderData.examPaperProgress)"></span></p> <span style="color: #61AAFF">{{renderData.examPaperProgress?renderData&&renderData.examPaperProgress:0}}%</span></div>
                </div>
                <!--单词-->
                <div class="userProgress_item">
                    <div class="userProgress_item_title flex_between">
                        <p>
                            <span style="background: #F6A93B"></span>
                            <span>单词</span>
                        </p>
                        <span>{{renderData&&renderData.wordAnswerNum}}/{{renderData&&renderData.wordTotalNum}}</span>
                    </div>
                    <div class="userProgress_item_progress flex_between">当前完成 <p><span id="word" :style="setStyle('word',renderData.wordProgress)"></span></p><span style="color: #61AAFF">{{renderData.wordProgress?renderData&&renderData.wordProgress:0}}%</span></div>
                </div>
                <!--作文-->
                <div class="userProgress_item">
                    <div class="userProgress_item_title flex_between">
                        <p>
                            <span style="background: #FF7130"></span>
                            <span>作文</span>
                        </p>
                        <span>{{renderData&&renderData.compositionAnswerNum}}/{{renderData&&renderData.compositionTotalNum}}</span>
                    </div>
                    <!--:style="'width:'+renderData.compositionProgress+'%'"-->
                    <div class="userProgress_item_progress flex_between">当前完成 <p><span id="composition" :style="setStyle('composition',renderData.compositionProgress)"></span></p><span style="color: #61AAFF">{{renderData.compositionProgress?renderData&&renderData.compositionProgress:0}}%</span></div>
                </div>
                <input type="button" value="返回" @click="returnHome">
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data () {
    return {
      // baseUrl:'http://exchange.lfenglish.cn/onlineEducation/',
      baseUrl: 'http://192.168.1.72:8081/onlineEducation/',
      weekReportId: '',
      renderData: ''
    }
  },
  mounted () {
    console.log("this.$route.params.weekReportId：" + this.$route.params.weekReportId)
    this.init(this.$route.params.weekReportId);

  },

  methods: {
    //  进度条设置颜色
    setStyle (id, width) {
      setTimeout(() => {
        document.getElementById(id).style.width = width + '%'
      }, 20)
    },
    //  返回按钮
    returnHome () {
      history.go(-1)
    },
    init (name) {
      this.$http.get(this.baseUrl + 'weekReport/userTotalProgress?weekReportId=' + name)
        .then((res) => {
          if (res.data.state === 200) {
            this.renderData = res.data.data.renderData
          }
        })
    }
  }
}
</script>
<style>
 @import '../assets/styles/index.css';
</style>
