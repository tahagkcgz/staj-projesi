<template>
  <div class="log">
  </div>
</template>

<script>
export default {
  name: 'logout-view',
  created () {
    this.$store.dispatch('userLogout')
      .then(() => {
        this.$router.push({ name: 'home' })
      })
  }
}
</script>

<style>

</style>
