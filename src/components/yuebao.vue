<template>
  <div class="quan">
    <!-- 导航开始 -->
    <van-nav-bar class="head" title="累计收益" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 导航结束 -->
    <!-- 标签页开始 -->
    <van-tabs type="card">
      <van-tab title="上个月">
        <p style="text-align: left;padding-left: 0.625rem;">历史月报</p>
        <div class="ribao">
          <div>

            <van-cell-group is-link @click="showPopup">
              <van-cell v-model="timeValue" title="选择月份" value="" />
            </van-cell-group>


            <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
              <van-datetime-picker v-model="currentDate" type="year-month" :min-date="minDate" :formatter="formatter"
                @confirm='wancheng' @cancel='guan' @change='changeFn' />
            </van-popup>

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
      </van-tab>
      <van-tab title="近三个月">
        <p style="text-align: left;padding-left: 0.625rem;">昨日日报</p>
        <div class="ribao">
          <div class="yuefen">
            <p>选择月份</p>
            <p>2019,11月＞</p>
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
      </van-tab>
      <van-tab title="近六个月">
        <p style="text-align: left;padding-left: 0.625rem;">昨日日报</p>
        <div class="ribao">
          <div class="yuefen">
            <p>选择月份</p>
            <p>2019,11月＞</p>
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
      </van-tab>
    </van-tabs>
    <div id="main" style="width:100%;height: 400px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {

    data() {
      return {
        show: false,
        currentDate: new Date(),
        msg: '',
        currentDate: new Date(),
        changeDate: new Date(),
        show: false, // 用来显示弹出层
        timeValue: '2019,12月＞',
        charts: '',
        total: []
      };
    },
    methods: {
      timeFormat(time) { // 时间格式化 2019-09-08
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        return year + '年' + month + '月' + day + '日'
      },
      showPopup() {
        this.show = true;
      },
      onClickLeft() {
        this.$router.push({
          path: 'leijishouyi'
        })
      },
      onClickRight() {
        alert('陈进')
      },
      guan() {
        this.show = true;
      },
      wancheng() {
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
      },
      changeFn() {
        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
      },
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
      },
      mounted() {
        this.timeFormat(new Date());
      },
      glob() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/personal/report_m',
            params: {
              userid: 73
            }
          })
          .then(function(response) {
            _this.da = response.data
            _this.total = response.data.total
            console.log(response.data.total)
            _this.drawLine('main')
          })
      },
      drawLine(id) {
        console.log(this.total)
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            }
          },
          series: [{
            name: '近七日收益',
            type: 'line',
            stack: '总量',
            data: this.total,
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
      created() {
        var that = this
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/personal/report_m',
            params: {
              userid: 73
            }
          })
          .then(function(response) {
            console.log(response)
          })
      },

    },
    mounted() {
      this.glob()
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
