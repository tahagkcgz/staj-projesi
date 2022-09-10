<template>
  <div class="nav-bar">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <router-link to="#" class="navbar-brand">NAME</router-link>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link">Ana Sayfa</router-link>
            <router-link to="/about" class="nav-item nav-link">Hakkımızda</router-link>
            <router-link to="/team" class="nav-item nav-link">Takımımız</router-link>
            <router-link to="/contact" class="nav-item nav-link">Bize Ulaşın</router-link>
          </div>
          <div class="ml-auto" v-if="accessToken == null">
            <router-link to="/login" class="btn">Giriş Yapın</router-link> |
            <router-link to="/register" class="btn">Kayıt Olun</router-link>
          </div>
          <div class="ml-auto" v-if="accessToken != null">
            <router-link to="/user" class="btn">Hesabım</router-link> |
            <router-link to="/logout" class="btn">Çıkış Yapın</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Nav-bar',
  computed: mapState(['accessToken'])
}
</script>
