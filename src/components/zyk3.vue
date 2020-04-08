<template>
  <div>
    <div>
      <van-row style="position: absolute;width: 100%;top: 1rem;">
        <van-col span="4">
          <router-link to="/"><img style="width: 1.25rem;" src="../../static/返回-1.png" /></router-link>
        </van-col>
        <van-col style="color: white;" span="8" offset="4">我的团队</van-col>
      </van-row>
    </div>
    <img class="bj" src="../../static/JAJZDEIZN(6R4Q3YU3SO7HL.png" />
    <div class="bj-1">

      <p style="text-align: left;">本月团队交易量</p>

      <p>
        <span style="font-size: 1.5rem;">￥</span>
        <span style="font-size: 0.9375rem;font-weight: 600;">{{zizo}}</span>
      </p>
    </div>
    <van-tabs style="margin-top: 1.6rem;" v-model="active" @click="onClick">
      <van-tab title="一级">
        <van-divider style="margin-top: -2px;" />


        <van-dropdown-menu style="margin-top: -0.925rem;">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <van-divider style="margin-top: -0.5rem;" />
        <!-- 会员信息开始 -->
        <div class="huiyuan-xinxi" v-for="flexs in flexs">
          <div style="padding-left: 1.3rem;margin-top: 0.2rem;">
            <img style="border-radius: 50%;float: left;width: 18%;" :src="flexs.avatar" />
            <div style="display: inline-block;float: left;">
              <p>{{flexs.account}}</p>
              <p>高级合伙人{{flexs.num}}</p>
            </div>
          </div>

          <div style="float: right;padding-right: 1.3rem;">
            <p>交易量 {{flexs.money}}</p>
            <p>{{flexs.parentname}}</p>
          </div>
        </div>
        <!-- 会员信息结束 -->
        <van-divider />
      </van-tab>


      <van-tab title="二级">
        <van-divider style="margin-top: -2px;" />
        <van-dropdown-menu style="margin-top: -0.925rem;">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <van-divider style="margin-top: -0.5rem;" />
        <div class="huiyuan-xinxi" v-for="xinde in xinde">
          <div style="padding-left: 1.3rem;margin-top: 0.2rem;">
            <img style="border-radius: 50%;float: left;width: 18%;" :src="xinde.avatar" />
            <div style="display: inline-block;float: left;">
              <p>{{xinde.account}}</p>
              <p>高级合伙人{{xinde.num}}</p>
            </div>
          </div>

          <div style="float: right;padding-right: 1.3rem;">
            <p>交易量 {{xinde.money}}</p>
            <p>{{xinde.parentname}}</p>
          </div>
        </div>
        <van-divider />
      </van-tab>
    </van-tabs>
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
      // return {
      //   active: 2
      // };
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
        value1: 0,
        value2: 'a',
        value3: 'd',
        option1: [{
            text: '本月累计',
            value: 0
          },
          {
            text: '上月累计',
            value: 1
          },

        ],
        option2: [{
            text: '会员数',
            value: 'a'
          },
          {
            text: '交易额',
            value: 'b'
          },

        ],
        option3: [{
            text: '会员',
            value: 'd'
          },
          {
            text: '合伙人',
            value: 'b'
          },
          {
            text: '会员',
            value: 'c'
          },
        ],
        flexs: [],
        zizo: '',
        jb: [],
        xinde: []
      }
    },
    created() {
      var that = this
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/team/index',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          // console.log(response)
          that.zizo = response.data.money;
        })

      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/team/show',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          // console.log(response)
          that.jb = response.data.display;
        })



      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/team/teamone',
          params: {
            userid: 73,
            type: 1
          }
        })
        .then(function(response) {
          console.log(response)
          that.flexs = response.data.one
        })
    },
    methods: {
      onClick() {
        if (this.xinde != '') {
          return
        } else {
          var _this = this
          for (let i in this.flexs) {
            this.$axios({
                method: "post",
                url: "https://star.qhynice.top/api/team/teamone",
                params: {
                  userid: this.flexs[i].id,
                },
              })
              .then(function(res) {
                console.log(res)
                // _this.erji = res.data.one
                if (res.data.state == 1) {
                  for (let l in res.data.one) {
                    _this.xinde.push(res.data.one[l])
                  }
                }
              })
          }
        }
      }

    }
  }
</script>

<style>
  .bj {
    margin-top: -3.75rem;
    width: 100%;
  }

  .bj-1 {
    width: 85%;
    background: #f8e3b9;
    height: 8.5rem;
    border-radius: 0.625rem;
    position: absolute;
    top: 5rem;
    opacity: 0.88;
    padding: 0.6rem;
    margin: 0% 5%;

  }

  .van-tabs__line {
    background-color: black;

  }

  [class*="van-hairline"]::after {
    border: none;
  }

  .huiyuan-xinxi {
    clear: both;
    border: 0;
    font-size: 0.8125rem;
    height: 3.9rem;
    padding-bottom: 0.9rem;
    width: 98%;
    border: gainsboro 0.5px solid;
    margin-left: 1%;
  }
</style>
