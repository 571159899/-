<template>
  <div class="ball">
<div>
<!--  <img :src="'https://dawn.changxvan.top/Data/' + commodity.photo_d" /> -->
<!-- <img :src="'https://dawn.changxvan.top/Data/' + commodity.photo_string" />
  <img :src= "'https://dawn.changxvan.top/Data/' + commodity.photo_x"/> -->
<!-- <p>{{commodity.name}}</p> -->
<strong style="color: gold;">搜索到的商品</strong>
<van-row type="flex" justify="space-around" v-for="commodity in commodity" class="ball">
  <van-col span="30" >
    <img style="width: 80%;" :src="'https://dawn.changxvan.top/Data/' + commodity.photo_d" />
    <p>{{commodity.name}}</p>
  </van-col>
<!--  <van-col span="12">span: 6</van-col> -->

</van-row>
</div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        commodity:[],
      }
      },
created() {
   var keyword_val = this.$route.query.keyword;
   var keydata = this.$qs.stringify({
     keyword : keyword_val
   })
   this.$axios.post('https://dawn.changxvan.top/api/search/get_product',keydata)
   .then((response)=>{
     this.commodity = response.data.pro;
     console.log(response.data);
   })
}
  }
</script>

<style scoped>
  .ball{
border: 0.0625rem solid gold;
margin: 1rem;
font-family: "仿宋";
  }
</style>
