<template>

  <div class="zong">
    <!-- 我的商户导航开始 -->
    <div class="head">
      <div>我的商户</div>
      <div @click="tz">8人 ＞</div>
    </div>
    <!-- 我的商户导航结束 -->
    <!-- 我的商户内容开始 -->
    <div class="pm" v-for="(zong,index) in zong">
      <div style="width: 30%;"><img style="transform: scale(0.5);" :src="zong.img" /> </div>
      <div style="width: 37%;margin-top: 1.6rem;">{{zong.name}}</div>
      <div style="width: 33%;margin-top: 1rem;" class="L0">
        <div>{{zong.money}}</div>
        <div>本月交易用户</div>
      </div>
    </div>
    <!-- 我的商户内容结束 -->
    <!-- 个人业绩导航开始 -->
    <div class="head" style="border-bottom: 0.0625rem solid gainsboro;padding-top: 0.625rem;padding-bottom: 0.625rem;">
      <div>个人业绩（我的业绩）</div>
    </div>
    <!-- 个人业绩导航结束 -->
    <!-- 本月商户开始 -->
    <div style="padding-top: 0.625rem; padding-bottom: 0.625rem;">
      <div>本月商户交易额（元）</div>
      <div>¥{{zong0.thismonth}}</div>
    </div>

      <div style="background-image: url(../../static/square.png);background-size: 100% 100%;background-repeat: no-repeat;height: 9.375rem;">
        <div style="padding-top: 3rem;">
          <p>本月商户交易额（元）</p>
          <p>¥{{zong0.thismonth}}</p>
        </div>

      </div>
    <!-- 本月商户结束 -->
  </div>

</template>

<script>
  export default {
    data() {
      return {
        zong: [],
        zong0: []
      }
    },
    created() {
      var that = this
      this.$axios({
          methods: 'get',
          url: 'https://star.qhynice.top/api/mymerchant/index',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          console.log(response)
          that.zong = response.data.desc
          that.zong0 = response.data
          that.zong[0].img = "../../static/Icon(1).png"
          that.zong[1].img = "../../static/lcon(2).png"
          that.zong[2].img = "../../static/lcon(3).png"
        })
    },
    methods:{
      tz(){
        this.$router.push({
          path:'/商户2'
        })
      }
    }
  }
</script>

<style scoped>
  .head {
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
  }

  .zong {
    font-size: 0.8125rem;
    text-align: center;
  }

  .pm {
    display: flex;
    justify-content: space-around;
    width: 95%;
    margin-left: 2.5%;
    border-bottom: 0.0625rem solid gainsboro;
  }

  .L0 {
    display: flex;
    flex-direction: column;
  }
</style>
