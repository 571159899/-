<template>
  <div style="box-sizing: border-box;">
    <!-- 头部开始 -->
    <van-nav-bar class="head" title="商品详情" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 头部结束 -->
<img :src="zizo.images" />
    <!-- 价格开始 -->
    <van-row type="flex" class="jiage">
      <van-col span="6"><strong>{{zizo.price}}</strong> </van-col>
    </van-row>
    <van-row type="flex" class="jiage">
      <van-col span="20"><span>{{zizo.name}}</span> </van-col>
    </van-row>
    <van-row type="flex" class="jiage">
      <van-col span="12"><a>快递费 ： 免运费</a> </van-col>
    </van-row>
    <!-- 价格结束 -->

    <!-- 详情开始 -->
    <div v-html="xiangqing">
    </div>
    <!-- 详情结束 -->
    <!-- 订单详情开始 -->
    <div style="text-align: start;">
      <van-sku v-model="show" :sku="sku" :goods="goods" :goods-id="goodsId" :quota="quota" :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock" :message-config="messageConfig" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
    </div>
    <!-- 订单详情结束 -->
    <!-- 提交按钮开始 -->
    <div class="di">
      <van-button style="position: fixed;bottom: 0;" type="warning" class="btn" @click='dian()'>立即申请</van-button>
    </div>
    <!-- 提交按钮结束 -->
    <img src="" />
  </div>

</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script>
  export default {
    data() {
      return {
        current: 0,
        lunbo: [
        ],
        xiangqing: [
        ],
        show: false,
        goodsId:'',
        zizo:[],
        sku: {
          tree: [
          ],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [{
            id: 2259, // skuId，下单时后端需要
            price: '', // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '30349', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }],
          price: '1.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          // messages: [{
          //   // 商品留言
          //   datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
          //   multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
          //   name: '留言', // 留言名称
          //   type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
          //   required: '1', // 是否必填 '1' 表示必填
          //   placeholder: '' // 可选值，占位文本
          // }],
          hide_stock: false // 是否隐藏剩余库存
        },
        goods: {
          // 商品标题
          title: '测试商品',
          // 默认商品 sku 缩略图
          picture: '',

        },
        messageConfig: {
          // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
          uploadImg: () => {
            return new Promise((resolve) => {
              setTimeout(() => resolve(
                  'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'),
                1000);
            });
          },
          // 最大上传体积 (MB)
          uploadMaxSize: 3,
          // placeholder 配置
          placeholderMap: {
            text: 'xxx',
            tel: 'xxx',
          }
        },
        customStepperConfig: {
          // 自定义限购文案
          quotaText: '每次限购xxx件',
          // 自定义步进器超过限制时的回调
          handleOverLimit: (data) => {
            const {
              action,
              limitType,
              quota,
              quotaUsed
            } = data;

            if (action === 'minus') {
              Toast('至少选择一件商品');
            } else if (action === 'plus') {
              // const { LIMIT_TYPE } = Sku.skuConstants;
              if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
                let msg = `单次限购${quota}件`;
                if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
                Toast(msg);
              } else {
                Toast('库存不够了');
              }
            }
          },
          // 步进器变化的回调
          handleStepperChange: currentValue => {},
          // 库存
          stockNum: 1999,
          // 格式化库存
          stockFormatter: stockNum => {},
        },
        initialSku: {
          // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
          // 值：skuValueId（规格值 id）
          s1: '30349',
          s2: '1193',
          // 初始选中数量
          selectedNum: 3
        }
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({
          path: '/shop'
        })
      },
      onClickRight() {
        this.$router.push({
          path: '/xiangqing'
        })
      },
      zou() {
        this.$router.push({
          path: '/xiangqing'
        })
      },
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
      },
      dian() {
        this.show = true
        this.$data.goods.picture = this.$data.zizo.images
        this.sku.list[1] = this.zizo.price
        // console.log(this.$data.zizo.price)
        console.log(this.$data.sku.list.price)

        return
      },
      onBuyClicked() {
        this.$router.push({
          path: '/xiangqing'
        })

      },
      onAddCartClicked() {
        this.$router.push({
          path: '/xiangqing'
        })

      }

    },
    created() {
      var _this = this;
      var keyword_val = _this.$route.query.kk;

     this.$axios({
         method: 'get',
         url: 'https://star.qhynice.top/api/goods/getinfo',
     params:{
       id:keyword_val
     }
       })
       .then(function(response) {
         _this.zizo = response.data.data;
         _this.xiangqing = response.data.data.describe;
         // _this.brand = response.data.brand;
         console.log(response.data.data)
       })
    },
  }
</script>

<style scoped>
  #tanchu {
    display: none;
    /* margin-top: -3rem; */
    background: black;
    color: white;
    position: relative;
    top: -2.5rem;
    z-index: 999;
  }

  .beizhu {
    font-size: 0.8125rem;
    text-align: left;
    padding-left: 1.6rem;
    margin-top: 0.625rem;
  }

  .danjia {
    font-size: 0.8125rem;
    text-align: left;
    display: flex;
    margin-bottom: 1.625rem;
    /* justify-content: space-between; */
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .xiangqing_zi {
    text-align: left;
    padding-left: 0.625rem;
  }

  .xiangqing1 {
    padding-left: 1.3rem;
    display: flex;
  }

  .btn {
    width: 100%;
    background: #edc277;
  }

  .di {
    display: flex;
    margin-top: 1rem;
    margin-top: -2.5rem;
  }

  .kuang {
    overflow: scroll;
    height: 13rem;
  }

  .xiangqing {
    text-align: left;
    padding: 0.5rem;
    font-size: 0.85rem;
  }

  .jiage {
    text-align: left;
    padding: 0.5rem;
  }

  .jiage strong {
    color: gold;
  }

  .jiage a {
    color: gainsboro;
    font-size: 0.8125rem;
  }

  .jiage span {
    font-size: 0.9rem;
  }

  .head {
    margin-top: -3.8rem;
  }

  .lunbo img {
    width: 98%;
  }

  .van-sku-actions .van-button--danger {
    background: -webkit-linear-gradient(left,#edc277,#edc277);
    background: linear-gradient(to right, #edc277, #edc277);

  }

  .van-button--danger {
    color:
      #fff;
    background-color:
      #edc277;
    border: 1px solid #ee0a24;
  }
</style>
