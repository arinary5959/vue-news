 /*eslint-disable*/
import { createApp } from 'vue'
import App from './App.vue'
// import { store } from './store';
import { router } from './routes/index.js'; // 라우터 추가하고 
import { store } from './store/index.js'

import mitt from 'mitt';
const emitter = mitt();
// Create Vue Instance
const app = createApp(App);
// emitter
app.config.globalProperties.emitter = emitter;

console.log(app.config.globalProperties.emitter)
// console.log(emitter)
// console.log(router)
// console.log(app)
// console.log(Vuex)
app.use(router); // 사용 설정 하기
app.use(store); // 사용 설정 하기
console.log(store);
app.mount('#app');
