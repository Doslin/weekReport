<template>
    <div class="page" v-cloak>
        <el-container>
            <el-header class="el-header" style="height: auto">
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
                            <div class="page-tips-item" v-if="this.$store.state.pageDescription" v-cloak>
                                <span class="page-tips">{{this.$store.state.pageDescription}}</span>
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
                    <el-main class="el-main" ref="content" >
                        <slot></slot>
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
        </el-container>
    </div>
</template>

<script>
  export default {
    name: 'page',

    data() {
      return {
        scrollTop: 0
      }
    },
    methods: {
      back() {
        window.history.back()
      }
    }
  }
</script>

<style  type="text/scss" lang="scss">
    @import "../assets/styles/global.scss";
    .page {
        height: 85%;
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
                        img {
                            position: relative;
                            max-width: 100%;
                            width: 100%;
                            height: 100%;
                        }
                        .page-tips-item {
                            position: relative;
                            width: 228px;
                            margin-top: -.43rem;
                            padding: 0 10px;
                            color: white;
                            display: -moz-box;/*兼容Firefox*/
                            display: -webkit-box;/*兼容FSafari、Chrome*/

                            -moz-box-align: center;/*兼容Firefox*/
                            -webkit-box-align: center;/*兼容FSafari、Chrome */

                            -moz-box-pack: center;/*兼容Firefox*/
                            -webkit-box-pack: center;/*兼容FSafari、Chrome */
                            /*background: #019FE6FF;*/
                            .page-tips {
                                background: #019FE6FF;
                                padding: 0 20px;
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
            height: 13rem;
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

    }
</style>
