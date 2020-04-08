import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import zyk1 from '@/components/zyk1'
import zyk2 from '@/components/zyk2'
import zyk3 from '@/components/zyk3'
import zyk4 from '@/components/zyk4'
import zyk5 from '@/components/zyk5'
import zyk6 from '@/components/zyk6'
import shop from '@/components/shop'
import dingdan from '@/components/dingdan'
import xiangqing from '@/components/xiangqing'
import fukuan from '@/components/fukuan'
import shouhuo from '@/components/shouhuo'
import xinzeng from '@/components/xinzeng'
import yaoqing from '@/components/yaoqing'
import paihang from '@/components/paihang'
import leijishouyi from '@/components/leijishouyi'
import yuebao from '@/components/yuebao'
import 测试 from '@/components/测试'
import ribao from '@/components/ribao'
import 接口测试 from '@/components/接口测试'
import 提现 from '@/components/提现'
import 授权书 from '@/components/授权书'
import 商户1 from '@/components/商户1'
import 商户2 from '@/components/商户2'
import 商户详情 from '@/components/商户详情'
import 登录 from '@/components/登录'
import 注册 from '@/components/注册'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zyk1',
      component: zyk1
    },
    {
      path: '/zyk2',
      name: 'zyk2',
      component: zyk2
    },
    {
      path: '/zyk3',
      name: 'zyk3',
      component: zyk3
    },
    {
      path: '/zyk4',
      name: 'zyk4',
      component: zyk4
    },
    {
      path: '/zyk5',
      name: 'zyk5',
      component: zyk5
    },
    {
      path: '/zyk6',
      name: 'zyk6',
      component: zyk6
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/fukuan',
      name: 'fukuan',
      component: fukuan
    },
    {
      path: '/shouhuo',
      name: 'shouhuo',
      component: shouhuo
    },
    {
      path: '/xinzeng',
      name: 'xinzeng',
      component: xinzeng
    },
    {
      path: '/yaoqing',
      name: 'yaoqing',
      component: yaoqing
    },
    {
      path: '/paihang',
      name: 'paihang',
      component: paihang
    },
    {
      path: '/leijishouyi',
      name: 'leijishouyi',
      component: leijishouyi
    },
    {
      path: '/yuebao',
      name: 'yuebao',
      component: yuebao
    },
    {
      path: '/测试',
      name: '测试',
      component: 测试
    },
    {
      path: '/ribao',
      name: 'ribao',
      component: ribao
    },
    {
      path: '/接口测试',
      name: '接口测试',
      component: 接口测试
    },
	{
	  path: '/提现',
	  name: '提现',
	  component: 提现
	},
  {
    path: '/授权书',
    name: '授权书',
    component: 授权书
  },
  {
    path: '/商户1',
    name: '商户1',
    component: 商户1
  },
  {
    path: '/商户2',
    name: '商户2',
    component: 商户2
  },
  {
    path: '/商户详情',
    name: '商户详情',
    component: 商户详情
  },
  {
    path: '/登录',
    name: '登录',
    component: 登录
  },
  {
    path: '/注册',
    name: '注册',
    component: 注册
  }
  ]
})
