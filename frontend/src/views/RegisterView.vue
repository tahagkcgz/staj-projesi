<template>
  <div class="wrapper">
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <p>Ailemizin bir parçası olmak için</p>
          <h2>Kayıt Olun</h2><br>
          <p v-if="!passwordEquality" class="h3 mb-3 font-weight-normal text-center">Şifre Onayı Başarısız - lütfen doğru şifreyi girin.</p>
        </div>
        <div class="row">
          <div class="col-md-6 offset-3">
            <div class="contact-form">
              <form @submit.prevent="register()">
                <div class="form-group">
                  <input type="text" name="username" id="user" v-model="credentials.username" class="form-control"
                    placeholder="Kullanıcı Adı">
                </div><br>
                <div class="form-group">
                  <input type="email" name="email" id="mail" v-model="credentials.email" class="form-control"
                    placeholder="Email Adresi">
                </div><br>
                <div class="form-group">
                  <input type="password" name="password" id="pass" v-model="credentials.password" class="form-control"
                    placeholder="Şifre">
                </div><br>
                <div class="form-group">
                  <input type="password" name="password2" id="pass2" v-model="credentials.password2" class="form-control"
                    placeholder="Şifre(tekrar)">
                </div><br>
                <div class="form-group">
                  <button type="submit" class="btn" :disabled="!passwordEquality">Kayıt Ol</button>
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
  name: 'RegisterView',
  components: {
    Footer
  },
  data () {
    return {
      credentials: {
        username: '',
        email: '',
        password: '',
        password2: ''
      },
      error: {
        message: ''
      }
    }
  },
  mounted () {
    document.title = 'Kayıt Ol - Ata ERP'
  },
  methods: {
    register () {
      this.$store.dispatch('userRegister', this.credentials).then(() => {
        this.$router.push({ name: 'login' })
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    passwordEquality () {
      if (this.credentials.password === this.credentials.password2) return true
      else return false
    }
  }
}
</script>
