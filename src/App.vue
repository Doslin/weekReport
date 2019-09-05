<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {}
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
</style>
