<template>
  <div class="wrapper">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Hoşgeldiniz {{ userData.username }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="container">
        <div class="section-header text-center">
          <h2>Email Adresiniz: {{ userData.email }}</h2>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import TopBar from '../components/TopBar.vue'
import Footer from '../components/FooterComp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'user-view',
  components: {
    Footer,
    TopBar,
    NavBar
  },
  methods: mapActions(['getUserData']),
  created () {
    this.getUserData().catch(() => {})
  },
  computed: mapGetters(['userData']),
  mounted () {
    document.title = 'Hesap Bilgilerim - Teknik ERP'
  }
}
</script>
