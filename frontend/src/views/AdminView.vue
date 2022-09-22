<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header elevated style="background-color: #fdbe33">
      <q-toolbar>
        <q-toolbar-title class="toolbar-title">
          Admin Panel
        </q-toolbar-title>
        <q-btn flat to="/" class="toolbar-btn">Home</q-btn>
      </q-toolbar>
    </q-header>
    <AdminSidebar></AdminSidebar>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
export default {
  name: 'admin-view',
  components: { AdminSidebar },
  created () {
    document.title = 'Yönetim Paneli - Teknik ERP'
  }
}
</script>

<style>
.toolbar-title {
  font-size: 2rem;
  margin-left: 20px;
  color: #030f27;
}

.toolbar-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdbe33;
  background-color: #030f27;
}

.q-page-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
