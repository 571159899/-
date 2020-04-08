// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import BaiduMap from 'vue-baidu-map'
import Axios from 'axios'
import qs from 'qs'

Vue.use(Vant)
Vue.prototype.$axios = Axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
