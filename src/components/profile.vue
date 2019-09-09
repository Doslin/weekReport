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
            <div class="swiper-slide swiper-slide3 daily-task-details-wrapper" v-cloak>
               <div class="daily-task-details-text">
                    <p>这周任务中<br/>完成了 <span>{{}}</span>道练习题 <br/>综合正确率为 <span>{{}}</span>，比上周提高了 <span>{{}}</span> </p>
                    <p>本周做题正确率如图</p>
                </div>
                <div class="daily-task-details-graph">
                    <img src="../assets/images/middle_data_rectangle.png" alt="">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style  type="text/scss" lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/global";
    .swiper-container {
        .swiper-wrapper {
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
        }
    }

</style>
