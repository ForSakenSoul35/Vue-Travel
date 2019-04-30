<template>
  <div>
    <div>home</div>
    <!-- router-link用来跳转页面  to属性表示跳转到哪里 -->
    <!-- 单页应用：页面跳转通过js重新渲染完成，优点是页面切换快，缺点是，首屏时间加载稍慢，SEO差-->
    <router-link to="/list" >列表页</router-link>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
