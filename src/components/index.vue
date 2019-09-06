<template>
    <div class="back_img">
        <el-container>
            <el-header style="padding: 0px;height: auto" class="el-header">
                <div class="header" style="height: 100%;width: 100%">
                    <div class="div_top_left_png">
                        <img src="../assets/images/top_left.png" class="top_left_png ">
                    </div>
                    <div class="div_top_png" style="position: relative">
                        <div style="height: 100%">
                            <img src="../assets/images/top.png" class="top_png">
                        </div>
                        <div style="position: absolute;width: 3.01rem;margin-left: 2.14rem;margin-top: -0.33rem">
                            <img src="../assets/images/top_vertical.png">
                            <div style="position: absolute;margin-left: 0.70rem;margin-top: -.45rem">
                                <span style="background: #019FE6FF; color: white">学习概况</span>
                            </div>
                        </div>
                    </div>
                    <div class="div_top_right_png">
                        <img src="../assets/images/top_right.png" class="top_right_png">
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside class="left_aside left_aside1" style="width: auto">
                    <div class="div_left_aside">
                        <div>
                            <img src="../assets/images/rectangle_arrow_left.png">
                        </div>
                        <div class="three_left_th_png">
                            <img src="../assets/images/three_left_th.png">
                        </div>
                    </div>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="container" v-if="this.state === 1">
                            <div class="head_center">
                                <div class="img_log">
                                    <img src="../assets/images/logo.png">
                                </div>
                                <div class="img_diamonds">
                                    <img src="../assets/images/three_diamonds.png">
                                </div>
                            </div>
                            <div class="tip-item-wrapper">
                                <div class="tip-item-center">
                                    <div class="student_study_weekly">
                                        <div class="tip-item-name-text">
                                            <div class="tip-item-name-" style="margin: 0 auto">{{ studentName }}</div>
                                        </div>
                                        <img src="../assets/images/student_study_weekly.png" alt="">
                                        <span class="tip-item-text" >本周学习周报</span>
                                    </div>
                                </div>
                                <div class="item-footer">
                                    <div class="view-now" @click="viewNow()">
                                        <img src="../assets/images/button.png" alt="">
                                        <span class="view-now-text" >立即查看</span>
                                    </div>
                                    <p class="item-footer-tips">周报数据来源于学生所使用的终端Pad，如Pad没有及时联网上传数据，则会导致没有数据或数据不全。</p>

                                </div>
                            </div>
                        </div>
                        <router-view/>
                        <div class="item-footer-blow-verrical">
                            <img src="../assets/images/below_vertical.png" alt="">
                        </div>
                    </el-main>
                </el-container>
                <el-aside width="auto">
                    <div class="div_right_aside">
                        <div class="three_right_th_png">
                            <img src="../assets/images/three_right.png">
                        </div>
                        <div class="rectangle_arrow_right_png">
                            <img src="../assets/images/rectangle_arrow_right.png">
                        </div>
                    </div>
                </el-aside>
            </el-container>
            <el-footer style="padding: 0px;height: auto">
                <div class="footer">
                    <div class="div_below_left_png">
                        <img src="../assets/images/below_left.png" class="below_left_png ">
                    </div>
                    <div class="div_below_png">
                        <div>
                          <img src="../assets/images/below.png" class="below_png">
                        </div>
                    </div>
                    <div class="div_below_right_png">
                        <img src="../assets/images/below_right.png" class="below_right_png">
                    </div>
                </div>
            </el-footer>
        </el-container>

    </div>
</template>
<script>
  // let baseUrl='http://exchange.lfenglish.cn/onlineEducation/';
  // let baseUrls = 'http://192.168.1.72:8081/onlineEducation/'
  export default {
    data () {
      return {
        state: 1,
        studentName: '小白'
      }
    },
    mounted: function () {
      this.baseUrls = process.env.VUE_APP_WEEKREPORT_URL
      this.init()
      console.log('window.screen.availHeight: ' + window.screen.availHeight)
    },
    methods: {
      GetQueryString (name) {
        var after = window.location.href.split('?')[1]
        if (after) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
          var r = after.match(reg)
          if (r != null) {
            return decodeURIComponent(r[2])
          } else {
            return null
          }
        }
      },
      viewNow () {
        // var weekReportId = this.GetQueryString('weekReportId');
        this.$router.push({ name: 'profile', params: { weekReportId: 51 } })
        // location.href="home.html?weekReportId=51";
        // location.href="home.html?weekReportId="+weekReportId;
        // axios.get(this.baseUrl+'weekReport/getUserNameByWeekReportId?weekReportId='+weekReportId)
        this.state = 2
      },
      init () {
        this.$http.get(this.baseUrls + 'weekReport/getUserNameByWeekReportId?weekReportId=51')
          .then((res) => {
            console.log(res)
            if (res.data.state === 200) {
              document.getElementById('userName').innerHTML = res.data.data.renderData
            }
          })
      }
    }
  }
</script>
<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/global.scss";
    @import "../assets/styles/indexVue.scss";
    .head_center{
        height: 2.18rem;
    }
    .head_center > .img_log{
        //margin-top: 0.50rem;
        width: 3rem;
    }
    .head_center > .img_diamonds{
        margin-top: -.7rem;
        width: 1.73rem;
        float: left;
        margin-left: 6.49rem;
    }


</style>
