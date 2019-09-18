<template>
    <div v-bind:style = "getlinearGradient" ><span v-bind:style="{width: value + '%' }"></span></div>
</template>

<script>
  export default {
    name: 'lprogress',
    data () {
      return {
        value: 20,
        colorstart: '#0587c4',
        colorend: '#909090'
      }
    },
    mounted () {
      this.colorstart = this.zlcolorstart
      this.colorend = this.zlcolorend
      this.value = this.zlvalue
    },
    computed: {
      getColorStart: function () {
        return this.colorstart
      },
      getColorEnd: function () {
        return this.colorend
      },
      getlinearGradient: function () {
        let colorStart = this.getColorStart
        let colorEnd = this.getColorEnd

        return {
          'background': 'linear-gradient(to right, ' + colorStart + ',' + colorEnd + ')'
        }
      }
    },
    props: {
      zlvalue: Number,
      zlcolorstart: String,
      zlcolorend: String
    }
  }
</script>

<style  type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
    @import "../assets/styles/global";

    div {
        border-radius: 2000px;
        overflow: hidden;
        width: 250px;
        /*background: linear-gradient(to right, yellow, red);*/
    }
    span {
        float: right;
        height: 100%;
    }
    span::before {
        content: "a";
        text-indent: -999em;
        display: block;
        background: -webkit-radial-gradient(0px 50%, circle closest-corner, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 9px, #0587C4 1px, #0587C4 2000px);

        height: 110%;
    }

</style>
