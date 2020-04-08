<template>
  <div>
    <div>
      <van-row style="position: absolute;width: 100%;background: black;top: 0px;padding-bottom: 0.3125rem;padding-top: 0.3125rem;">
        <van-col span="4">
          <router-link to="/"><img style="width: 1.25rem;" src="../../static/返回-1.png" /></router-link>
        </van-col>
        <van-col style="color: white;" span="8" offset="4">众星商学院</van-col>
      </van-row>
    </div>
    <van-search style="margin-top: -2rem;" placeholder="请输入搜索关键词" v-model="value" shape="round" />
    <div>
      <van-row>
        <van-col v-for="(pic,index) in pic" @click='tan(index)' span="8"><img style="width: 90%;" :src="pic.url" />
       <!-- <div v-html="zong.content"></div> -->
        </van-col>
      </van-row>
    </div>
    <div>
{{zong}}

    </div>
    <!-- <div style="width: 100%;height:1rem;background-color: gainsboro;clear: both;"></div> -->
    <!-- <div >
      <div style="padding: 10px;height: 6.25rem;width: 94%;clear: both;" v-for="mks in mks">
        <div>
          <img style="width: 29%;float: left;" :src="mks.pic1" />
          <img style="width: 8%;margin-left: -29%;float: left;" :src="mks.pic2" />
        </div>
        <div style="font-size: 0.7rem;float: left;margin-left: 7%;line-height: 110% ;">
          <a style="font-weight: 600;float: left;">{{mks.zi1}}</a>
          <br />
          <br />
          <a>&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXX</a>
          <br />
          <a>XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</a>
          <br />
          <a>XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</a>
          <br />
          <br />
          <a style="float: left;">2019-09-15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100评论.999+点赞</a>
        </div>
        <div style="clear: both;"></div>
        <van-divider />
      </div>
    </div> -->
    <!-- 底部导航开始 -->
    <div style="position: absolute;z-index: 999;">
      <van-tabbar route v-model="active">
        <van-tabbar-item replace :to="icon.url" v-for="icon in icon">
          <span>{{icon.name}}</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 底部导航结束 -->
  </div>
</template>

<script>
  window.onload = function() {
    var b1 = document.getElementsByClassName('b1');
  }
  export default {
    data() {
      return {
        current: 0,
        value: '',
        active: '',
        icon: [{
            url: '/',
            name: '首页',
            normal: '../static/home_0.png',
            active: '../static/home_1.png'
          },
          {
            url: '/zyk3',
            name: '我的团队',
            normal: '../static/团队.png',
            active: '../static/团队.1.png'
          },
          {
            url: '/zyk4',
            name: '成为VIP',
            normal: '../static/vip.png',
            active: '../static/vip_1.png'

          },
          {
            url: '/zyk5',
            name: '众星学院',
            normal: '../static/college.png',
            active: '../static/college_1.png'
          },
          {
            url: '/zyk6',
            name: '我的',
            normal: '../static/mine.png',
            active: '../static/mine_1.png'
          },
        ],
        pic: [{
            url: '../../static/Beginners.png',
          },
          {
            url: '../../static/VIP4.png',
          },
          {
            url: '../../static/partner4.png',
          },
          {
            url: '../../static/new-star.png',
          },
          {
            url: '../../static/higher.png',
          },
          {
            url: '../../static/Team4.png',
          },
        ],
        mks: [{
            pic1: '../../static/new-5.jpg',
            pic2: '../../static/corner.png',
            zi1: '众星学院.你应该知道的三件事',
            zi2: '&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi3: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi4: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi5: '2019-09-15  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100评论.999+点赞',
          },
          {
            pic1: '../../static/new-4.jpg',
            pic2: '../../static/corner.png',
            zi1: '众星学院.你应该知道的三件事',
            zi2: '&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi3: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi4: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi5: '2019-09-15  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100评论.999+点赞',
          },
          {
            pic1: '../../static/new-14.jpg',
            pic2: '../../static/corner.png',
            zi1: '众星学院.你应该知道的三件事',
            zi2: '&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi3: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi4: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi5: '2019-09-15  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100评论.999+点赞',
          },
          {
            pic1: '../../static/new-2.jpg',
            pic2: '../../static/corner.png',
            zi1: '众星学院.你应该知道的三件事',
            zi2: '&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi3: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi4: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi5: '2019-09-15  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100评论.999+点赞',
          },
          {
            pic1: '../../static/new-14.jpg',
            pic2: '../../static/corner.png',
            zi1: '众星学院.你应该知道的三件事',
            zi2: '&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi3: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi4: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            zi5: '2019-09-15  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100评论.999+点赞',
          },
        ],
        zong:'',
        index1:''
      }
    },

    methods: {
      tan(xx) {
        this.index1 = xx

        var that = this
        this.$axios({
            methods: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 29+this.index1
            }
          })
          .then(function(response) {
            // console.log(response.data.content)
            that.zong = response.data.content
          })
           console.log(this.zong)
      }
    },
    created() {
      var that = this
      this.$axios({
          methods: 'get',
          url: 'https://star.qhynice.top/api/business/articlelist',
        })
        .then(function(response) {
          console.log(response)
          that.zong = response.data.content
        })

      // this.$axios({
      //     methods: 'get',
      //     url: 'https://star.qhynice.top/api/business/articlelist',
      //     params: {
      //       category_id: 30
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //     that.zong = response.data.content
      //   })

      // this.$axios({
      //     methods: 'get',
      //     url: 'https://star.qhynice.top/api/business/articlelist',
      //     params: {
      //       category_id: 31
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //     that.zong = response.data.content
      //   })

      // this.$axios({
      //     methods: 'get',
      //     url: 'https://star.qhynice.top/api/business/articlelist',
      //     params: {
      //       category_id: 32
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //     that.zong = response.data.content
      //   })

      // this.$axios({
      //     methods: 'get',
      //     url: 'https://star.qhynice.top/api/business/articlelist',
      //     params: {
      //       category_id: 33
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //     that.zong = response.data.content
      //   })

      // this.$axios({
      //     methods: 'get',
      //     url: 'https://star.qhynice.top/api/business/articlelist',
      //     params: {
      //       category_id: 34
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //     that.zong = response.data.content
      //   })
    }
  }
</script>

<style scoped>
  .van-field__left-icon .van-icon,
  .van-field__right-icon .van-icon {
    padding-left: 16.5rem;
  }
</style>
