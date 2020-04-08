<template>
  <div>
    <input v-model="value" />
    <button @click="chuancan()">提交</button>
  </div>
</template>
<script>
  export default {
    data() {
      value = ''
    },
    methods: {
      chuancan() {
        this.$router.push({
          path: '/测试',
          query: {
            keyword : this.value,
          }
        })
      }
    },
    // created() {
    //   var _this = this;
    //   this.$axios({
    //       method: 'get',
    //       url: 'https://dawn.changxvan.top/api/product/index',
    //       params:{
    //         pro_id:1
    //       }
    //     })
    //     .then(function(response) {
    //       // _this.focus = response.data.focus;
    //       // _this.brand = response.data.brand;
    //       console.log(response.data)
    //     })
    // },
  }
</script>

<style scoped>
</style>
