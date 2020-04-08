<template>
  <div style="background: black;width: 100%;margin-top: -3.75rem;height: 15.4rem;">
    <div>
      <van-row style="position: absolute;width: 100%;top: 1rem;">
        <van-col span="4">
          <router-link to="/"><img style="width: 1.25rem;" src="../../static/返回-1.png" /></router-link>
        </van-col>
        <van-col style="color: white;" span="8" offset="4">成为VIP</van-col>
      </van-row>
    </div>
    <img style="width: 90%;margin-top: 3.5rem;" src="../../static/card.png" />

    <div style="margin-top: -11.125rem;">

      <div>
        <img style="border-radius: 50%;float: left;width: 16%;margin-left:10% ;position: absolute;left: -0.625rem" src="../../static/Head.png" />
      </div>
      <div style="display: inline-block;margin-left:10%;">
        <a style="float: left;font-size: 0.8125rem;">刘翠花</a>
        <div style="clear: both;">
          <img style="float: left;height: 1.6rem;" src="../../static/partnership.png" />
          <span style="float: left;margin-left: -45%;color: whitesmoke;">高级合伙人</span>
        </div>

      </div>
      <div class="tubiao">
        <van-row type="flex" justify="center" gutter="1">
          <van-col span="4" v-for="appa in appa">
            <img style="width: 80%;" :src="appa.tu" />
            <span style="font-weight: 600;font-size: 0.875rem;">{{appa.zi}}</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <div>
      <img style="width: 100%;margin-top: 6rem;height: 40rem;" src="../../static/background1.png" />
      <div style="position: absolute;z-index: 999;text-align: center;width: 100%;top: 15.5rem;">
        <p style="color: gold;">○ 尊 享 超 级 权 益 ○</p>
        <div style="border: 1px solid gold;height: 8.5rem;color: gold;font-size: 0.8rem;width: 74%;margin-left: 13%;border-radius:1rem ;margin-top: 0.5rem;line-height: 40%;"
          v-for="xinwen in xinwen">
          <p style="text-align: left;margin-left: 5%;">{{xinwen.xiaoxi0}}</p>
          <p>{{xinwen.xiaoxi1}}</p>
          <p>{{xinwen.xiaoxi2}}</p>
          <p>{{xinwen.xiaoxi3}}</p>
          <p>{{xinwen.xiaoxi4}}</p>
          <p>{{xinwen.xiaoxi5}}</p>
          <p>{{xinwen.xiaoxi6}}</p>
        </div>
        <router-link to="shop">
        <img style="width: 50%;margin-top: 1rem;" src="../../static/button.png" />
        </router-link>
      </div>

      <div>

      </div>

    </div>
    <!-- 底部导航开始 -->
    <div style="position: absolute;z-index: 999;">
          <van-tabbar route v-model="active">
            <van-tabbar-item replace :to="icon.url" v-for="icon in icon">
              <span>{{icon.name}}</span>
              <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
            </van-tabbar-item>
          </van-tabbar>
        </div>
    <!-- 底部导航结束 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
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
        ],
        appa: [{
            tu: '../../static/VIP1.png',
            zi: 'VIP'
          },
          {
            tu: '../../static/team.png',
            zi: '建队'
          },
          {
            tu: '../../static/promote.png',
            zi: '推广'
          },
          {
            tu: '../../static/integral1.png',
            zi: '积分'
          },
        ],
        xinwen: [{
            xiaoxi0: ' · 如何成为会员',
            xiaoxi1: '1.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi2: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi3: '2.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi4: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi5: '3.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi6: 'XXXXXXXXXXXXXXXXXXXXXXXX'
          },
          {
            xiaoxi0: ' · 如何成为会员',
            xiaoxi1: '1.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi2: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi3: '2.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi4: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi5: '3.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi6: 'XXXXXXXXXXXXXXXXXXXXXXXX'
          },
          {
            xiaoxi0: ' · 如何成为会员',
            xiaoxi1: '1.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi2: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi3: '2.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi4: 'XXXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi5: '3.XXXXXXXXXXXXXXXXXXXXXXX',
            xiaoxi6: 'XXXXXXXXXXXXXXXXXXXXXXXX'
          },
        ]
      }
    },
  }
</script>

<style>
  .tubiao {
    top: 10rem;
    clear: both;
    position: absolute;
  }
</style>
