<template>
  <div class="hello">
    <div class="world">
      <span>昵称：</span>
      <input placeholder="请输入昵称" v-model="val0" />
    </div>
    <div class="world">
      <span>账号：</span>
      <input placeholder="请输入账号" v-model="val1" />
    </div>
    <div class="world">
      <span>密码：</span>
      <input placeholder="请输入密码" v-model="val2" type="password" />
    </div>
    <div style="width: 64%;">
      <van-button style="margin-top: 1.25rem;" @click="zc" color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">注册</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val0: '',
        val1: '',
        val2: '',
      }
    },
    methods: {
      zc() {
        var sj = {
          nc: this.val0,
          zh: this.val1,
          mm: this.val2
        }
        if (this.val0 == '' || this.val1 == '' || this.val2 == '') {
          alert('输入信息不可为空')
        } else {
          var templist = JSON.parse(localStorage.getItem("msg") || "[]")
          templist.push(sj)
          localStorage.setItem("msg", JSON.stringify(templist))
          this.$router.push('/登录')
        }
      }
    }
  }
</script>
<style scoped>
  .hello {
    background-image: url(../../build/7acb0a46f21fbe09ba4b900965600c338744ad92.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 25.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "楷体";
    padding-top: 50%;
    margin-top: -3.75rem;
  }

  .world input {
    border: none;
    opacity: 0.7;
    border-radius: 5%;
    padding: 0.2rem;
  }

  .world {
    padding-top: 1.25rem;
  }
</style>
