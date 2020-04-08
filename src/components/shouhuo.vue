<template>
  <div class="zong">
    <van-nav-bar class="head" title="收货地址" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div>
      <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="" @add="onAdd"
        @edit="onEdit" default-tag-text='默认' />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chosenAddressId: '1',
        list: [],
        disabledList: []
      }
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
          that.list = response.data.res
          for (let i in response.data.res) {
            that.list[i].tel = that.list[i].phone
          }
        })
      // 所有地址接口请求结束
    },
    methods: {
      onAdd() {
        this.$router.push({
          path: '/xinzeng'
        })
      },

      onEdit(item, index) {
        alert(1)
        // 删除地址接口请求开始
        // console.log()
        // this.$axios({
        //     method: 'get',
        //     url: 'https://star.qhynice.top/api/address/del_adds',
        //     params: {
        //       user_id: 73,
        //       id: this.$data.list[index].id
        //     }
        //   })
        //   .then(function(response) {
        //     console.log(response)
        //     this.$router.go(0) s
        //   })
        // 删除地址接口请求结束
        console.log(item)
        this.$router.push({
          path: '/xinzeng',
          query:{
shanbian:item
          }
        })
      },
      onClickLeft() {

      },
      onClickRight() {
        alert('陈进')
      },
    }

  }
</script>

<style scoped>
  .zong {
    margin-top: -60px;
  }
</style>
