<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe623;</div></div>
    <div class="header-input"><span class="iconfont input">&#xe6a8;</span>输入城市/景点/游玩/主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe600;</span></div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
  display: flex
  background-color :$bgColor
  color: #ffffff
  line-height: 0.86rem
  height: .86rem
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .5rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .15rem
    padding-left: .2rem
    background-color #fff
    border-radius: .1rem
    color: #ccc
    font-size: .3rem
    overflow hidden
    .input
      margin-right: .2rem
  .header-right
    width: 1.2rem
    float: right
    text-align: center
    font-size: .26rem
    .arrow-icon
      font-size: .24rem
      margin-left: .1rem    
</style>
