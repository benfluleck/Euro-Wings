import { createApp } from 'vue';
import App from './App.vue';
import HomePage from '@pages/HomePage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', component: HomePage }];

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);

app.mount('#app');
