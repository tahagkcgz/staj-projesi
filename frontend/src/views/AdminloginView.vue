<template>
  <div class="wrapper">
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="section-header text-center">
          <h2>Admin Girişi</h2>
        </div>
        <div class="row">
          <div class="col-md-6 offset-3">
            <div class="contact-form login">
              <form @submit.prevent="adminLogin">
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
                <div class="form-group flex flex-center">
                  <button type="submit" class="btn">Giriş Yap</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-login',
  data () {
    return {
      username: '',
      password: '',
      errorstatus: false,
      errormessage: ''
    }
  },
  mounted () {
    document.title = 'Admin Girişi - Teknik ERP'
  },
  methods: {
    adminLogin () {
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password
      }).then(() => {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect)
        } else {
          this.$router.push({ name: 'home' })
        }
      }).catch(() => {
        this.errorstatus = true
        this.errormessage = 'Başarısız giriş'
      })
    }
  }
}
</script>
