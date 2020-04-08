<template>
  <div class="zong">
    <!-- 头部开始 -->
    <van-nav-bar class="head" title="新增收货地址" right-text="···" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- 头部结束 -->
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail"
      :address-info='AddressInfo' />
    <baidu-map class="map" style="height: 500px" center="北京">
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-panorama></bm-panorama>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-label content="我爱北京天安门" :position="{lng: 116.404, lat: 39.915}" :labelStyle="{color: 'red', fontSize : '24px'}"
        title="Hover me" />
    </baidu-map>
  </div>
</template>

<script>
  import areaList from '../assets/area.js'
  export default {
    data() {
      return {
        areaList,
        searchResult: [],
      }
    },

    methods: {
      onSave(e) {
        console.log(e.name)
        console.log(e.tel)
        console.log(e.addressDetail)
        console.log(e.isDefault)
        var is;
        var _this = this;
        if (e.isDefault == true) {
          is = 1
        } else if (e.isDefault == false) {
          is = 0
        }
        console.log(is)
        if (this.$route.query.shanbian) {
          var keyword_val = this.$route.query.shanbian;
          this.$axios({
              method: 'get',
              url: 'https://star.qhynice.top/api/address/update_default',
              params: {
                user_id: 73,
                id: keyword_val.id,
                name: e.name,
                phone: e.tel,
                address: e.addressDetail,
                is_default: is,
              }
            })
            .then(function(response) {
              console.log(response)
              _this.$router.push({
                path: '/shouhuo',
              })
            })
        } else {
          var keydata = this.$qs.stringify({
            user_id: 73,
            name: e.name,
            phone: e.tel,
            address: e.addressDetail,
            is_default: is,
          })
          this.$axios.post('https://star.qhynice.top/api/address/index', keydata)
            .then(function(res) {
              console.log(res)
              _this.$router.push({
                path: '/shouhuo',
              })
            })
        }
      },
      onDelete() {
        var keyword_val = this.$route.query.shanbian;
        var that = this
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/address/del_adds',
            params: {
              user_id: 73,
              id: keyword_val.id
            }
          })
          .then(function(response) {
            that.$router.push({
              path: '/shouhuo'
            })
          })
      },
      onClickLeft() {
        this.$router.push({
          path: '/xiangqing'
        })
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      },
      onClickRight() {

      }
    },
    created() {
      // 编辑地址开始
      if (this.$route.query.shanbian) {
        var that = this
        var keyword_val = this.$route.query.shanbian;
        console.log(keyword_val)
        this.AddressInfo = {
          id: keyword_val.id,
          name: keyword_val.name,
          tel: keyword_val.tel,
          address: keyword_val.address
        }
      }
      // this.address.name = keyword_val.name
      // var keydata = this.$qs.stringify({
      //   user_id:73,
      //   id: keyword_val.id,
      //   name:keyword_val.name,
      //   phone:keyword_val.phone,
      //   address:keyword_val.address,
      //   is_default:keyword_val.is_default
      // })
      // this.$axios.post('https://star.qhynice.top/api/address/update_default', keydata)
      //   .then((response) => {
      //     console.log(this.aoew);
      //   })
    }
  }
</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 300px;
  }

  .zong {
    text-align: start;
    margin-top: -60px;
  }
</style>
