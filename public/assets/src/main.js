'use strict'

import Vue from 'vue'
import Vue_Router from 'vue-router'
import Vue_Resource from 'vue-resource'
import Vue_validator from 'vue-validator'

import FastClick from 'fastclick'

import routerMap from './routers'
import filters from './filters'
import App from './views/App.vue'

Vue.use(Vue_Router)
Vue.use(Vue_Resource)
Vue.use(Vue_validator)

let router = new Vue_Router({
    hashbang:true,
    history:false,
    saveScrollPosition: false,
    transitionOnLoad: true
})

//全局的前置钩子函数，在路由切换开始时调用
router.beforeEach(function(){
    window.scrollTo(0,0)
})

//独立出来的路由
routerMap(router)

router.start(App,'#app')
