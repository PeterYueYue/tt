import Vue from 'vue';
import Router from 'vue-router';

import Shop from '@/views/shop';

import ShopItem from '@/views/shopList/shopitem';

import ShopList from '@/views/shopList/shopList';

import Car from "@/views/shopCar/car";
import Detail from "@/views/shopDetail/detail";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: 'list',
          name: 'List',
          component: ShopList
        },
        {
          path: 'car',
          name: 'Car',
          component: Car

        },{
          path: 'detail/:bigId', //如果要是动态的 就这样写
          name: 'Detail',
          component: Detail

        }
      ]
    }
  ]
})