<template>
    <div v-cloak>
        <page>
            <div class="index">
                <div class="index-container-main">
                    <div class="index-container-main-top">
                        <div class="img_log">
                            <img src="../assets/images/logo.png">
                        </div>
                        <div class="img_diamonds">
                            <img src="../assets/images/three_diamonds.png">
                        </div>
                    </div>
                    <div class="index-container-main-center">
                        <div class="index-container-main-center-item">
                            <div class="item-name-text">
                                <div class="tip-item-name" style="margin: 0 auto">{{ studentName }}</div>
                            </div>
                            <img src="../assets/images/student_study_weekly.png" alt="">
                            <span class="tip-item-text">{{this.isHaveData === 0 ? '无学习数据' : '本周学习周报'}}</span>
                        </div>
                        <div class="item-footer">
                            <div class="view-now" @click="viewNow()">
                                <img src="../assets/images/button.png" alt="">
                                <div class="view-now-text">{{this.isHaveData === 0 ? '查看总计划完成情况' : '立即查看'}}</div>
                            </div>
                            <p class="item-footer-tips">周报数据来源于学生所使用的终端Pad，如Pad没有及时联网上传数据，则会导致没有数据或数据不全。</p>
                        </div>
                    </div>
                </div>

<!--                <div class="item-footer-blow-verrical">-->
<!--                    <img src="../assets/images/below_vertical.png" alt="">-->
<!--                </div>-->
            </div>
        </page>
        <zl-footer>
        </zl-footer>
    </div>

</template>

<script>
import zlProgress from '../utils/zlProgress'
import page from './page'
import zlFooter from './zlFooter'
  export default {
    name: '',
    components: {
      page,
      'zl-progress': zlProgress,
      'zl-footer': zlFooter
    },
      data () {
        return {
          state: 1,
          studentName: '小白',
          progressValue: 80,
          colorStart: '#03B4FDFF',
          colorEnd: '#FFEE22FF',
          isHaveData: 0
        }
      },
      mounted: function () {
        this.baseUrls = process.env.VUE_APP_WEEKREPORT_URL
        this.$store.dispatch('setPageDescription', '')
        this.$store.dispatch('setPageState', 1)
        this.init()
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
          if (this.isHaveData === 1) {
            this.$router.push({ name: 'profile', params: { weekReportId: this.$store.state.weekReportId } }).then(() => {
              this.$store.dispatch('setPageState', '11')
            })
            // location.href="home.html?weekReportId=51";
            // location.href="home.html?weekReportId="+weekReportId;
            // axios.get(this.baseUrl+'weekReport/getUserNameByWeekReportId?weekReportId='+weekReportId)
          } else {
            this.$router.push({ name: 'totalProgress', params: { weekReportId: this.$store.state.weekReportId } }).then(() => {
              this.$store.dispatch('setPageState', '11')
            })
          }
        },
        init () {
          // this.baseUrls + 'weekReport/getWeekReportById?weekReportId=1'
          this.$http.get(this.baseUrls + 'weekReport/getWeekReportById?weekReportId=' + this.$store.state.weekReportId).then((res) => {
            if (res.data.state === 200) {
              this.studentName = res.data.userName
              this.isHaveData = res.data.isHaveData
              if (this.isHaveData == 1) {

              } else {

              }
              this.$store.dispatch('setPageData', res.data.data.renderData).then(() => {
              })
            }
          })
        }
      }
    }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/global.scss";
    .index {
        .index-container-main {
            width: 100%;
            height: 100%;
            .index-container-main-top {
                height: 2.18rem;
                .img_log {
                    width: 3rem;
                }
                .img_diamonds {
                    margin-top: -.7rem;
                    width: 1.73rem;
                    float: left;
                    margin-left: 6.49rem;
                }
            }
            .index-container-main-center {
                .index-container-main-center-item{
                    position: relative;
                    width: 564px;
                    margin-left: 39px;
                    margin-top: 60px;
                    .item-name-text {
                        position: absolute;
                        top: 11px;
                        left: 18px;
                        font-size: 30px;
                        width: 156px;
                        color: #009FEFFF;
                        display: flex;

                    }
                    .tip-item-text {
                        position: absolute;
                        top: 147px;
                        left: 87px;
                        font-size: 65px;
                        color: white;
                    }
                }
            }
            .item-footer {
                width: 482px;
                margin-left: 98px;
                margin-top: 131px;
                .view-now {
                    margin-left: 52px;
                    width: 343px;
                    position: relative;
                    img {
                        /*position: absolute;*/
                        width: 100%;
                        height: 100%;
                    }
                    .view-now-text {
                        position: absolute;
                        top: 34px;
                        display: -moz-box;/*兼容Firefox*/
                        display: -webkit-box;/*兼容FSafari、Chrome*/
                        -moz-box-align: center;/*兼容Firefox*/
                        -webkit-box-align: center;/*兼容FSafari、Chrome */
                        -moz-box-pack: center;/*兼容Firefox*/
                        -webkit-box-pack: center;/*兼容FSafari、Chrome */
                        width: 343px;
                        font-size: 30px;
                        color: white;
                    }
                }
                .item-footer-tips {
                    color: #31AEF9FF;
                    font-size: 20px;
                    margin-top: 38px;
                    /*margin-bottom: 19px;*/
                }
            }
        }
        /*.item-footer-blow-verrical {*/
        /*    position: absolute;*/
        /*    margin-left: 162px;*/
        /*    bottom: 2px;*/
        /*    width: 343px;*/
        /*}*/
    }

</style>
