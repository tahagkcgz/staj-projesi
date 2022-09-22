<template>
  <div class="wrapper">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Takımımız</h2>
          </div>
          <div class="col-12">
            <router-link to="/">Ana Sayfa</router-link>
            <router-link to="/team">Takımımız</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="container" v-if="accessToken">
        <div class="section-header text-center">
          <p>Takımımız</p>
          <h2>Uzman Ekibimizle Tanışın</h2>
        </div>
        <div class="row">
          <EmployeeCard v-for="employee in employees" :key="employee.id" :employee="employee">
          </EmployeeCard>
        </div>
      </div>
      <div class="container" v-if="!accessToken">
        <div class="section-header text-center">
          <p>Takımımızı Görebilmek İçin</p>
          <h2>Giriş Yapın veya Hesap Oluşturun</h2>
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
import EmployeeCard from '../components/CardContainer.vue'
import { mapState } from 'vuex'
import { getAPI } from '@/axios-api'
export default {
  name: 'team-view',
  components: {
    Footer,
    EmployeeCard,
    TopBar,
    NavBar
  },
  data () {
    return {
      employees: []
    }
  },
  computed: mapState(['accessToken']),
  mounted () {
    getAPI.get('/team/')
      .then(response => {
        this.employees = response.data
      })
      .catch(err => {
        console.log(err)
      })
    document.title = 'Takımımız- Teknik ERP'
  }
}
</script>
