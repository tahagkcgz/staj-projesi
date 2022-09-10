<template>
  <div class="wrapper">
    <TopBar></TopBar>
    <NavBar></NavBar>
  </div>
  <router-view />
</template>

<script>
import NavBar from './components/Nav-bar.vue'
import TopBar from '../src/components/Top-bar.vue'
export default {
  components: {
    NavBar,
    TopBar
  }
}
</script>
