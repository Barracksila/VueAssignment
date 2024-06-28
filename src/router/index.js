import Vue from 'vue';
import VueRouter from 'vue-router';
import CharacterList from '../components/CharacterList.vue';
import CharacterDetails from '../components/CharacterDetails.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CharacterList },
  { path: '/character/:id', name: 'CharacterDetails', component: CharacterDetails },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;