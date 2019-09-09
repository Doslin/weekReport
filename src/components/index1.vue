<template>
    <div class="index-wrapper">
        <el-container>
            <el-header class="el-header">
                <div class="header" >
                    <div class="index-header-left-image-wrapper">
                        <img src="../assets/images/top_left.png" >
                    </div>
                    <div class="index-header-center-image-wrapper">
                        <div class="index-header-center-image">
                            <img src="../assets/images/top.png" class="top_png">
                        </div>
                        <div class="page-tips-item-wrapper">
                            <img src="../assets/images/top_vertical.png">
                            <div class="page-tips-item">
                                <span class="page-tips">学习概况</span>
                            </div>
                        </div>
                    </div>
                    <div class="index-header-right-image-wrapper">
                        <img src="../assets/images/top_right.png" class="top_right_png">
                    </div>
                </div>
            </el-header>
            <el-container class="index-container-wrapper">
                <el-aside class="index-container-left-aside-wrapper" style="width: auto">
                    <div class="index-container-left-aside-item">
                        <div>
                            <img src="../assets/images/rectangle_arrow_left.png">
                        </div>
                        <div class="three-yellow-blades">
                            <img src="../assets/images/three_left_th.png">
                        </div>
                    </div>
                </el-aside>
                <el-container class="index-container-main-wrapper">
                    <el-main class="el-main">
                        <div class="index-container-main" v-if="this.state === 1">
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
                                        <span class="tip-item-text" >本周学习周报</span>
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
                <el-aside class="index-container-right-aside-wrapper" style="width: auto">
                    <div class="index-container-right-aside">
                        <div class="three_right_th_png">
                            <img src="../assets/images/three_right.png">
                        </div>
                        <div class="rectangle_arrow_right_png">
                            <img src="../assets/images/rectangle_arrow_right.png">
                        </div>
                    </div>
                </el-aside>
            </el-container>
            <el-footer style="padding: 0px" class="index-footer-wrapper">
                <div class="footer">
                    <div class="index-footer-left">
                        <img src="../assets/images/below_left.png" class="below_left_png ">
                    </div>
                    <div class="index-footer-center">
                        <div v-if="this.state === 1" >
                            <img src="../assets/images/below.png" class="below_png">
                        </div>
                        <div v-else-if="this.state === 2" class="index-footer-center-swipe">
                            <p class="swipe-view">上滑查看本周详情</p>
                            <img src="../assets/images/swipe-show.png" class="below_png">
                        </div>
                    </div>
                    <div class="index-footer-right">
                        <img src="../assets/images/below_right.png" class="below_right_png">
                    </div>
                </div>
            </el-footer>
        </el-container>

    </div>
</template>

<script>
  export default {
    name: '',
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

<style  type="text/scss" lang="scss">
    @import "../assets/styles/global.scss";
    .index-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        .el-header {
            padding: 0px;
            height: auto;
            width: 100%;
            .header {
                height: 100%;
                width: 100%;
                display: -webkit-flex; /* Safari */
                display: flex;
                flex-direction: row;
                .index-header-left-image-wrapper {
                    width: 141px;
                    margin-left: 28px;
                    padding-top: 54px;
                    z-index: 999;
                }
                .index-header-center-image-wrapper {
                    position: relative;
                    margin-top: 30px;
                    margin-left: -63px;
                    .index-header-center-image {
                        width: 536px;
                        height: 73px;
                    }
                    .page-tips-item-wrapper {
                        position: absolute;
                        width: 3.01rem;
                        margin-left: 161px;
                        margin-top: -0.33rem;
                        .page-tips-item {
                            position: absolute;
                            margin-left: .7rem;
                            margin-top: -.30rem;
                            .page-tips {
                                background: #019FE6FF;
                                color: white;
                            }
                        }
                    }
                }
                .index-header-right-image-wrapper {
                    width: 141px;
                    margin-left: -63px;
                    padding-top: 54px;
                }
            }
        }
        .index-container-wrapper {
            height: 947px;
            width: 100%;
            display: flex;
            position: relative;
            .index-container-left-aside-wrapper {
                position: absolute;
                flex-grow: 1;
                top: 10px;
                left: 0;
                height: 100%;
                .index-container-left-aside-item {
                    margin-top: 39px;
                    width: 26px;
                    margin-left: 28px;
                    .three-yellow-blades {
                        // 此处做根据屏幕高度响应式
                        padding-top: 268px;
                        width: 0.19rem;
                    }
                }
            }
            .index-container-main-wrapper {
                position: absolute;
                top: 30px;
                left: 54px;
                flex-grow: 11.8;
                width: 85%;
                height: 100%;
                .el-main {
                    position: relative;
                    box-sizing: border-box;
                    padding: 0px;
                    margin-top: -.15rem;
                    width: 100%;
                    height: 100%;
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
                                .view-now-text {
                                    position: absolute;
                                    top: 33px;
                                    left: 111px;
                                    font-size: 30px;
                                    color: white;
                                }
                            }
                            .item-footer-tips {
                                color: #31AEF9FF;
                                font-size: 20px;
                                margin-top: 52px;
                                margin-bottom: 19px;
                            }
                        }
                    }
                    .item-footer-blow-verrical {
                        position: absolute;
                        margin-left: 162px;
                        bottom: 2px;
                        width: 343px;
                    }
                }
            }
            .index-container-right-aside-wrapper {
                flex-grow: 1.1;
                box-sizing: border-box;
                position: absolute;
                left: 92.2%;
                .index-container-right-aside {
                    padding-right: 23px;
                    margin-top: 41px;
                    width: 100%;
                    .three_right_th_png {
                        margin-bottom: 80px;
                        width: 16px;
                        margin-left: 15px;
                    }
                    .rectangle_arrow_right_png {
                        width: 36px;
                    }
                }
            }
        }
        .index-footer-wrapper {
            // 此处做根据屏幕高度相应式
            height: 210px !important;
            .footer {
                height: 100%;
                position: relative;
                .index-footer-left {
                    position: absolute;
                    width: 141px;
                    left: 28px;
                }
                .index-footer-center {
                    position: absolute;
                    width: 548px;
                    float: left;
                    left: 110px;
                    padding-top: .4rem;
                    margin-bottom: -.7rem;
                    .index-footer-center-swipe {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        font-size:20px;
                        font-weight:500;
                        color:rgba(96,218,255,1);
                        p {
                            margin: 10px auto;

                        }
                        img {
                            width: 44px;
                            margin: 0 auto;
                        }
                    }
                }
                .index-footer-right {
                    position: absolute;
                    width: 141px;
                    left: 586px;
                    margin-bottom: 1rem;
                }
            }
        }
    }
</style>
