window._ = require('lodash');


// try {
//     window.Popper = require('popper.js').default;
//     window.$ = window.jQuery = require('jquery');
//
//     require('bootstrap');
// } catch (e) {}
//
import "nprogress/nprogress.css";
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';


import NProgress from "nprogress";
window.NProgress = NProgress;
import { loadProgressBar } from 'x-axios-progress-bar'

loadProgressBar();
window.Vue = require('vue');
import VueRouter from 'vue-router';
window.VueRouter= VueRouter;
import Vuex from "vuex";
window.Vuex = Vuex;



window.APIURL = "http://e-commerce.com";












