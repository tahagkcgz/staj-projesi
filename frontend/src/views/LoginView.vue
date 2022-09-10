<template>
  <div class="wrapper">
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <p>Sitemizi kullanmaya devam etmeden önce</p>
          <h2>Giriş Yapın</h2>
        </div>
        <div class="row">
          <div class="col-md-6 offset-3">
            <div class="contact-form">
              <form @submit.prevent="login()">
                <div class="form-group">
                  <input type="text" name="username" id="user" v-model="username" class="form-control"
                    placeholder="Kullanıcı Adı">
                </div><br>
                <div class="form-group">
                  <input type="password" name="password" id="pass" v-model="password" class="form-control"
                    placeholder="Şifre">
                </div><br>
                <div v-if="errorstatus" class="alert alert-danger">
                  {{ errormessage }}
                </div>
                <div class="form-group">
                  <button type="submit" class="btn">Giriş Yap</button>
                </div>
                <div>
                  <router-link to="/register">Bir hesabınız yok mu? Kayıt Olun</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer-comp.vue'
export default {
  name: 'LoginView',
  components: {
    Footer
  },
  data () {
    return {
      username: '',
      password: '',
      errorstatus: false,
      errormessage: ''
    }
  },
  mounted () {
    document.title = 'Giriş Yap - Ata ERP'
  },
  methods: {
    login () {
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push({ name: 'home' })
      }).catch(() => {
        this.errorstatus = true
        this.errormessage = 'Verilen Bilgilerle Giriş Yapılamadı. Lütfen Tekrar Deneyin.'
      })
    }
  }
}
</script>

<style>

</style>
