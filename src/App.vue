<template>
  <div id="app">
      <transition name="fade">
          <navigation>
             <router-view/>
          </navigation>
      </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
    created() {
      // bind event
      this.$navigation.on('forward', (to, from) => {
        console.log('forward to', to, 'from ', from)
      })
      this.$navigation.on('back', (to, from) => {
      })
      this.$navigation.on('replace', (to, from) => {
      })
      this.$navigation.on('refresh', (to, from) => {
      })
      this.$navigation.on('reset', () => {
      })
      // and use [once, off] methods
      this.$navigation.once('forward', () => {
      })
      const off = () => {
      }
      this.$navigation.on('forward', off)
      this.$navigation.off('forward', off)
    }
  }
document.addEventListener('DOMContentLoaded', () => {
  //    将根元素的fontsize值设置为屏幕宽度的1/10
  let fontSize = window.innerWidth / 10
  //    为fontsize设置上限
  // fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
  console.log('fontSize:  ' + fontSize)
})
</script>
<style lang="scss" scoped>
    #app {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        /*width: 100%;*/
        /*height: 100%;*/
        background: #7d8188;
        overflow-x: hidden;
        overflow: hidden;
        background-image: url('./assets/images/background.png');
        background-size: 100% 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }
</style>
