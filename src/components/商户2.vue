<template>
  <div class="zong">
    <!-- 头部图开始 -->
    <div class="head">
      <div>
        <van-search @search="onSearch" v-model="value" placeholder="请输入搜索关键词" shape="round" background="#000000" />
      </div>
      <div>
        我的商户
      </div>
      <div style="font-size: 1.875rem;">
        0
      </div>
    </div>
    <!-- 头部图结束 -->
    <!-- 下拉菜单开始 -->
    <div>
      <van-dropdown-menu style="margin-left: -70%;">
        <van-dropdown-item title="交易额" v-model="value1" :options="option1" @change="tiao(value1)" />
      </van-dropdown-menu>
    </div>
    <!-- 下拉菜单结束 -->
    <!-- 列表开始 -->
    <div class="news" v-for="zong in zong" @click="zhuan(zong.id)">
      <div style="display: flex;">
        <div><img style="transform: scale(0.5);" :src="zong.img" /></div>
        <div style="padding-top:1.5rem;">{{zong.name}}</div>
      </div>
      <div class="L0">
        <div style="color: gold;">¥{{zong.money}}</div>
        <div>交易额</div>
      </div>
    </div>
    <!-- 列表结束 -->
    <!-- 商户转移开始 -->
    <div>
      <van-button type="primary" size="large">商户转移</van-button>
    </div>
    <!-- 商户转移结束 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value: '',
        option1: [{
            text: '本月交易额',
            value: 0
          },
          {
            text: '上月交易额',
            value: 1
          },
          {
            text: '累计交易额',
            value: 2
          }
        ],
        zong: []
      }
    },
    methods: {
      tiao(val) {
        var that = this
        this.$axios({
            methods: 'get',
            url: 'https://star.qhynice.top/api/mymerchant/myinfo',
            params: {
              userid: 73,
              type: val + 1
            }
          })
          .then(function(response) {
            console.log(response)
            that.zong = response.data.data
          })
      },
      zhuan(dex){
        console.log(dex)
        this.$router.push({
          path:'/商户详情',
          query:{
            kk:dex
          }
        })
      },
      onSearch() {
        var that = this
        this.$axios({
            methods: 'get',
            url: 'https://star.qhynice.top/api/mymerchant/myinfo',
            params: {
              userid: 73,
              params: this.value
            }
          })
          .then(function(response) {
            console.log(response)
            that.zong = response.data.data
            // that.zong[0].img = "../../static/Icon(1).png"
            // that.zong[1].img = "../../static/lcon(2).png"
            // that.zong[2].img = "../../static/lcon(3).png"
          })
      }
    },
    created() {
      var that = this
      this.$axios({
          methods: 'get',
          url: 'https://star.qhynice.top/api/mymerchant/myinfo',
          params: {
            userid: 73,
          }
        })
        .then(function(response) {
          console.log(response)
          that.zong = response.data.data
          that.zong[0].img = "../../static/Icon(1).png"
          that.zong[1].img = "../../static/lcon(2).png"
          that.zong[2].img = "../../static/lcon(3).png"
        })
    }
  }
</script>

<style scoped>
  .zong {
    margin-top: -3.75rem;
    font-size: 0.8125rem;
  }

  .head {
    background-image: url(../../static/square.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 9.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  .news {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
  }

  .L0 {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }
</style>
