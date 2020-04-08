<template>
  <div>
    <img style="width: 100%;" src="../../static/TIM图片20191227160514.png" />
    <p style="position: absolute;top: 17.3rem;left: 6rem;">{{att.account}}</p>
    <p style="position: absolute;top: 27rem;left: 8.5rem;">{{att.promo}}</p>
    <p style="position: absolute;top: 34rem;left: 6rem;">{{timestampToTime(shijian)}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        att: [],
        shijian:''
      }

    },
    created() {
      var that = this
      this.$axios({
          methods: 'get',
          url: 'https://star.qhynice.top/api/authorize/index',
          params: {
            userid: 73
          }
        })
        .then(function(res) {
          console.log(res)
          that.att = res.data.list
          that.shijian = res.data.list.certification_time
        })
    },
        methods:{
          timestampToTime(timestamp) {
                  var date = new Date(timestamp * 1000);
                  let y = date.getFullYear();
                  let MM = date.getMonth() + 1;
                  MM = MM < 10 ? ('0' + MM) : MM;
                  let d = date.getDate();
                  d = d < 10 ? ('0' + d) : d;
                  return y + '年' + MM + '月' + d + '日';
              }
        }
  }
</script>

<style>
</style>
