<template>
    <el-footer style="padding: 0px" class="index-footer-wrapper">
        <div class="footer">
            <div class="index-footer-left">
                <img src="../assets/images/below_left.png" class="below_left_png ">
            </div>
            <div class="index-footer-center">
                <div v-if="this.$store.state.pageState === 1" >
                    <img src="../assets/images/below.png" class="below_png">
                </div>
                <div v-else-if="this.$store.state.pageState === 20" class="index-footer-confirm-return-button">
                    <slot class=""></slot>
                </div>
                <div v-else-if="this.$store.state.pageState === 17" class="index-footer-confirm-return-button">
                </div>
                <div v-else class="index-footer-center-swipe">
                    <p class="swipe-view">上滑查看本周详情</p>
                    <img src="../assets/images/swipe-show.png" class="below_png">
                </div>
            </div>
            <div class="index-footer-right">
                <img src="../assets/images/below_right.png" class="below_right_png">
            </div>
        </div>
    </el-footer>
</template>

<script>
  export default {
    name: 'zlFooter'
  }
</script>
<style  type="text/scss" lang="scss">
    @import "../assets/styles/global.scss";

</style>
