<template>
  <div class="quan">
    <!-- 导航开始 -->
    <van-nav-bar class="head" title="累计收益" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 导航结束 -->
    <p style="text-align: left;padding-left: 0.625rem;">2019年8月20日日报</p>
    <div class="ribao">
      <div>
        <vue-datepicker-local v-model="time" />
      </div>

      <van-row>
        <van-col span="10" offset="2">
          <p>激活奖励</p>
          <p>0</p>
        </van-col>
        <van-col span="10" offset="2">
          <p>推广奖励</p>
          <p>0</p>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="10" offset="2">
          <p>育成奖励</p>
          <p>0</p>
        </van-col>
        <van-col span="10" offset="2">
          <p>分润奖励</p>
          <p>0</p>
        </van-col>
      </van-row>
    </div>
    <div id="main" style="width:100%;height: 400px;"></div>
  </div>
</template>

<script>
  import VueDatepickerLocal from 'vue-datepicker-local'
  import echarts from 'echarts'
  export default {
    name: '',
    components: {
      VueDatepickerLocal
    },
    data() {
      return {
        time: new Date(),
        charts: '',
        // opinion: ["1", "3", "3", "4", "5"],
        opinionData: ["400", "200", "600", "200", "1200", "1000", '400', '800', '1000', '200']
      }
    },
    methods: {
      drawLine(id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: []
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },

          // toolbox: {
          //   feature: {
          //     saveAsImage: {}
          //   }
          // },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", '6月', '7月', '8月', '9月', '10月']

          },
          yAxis: {

            type: 'value',
            axisLine: {
              show: false
            },
          },

          series: [{
            name: '近七日收益',
            type: 'line',
            stack: '总量',
            data: this.opinionData,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#20A0FF'
                }
              },

            },

          }]
        })
      },
      onClickLeft() {
        this.$router.push({
          path: 'leijishouyi'
        })
      },
      onClickRight() {
        alert('陈进')
      }

    },
    mounted() {
      this.$nextTick(function() {
        this.drawLine('main')
      })
    },
created() {
  // var that =this
  this.$axios({
    methods:'get',
    url:'https://star.qhynice.top/api/personal/report_d',
    params:{
      userid:73,
    }
    .then(function(response){
      console.log(response)
    })
  })
}
  }
</script>

<style scoped>
  .quan {
    margin-top: -60px;
  }

  .ribao p {
    color: gray;
    font-size: 0.8125rem;

  }

  .yuefen {
    display: flex;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  .ribao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }
</style>
