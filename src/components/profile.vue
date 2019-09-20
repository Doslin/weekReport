<template>
    <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper" v-cloak>
            <!-- 第一屏 -->
            <div class="swiper-slide swiper-slide1" v-cloak>
                <page>
                <div class="first-view-overview">
                    <div class="first-view-overview-imag1-wrapper">
                        <div class="first-view-overview-img1">
                            <div class="first-view-overview-img1-line1">
                                <p><span class="complete-task">{{this.$store.state.pageData.taskNumber ? this.$store.state.pageData.taskNumber : '--'}}</span>个</p>
                            </div>
                            <div class="first-view-overview-img1-line2">
                                <p class="complete-task">
                                    本周完成任务
                                </p>
                            </div>
                            <div class="first-view-overview-img1-line3">
                                <p>超过了<span class="complete-task">{{this.$store.state.pageData.taskNumberSurpass ? this.$store.state.pageData.taskNumberSurpass : 0}}%</span>的学生
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="first-view-overview-img2">
                        <div class="first-view-overview-img-line1">
                            <p><span class="complete-task">{{this.$store.state.pageData.questionNumber ? this.$store.state.pageData.questionNumber : '--'}}</span>道</p>
                        </div>
                        <div class="first-view-overview-img-line2">
                            <p class="complete-task">
                                本周完成题数
                            </p>
                        </div>
                        <div class="first-view-overview-img-line3">
                            <p class="complete-task"></p><p>超过了<span class="complete-task">{{this.$store.state.pageData.questionNumberSurpass != null ? this.$store.state.pageData.questionNumberSurpass : '--'}}%</span>的学生</p>
                        </div>
                    </div>
                    <div class="first-view-overview-img3">
                        <div class="first-view-overview-img-line1">
                            <p><span class="complete-task">{{this.$store.state.pageData.totalTime != null ? this.MillisecondToHour(this.$store.state.pageData.totalTime) : '--'}}</span>时</p>
                        </div>
                        <div class="first-view-overview-img-line2">
                            <p class="complete-task">
                                本周学习时间
                            </p>
                        </div>
                        <div class="first-view-overview-img-line3">
                            <p>超过了<span class="complete-task">{{this.$store.state.pageData.totalTimeSurpass != null ? this.$store.state.pageData.totalTimeSurpass : '--'}}%</span>的学生</p>

                        </div>
                    </div>
                </div>
                <div class="first-view-total-task">
                    <div class="total-task-text">
                        <p>总任务进度<span>{{this.$store.state.pageData.currentTaskDays != null ? this.$store.state.pageData.currentTaskDays : '--'}}</span>/<span>100</span></p>
                    </div>
                    <div class="task-progress-view-wrapper">
                        <div class="task-progress-view">
<!--                            :strokeWidth="12"-->
                            <a-progress :percent="this.$store.state.pageData.planTaskProgress" :strokeColor= "`#FFFF9BFF`"   :showInfo="false" class="planned-task-progress"/>
                            <el-progress :show-text="false" :stroke-width="6" :percentage="this.$store.state.pageData.currentTaskProgress" class="current-task-progress"/>
                        </div>
                        <div class="task-progress-view-text">{{this.$store.state.pageData.planTaskProgress != null ? this.$store.state.pageData.planTaskProgress : '--'}}%</div>
                    </div>
                    <div class="task-progress-view-notes">
                        <div class="illustrate-color-block-current"></div>
                        <div class="forcefontsize10">当前任务进度</div>
                        <div class="illustrate-color-block-planned"></div>
                        <div class="forcefontsize10">计划任务进度</div>
                    </div>
                </div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-center-swipe">
                                <p class="swipe-view">上滑查看本周详情</p>
                                <img src="../assets/images/swipe-show.png" class="below_png">
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
            <!-- 第二屏 -->
            <div class="swiper-slide swiper-slide2 " v-cloak>
                <page>
                    <div class="daily-task-wrapper">
                        <div class="daily-task ">
                            <div class="daily-task-subtitle ">每日任务</div>
                            <div class="daily-task-text-item">
                                <div class="daily-task-text">
                                    <p>这周任务中<br/>完成了 <span>{{this.$store.state.pageData.taskQuestionNumber != null ? this.$store.state.pageData.taskQuestionNumber : '--'}}</span>道练习题 综合正确率为 <span>{{this.$store.state.pageData.taskQuestionCorrect != null ? this.$store.state.pageData.taskQuestionCorrect : '--'}}%</span><br/><span>{{ this.getSubjectsTopicByType(this.$store.state.pageData.lowestCorrectType)}}</span> 正确率较低</p>
                                    <div class="daily-task-texts">                    </div>
                                    <p>共观看了 <span>{{this.$store.state.pageData.taskVideoNumber === null ?'--':this.$store.state.pageData.taskVideoNumber}}</span> 节课程视频<br/> 学习了 <span>{{this.$store.state.pageData.taskWordNumber != null ? this.$store.state.pageData.taskWordNumber : '--'}}</span> 个新单词 单词掌握率为 <span>{{this.$store.state.pageData.taskWordMasterRate != null ? this.$store.state.pageData.taskWordMasterRate : '--'}}%</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="intensive-practice daily-task">
                            <div class="daily-task-subtitle">专项练习</div>
                            <div class="daily-task-text-item">
                                <div class="daily-task-text">
                                    <p>这一周<br/>完成了 <span>{{this.$store.state.pageData.practiceQuestionNum != null ? this.$store.state.pageData.practiceQuestionNum : '--'}}</span>道题 综合正确率为 <span>{{this.$store.state.pageData.practiceQuestionCorrect != null ? this.$store.state.pageData.practiceQuestionCorrect : '--'}}%</span></p>
                                    <p>共学习了 <span>{{this.$store.state.pageData.compositionNum != null ? this.$store.state.pageData.compositionNum : '--'}}</span> 篇作文的常用写作方式<br/>  提笔出文不在话下</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-footer-blow-verrical">
                        <img src="../assets/images/below_vertical.png" alt="">
                    </div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-center-swipe">
                                <p class="swipe-view">上滑查看本周详情</p>
                                <img src="../assets/images/swipe-show.png" class="below_png">
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
            <!-- 第三屏 -->
            <div class="swiper-slide swiper-slide3 daily-task-details-wrapper" v-cloak>
                <page>
                    <div class="daily-task-details-text">
                        <p>这周任务中</p>
                        <p>完成了<span>{{this.$store.state.pageData.taskQuestionNumber != null ? this.$store.state.pageData.taskQuestionNumber : '--'}}</span>道练习题 </p>
                        <p>综合正确率为 <span>{{this.$store.state.pageData.taskQuestionCorrect != null ? this.$store.state.pageData.taskQuestionCorrect : '--'}}%</span>，比上周{{this.$store.state.pageData.correctHigherThanLastweek > 0 ? `提高了` : `减少了`}} <span>{{this.$store.state.pageData.correctHigherThanLastweek != null ? this.$store.state.pageData.correctHigherThanLastweek : '--'}}%</span></p>
                        <p>本周做题正确率如图</p>
                    </div>
                    <div class="daily-task-details-graph-wrapper">
                        <div id="daily-task-details-graph-echart" >
                        </div>
                    </div>
                    <div class="daily-task-details-text">
                        <p>其中 <span>{{getSubjectsTopicByType(this.$store.state.pageData.highestCorrectType)}}</span> 正确率最高 为<span>{{this.$store.state.pageData.highestCorrect != null ? this.$store.state.pageData.highestCorrect : '--'}}%</span></p>
                        <p><span>{{getSubjectsTopicByType(this.$store.state.pageData.lowestCorrectType)}}</span>正确率最低 为<span>{{this.$store.state.pageData.lowestCorrect != null ? this.$store.state.pageData.lowestCorrect : '--'}}%</span></p>
                    </div>
                    <div class="item-footer-blow-verrical">
                        <img src="../assets/images/below_vertical.png" alt="">
                    </div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-center-swipe">
                                <p class="swipe-view">上滑查看本周详情</p>
                                <img src="../assets/images/swipe-show.png" class="below_png">
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
            <!-- 第四屏 -->
            <div class="swiper-slide swiper-slide3 daily-task-details-wrapper" v-cloak>
                <page>
                    <div class="daily-task-details-text">
                        <p>这周任务中</p>
                        <p>观看了<span>{{this.$store.state.pageData.taskVideoNumber != null ? this.$store.state.pageData.taskVideoNumber : '--'}}</span>节课程视频 </p>
                        <p>学习了 <span>{{this.$store.state.pageData.taskWordNumber != null ? this.$store.state.pageData.taskWordNumber : '--'}}</span>个新单词</p>
                        <p>还有 <span>{{this.$store.state.pageData.taskWordNotMasterNumber != null ? this.$store.state.pageData.taskWordNotMasterNumber : '--'}}</span>个单词没有掌握</p>
                        <p>单词掌握率为 <span>{{this.$store.state.pageData.taskWordMasterRate != null ? this.$store.state.pageData.taskWordMasterRate : '--'}}%</span> 比上周{{this.$store.state.pageData.correctHigherThanLastweek > 0 ? `提高了` : `减少了`}} <span>{{this.$store.state.pageData.taskWordMasterRateIncrease != null  ? this.$store.state.pageData.taskWordMasterRateIncrease : '--'}}%</span> </p>
                    </div>
                    <div class="daily-task-details-words-text">
                        <div class="daily-task-details-words">
<!--                            percentageCalculation(this.$store.state.pageData.taskWordNumber, this.$store.state.pageData.taskTotalWordNumber)-->
                            <div class="week-studied-word">本周已学单词 <span>{{this.$store.state.pageData.taskWordNumber != null ? this.$store.state.pageData.taskWordNumber : '--'}}</span>/<span>{{this.$store.state.pageData.taskTotalWordNumber != null ? this.$store.state.pageData.taskTotalWordNumber : '--'}}</span></div>
                            <el-progress class="zl-progress" :text-inside="false"
                                         :stroke-width="10" :percentage="percentageCalculation(this.$store.state.pageData.taskWordNumber, this.$store.state.pageData.taskTotalWordNumber)"
                                         :show-text="false"   />
                            <div class="week-studied-word-progress">{{percentageCalculation(this.$store.state.pageData.taskWordNumber, this.$store.state.pageData.taskTotalWordNumber)}}%</div>
                        </div>
                        <div class="daily-task-details-words">
                            <div class="week-studied-word">本周单词掌握率 <span>{{this.$store.state.pageData.taskWordMasterNumber != null ? this.$store.state.pageData.taskWordMasterNumber : '--'}}</span>/<span>{{this.$store.state.pageData.taskWordNumber != null ? this.$store.state.pageData.taskWordNumber : '--'}}</span></div>
                            <el-progress class="zl-progress" :text-inside="false"
                                         :stroke-width="10" :percentage="percentageCalculation(this.$store.state.pageData.taskWordMasterNumber, this.$store.state.pageData.taskWordNumber)"
                                         :show-text="false"   />
                            <div class="week-studied-word-progress">{{this.$store.state.pageData.taskWordMasterRate != null ? this.$store.state.pageData.taskWordMasterRate : '--'}}%</div>
                        </div>
                        <div class="daily-task-details-words">
                            <div class="week-studied-word">累计单词掌握情况 <span>{{this.$store.state.pageData.totalWordMasterNumber != null ? this.$store.state.pageData.totalWordMasterNumber : '--'}}</span>/<span>{{this.$store.state.pageData.totalWordNumber != null ? this.$store.state.pageData.totalWordNumber : '--'}}</span></div>
                            <el-progress class="zl-progress" :text-inside="false"
                                         :stroke-width="10" :percentage="percentageCalculation(this.$store.state.pageData.totalWordMasterNumber, this.$store.state.pageData.totalWordNumber)"
                                         :show-text="false"   />
                            <div class="week-studied-word-progress">{{percentageCalculation(this.$store.state.pageData.totalWordMasterNumber, this.$store.state.pageData.totalWordNumber)}}%</div>
                        </div>
                    </div>
                    <div class="daily-task-details-tips">
                        <p>单词学习超越了平台 <span>{{this.$store.state.pageData.taskWordMasterRateSurpass != null ? this.$store.state.pageData.taskWordMasterRateSurpass : '--'}}</span>%的学生</p>
                    </div>
                    <div class="item-footer-blow-verrical">
                        <img src="../assets/images/below_vertical.png" alt="">
                    </div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-center-swipe">
                                <p class="swipe-view">上滑查看本周详情</p>
                                <img src="../assets/images/swipe-show.png" class="below_png">
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
            <!-- 第五屏 -->
            <div class="swiper-slide swiper-slide5 daily-task-details-wrapper" v-cloak>
                <page>
                    <div class="daily-task-details-text">
                        <p>这一周</p>
                        <p>共做了<span>{{this.$store.state.pageData.paperNum != null ? this.$store.state.pageData.paperNum : '--'}}</span>套试卷</p>
                        <p>平均分 <span>{{this.$store.state.pageData.averageScore != null ? this.$store.state.pageData.averageScore : '--'}}</span>分</p>
                        <p>比上周{{this.$store.state.pageData.increaseAverageScore > 0 ? `提高了` : `减少了`}}  <span>{{this.$store.state.pageData.increaseAverageScore != null ? this.$store.state.pageData.increaseAverageScore : '--'}}</span>分</p>
                    </div>
                    <div class="calendar-questions-week-scores">
                        <div class="only-look-this-week">
<!--                            <div class="only-look-this-week-img">-->
<!--                                <img src="../assets/images/light-green-selected.png" >-->
<!--                            </div>-->
<!--                            <span>只看本周分数</span>-->
                        </div>
                        <div id="ExamPaper"></div>
                    </div>
                    <!-- swiper -->
                    <div id="banner" class="swi-con" v-if="this.fourthScreen" v-cloak >
                        <div class="swiper-wrapper" >
                            <div class="swiper-slide flex_between" v-for="(item,index) in this.paperDetailsJsonArray" :key="index">
                                <div class="item-wrapper">
                                    <div class="orange-square"></div>
                                    <div class="swiper-container3-item" v-cloak>
                                        <h4><span>{{item.paperName==""||item.paperName==null?'随机考试':item.paperName}}</span></h4>
                                        <p class="item-using-time">用时:{{item.duration==null?'--':MillisecondToDate(item.duration)}}</p>
                                        <p>{{item.submitTime==null?'--':item.submitTime}}</p>
                                    </div>
                                    <div class="swiper-container3-item-score"  v-cloak>
                                        <p class="score">
                                            {{item.score}}
                                        </p>
                                    </div>
                                    <div class="swiper-container3-item-score-chinese">分</div>
                                </div>
                            </div>
                        </div>
<!--                        <div class="noData" v-cloak >暂无数据</div>-->
                        <div class="swiper-pagination3" ></div>
                    </div>
                    <div class="item-footer-blow-verrical">
                        <img src="../assets/images/below_vertical.png" alt="">
                    </div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-center-swipe">
                                <p class="swipe-view">上滑查看本周详情</p>
                                <img src="../assets/images/swipe-show.png" class="below_png">
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
            <!-- 第六屏 -->
            <div class="swiper-slide swiper-slide6 daily-task-details-wrapper" v-cloak>
                <page>
                    <div class="daily-task-details-text">
                        <p>这一周</p>
                        <p>共作答了<span>{{this.$store.state.pageData.practiceQuestionNum != null ? this.$store.state.pageData.practiceQuestionNum : '--'}}</span>道题</p>
                        <p>综合正确率 <span>{{this.$store.state.pageData.practiceQuestionCorrect != null ? this.$store.state.pageData.practiceQuestionCorrect : '--'}}</span>%</p>
                        <p>比上周{{this.$store.state.pageData.practiceQuestionCorrectIncrease >0 ? '提升了' : '减少了'}} <span>{{this.$store.state.pageData.practiceQuestionCorrectIncrease != null ? this.$store.state.pageData.practiceQuestionCorrectIncrease : '--'}}%</span></p>
                    </div>
                    <div class="swiper-slide-item swiper-slide6-content">
                        <!-- 图表 -->
                        <div class="listQuestionBank">
                            <!--                        v-show="renderData&&renderData.listQuestionBank.questionNum!=null"-->
                            <div id="listQuestionBank" ></div>
<!--                            <div class="noData" v-cloak v-show="renderData==''||renderData==null||renderData&&renderData.listQuestionBank.questionNum==null">暂无数据</div>-->
                            <div class="straight-line"> <div></div> <div></div></div>
                        </div>
                        <div class="questionBank" >
                            <div>
                                <p v-for="(item,index) in questionBank" :key="index">
                                    <span :style="'background:'+item.color" v-show="index!=questionBank.length-1"></span>
                                    <span v-show="index!=questionBank.length-1">{{item.text}}{{item.questionNum==null?'--':item.questionNum}} 道</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item-footer-blow-verrical">
                        <img src="../assets/images/below_vertical.png" alt="">
                    </div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-center-swipe">
                                <p class="swipe-view">上滑查看本周详情</p>
                                <img src="../assets/images/swipe-show.png" class="below_png">
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
            <!--  第七屏  -->
            <div class="swiper-slide swiper-slide7 learning-efficiency-analysis-wrapper" v-cloak>
                <page>
                    <div class="learning-efficiency-analysis-graph">
                        <div class="learning-efficiency-analysis-graph-legend">
                            <div class="correct-rate-this-week this-week">
                                <div class="square"></div>
                                <div>本周正确率</div>
                            </div>
                            <div class="task-volume-this-week this-week">
                                <div class="square square-orange "></div>
                                <div>本周任务量</div>
                            </div>
                        </div>
                        <div class="learning-efficiency-analysis-wrapper">
                            <div id="learning-efficiency-analysis"></div>
                        </div>
                    </div>
                    <div class="learning-efficiency-analysis-item">
                        <div class="learning-efficiency-analysis-text">
                            <div class="learning-efficiency-analysis-text-title">
                                <div class="square-title">
                                    <div class="square"></div>
                                    <div class="title">能力详情</div>
                                </div>
                                <div class="learning-efficiency-analysis-text-detail">
                                    <P>上周任务中，你对【<span>{{this.$store.state.pageData.efficiencyHighestCorrectType ? getSubjectsTopicByType(this.$store.state.pageData.efficiencyHighestCorrectType) : '--'}}</span>】的掌握相对较好，【<span>{{this.$store.state.pageData.efficiencyLowestCorrectType ? getSubjectsTopicByType(this.$store.state.pageData.efficiencyLowestCorrectType) : '--'}}</span>】正确率较低，体现在对文章居易理解不够精准，逻辑推理能力不足</P>
                                </div>
                            </div>
                            <div class="learning-efficiency-analysis-text-title  learning-efficiency-analysis-text-title1">
                                <div class="square-title">
                                    <div class="square"></div>
                                    <div class="title">提升建议</div>
                                </div>
                                <div class="learning-efficiency-analysis-text-detail">
                                    <P>强化词汇的积累，在强化练习中多加练习【<span>{{this.$store.state.pageData.efficiencyLowestCorrectType ? getSubjectsTopicByType(this.$store.state.pageData.efficiencyLowestCorrectType)  : '--'}}</span>】题型，提升内容总结，把握主旨能力</P>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="learn-total-plan-situation" @click="viewTotalProgress()">查看总计划完成情况 >></div>
                </page>
                <el-footer style="padding: 0px" class="index-footer-wrapper">
                    <div class="footer">
                        <div class="index-footer-left">
                            <img src="../assets/images/below_left.png" class="below_left_png ">
                        </div>
                        <div class="index-footer-center">
                            <div  class="index-footer-confirm-return-button">
                                <div class="index-footer-confirmReturnButton" @click="share">
                                    分享
                                </div>
                            </div>
                        </div>
                        <div class="index-footer-right">
                            <img src="../assets/images/below_right.png" class="below_right_png">
                        </div>
                    </div>
                </el-footer>
            </div>
        </div>
    </div>
</template>

<script>
  import page from './page'
  import zlFooter from './zlFooter'
  import Swiper from 'swiper'
  export default {
    name: '',
    mounted () {
      this.initSwiper()
      var ss = [{ 'score': 25.0, 'paperName': '2018年全国Ⅰ卷高考真题A', 'duration': 100018, 'submitTime': '2019-09-10 16:04:17' },
        { 'score': 25.0, 'paperName': '2018年全国Ⅰ卷高考真题A', 'duration': 100018, 'submitTime': '2019-09-10 16:04:17' }]
      // eval(this.$store.state.pageData.paperDetailsJson)
      this.paperDetailsJsonArray = ss
      console.log(this.paperDetailsJsonArray)
      this.dataZoom = [
        {
          type: 'inside',
          xAxisIndex: 0,
          filterMode: 'empty'
        }
        ]
    },
    data () {
      return {
        fourthScreen: false,
        progressValue: 10,
        colorStart: '#03B4FDFF',
        colorEnd: '#FFEE22FF',
        renderData: '',
        questionBank: [
          { color: '#FF85C0FF', text: '阅读理解', questionNum: 0 },
          { color: '#00FFE6FF', text: '改错', questionNum: 0 },
          { color: '#FF7F6EFF', text: '语法填空', questionNum: 0 },
          { color: '#FFBF45FF', text: '完型填空', questionNum: 0 },
          { color: '#23FF62FF', text: '七选五', questionNum: 0 },
          { color: '#fff', text: '', questionNum: 0 }
        ],
        dataZoom: null,
        yAxis: [{
          type: 'value',
          position: 'left',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
          data: []
        }],
        paperDetailsJsonArray: ''
      }
    },
    methods: {
      // 加载swiper
      initSwiper () {
        var that = this
        var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            slideChangeTransitionEnd: function () {
              that.setData(this.activeIndex)//切换结束时，告诉我现在是第几个slide
            }
          }
        })
      },
      MillisecondToDate(value) {
        var secondTime = parseInt(value / 1000)// 秒
        var minuteTime = 0// 分
        var hourTime = 0// 小时
        if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
          //获取分钟，除以60取整数，得到整数分钟
          minuteTime = parseInt(secondTime / 60)
          //获取秒数，秒数取佘，得到整数秒数
          secondTime = parseInt(secondTime % 60)
          //如果分钟大于60，将分钟转换成小时
          if (minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60)
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60)
          }
        }
        var result = '' + parseInt(secondTime) + '秒'

        if (minuteTime > 0) {
          result = '' + parseInt(minuteTime) + '分' + result
        }
        if (hourTime > 0) {
          result = '' + parseInt(hourTime) + '小时' + result
        }
        return result
      },
      MillisecondToHour(value) {
        let hourTime = 0
        var secondTimes = parseInt(value / 1000)// 秒
        if (secondTimes > 60) { //如果秒数大于60，将秒数转换成整数
          //获取分钟，除以60取整数，得到整数分钟
         var  minuteTimes = parseInt(secondTimes / 60)
          //如果分钟大于60，将分钟转换成小时
          if (minuteTimes > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60)
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60)
          }
        }
        return hourTime
      },
      setData (activeIndex) {
        // var that = this
        if (activeIndex === 0) { //第一屏
          this.setaa = false
          this.$store.dispatch('setPageDescription', '学习概况')
          this.$store.dispatch('setPageState', '11')
          // this.setHome1();
        } else if (activeIndex === 1) { //第二屏
          this.setaa = true
          this.$store.dispatch('setPageDescription', '学习概况')
          this.$store.dispatch('setPageState', '11')
        }
        else if (activeIndex === 2) { //第三屏
          var dailyTaskDetailGraph = this.$echarts.init(document.getElementById('daily-task-details-graph-echart'))
          this.$store.dispatch('setPageDescription', '每日任务')
          this.$store.dispatch('setPageState', '11')
          if (this.$store.state.pageData.taskQuestionNumberJson != null) {
            var taskQuestionNumberJsonArray = eval(this.$store.state.pageData.taskQuestionNumberJson)
            var taskQuestionNumberJsonArrayLength = taskQuestionNumberJsonArray.length
            var typeNameData = [...Array(taskQuestionNumberJsonArrayLength)].map(_ => null)
            var typeProgressData = [...Array(taskQuestionNumberJsonArrayLength)].map(_ => null)
            var typeProgressDataBackground = [...Array(taskQuestionNumberJsonArrayLength)].map(_ => 100)
            for (let i = 0; i < taskQuestionNumberJsonArrayLength; i++) {
              var datas = taskQuestionNumberJsonArray[i]
              switch (datas.sujectsTopicId) {
                case 1://完型填空
                  typeNameData[i] = '完形填空'
                  typeProgressData[i] = datas.correct
                  break
                case 4://七选五
                  typeNameData[i] = '七选五'
                  typeProgressData[i] = datas.correct
                  break
                case 5://阅读理解
                  typeNameData[i] = '阅读理解'
                  typeProgressData[i] = datas.correct
                  break
                case 12://语法填空
                  typeNameData[i] = '语法填空'
                  typeProgressData[i] = datas.correct
                  break
                case 6://改错
                  typeNameData[i] = '改错'
                  typeProgressData[i] = datas.correct
                  break
              }
            }
          }
          dailyTaskDetailGraph.setOption({
            grid: {
              left: '0%',
              right: '4%',
              bottom: '10%',
              top: '15%',
              containLabel: true
            },
            tooltip: {},
            xAxis: [{
              type: 'category',
              data: typeNameData,
              axisTick: { alignWithLabel: false, show: false },
              splitLine: { show: false },
              axisLine: { show: false }, //显示坐标轴轴线
              axisLabel: {
                interval: 0,
                color: '#03FCCDFF', //X轴文字颜色
                fontSize: 10
              }
            }],
            yAxis: [{
              splitLine: { show: false },
              show: false
            }],
            series: [
              {
                name: '进度条背景',
                type: 'bar',
                barGap: '-100%', //不同系列的柱间距离，为百分比。
                // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
                // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
                // 并且是对此坐标系中所有 'bar' 系列生效。
                barWidth: 7,
                data: typeProgressDataBackground,
                color: '#0587C4', //柱条颜色
                itemStyle: {
                  normal: {
                    barBorderRadius: 46
                  }
                }
              },
              {
              name: '正确率',
              type: 'bar',
              barWidth: '7',
              // barShadow:'#BFDDFF',
              label: {
                show: true,
                position: 'top',
                distance: 5,
                formatter: '{@score}%',
                color: '#03FCCDFF',
                fontWeight: 'bold',
                fontSize: 14
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 46,
                  color: new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        { offset: 1, color: '#03B4FDFF' },
                        { offset: 0.9, color: '#03B4FDFF' },
                        { offset: 0, color: '#FFEE22FF' }
                      ]
                    ),
                  pieces: [{ gte: 7, lte: 95, color: 'green' }]
                },
                emphasis: {

                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 1, color: '#03B4FDFF' },
                      { offset: 0, color: '#FFEE22FF' }
                    ]
                  )
                }
              },
              data: typeProgressData
            }
            ]
          })
        }
        else if (activeIndex === 3) { //第四屏
          this.$store.dispatch('setPageDescription', '每日任务')
          this.$store.dispatch('setPageState', '11')
        }
        else if (activeIndex === 4) { //第五屏
          this.fourthScreen = true
          var swiper3 = new Swiper('.swi-con', {
            observer: true,
            observeParents: true,
            pagination: {
              el: '.swi-con-pagination',
              clickable: true
            }
          })
          this.$store.dispatch('setPageDescription', '真题考核')
          this.$store.dispatch('setPageState', '11')
          // 真题考核图表
          // '[25,100,89,100,56,100,23,23]'
          var averageScoreJsonArray = eval(this.$store.state.pageData.averageScoreJson)
          // console.log((typeof averageScoreJsonArray=='object')&&averageScoreJsonArray.constructor==Array)
          var ExamPaper = this.$echarts.init(document.getElementById('ExamPaper'))
          ExamPaper.clear()
          var averageScore = averageScoreJsonArray
          var listAverageScore = []
          if (averageScore.length > 5) {
            this.dataZoom[0].start = 100 - (400 / averageScore.length)
          } else {
            this.dataZoom = { type: 'slider', show: false }
          }
          for (var i = 0; i < averageScore.length; i++) { //获取一共多少周
            listAverageScore[i] = '第' + (parseInt(i) + 1) + '周'
            if (averageScore[i] == null) {
              averageScore[i] = 0
            }
          }
          var ExamPaperOption = {
            grid: {
              bottom: '8%',
              top: '15%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                'type': 'line' // 默认为直线，可选为："line" | "shadow"
              },
              position: function (point, params, dom, rect, size) {
                // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
                // 提示框位置
                var x = 0 // x坐标位置
                var y = 0 // y坐标位置
                // 当前鼠标位置
                var pointX = point[0]
                var pointY = point[1]
                // 提示框大小
                var boxWidth = size.contentSize[0]
                var boxHeight = size.contentSize[1]

                // boxWidth > pointX 说明鼠标左边放不下提示框
                if (boxWidth > pointX) {
                  x = 5
                } else { // 左边放的下
                  x = pointX - boxWidth
                }
                // boxHeight > pointY 说明鼠标上边放不下提示框
                if (boxHeight > pointY) {
                  y = 5
                } else { // 上边放得下
                  y = pointY - boxHeight
                }
                return [x, y]
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false, //true为标签和数据点都会在两个刻度之间
              axisLine: { show: false }, //显示坐标轴轴线
              axisTick: { show: false }, //刻度线标签颜色
              axisLabel: {
                interval: 0, //横坐标全部显示
                color: '#03FCCDFF', //刻度线标签颜色
                fontSize: 10
              },
              data: listAverageScore
            },
            dataZoom: this.dataZoom,
            yAxis: [{
              type: 'value',
              position: 'left',
              axisLine: { show: false },
              axisTick: { show: false },
              // axisLabel:{show:false},
              axisLabel: {
                interval: 0, //横坐标全部显示
                color: '#03FCCDFF', //刻度线标签颜色
                fontSize: 6
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#37BDFF33'],
                  type: 'dashed'
                }
              }
            }],
            series: [{
              data: averageScore,
              type: 'line',
              color: '#F9D543FF',
              smooth: true,
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#F9D543FF' // 0% 处的颜色
                  }, {
                    offset: 0.4, color: '#F9D54385' // 100% 处的颜色
                  }, {
                    offset: 1, color: '#FFFFFF00' // 100% 处的颜色
                  }]), //背景渐变色
                  lineStyle: { // 系列级个性化折线样式
                    width: 2,
                    type: 'solid',
                    color: '#F9D543FF' //折线的颜色
                  }
                }
                },
              roam: false
            }]
          }
          // 使用刚指定的配置项和数据显示图表。
          ExamPaper.setOption(ExamPaperOption, true)

        }
        else if (activeIndex === 5) { //第六屏
          this.$store.dispatch('setPageDescription', '强化练习')
          this.$store.dispatch('setPageState', '11')
          var listQuestionBank = this.$echarts.init(document.getElementById('listQuestionBank'))
          listQuestionBank.clear()
          var data = [
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 }
          ]
          // var practiceQuestionCorrectJson = "[{\"correct\":25,\"sujectsTopicId\":1,\"questionNum\":1},{\"correct\":20,\"sujectsTopicId\":4,\"questionNum\":1},{\"correct\":33,\"sujectsTopicId\":5,\"questionNum\":9},{\"correct\":34,\"sujectsTopicId\":6,\"questionNum\":9},{\"correct\":34,\"sujectsTopicId\":12,\"questionNum\":1}]"
          var practiceQuestionCorrectJson = this.$store.state.pageData.practiceQuestionCorrectJson
          var practiceQuestionCorrectJsonArray = eval(practiceQuestionCorrectJson)
          if (practiceQuestionCorrectJsonArray != null) {
            for (var i = 0; i < practiceQuestionCorrectJsonArray.length; i++) {
              var datass = practiceQuestionCorrectJsonArray[i]
              var questionNum = datass.questionNum
              switch (datass.sujectsTopicId) {
                case 1://完型填空
                  this.questionBank[3].questionNum = questionNum
                  data[2].value = datass.correct
                  break
                case 4://七选五
                  this.questionBank[4].questionNum = questionNum
                  data[3].value = datass.correct
                  break
                case 5://阅读理解
                  this.questionBank[0].questionNum = questionNum
                  data[4].value = datass.correct
                  break
                case 12://语法填空
                  this.questionBank[2].questionNum = questionNum
                  data[1].value = datass.correct
                  break
                case 6://改错
                  this.questionBank[1].questionNum = questionNum
                  data[0].value = datass.correct
                  break
              }
            }
          }
          var listQuestionBankOption = {
            grid: {
              left: 0,
              right: 0
            },
            title: {
              text: this.$store.state.pageData.practiceQuestionCorrect !=null ? this.$store.state.pageData.practiceQuestionCorrect + '%' : '--' + '%',
              subtext: '综合正确率',
              left: 'center',
              top: 'center',
              textStyle: {
                color: '#F9D543FF',
                fontSize: 13,
                height: 10,
                lineHeight: 10
              },
              subtextStyle: {
                fontSize: 9,
                color: '#03FCCDFF',
                lineHeight: 2
              },
              itemGap: 3
            },
            series: [
              {
              name: '正确率',
              type: 'pie',
              // center: ['40%', '50%'],
              radius: ['39%', '50%'],
              avoidLabelOverlap: true,
              hoverAnimation: false,
              fontSize: 10,
                label: {
                  normal: {
                    formatter: '{a|{a} {c}%}',
                    // formatter(a,c) {
                    //   // let text = Math.round(v.percent)+'%' + '' + `${a|{a} {c}%}`
                    //   let text = `{{a}}` + Math.round(`{c}`)+'%' + ''
                    //
                    //   console.log(text)
                    //
                    //   if(text.length <= 8)
                    //   {
                    //     return text;
                    //   }else if(text.length > 8 && text.length <= 16){
                    //     return text = `${text.slice(0,8)}\n${text.slice(8)}`
                    //   }else if(text.length > 16 && text.length <= 24){
                    //     return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16)}`
                    //   }else if(text.length > 24 && text.length <= 30){
                    //     return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16,24)}\n${text.slice(24)}`
                    //   }else if(text.length > 30){
                    //     return text = `${text.slice(0,8)}\n${text.slice(8,16)}\n${text.slice(16,24)}\n${text.slice(24,30)}\n${text.slice(30)}`
                    //   }
                    // },
                    borderRadius: 4,
                    rich: {
                      a: {
                        align: 'right',
                        fontSize: 10,
                        verticalAlign: 'top'
                      },
                      hr: {
                        borderColor: '#0f02cc',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                      }
                    }
                  }
                },
              data: data
            }
            ],
            color: ['#00FFE6FF', '#FF7F6EFF', '#FFBF45FF', '#23FF62FF', '#FF85C0FF']
          }
          listQuestionBank.setOption(listQuestionBankOption, true)
        }
        else if (activeIndex === 6) {
          var learningEfficiencyAnalysis = this.$echarts.init(document.getElementById('learning-efficiency-analysis'))
          this.$store.dispatch('setPageDescription', '学习效率分析')
          this.$store.dispatch('setPageState', '17')
          var practiceQuestionCorrectJson = this.$store.state.pageData.efficiencyJson
          // 将获取到的JSON字符串转为JSON
          var efficiencyJsonArrayEX = eval(practiceQuestionCorrectJson)
          // 获取JSON数组的长度
          var efficiencyJsonArrayEXLength = efficiencyJsonArrayEX.length
          // 暂时创建一个数组，利于初始化
          var efficiencyLength = [...Array(efficiencyJsonArrayEXLength)].map(_ => null)
          // 创建一个雷达图的边角描述和MAX最大值的数组
          var efficiencyJsonArray = efficiencyLength.map(function(obj) { var rObj = {}; rObj['name'] = '1'; rObj['max'] = 100; return rObj })
          // 创建一个分布图数组
          var efficiencyProgressArray = [...Array(efficiencyJsonArrayEXLength)].map(_ => null)
          for (let i = 0; i < efficiencyJsonArrayEXLength; i++) {
            var dataEX = efficiencyJsonArrayEX[i]
            switch (dataEX.sujectsTopicId) {
              case 1://完型填空
                efficiencyJsonArray[i].name = '完形填空'
                efficiencyProgressArray[i] = dataEX.correct
                break
              case 4://七选五
                efficiencyJsonArray[i].name = '七选五'
                efficiencyProgressArray[i] = dataEX.correct
                break
              case 5://阅读理解
                efficiencyJsonArray[i].name = '阅读理解'
                efficiencyProgressArray[i] = dataEX.correct
                break
              case 12://语法填空
                efficiencyJsonArray[i].name = '语法填空'
                efficiencyProgressArray[i] = dataEX.correct
                break
              case 6://改错
                efficiencyJsonArray[i].name = '改错'
                efficiencyProgressArray[i] = dataEX.correct
                break
            }
          }
          learningEfficiencyAnalysis.setOption(
            {
              title: { text: null }, // 隐藏图表标题
              legend: { enabled: true }, // 隐藏图例
              tooltip: {
                trigger: 'axis'
              },
              calculable: true,
              polar: [
                {
                  nameGap: 5, // 图中完型填空等字距离图的距离
                  center: ['50%', '50%'], // 图的位置
                  name: {
                    show: true, // 是否显示完型填空等文字
                    formatter: null, // 完型填空等完型填空的显示形式
                    textStyle: {
                      color: '#a3a5b6' // 完型填空等完型填空颜色
                    }
                  },
                  indicator: efficiencyJsonArray,
                  axisLine: { // 坐标轴线
                    show: false // 默认显示，属性show控制显示与否
                  },
                  axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
                    show: false,
                    textStyle: {
                      color: '#247bd7' // 坐标轴刻度文字的样式
                    }
                  },
                  splitArea: {
                    show: false,
                    areaStyle: {
                      color: ['#2a4a93'] // 图表背景网格的颜色
                    }
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      width: 1,
                      color: '#6FA7FFFA' // 图表背景网格线的颜色
                    }
                  }
                }
              ],
              series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                color: '#8FFFC6FF',
                data: [
                  {
                    value: efficiencyProgressArray
                  }
                ]
              }]
            }
          )
        }
      },
      getSubjectsTopicByType (typeParam) {
        var subjectsTopic = ''
        switch (typeParam) {
          case 1: //完型填空
            subjectsTopic = '完形填空'
            break
          case 4://七选五
            subjectsTopic = '七选五'
            break
          case 5://阅读理解
            subjectsTopic = '阅读理解'
            break
          case 12://语法填空
            subjectsTopic = '语法填空'
            break
          case 6://改错
            subjectsTopic = '改错'
            break
        }
        return subjectsTopic
      },
      share () {
        this.$router.push({ name: 'share', params: { weekReportId: this.$store.state.weekReportId } }).then(() => {
        })
      },
      viewTotalProgress() {
        this.$router.push({ name: 'totalProgress', params: { weekReportId: this.$store.state.weekReportId } }).then(() => {
        })
      },
      //计算表达式的值
      evil(fn) {
        var Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
        return new Fn('return ' + fn)();
      },
      percentageCalculation (v1, v2) {
        var vv = 0
        if (v1 && v2) {
          const vv = Math.round(v1 / v2 * 100)
          if (vv >= 100) {
            return 100
          }
          return vv
        }
        if (vv >= 100) {
          return 100
        }
        return vv
      }
    },
    components: {
      page,
      'zl-footer': zlFooter
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
                    .total-task-text {
                        position: absolute;
                        font-size: 20px;
                        color: #FFFFFFFF;
                        font-weight: 500;
                        top: 10px;
                        height: 20px;
                        padding-left: 0.36rem;
                    }
                    .task-progress-view-wrapper {
                        display: flex;
                        flex-direction: row;
                        position: relative;
                        width: 100%;
                        top: 64px;
                        height: 30px;
                        .task-progress-view {
                            margin-left: 40px;
                            // 因为是两个进度条覆盖，所以需要固定定位
                            position: absolute;
                            width: 380px;

                            .current-task-progress {
                                position: absolute;
                                width: 118%;
                                margin-top: 1.5px;
                                height: 28px;
                            }
                            .planned-task-progress {
                                position: absolute;
                                margin-top: -16px;
                                width: 118%;
                                height: 34px;
                            }

                        }
                        .task-progress-view-text {
                            position: absolute;
                            top: -12px;
                            right: 24px;
                            width: 80px;
                            height:42px;
                            font-size:30px;
                            font-family:PingFangSC;
                            font-weight:500;
                            color:rgba(255,238,34,1);
                            line-height:42px;
                            text-shadow:0px 0px 1px rgba(255,238,34,1);
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
            .swiper-slide2 {
                .daily-task {
                    position: relative;
                    width: 571px;
                    height: 392px;
                    margin-left: 35px;
                    margin-bottom: 65px;
                    background-image: url("../assets/images/subtitle-desc.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    .daily-task-subtitle{
                        position: absolute;
                        font-size:26px;
                        font-family:PingFangSC;
                        left: 16px;
                        top: 20px;
                        font-weight:500;
                        color:rgba(255,253,227,1);
                        line-height:37px;
                        text-shadow:0px 0px 2px rgba(255,232,137,1);
                    }
                    .daily-task-text {
                        position: absolute;
                        left: 41px;
                        top: 90px;
                        width:513px;
                        height:235px;
                        font-size:26px;
                        font-family:PingFangSC;
                        font-weight:500;
                        color:rgba(249,234,234,1);
                        line-height:37px;
                        span {
                            color: #FFEE22FF;
                        }
                        .daily-task-texts {
                            margin-top: 20px;
                            height: 10px;
                        }
                    }
                }
            }
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
                        .week-studied-word-progress {
                            position: absolute;
                            margin-left: 450px;
                            width:91px;
                            height:49px;
                            font-size:35px;
                            font-family:PingFangSC;
                            font-weight:500;
                            color:rgba(249,213,67,1);
                            line-height:49px;
                            text-shadow:0px 0px 1px rgba(255,238,34,1);
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
                .item-footer-blow-verrical {
                    position: absolute;
                    bottom: 20px;
                    margin-left: 170px;
                    width: 326px;
                    height: 7px;
                    img {
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
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
                    #ExamPaper {
                        position: absolute;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                    }
                }
                .swi-con {
                    width:80%;
                    overflow:hidden;
                    margin-top:43px;
                    position:relative;
                    height: 199px;
                    left: 60px;
                   .swiper-wrapper {
                       height: 100%;
                       width: 100%;
                       .swiper-slide {
                           height: 199px;
                           padding-top: 28px;
                           padding-left: 24px;
                           background-image: url("../assets/images/rectangular-blue.png");
                           background-repeat: no-repeat;
                           background-size: 100% 100%;
                           .item-wrapper {
                               display: flex;
                               .orange-square {
                                   margin-top: 6px;
                                   width:6px;
                                   height:20px;
                                   background:rgba(249,213,67,1);
                                   margin-right: 9px;
                               }
                               .swiper-container3-item {
                                   width:300px;
                                   h4 {
                                       width:300px;
                                       height:33px;
                                       font-size:24px;
                                       font-family:PingFangSC;
                                       font-weight:500;
                                       color:rgba(50,255,255,1);
                                       line-height:33px;
                                   }
                                   > p {
                                       margin-top: 26px;
                                       width:300px;
                                       height:33px;
                                       font-size:24px;
                                       font-family:PingFangSC;
                                       font-weight:500;
                                       color:rgba(205,243,255,1);
                                       line-height:33px;
                                   }
                                    .item-using-time {
                                       width:300px;
                                       height:30px;
                                       font-size:22px;
                                       font-family:PingFangSC;
                                       font-weight:400;
                                       color:rgba(205,243,255,1);
                                       line-height:30px;
                                        margin-top: 8px;
                                   }
                               }
                               .swiper-container3-item-score {
                                   width:130px;
                                   height:140px;
                                   font-size:100px;
                                   font-family:PingFangSC;
                                   font-weight:400;
                                   color:rgba(249,213,67,0.3);
                                   line-height:140px;
                                   text-shadow:0px 0px 4px rgba(255,226,109,1), 0px 0px 4px rgba(255,221,84,1);
                                   -webkit-text-stroke:1px rgba(250,255,0,1);
                                   text-stroke:1px rgba(250,255,0,1);
                                   -webkit-background-clip:text;
                                   -webkit-text-fill-color:transparent;
                               }
                               .swiper-container3-item-score-chinese {
                                   width:24px;
                                   margin-top: 90px;
                                   height:33px;
                                   font-size:24px;
                                   font-family:SourceCodePro;
                                   font-weight:400;
                                   color:rgba(96,218,255,1);
                                   line-height:31px;
                               }

                           }
                       }
                   }
                }
            }
            .swiper-slide6 {
                .swiper-slide6-content {
                    margin-left: 34px;
                    position: absolute;
                    width: 574px;
                    height: 614px;
                    background-image: url("../assets/images/slide5-content.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    display: flex;
                    flex-direction: column;
                    .listQuestionBank {
                        margin-left: 34px;
                        #listQuestionBank {
                            width: 550px;
                            margin-left: -20px ;
                            height: 340px;
                            z-index: 200;
                            /*height: 350px;*/
                            /*width: 550px;*/
                            div {
                                overflow: visible !important;
                            }
                        }
                        .straight-line {
                            width:493px;
                            height:2px;
                            display: flex;
                            div {
                                &:nth-child(1) {
                                    width: 247px;
                                    height:2px;
                                    background: linear-gradient(to right, #005A82FF , #0891B4FF);
                                }
                                &:nth-child(2) {
                                    height:2px;
                                    width: 247px;
                                    background: linear-gradient(to right, #0891B4FF , #005A82FF);
                                }
                            }
                        }
                    }
                    .questionBank{
                        position: relative;
                        width: 100%;
                        flex: 1;
                        > div {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            box-sizing: border-box;
                            display: flex;
                            flex-wrap: wrap;
                            padding-left: 41px;
                            p {
                                display: block;
                                width: 250px;
                                text-align: left;
                                color: rgba(85, 85, 85, 1);
                                font-size: 26px;
                                line-height: 28.5px;
                                > span{
                                    &:nth-child(1){
                                        display: inline-block;
                                        width: 26px;
                                        height: 26px;
                                        margin-right: 18px;
                                    }
                                    &:nth-child(2){
                                        height:37px;
                                        font-size:26px;
                                        font-family:PingFangSC;
                                        font-weight:400;
                                        color:rgba(255,255,255,1);
                                        line-height:37px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .swiper-slide7 {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                .learning-efficiency-analysis-graph {
                    height: 410px;
                    width: 100%;
                    .learning-efficiency-analysis-graph-legend{
                        height: 50px;
                        width: 170px;
                        position: absolute;
                        right: 0;
                        z-index: 200;
                        .this-week {
                            margin-top: 5px;
                            display: flex;
                            width: 100%;
                            flex-direction: row;
                            font-size:16px;
                            font-family:PingFangSC;
                            font-weight:400;
                            color:rgba(205,243,255,1);
                            .square {
                                width:36px;
                                height:13px;
                                border:1px solid rgba(143,255,198,1);
                                margin-right: 13px;
                            }
                            .square-orange {
                                background:rgba(255,131,131,0.5);
                                border:1px solid rgba(255,131,131,1);
                            }
                        }
                    }
                    .learning-efficiency-analysis-wrapper {
                        width: 100%;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        #learning-efficiency-analysis {
                            height: 470px;
                            width: 100%;
                        }
                    }
                }
                .learning-efficiency-analysis-item {
                    height: 400px;
                    margin-top: 61px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .learning-efficiency-analysis-text {
                        box-sizing: border-box;
                        width: 596px;
                        height: 380px;
                        background-image: url("../assets/images/rectangular-blue.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        margin-bottom: 29px;
                        .learning-efficiency-analysis-text-title {
                            padding-top: 26px;
                            padding-left: 21px;
                            .square-title {
                                margin-bottom: 25px;
                                display: flex;
                                align-items: center;
                                .square {
                                    width:6px;
                                    margin: 0 9px 0 0px;
                                    height:20px;
                                    background:rgba(249,213,67,1);
                                }
                                .title {
                                    width:96px;
                                    height:33px;
                                    font-size:24px;
                                    font-family:PingFangSC;
                                    font-weight:500;
                                    color:rgba(255,255,255,1);
                                    line-height:33px;
                                }
                            }
                            .learning-efficiency-analysis-text-detail {
                                width:519px;
                                height:90px;
                                font-size:22px;
                                font-family:PingFangSC;
                                font-weight:400;
                                color:rgba(205,243,255,1);
                                line-height:30px;
                            }
                        }
                        .learning-efficiency-analysis-text-title1 {
                            padding-top: 44px;
                        }
                    }
                }
                .learn-total-plan-situation {
                    display: -moz-box;/*兼容Firefox*/
                    display: -webkit-box;/*兼容FSafari、Chrome*/
                    -moz-box-align: center;/*兼容Firefox*/
                    -webkit-box-align: center;/*兼容FSafari、Chrome */
                    -moz-box-pack: center;/*兼容Firefox*/
                    -webkit-box-pack: center;/*兼容FSafari、Chrome */
                    font-size:30px;
                    font-family:PingFangSC;
                    font-weight:500;
                    color:rgba(96,218,255,1);
                    line-height:42px;
                    margin-top: 40px;
                    text-shadow:0px 0px 1px rgba(153,231,255,1);
                }
                .index-footer-confirmReturnButton {
                    display: -moz-box;/*兼容Firefox*/
                    display: -webkit-box;/*兼容FSafari、Chrome*/
                    -moz-box-align: center;/*兼容Firefox*/
                    -webkit-box-align: center;/*兼容FSafari、Chrome */
                    -moz-box-pack: center;/*兼容Firefox*/
                    -webkit-box-pack: center;/*兼容FSafari、Chrome */
                    height: 100%;
                }
            }
        }
    }

</style>
