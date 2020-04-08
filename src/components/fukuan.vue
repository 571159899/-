<template>
  <div id="add">
 <van-nav-bar class="head" title="确认支付" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div id="cent">
      <p id="cent_shang">
        <b>订单付款</b>
      </p>
      <p id="cent_da">
        <b>￥688.00</b>
      </p>
      <div id="cent_xia">
        收款方
        <b>
          盛鑫达有限公司
        </b>
      </div>
    </div>
    <button @click="fan" type="button">立即支付</button>
  </div>

</template>

<script>
  export default {
    methods: {
      fan() {
        this.$router.push({
          path: '/xiangqing',
        })
      }
    }
  }
</script>

<style scoped>
  #add {
    background-color: #ebedf0;
    margin-top: -17px;
    height: 50.75rem;
    margin-top: -3.75rem;
  }

  #heds {
    padding-top: 15px;
    padding-bottom: 5px;
    margin-left: 20px;
  }

  #heds b {
    font-size: 19px;
    padding-left: 26%;
  }

  #heds p {
    margin-bottom: 0;
  }

  #cent {
    background-color: white;
  }

  #cent p {
    text-align: center;
  }

  #cent_shang {
    padding-top: 0.625rem;
  }

  #cent_da {
    font-size: 30px;
    border-bottom: 1px solid #ebedf0;
    padding-bottom: 15px;
    margin: 0;
  }

  #cent_xia {
    margin-left: 20px;
    padding: 10px 0;
  }

  #cent_xia b {
    padding-left: 40%;
  }

  button {
    text-align: center;
    margin-top: 20px;
    width: 94%;
    margin-left: 3%;
    padding: 7px 0;
    border-radius: 7px;
    background-color: yellowgreen;
    color: white;
  }

</style>
