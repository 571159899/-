<template>
  <div class="zong">
    <van-nav-bar style="margin-top: -60px;" title="收货地址" right-text="···" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />


    <div class="head">
      <div>
        <a style="font-size: 2.5rem;color: gold;">TOP</a>
      </div>
      <div>
        <a style="font-size: 2.5rem;color: gold;">20</a>
        <p style="color: white;">全国激活机具TOP</p>
      </div>
    </div>
    <div class="zhong1">
      <a>排名</a>
      <a>伙伴</a>
      <a>激活量</a>
    </div>
    <van-divider />
    <!-- 排名开始 -->
    <div class="bao">
      <div class="zhong" v-for="(xun ) in xun">
        <a>{{xun.p1}}</a>
        <a>{{xun.p2}}</a>
        <a>{{xun.p3}}</a>
      </div>
    </div>
    <!-- 排名结束 -->


  </div>
</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script>
  export default {
    data() {
      return {
        current: 0,
        xun: [{
            p1: '1',
            p2: '王依依',
            p3: '20'
          },
          {
            p1: '2',
            p2: '王依依',
            p3: '19'
          },
          {
            p1: '3',
            p2: '王依依',
            p3: '18'
          },
          {
            p1: '4',
            p2: '王依依',
            p3: '17'
          },
          {

            p1: '5',
            p2: '王依依',
            p3: '16'
          },
          {
            p1: '6',
            p2: '王依依',
            p3: '15'
          },
          {
            p1: '7',
            p2: '王依依',
            p3: '14'
          },
          {
            p1: '8',
            p2: '王依依',
            p3: '13'
          },
          {
            p1: '9',
            p2: '王依依',
            p3: '12'
          },
          {
            p1: '10',
            p2: '王依依',
            p3: '11'
          },
          {
            p1: '11',
            p2: '王依依',
            p3: '10'
          },
          {
            p1: '12',
            p2: '王依依',
            p3: '9'
          },
          {
            p1: '13',
            p2: '王依依',
            p3: '8'
          },
          {
            p1: '14',
            p2: '王依依',
            p3: '7'
          },
          {
            p1: '15',
            p2: '王依依',
            p3: '6'
          },
          {
            p1: '16',
            p2: '王依依',
            p3: '5'
          },
          {
            p1: '17',
            p2: '王依依',
            p3: '4'
          },
          {
            p1: '18',
            p2: '王依依',
            p3: '3'
          },
          {
            p1: '19',
            p2: '王依依',
            p3: '2'
          },
          {
            p1: '20',
            p2: '王依依',
            p3: '1'
          },
        ]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({
          path: '/'
        })
      },
      }
  }
</script>

<style scoped>
  .bao {
    height: 25rem;
    overflow: scroll;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    /* background: red; */
    background-image: url(../../static/index.png);
    background-size: 100%;
  }

  .zhong {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.625rem;
    border-bottom: gainsboro 0.0625rem solid;
    padding-bottom: 1rem;
  }

  .zhong1 {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.625rem;
  }

  .xian {
    display: flex;

  }

  .zhong:first-child {
    border: none;
  }

  .bao>div:nth-child(-n+3) {
    color: red;
  }
</style>
