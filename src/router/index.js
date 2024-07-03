import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/pages/index.vue'; // Certifique-se de que o caminho está correto

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
  ]
});

export default router;
