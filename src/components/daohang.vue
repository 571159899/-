<template>
  <div style="position: absolute;z-index: 999;">
    <van-tabbar v-model="active">
      <van-tabbar-item replace :to="icon.url" v-for="icon in icon">
        <span>{{icon.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        icon: [{
            url: '/',
            name: '首页',
            normal: '../static/home_0.png',
            active: '../static/home_1.png'
          },
          {
            url: '/zyk3',
            name: '我的团队',
            normal: '../static/团队.png',
            active: '../static/团队.1.png'
          },
          {
            url: '/zyk4',
            name: '成为VIP',
            normal: '../static/vip.png',
            active: '../static/vip_1.png'

          },
          {
            url: '/zyk5',
            name: '众星学院',
            normal: '../static/college.png',
            active: '../static/college_1.png'
          },
          {
            url: '/zyk6',
            name: '我的',
            normal: '../static/mine.png',
            active: '../static/mine_1.png'
          },
        ]

      }

    }
  }
</script>


<style>
</style>
