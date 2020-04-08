<template>
  <div class="zong">
    <van-nav-bar class="head" title="收货地址" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div class="nei">
      <div>
        <h1 style="color: gold;">加入众赢客</h1>
      </div>

    </div>
    <div class="nei">
      <div class="kuang">
 <van-image width="50" height="50" src="../../static/VIP11.png" />
 <br />
 <strong style="color: gold;">众 赢 客</strong>
<br />
<a style="color: gold;font-size: 0.625rem;">zhongyingke</a>
<p>用户名/机构名</p>
<p>手机号：xxxxxxxxxxx</p>
<p>----</p>
<a style="color: gold;">邀请码</a>
<br />
<a style="color: gold;">10067</a>
<br />
<van-image width="200" height="200" src="../../static/1573267018.png" />
<br />
<a style="color: gray;font-size: 0.75rem;">扫码邀请或在注册时直接填写邀请码</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
      ],
    }
  },

  methods: {
    onClickLeft() {
      this.$router.push({
        path: '/'
      })
    },
    onClickRight() {
      alert('陈进')
    },
  }
}
</script>

<style scoped>
  .zong {
    background-image: url(../../build/d4628535e5dde711d749427ba9efce1b9c1661a7.jpg);
    background-size: 100% 100%;
    height: 48rem;
    background-repeat: no-repeat;
    margin-top: -60px;

  }

  .nei {
    display: flex;
    justify-content: center;

  }

  .kuang {
    width: 90%;
    background-color: white;
    height: 30rem;
    border-radius: 2%;
  }
</style>
