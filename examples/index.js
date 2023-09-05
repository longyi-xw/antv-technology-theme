import Vue from 'vue'
import Antd from 'ant-design-vue'
import app from './app.vue'
import '../dist/theme.css'

Vue.use(Antd)
new Vue({
  render: h => h(app)
}).$mount('#app')