<template>
  <div class="nav-bar">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <router-link to="/" class="navbar-brand">NAME</router-link>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav mr-auto">
            <router-link v-for="route in pagelinks.slice(0, 4)" :key="route" :to=route.path class="nav-item nav-link">{{ route.text }}</router-link>
          </div>
          <div class="ml-auto" v-if="!token">
            <router-link to="/login" class="btn">Giriş Yapın</router-link>
            <router-link to="/register" class="btn">Kayıt Olun</router-link>
          </div>
          <div class="ml-auto" v-if="token">
            <router-link :to="'/user/' + userData.username" class="btn">Hesabım</router-link>
            <router-link to="/logout" class="btn">Çıkış Yapın</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { routes } from '../router/index.js'
export default {
  name: 'nav-bar',
  data () {
    return {
      pagelinks: routes,
      token: ''
    }
  },
  methods: mapActions(['getUserData']),
  created () {
    this.getUserData().catch(() => {})
  },
  computed: mapGetters(['userData']),
  mounted () {
    this.token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
  }
}
</script>
