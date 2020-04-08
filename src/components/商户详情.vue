<template>
  <div class="zong">
    <!-- head开始 -->
    <div class="head">
      <div>＜商户详情</div>
    </div>
    <!-- head结束 -->
    <!-- 商户信息开始 -->
    <div class="head1">
      <div style="padding-top: 0.625rem;">{{list.name}}</div>
      <div class="head2">
        <div style="color: gold;">转移商户</div>
        <div>{{list.phone}}</div>
      </div>
    </div>
    <!-- 商户信息结束 -->
    <!-- 交易额开始 -->
    <div class="money">
      <div class="L0">
        <div>{{qian.thismonth}}</div>
        <div style="color: gainsboro;">本月交易额（元）</div>
      </div>
      <div class="L0">
        <div>{{qian.count}}</div>
        <div style="color: gainsboro;">累计商户交易额（元）</div>
      </div>
    </div>
    <!-- 交易额结束 -->
    <div class="L1">
      <div>交易额（元）</div>
      <div><span style="color: gold;">7日</span> 半年</div>
    </div>
    <!-- 折线图开始 -->
    <div id="main" style="width: 100%;height: 400px;"></div>
    <!-- 折线图结束 -->

  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        list: [],
        qian: [],
        charts: '',
         opinion: ["1", "3", "3", "4", "5"],
        // opinionData: ["3", "2", "4", "4", "5"],
        opinionData:[]
      }
    },
    created() {
      var xh = this.$route.query.kk
      var that = this
      console.log(xh)
      this.$axios({
          methods: 'get',
          url: 'https://star.qhynice.top/api/mymerchant/getuserInfo',
          params: {
            id: xh
          }
        })
        .then(function(response) {
          console.log(response.data.year_days)
          that.list = response.data.userinfo
          that.qian = response.data.sn_money
          that.opinionData = response.data.year_days
           that.drawLine('main')
        })
    },
    methods: {
                drawLine(id) {
                    this.charts = echarts.init(document.getElementById(id))
                    this.charts.setOption({
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['近七日收益']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },

                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                        data: ["1","2","3","4","5","6","7"]

                        },
                        yAxis: {
                            type: 'value'
                        },

                        series: [{
                            name: '近七日收益',
                            type: 'line',
                            stack: '总量',
                            data: this.opinionData
                        }]
                    })
                }
            },
            //调用
            // mounted() {
            //     this.$nextTick(function() {
            //         this.drawLine('main')
            //     })
            // }
  }
</script>

<style>
  .money {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    padding-top: 2.5rem;
    border-bottom: 0.0625rem gainsboro solid;
    padding-bottom: 0.625rem;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding-left: 3%;
  }

  .zong {
    margin-top: -3rem;
    font-size: 0.8125rem;
    text-align: start;
  }

  .head1 {
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 0.9375rem;
  }

  .head2 {
    display: flex;
    flex-direction: column;
  }

  .L0 {
    display: flex;
    flex-direction: column;
  }

  .L1 {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    padding-top: 0.9375rem;
  }
</style>
