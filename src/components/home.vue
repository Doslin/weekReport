<template>
    <!-- Swiper -->
    <div class="swiper-container" >
        <!--v-show="renderData!=''&&renderData!=null" v-cloak-->
        <div class="renderData" v-show="this.renderData==''||dataNo==true" v-cloak>
            <div class="home-no-data-item-head-wrapper">
                <div class="home-no-data-item-head-logo">
                   <img src="../assets/images/logo.png" >
                </div>
                <div class="home-no-data-item-head-right">
                    <img src="../assets/images/three_diamonds.png">
                </div>
            </div>
            <div class="home-no-data-item-center-wrapper" >
                <img src="../assets/images/middle_data_rectangle.png" >
                <div class="home-no-data-item-center-text" >
                    <span> 无学习数据</span>
                </div>
                <p class="tip" style="text-align: center">可能是数据上传不及时导致，请及时上传数据</p>
            </div>
            <div class="home-no-data-item-footer-wrapper" style="position: relative">
                <div>
                     <img src="../assets/images/button.png">
                </div>
                <div style="position: absolute;color: #FFFFFF;margin-top: -1.5rem;font-size: .4rem;margin-left: .49rem">
                    <p>查看总计划完成情况</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      renderData: '',
      weekReportId: ''
    }
  },
  mounted: function () {
    console.log(this.$route.fullPath)
    console.log('document.body.clientHeight: ' + document.body.clientHeight)
  },
  methods: {
    totalProgress () {
      this.weekReportId = this.$route.query.weekReportId
      console.log(this.weekReportId)
      this.$router.push({ name: 'totalProgress', params: { weekReportId: this.weekReportId } })
    }
  }
}
</script>
<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">

    @import "../assets/styles/home.scss";
    @import "../assets/styles/global.scss";


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
    .middle_data_rectangle{
        width: 7.6rem;
        margin-left: .48rem;
    }
    .data_button {
        margin-top: 2.03rem;
        width: 4.58rem;
        margin-left: 1.98rem;
    }
</style>
