<template>
  <div class="wrapper">
    <div class="page-header">
      <div class="container">
        <div class="section-header text-center">
          <h1>Hoşgeldin, {{ userData.username }}</h1>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer-comp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Footer
  },
  methods: mapActions(['getUserData']),
  created () {
    this.getUserData().catch(() => {})
  },
  computed: mapGetters(['userData'])
}
</script>
