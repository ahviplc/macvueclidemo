import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

// 下面两个都可以
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});