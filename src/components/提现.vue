<template>
  <div class="cash">
    <!-- 导航开始 -->
    <van-nav-bar class="head" title="提现" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 导航结束 -->
    <!-- 用户名和身份证开始 -->
    <van-cell-group>
      <van-field @keyup="ming" v-model="username" clearable label="用户名" placeholder="请输入用户名" />
      <a style="color: red;">{{yxm}}</a>
      <van-field @keyup="shen" v-model="password" clearable label="身份证号" placeholder="请输入身份证号" />
      <a style="color: red;">{{ysfz}}</a>
    </van-cell-group>
    <!-- 用户名和身份证结束 -->
    <p style="margin-left: 4%;font-size: 0.9375rem;">提现方式</p>
    <!-- 单选框开始 -->
    <van-radio-group v-model="radio">
      <div class="fu0">
        <div class="fu">
          <van-radio name="1">微信零钱</van-radio>
        </div>
        <div class="fu1">
          <van-radio checked-color="gainsboro" name="2"><a style="color: gainsboro;">此功能暂不开放</a> </van-radio>
          <span>更改</span>
        </div>
      </div>
    </van-radio-group>
    <!-- 单选框结束 -->
    <!-- 提现金额开始 -->
    <div class="money1">
      <div class="money">
        <div>提现金额</div>
        <div style="margin-top:0.625rem ;">
          ¥<input v-model="zhi" placeholder="最低提现1元" style="border: none;" />

        </div>
      </div>
    </div>
    <!-- 提现金额结束 -->
    <!-- 手续费开始 -->
    <div class="money1">
      <div class="shouxu">
        <div>
          <span>手续费：¥{{shui.service_charge}}</span>
        </div>
        <div class="jin1">
          <span>可提现0.00</span>
          <span style="padding-left: 0.3rem;color: gold;">全部提现</span>
        </div>
      </div>
    </div>
    <!-- 手续费结束 -->
    <!-- 手续费开始 -->
    <div class="money1">
      <div class="shouxu">
        <div>
          <span>预计税后到账¥<a>{{zhi-(zhi*shui.tax_rate)-1}}</a> </span>
        </div>
        <div class="jin1">
          <span>税率扣点：{{shui.tax_rate}}</span>
        </div>
      </div>
    </div>
    <!-- 手续费结束 -->
    <!-- 合约开始 -->
    <div class="heyue">
      <van-checkbox v-model="checked2"><span>同意<a style="color: blue;">《费用结算服务协议》</a>的所有条款 </span></van-checkbox>
    </div>
    <!-- 合约结束 -->
    <div style="display: flex;align-items: center; flex-direction: column;">
      <van-button @click='xian' round style='width: 90%;position:relative;bottom: 0; background-color: #8F4E10;color: white;margin-top: 0.16rem;'>提现</van-button>
      <a style="font-size: 13px;">(新用户请先在个人中心设置支付密码)</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        checked: false,
        checked1: false,
        checked2: false,
        radio: '',
        zhi: '',
        shui: '',
        name1: '',
        yhk: '',
        sfz: '',
        ysfz: '',
        yxm: ''
      }
    },

    created() {
      // 提现手续费和税点接口请求开始
      var that = this
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/Getmoney/brokerage',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          console.log(response)
          that.shui = response.data.cost
          that.name1 = response.data.user.account
          that.sfz = response.data.user.card_code
          that.yhk = response.data.user.bank_address
        })
      // 提现手续费和税点接口请求结束


    },
    methods: {
      onClickLeft() {
        this.$router.push({
          path: '/leijishouyi'
        })
      },
      onClickRight() {
        alert('陈进')
      },

      xian() {
        var idNo = this.$data.username
        var regIdNo = /^[\u4e00-\u9fa5]{2,4}$/;
        var name = this.$data.password;
        var regName = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (regName.test(name) && regIdNo.test(idNo)) {
          var that = this
          var that1 = that.$data
          this.$axios({
              method: 'get',
              url: 'https://star.qhynice.top/api/Getmoney/Addmoney',
              params: {
                userid: 73,
                name: that1.name1,
                card: that1.sfz,
                card_number: that1.yhk,
                money: that1.zhi - (that1.zhi * that1.shui.tax_rate) - 1,
                type: 1,
                service: 1,
                tmpmoney: that1.zhi
              }
            })
            .then(function(response) {
              // console.log(response)
            })
          // 提现申请接口请求结束
          this.$axios({
              method: 'get',
              url: 'https://star.qhynice.top/api/Getmoney/Moneyinfo',
              params: {
                userid: 73
              }
            })
            .then(function(response) {
              // that.id1 = response.data.data.id
              console.log(response)
            })

          // 撤销提现申请开始
          // this.$axios({
          //     method: 'get',
          //     url: 'https://star.qhynice.top/api/Getmoney/saveMoney',
          //     params: {
          //       userid: 73
          //     }
          //   })
          //   .then(function(response) {
          //     console.log(response)
          //   })
          // 撤销提现申请结束

        } else {
          alert('信息输入错误')
        }
        // 提现申请接口请求开始

      },
      ming() {
        var idNo = this.$data.username
        var regIdNo = /^[\u4e00-\u9fa5]{2,4}$/;
        if (!regIdNo.test(idNo)) {
          this.yxm = '姓名填写有误'
        } else {
          this.yxm = ''
        }
      },
      shen() {
        var name = this.$data.password;
        var regName = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!regName.test(name)) {
          this.ysfz = '身份证号填写有误'
        } else {
          this.ysfz = ''
        }
      }

    }
  }
</script>

<style scoped>
  .cash {
    margin-top: -3.75rem;
    text-align: start;
  }

  .fu {
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    width: 94%;
    padding: 0.5rem;
  }

  .fu1 {
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    width: 94%;
    padding: 0.5rem;
    margin-top: 0.625rem;
  }

  .heyue {
    display: flex;
  }

  .fu0 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .money {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 0.0625rem solid gray;
    padding: 0.5rem;
    margin-top: 0.625rem;
    width: 94%;
  }

  .money1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .shouxu {
    display: flex;
    justify-content: space-between;
    border: 0.0625rem solid gray;
    padding: 0.5rem;
    margin-top: 0.625rem;
    width: 94%;
  }

  .jin1 {
    display: flex;
    justify-content: space-between;
  }
</style>
