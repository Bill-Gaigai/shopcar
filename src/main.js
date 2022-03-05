import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 下载axios库，并引入
import axios from 'axios'
// 设置全局配置的基地址
axios.defaults.baseURL = "https://www.escook.cn"

// axios.defaults.baseURL = "http://152.136.185.210:7878/api/hy66"

// 将axios方法，挂载到vue的原型上，挂载之后在任何组件中，都可以通过this.$axios访问全局属性$axios
Vue.prototype.$axios = axios

import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')