<template>
  <router-view :employees="employees"/>
</template>

<script>
import { getAPI } from './axios-api'
export default {
  name: 'app',
  data () {
    return {
      employees: []
    }
  },
  mounted () {
    setInterval(() => {
      this.getAccessToken()
    }, 250000)
  },
  methods: {
    getAccessToken () {
      const refreshData = {
        refresh: this.$store.state.refreshToken
      }
      getAPI.post('/api-token-refresh/', refreshData).then(response => {
        this.$store.commit('updateStorage', { access: response.data.access, refresh: this.$store.state.refreshToken })
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
