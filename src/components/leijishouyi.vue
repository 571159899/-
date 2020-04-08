<template>
  <div class="quan">
    <!-- 导航开始 -->
    <van-nav-bar class="head" title="累计收益" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 导航结束 -->
    <!-- 余额开始 -->
    <div class="yue">
      <div class="yue1">
        <div>
          <p style="font-size: 0.8125rem;color: gainsboro;">可提现 （元）</p>
          <p style="font-size: 1rem;">{{zizo.withdrawable}}</p>
        </div>
        <div>
          <p>明细</p>
          <router-link to="提现" style="background: gold;border-radius: 4%;padding: 0.1rem;color: white;"> 去提现＞</router-link>
        </div>
      </div>

      <div class="yue2">
        <div>
          <p style="font-size: 0.8125rem;color: gainsboro;">累计到账 （元）</p>
          <p>{{zizo.bonuses_money}}</p>
        </div>
        <div>
          <p style="font-size: 0.8125rem;color: gainsboro;">已提现 （元）</p>
          <p>{{zizo.bonuses_money}}</p>
        </div>
        <div>
          <p style="font-size: 0.8125rem;color: gainsboro;">未结算 （元）</p>
          <p>{{zizo.unliquidated}}</p>
        </div>
      </div>

    </div>
    <!-- 余额结束 -->
    <!-- 日报开始 -->
    <p style="text-align: left;padding-left: 0.625rem;">昨日日报</p>
    <div class="ribao">
      <div class="ribao0">
        <router-link to="ribao">日报</router-link>
      </div>

      <van-row>
        <van-col span="10" offset="2">
          <p>激活奖励</p>
          <p>0</p>
        </van-col>
        <van-col span="10" offset="2">
          <p>推广奖励</p>
          <p>0</p>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="10" offset="2">
          <p>育成奖励</p>
          <p>0</p>
        </van-col>
        <van-col span="10" offset="2">
          <p>分润奖励</p>
          <p>0</p>
        </van-col>
      </van-row>
    </div>
    <!-- 日报结束 -->
    <!-- 月报开始 -->
    <div class="wen">
      <div>本月月报</div>
      <div style="color: gold;">
        <router-link to="yuebao">历史月报</router-link>
      </div>
    </div>
    <div class="yuebao">
      <van-row>
        <van-col span="10" offset="2">
          <p>激活奖励</p>
          <p>0</p>
        </van-col>
        <van-col span="10" offset="2">
          <p>推广奖励</p>
          <p>0</p>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="10" offset="2">
          <p>育成奖励</p>
          <p>0</p>
        </van-col>
        <van-col span="10" offset="2">
          <p>分润奖励</p>
          <p>0</p>
        </van-col>
      </van-row>
    </div>
    <!-- 月报开始 -->
  </div>
</template>

<script>
  export default {
    data(){
      return{
        zizo:[],
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({
          path: '/zyk6'
        })
      },
      onClickRight() {
        alert('陈进')
      },
    },
    created() {
      // 收益记录接口请求开始
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
         // 收益记录接口请求结束
    },
  }
</script>

<style scoped>
  .head {
    margin-top: -60px;
  }

  .yue {
    background: #000000;
    color: whitesmoke;
  }

  .yue1 {
    display: flex;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  .ribao p {
    color: gray;
    font-size: 0.8125rem;

  }

  .yuebao p {
    color: gray;
    font-size: 0.8125rem;
  }

  .yue2 {
    display: flex;
    justify-content: space-around;
  }

  .ribao0 {
    text-align: right;
    padding-right: 0.625rem;
    color: gold;
  }

  .ribao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }

  .wen {
    display: flex;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  .yuebao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }
</style>
