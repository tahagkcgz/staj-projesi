import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/styles/style.css'
import '../public/lib/flaticon/font/flaticon.css'
import '../public/lib/animate/animate.min.css'
import '../public/lib/owlcarousel/assets/owl.carousel.min.css'
import '../public/lib/lightbox/css/lightbox.min.css'
import '../public/lib/slick/slick.css'
import '../public/lib/slick/slick-theme.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!store.getters.loggedInAsAdmin) {
      next({
        name: 'admin-login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(router)
app.use(store)
app.mount('#app')
