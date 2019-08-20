<template>
    <!-- Swiper -->
    <div class="swiper-container" >
        <!--v-show="renderData!=''&&renderData!=null" v-cloak-->
        <div class="renderData" v-show="this.renderData==''||dataNo==true" v-cloak>
            <div>
                <img src="../assets/images/top_vertical.png">
            </div>
            <div>
                <img src="../assets/images/logo.png" alt="">
                <img src="../assets/images/three_diamonds.png">
            </div>
            <div>
                <img src="../assets/images/middle_data_rectangle.png">
            </div>
            <div>
                <img src="../assets/images/button.png">
            </div>
            <p>上周无学习数据</p>
            <a href="#" @click="totalProgress"><input class="totalProgress" type="button" value="查看总计划完成情况"></a>
            <p class="tip">可能是数据上传不及时导致，请及时上传数据</p>
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
<style>

</style>
