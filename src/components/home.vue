<template>
    <!-- Swiper -->
    <div class="swiper-container" >
        <!--v-show="renderData!=''&&renderData!=null" v-cloak-->
        <div class="renderData" v-show="this.renderData==''||dataNo==true" v-cloak>
            <div class="head_center">
                <div class="img_log">
                   <img src="../assets/images/logo.png" >
                </div>
                <div class="img_diamonds">
                    <img src="../assets/images/three_diamonds.png">
                </div>
            </div>
            <div class="middle_data_rectangle" style="position: relative">
                <div style="height: 100%">
                    <img src="../assets/images/middle_data_rectangle.png" >
                </div>
                <div style="position: absolute;color: #FFFFFF;
                margin-top: -2.9rem;width: 100%;
                font-size: .86rem;
                margin-left: 1.67rem;">
                    <span> 无学习数据</span>
                </div>
                <p class="tip" style="text-align: center">可能是数据上传不及时导致，请及时上传数据</p>
            </div>
            <div class="data_button" style="position: relative">
                <div>
                     <img src="../assets/images/button.png">
                </div>
                <div style="position: absolute;color: #FFFFFF;margin-top: -1.5rem;font-size: .4rem;margin-left: .49rem">
                    <p>查看总计划完成情况</p>
                </div>
            </div>
            <div>
                <div style="margin-left: 1.98rem;margin-top: 1.75rem">
                    <div style="width: 4.35rem">
                       <img src="../assets/images/below_vertical.png">
                    </div>
                </div>
                <div style="width: 1.3rem">
                    <img src="../assets/images/two_arrow.png">
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
<style scoped type="text/scss">
   @import "../assets/styles/home.scss";
</style>
