<template>
  <div>
<!-- <router-link to="/"><van-button type="default">首页</van-button></router-link>
<router-link to="/zyk3"><van-button type="primary">第二页</van-button></router-link>
<router-link to="/zyk4"> <van-button type="info">第三页</van-button></router-link>
<router-link to="/zyk5"><van-button type="warning">第四页</van-button></router-link>
<router-link to="/zyk6"><van-button type="danger">第五页</van-button></router-link> -->
<van-tabbar v-model="active">
  <van-tabbar-item :icon="home" to="/">首页</van-tabbar-item>
  <van-tabbar-item :icon="tuandui" to="/zyk3">我的团队</van-tabbar-item>
  <van-tabbar-item :icon="vip" to="/zyk4">成为VIP</van-tabbar-item>
  <van-tabbar-item :icon="college" to="zyk5">众星学院</van-tabbar-item>
  <van-tabbar-item :icon="mine" to="zyk6">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
  // import home from '@/assets/home_1.png'
  // import tuandui from '@/assets/团队.1.png'
  // import vip from '@/assets/vip_1.png'
  // import college from '@/assets/college_1.png'
  // import mine from '@/assets/mine.png'
  export default {
    data() {
      return {
        home:home,
        tuandui:tuandui,
        vip:vip,
        college:college,
        mine:mine,
        active: 0
      }
    }
  }
</script>

<style>
</style>
