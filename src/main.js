import './assets/main.css';
import { register } from 'swiper/element/bundle';
import store from './store/store.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

register();

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
