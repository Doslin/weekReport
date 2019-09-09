<template>
    <div id="app">
<!--        <div class="input">-->
<!--            <input type="color" v-model="colorstart" :input="{getColorStart}">-->
<!--            <input type="color" v-model="colorend" :input="getColorEnd">-->
<!--            <input type="number" v-model="value" placeholder="20">-->
<!--        </div>-->
        <div class="process-bar" v-bind:style = "getlinearGradient">
    <span v-bind:style="{width: value + '%' }">
      <svg width="20" height="20">
        <path d="M1,19.5421977 C5.05710695,18.2679341 8,14.4776418 8,10 C8,5.52235821 5.05710695,1.73206592 1,0.457802284 C1.94704122,0.160353828 2.95479429,1.92001174e-16 4,0 L536,0 C541.522847,-1.01453063e-15 546,4.4771525 546,10 C546,15.5228475 541.522847,20 536,20 L4,20 C2.95479429,20 1.94704122,19.8396462 1,19.5421977 Z" id="Combined-Shape" fill="#D8D8D8"></path>
      </svg>
    </span>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 20,
        colorstart: '#090909',
        colorend: '#909090'
      }
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
          'background-image': 'linear-gradient(to right, ' + colorStart + ',' + colorEnd + ')'
        }
      }
    }
  }
</script>

<style  type="text/scss" lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/global";
    .input {
        display: flex;
        justify-content: center;
        padding-top: 50px;

        input {
            display: block;
            width: 40px;
            border: 1px solid #d8d8d8;
            padding: 5px 0 5px 10px;
            border-radius: 3px;
            margin: 0 5px;

            &[type="color"] {
                padding: 5px 10px;
            }
        }
    }
    .process-bar {
        width: 80vw;
        height: 20px;
        background-image: linear-gradient(to right, green, orange);
        border-radius: 10px;
        margin: 40px auto;
        position: relative;
        overflow: hidden;

        svg {
            position: absolute;
            left: -10px;
            z-index: 2;
        }
        span {
            background-color: #d8d8d8;
            height: 20px;
            border-radius: 10px;
            right: 0;
            position: absolute;
        }
    }


</style>
