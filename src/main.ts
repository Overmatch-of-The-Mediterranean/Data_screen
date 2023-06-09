import { createApp } from 'vue'
import App from './App.vue'
import datav from 'datav-libs-dev-self'
import dataV2 from '@jiaminghi/data-view';
import router from './router/index'
import './assets/scss/style.scss';
import './assets/icon/iconfont.css'
import PublicComponent from './components/componentInstall';
createApp(App).use(router).use(PublicComponent).use(datav).use(dataV2).mount('#app')
