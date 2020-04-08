<template>
  <div>
    <div>
      <van-row style="position: absolute;width: 100%;top: 1rem;">
        <van-col span="4">
          <img style="width: 2.625rem;" src="../../static/vip_1.png" />
          <br />
          <a v-if="identity == '0'">会员</a>
          <a v-if="identity == '1'">VIP</a>
          <a v-if="identity == '2'">合伙人</a>
        </van-col>
        <van-col span="15">
          <van-search placeholder="请输入搜索关键词" v-model="value" background="false" />
        </van-col>
        <van-col span="2" style="margin-left: 1.625rem;"><img style="width: 1.925rem;" src="../../static/message.png" />
          <a style="font-size: 0.8125rem;color: gold;">订单</a>
        </van-col>
      </van-row>

    </div>
    <img id="bj" src="../../static/JAJZDEIZN(6R4Q3YU3SO7HL.png" />
    <van-swipe @change="onChange" :autoplay="3000" id="lbz">
      <van-swipe-item v-for="app in focus"><img id="lb" :src="app.images_url" /></van-swipe-item>
    </van-swipe>
    <van-grid :border="false" class="gongge">
      <van-grid-item v-for="appa in appa" :to="appa.oiu">
        <van-image :src="appa.tu" />
        <br />
        <a>{{appa.zi}}</a>
      </van-grid-item>
    </van-grid>
    <div class="shuju">
      <div class="tou">
        <van-image width="30" height="30" src="../../static/money.png" />
        <span class="zi">本月交易量</span>
      </div>
      <p style="color: grey;">商户交易额</p>
      <p style="color: gold;">{{jine.total_price}}</p>
      <div class="huiyuan">
        <div class="huiyuan1" style="padding-right: 2.25rem;">
          <a style="color: red;">{{jine.member}}</a>
          <br />
          <a style="color: grey;">新增会员（人）</a>
        </div>
        <div class="huiyuan1" style="padding-left: 2.25rem;">
          <a style="color: red;">{{jine.total_count}}</a>
          <br />
          
          <a style="color: grey;">新增VIP（人）</a>
        </div>
      </div>
    </div>
    <div style="position: absolute;z-index: 999;">
      <van-tabbar route v-model="active">
        <van-tabbar-item replace :to="icon.url" v-for="icon in icon">
          <span>{{icon.name}}</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
        </van-tabbar-item>
      </van-tabbar>
    </div>
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
        ],
        current: 0,
        appa: [{
            tu: '../../static/integral.png',
            zi: '用户扩展',
            oiu: '测试'
          },
          {
            tu: '../../static/mall.png',
            zi: '商城',
            oiu: '/shop',
          },
          {
            tu: '../../static/terminal.png',
            zi: '终端',
            oiu: '/接口测试'
          },
          {
            tu: '../../static/merchants.png',
            zi: '我的商户',
            oiu: '/商户1'
          },
          {

            tu: '../../static/Invite-friends.png',
            zi: '邀请好友',
            oiu: '/yaoqing'
          },
          {
            tu: '../../static/list.png',
            zi: '排行榜',
            oiu: '/paihang'
          },
          {
            tu: '../../static/integral.png',
            zi: '积分兑换',
          },
          {
            tu: '../../static/Home.png',
            zi: '更多',
            oiu: '/xiangqing',
          },
        ],
        focus: [],
        value: '',
        identity: '',
        jine:''
      }
    },
    methods: {
      onChange(index) {
        this.current = index;
      }
    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/banner/index',
          params: {
            userid: 73
          }
        })
        .then(function(res) {
          _this.focus = res.data.data;
          _this.identity = res.data.identity
        })

        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/idcard/index',
            params: {
              userid: 73
            }
          })
          .then(function(res) {
            // console.log(res.data)
          })

          // 本月交易量开始
          this.$axios({
              method: 'get',
              url: 'https://star.qhynice.top/api/banner/monthdata',
              params: {
                userid: 73
              }
            })
            .then(function(res) {
              console.log(res.data.data)
              _this.jine = res.data.data
            })
            // 本月交易量结束
    },
  }
</script>

<style>
  #lb {
    width: 90%;
  }

  #bj {
    margin-top: -3.75rem;
    width: 100%;
  }

  #lbz {
    margin-top: -8.125rem;
    margin-left: 1%;
  }

  .gongge {
    width: 74%;
    margin-left: 13%;
    font-size: 0.775rem;

    padding: 0;
  }

  .shuju {
    margin: 0% 3%;
    height: 12.5rem;
    box-shadow: 0rem 0rem 0.525rem grey;
    margin-top: 1.125rem;
    border-radius: 0.3rem;
    padding: 0.625rem;

  }

  .tou {
    text-align: left;
    border-bottom: 0.0625rem solid gray;
    padding-bottom: 0.625rem;
  }

  .zi {
    font-size: 1.25rem;
    font-weight: 600;
    position: relative;
    top: -0.425rem;
    left: 0.625rem;
  }

  .huiyuan1 {
    display: inline-block;
    font-size: 0.8rem;
  }
</style>
