<template style="background-image: url(../../static/beijing.jpg);padding-bottom: 3.25rem;">
  <div class="shop">
    <!-- 头部 开始-->
    <div class="shop_head">
      <router-link to="/">
        <h3 @click="tiao">大POS</h3>
      </router-link>
    </div>

    <div class="shop_shouji" v-for="zizo in zizo">
      <van-row type="flex">
        <van-col span="13" offset="1">
          <div class="shouji_kuang1">
            <div class="shouji_nei">
              <img class="shouji" :src="zizo.images" />
              <p>{{zizo.id}}</p>
              <p>{{zizo.name}}</p>
              <p style="color: red;">价格{{zizo.price}}</p>
              <van-button @click='jump(zizo.id)' style="border-radius: 10%;background: #edc277;border:1px solid #edc277;" type="danger">购买</van-button>
            </div>

          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        current: 0,
        zizo: [],
      }
    },
    methods: {
      //跳转页面
      jump(id) {
        this.$router.push({
          path: '/dingdan',
          query:{
            kk:id
          }
        })

      },
      tiao() {
        this.$router.push({
          path: '/'
        });
      }
    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/goods/index',

        })
        .then(function(response) {
          _this.zizo = response.data.data;
          // _this.brand = response.data.brand;
          console.log(response.data.data)
        })
    },
  }
</script>

<style scoped>
  .shop_di {
    margin-top: 8%;
    padding: 0.2rem;

  }

  .shouji_nei {
    font-size: 0.8rem;
    background-image: url(../../static/Frame.png);
    background-size: 100% 100%;
    padding: 0.4rem;
  }

 .shouji {
    width: 50%;
  }

  .shop_head {
    text-align: left;
    border-bottom: 0.0625rem gray solid;
    width: 94%;
    margin-left: 2%;
    margin-top: -3.77rem;
    padding: 0.3rem;
  }

  .shop {
    background-image: url(../../static/beijing.jpg);
    margin-top: -1.625rem;
    height: 55rem;
  }

  .shop_shouji {
   /* width: 100%; */
    padding: 0.5rem 0;
  }

  .shouji_kuang1 {
    padding: 0.3125rem;
    background: white;
    width: 168%;
  }

  .shouji_kuang2 {
    padding: 0.3125rem;
    background: white;
    width: 168%;
  }

  .img1 {
    width: 100%;
  }

  .img2 {
    width: 100%;
  }
</style>
