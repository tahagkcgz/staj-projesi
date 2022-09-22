import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    text: 'Ana Sayfa'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    text: 'Hakkımızda'
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/TeamView.vue'),
    text: 'Takımımız'
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    text: 'Bize Ulaşın'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue'),
    text: 'Kayıt Olun'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    text: 'Giriş Yapın'
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    component: () => import('@/views/AdminloginView.vue'),
    text: 'Admin Girişi'
  },
  {
    path: '/user/:name',
    name: 'user',
    component: () => import('@/views/UserView.vue'),
    text: 'Hesabım'
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/LogoutView.vue'),
    text: 'Çıkış Yapın'
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      requiresAdmin: true
    },
    component: () => import('@/views/AdminView.vue'),
    text: 'Yönetim Paneli',
    children: [
      {
        path: 'team',
        name: 'manage-team',
        component: () => import('@/views/AdminTeam.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
export { routes }
