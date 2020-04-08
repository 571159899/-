<template>
  <div>
    <!-- 头部开始 -->
    <van-nav-bar class="head" title="确认订单" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 头部结束 -->
    <!-- 接收地址开始 -->
    <van-row type="flex" class="jiage" @click='tiao'>
      <van-col span="16"><strong>{{list.name}}：{{list.phone}}</strong> </van-col>
    </van-row>
    <van-row type="flex" class="jiage"  @click='tiao'>
      <van-col span="20"><span>众赢客商品简要说明众赢客商品简要说明</span> </van-col>
    </van-row>
    <!-- 接收地址结束 -->
    <!-- 订单详情开始 -->
    <div class="xiangqing">
      <div class="xiangqing_tu">
        <van-image width="80%" src="../../static/Head-portrait.png" />
      </div>
      <div class="xiangqing_zi">
       <strong>众赢客POS</strong>
        <p style="color: gold;"><strong>¥2999</strong> </p>
      </div>
    </div>

    <div class="danjia">
      <div>
        <strong>申请数量</strong>
      </div>
      <div>
        <van-stepper v-model="value" />
      </div>
    </div>
    <div class="danjia">
      <div>
        <strong>运费</strong>
      </div>
      <div>
        免运费
      </div>
    </div>
    <div class="beizhu">
      <strong>添加备注</strong> <input placeholder="选填,如有需要请以备注告知" />
    </div>
    <!-- 订单详情结束 -->
    <!-- 结账开始 -->
<div class="jiezhang">
  <div style="padding-top: 0.625rem;">
合计：¥598.00
  </div>
  <div>
<van-button type="danger" @click='fukuan'>提交按钮</van-button>
  </div>
</div>
    <!-- 结账开始 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 1,
        list:[]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({
          path: '/dingdan'
        })
      },
      onClickRight() {
        alert('陈进')
      },
      fukuan(){
        this.$router.push({
          path: '/fukuan'
        })
      },
      tiao(){
        this.$router.push({
          path: '/shouhuo'
        })
      },
    },
    created() {
      // 所有地址接口请求开始
      var that = this
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/address/getaddress',
          params: {
            user_id: 73
          }
        })
        .then(function(response) {
          console.log(response)
          // that.list = response.data.res
          for (let i in response.data.res) {
            // that.list[i].tel = that.list[i].phone
            if(response.data.res[i].is_default == 1){
 that.list = response.data.res[i]
              }
          }
        })
      // 所有地址接口请求结束
    },
  }
</script>

<style scoped>
  .jiezhang{
    display: flex;
    justify-content: space-between;
    margin-top: 19rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  .beizhu {
    font-size: 0.8125rem;
    text-align: left;
    padding-left: 1.6rem;
    margin-top: 0.625rem;
  }

  .danjia {
    font-size: 0.8125rem;
    margin-top: 0.625rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  .xiangqing_zi {
    text-align: left;
    padding-left: 0.625rem;
  }

  .xiangqing {
    padding-left: 1.3rem;
    margin-top: 7rem;
  }

  .head {
    margin-top: -3.8rem;
  }

  .jiage {
    text-align: left;
    padding: 0.625rem;
    padding-left: 1.6rem;
  }

  .jiage span {
    color: gainsboro;
    font-size: 0.8125rem;
  }

  .xiangqing {
    display: flex;
  }
</style>
