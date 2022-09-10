import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/styles/style.css'
import '../lib/flaticon/font/flaticon.css'
import '../lib/animate/animate.min.css'
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/lightbox/css/lightbox.min.css'
import '../lib/slick/slick.css'
import '../lib/slick/slick-theme.css'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
