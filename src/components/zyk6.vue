<template>
  <div>
    <div>
      <van-row style="position: absolute;width: 100%;top: 0;background: #323233;padding-top: 0.5rem;height: 17rem;">
        <van-col span="4">
          <router-link to="/"><img style="width: 1.25rem;" src="../../static/箭头-1.png" /></router-link>
        </van-col>
        <van-col style="color: white;" span="8" offset="4">我的</van-col>
      </van-row>
    </div>
    <!-- 人物信息开始 -->
    <div style="position: absolute;top: 2.3rem;">

      <div>
        <div style="margin-left: 6%;">
          <img style="width: 18%;float: left;" src="../../static/Head-portrait.png" />
        </div>
        <div style="margin-left: 25%;color: white;">
          <p>
            <a style="float: left;font-size: 0.875rem;">{{hui. account}}</a>
            <!-- <img style="float: left;width: 27%;margin-left: 5%;" src="../../static/partner.png" /> -->
            <a style="color: gold;" v-if="identity == '0'">会员</a>
            <a style="color: gold;" v-if="identity == '1'">VIP</a>
            <a style="color: gold;" v-if="identity == '2'">合伙人</a>
            <a style="color: gold;" v-if="tity == '0'">（未实名）</a>
            <a style="color: gold;" v-if="tity == '1'">（已实名）</a>
          </p>
          <br />
          <p>
            <span style="border: 0.0625rem gold solid;float: left;padding-left:10px;padding-right:10px;border-right:none ;border-top-left-radius: 1.25rem;border-bottom-left-radius: 1.25rem;font-size: 0.8125rem;">邀请ID：{{hui.promo}}</span>
            <span style="border: 0.0625rem gold solid;float: left;border-radius: 0.5rem;padding-left:10px;padding-right:10px;margin-left: -2%;color: gold;font-size: 0.8125rem;">复制</span>
          </p>

        </div>
        <div style="border: 1px solid gold;width: 88%;clear: both;height: 6.25rem;margin-left: 6%;border-radius:1rem ;margin-top: 4.25rem;"></div>
        <div>
          <img style="width: 96%;margin-top: -3.8rem;" src="../../static/111111.png" />
        </div>
        <div style="margin-top: -9.5rem;color: goldenrod;">
          <router-link to="leijishouyi"> <img src="../../static/question.png" /> <a style="color: #000000;position: relative;top: -0.45rem;">累计收益
              ＞ </a></router-link>
          <br />

          <a style="font-size: 2rem;">{{zizo.bonuses_money}}</a>
          <br />
          <br />
          <van-row style="width: 80%;font-size: 0.875rem;margin-left: 10%;position: absolute;">
            <van-col span="5">
              <a>今日</a>
              <br />
              <a>激活奖励</a>
              <br />
              <a>{{zha.today_activace}}</a>
            </van-col>
            <van-col span="1" style="margin-left: 1%;">
              <p style="border: 0.0625rem solid goldenrod;height: 3.25rem;width: 0;margin-top: 0rem;"></p>
            </van-col>
            <van-col span="5">
              <a>本月</a>
              <br />
              <a>推广奖励</a>
              <br />
              <a>{{zha.month_retail}}</a>
            </van-col>
            <van-col span="1" style="margin-left: 1%;">
              <p style="border: 0.0625rem solid goldenrod;height: 3.25rem;margin-top: 0rem;width: 0;"></p>
            </van-col>
            <van-col span="5">
              <a>累计</a>
              <br />
              <a>育成奖励</a>
              <br />
              <a>{{zha.money_format}}</a>
            </van-col>
            <van-col span="1" style="margin-left: 1%;">
              <p style="border: 0.0625rem solid goldenrod;height: 3.25rem;margin-top: 0rem;width: 0;"></p>
            </van-col>
            <van-col span="5">
              <a>本月</a>
              <br />
              <a>分润奖励</a>
              <br />
              <a>{{zha.month_spread}}</a>
            </van-col>
          </van-row>
        </div>

      </div>

    </div>
    <!-- 人物信息结束 -->


    <van-grid :border="false" class="gongge">
      <van-grid-item v-for="appa in appa" :to="appa.oiu">
        <van-image style="width: 70%;" :src="appa.tu" />
        <p>{{appa.zi}}</p>
      </van-grid-item>
    </van-grid>
    <div style="width: 100%;height:0.5rem;background-color: gainsboro;clear: both;"></div>
    <!-- <van-row style="padding: 0.3rem;border-bottom: 1px solid #ebedf0;margin-top: 0.625rem;"v-for="wode in wode">
  <van-col span="4" offset="1"><img style="width: 50%;" :src="wode.img" /></van-col>
  <van-col span="5" offset="1">{{wode.wenzi}}</van-col>
  <van-col span="5" offset="7"><img style="width: 20%;" :src="wode.img1"/> </van-col>
</van-row> -->
    <!-- <div v-for="wode in wode" style="text-align: left;padding: 0;margin: 0;">
      <van-row style="border-bottom: 1px solid #ebedf0;">
        <van-col style="padding-top: 20px;padding-bottom: 10px;" span="10" offset="2">
          <img style="width: 15%;" :src="wode.img" />
          <span style="position: relative;top: -0.6rem;left: 5%;font-size: 0.9375rem;">{{wode.wenzi}}</span>
        </van-col>
        <van-col style="padding-left: 30%;margin-top: 17px;" span="4"><img style="width: 0.8rem;" :src="wode.img1" />
        </van-col>
      </van-row>
    </div> -->

    <div v-for="wode in wode" style="display: flex;justify-content: space-between;border-bottom: 0.0625rem solid #EBEDF0;font-size: 0.93rem;position: relative;margin-left: 7%;text-align: left;padding-top: 0.4rem;padding-bottom: 0.4rem;">
<div><img style="width: 60%;" :src="wode.img" /><p style="position:absolute ;top: -0.3rem;margin-left: 10%;">{{wode.wenzi}}</p> </div>
<div><img style="width: 40%;margin-top: 0.5rem;" :src="wode.img1" /> </div>
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
            tu: '../../static/order.png',
            zi: '订单'
          },
          {
            tu: '../../static/mall%20(2).png',
            zi: '物料商城'
          },
          {
            tu: '../../static/attorney.png',
            zi: '授权书',
            oiu:'/授权书'
          },
          {
            tu: '../../static/service.png',
            zi: '客服'
          },
        ],
        wode: [{
            img: '../../static/specification.png',
            wenzi: '推广规则',
            img1: '../../static/right.png',
            // img1:'>',
          },
          {
            img: '../../static/tutorial.png',
            wenzi: '新手教程',
            img1: '../../static/right.png',
            // img1:'>',
          },
          {
            img: '../../static/Teachers.png',
            wenzi: '创业导师',
            img1: '../../static/right.png',
            // img1:'>',
          },
          {
            img: '../../static/feedback.png',
            wenzi: '意见反馈',
            img1: '../../static/right.png',
            // img1:'>',
          },
          {
            img: '../../static/Set.png',
            wenzi: '设置',
            img1: '../../static/right.png',
            // img1:'>',
          },
        ],
        zizo:[],
        zha:[],
        hui:[],
        identity:'',
        tity:''
      }
    },
    created() {
      var that = this
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/personal/profit',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          console.log(response)
          that.zizo = response.data.countmoney;
        })

        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/personal/index',
            params: {
              userid: 73
            }
          })
          .then(function(response) {
            console.log(response)
            that.zha = response.data
            that.hui = response.data.user
            that.identity=response.data.user.status
            that.tity=response.data.user.certification_status
          })
    },
  }
</script>

<style scoped="scoped">
  .gongge {
    margin-top: 23rem;
    width: 86%;
    margin-left: 7%;
    font-size: 0.775rem;

  }
</style>
