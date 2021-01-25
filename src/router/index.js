import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register';
import Login from '@/views/Login';
import GlobalFeed from '@/views/GlobalFeed';
import YourFeed from '@/views/YourFeed';
import TagFeed from '@/views/TagFeed';
import Article from '@/views/Article';
import CreateArticle from '@/views/CreateArticle';
import EditArticle from '@/views/EditArticle';
import Settings from '@/views/Settings';
import UserProfile from '@/views/UserProfile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'GlobalFeed',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'YourFeed',
    component: YourFeed
  },
  {
    path: '/tags/:slug',
    name: 'TagFeed',
    component: TagFeed
  },
  {
    path: '/articles/new',
    name: 'CreateArticle',
    component: CreateArticle
  },
  {
    path: '/articles/:slug',
    name: 'Article',
    component: Article
  },
  {
    path: '/articles/:slug/edit',
    name: 'EditArticle',
    component: EditArticle
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/profiles/:slug',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'UserProfileFavorites',
    component: UserProfile
  }
];

const router = new VueRouter({mode: 'history', routes});

export default router;
