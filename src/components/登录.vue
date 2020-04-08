<template>
  <div class="hello">
    <div class="world">
      <span>昵称：</span>
      <input placeholder="请输入昵称" v-model="val7" />
    </div>
    <div class="world">
      <span>账号：</span>
      <input placeholder="请输入账号" v-model="val8" />
    </div>
    <div class="world">
      <span>密码：</span>
      <input placeholder="请输入账号" v-model="val9" type="password" />
    </div>
    <div>
      <p style="color: red;">{{ts}}</p>
    </div>
    <div style="width: 64%;">
      <van-button type="info" class="but" @click="dl" color="linear-gradient(to right, #4bb0ff, #6149f6)" >登录</van-button>
      <van-button type="info" class="but" style="margin-top: 1.25rem;" @click="zc" color="linear-gradient(to right, #4bb0ff, #6149f6)">注册</van-button>
      <!-- <button @click="sc">删除</button> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val7: '',
        val8: '',
        val9: '',
        ts: ''
      }
    },
    created() {
      var items = JSON.parse(localStorage.getItem("msg"));
      console.log(items)
    },
    methods: {
      zc() {
        this.$router.push('注册')
      },
      dl() {
        var items = JSON.parse(localStorage.getItem("msg"))
        for (let i in items) {
          if (this.val7 == items[i].nc && this.val8 == items[i].zh && this.val9 == items[i].mm) {
            this.ts = '验证成功'
            return
          } else {
            this.ts = '验证失败'
          }
        }
      },
      sc() {
        localStorage.removeItem('msg')
      }
    }
  }
</script>
<style scoped>
  .hello{
      background-image: url(../../static/6C1935F375436BF535BDA3AC291A23B2.jpg);
      background-repeat: no-repeat;
      background-size: 100% auto;
      height: 25.75rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family:  "楷体";
      padding-top: 50%;
      margin-top: -3.75rem;
    }
    .world input{
      border: none;
      opacity: 0.7;
      border-radius: 5%;
      padding: 0.2rem;
    }
    .world{
  padding-top: 1.25rem;
    }
    .but{
      opacity: 0.8;
      padding: 0;
      margin: 0;
      width: 100%;
    }
</style>
