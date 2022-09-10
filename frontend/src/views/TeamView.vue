<template>
  <div class="wrapper">
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
import Footer from '../components/Footer-comp.vue'
import EmployeeCard from '../components/Card-container.vue'
import { getAPI } from '../axios-api'
import { mapState } from 'vuex'
export default {
  name: 'TeamView',
  components: {
    Footer,
    EmployeeCard
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
    document.title = 'Takımımız- Ata ERP'
  }
}
</script>
