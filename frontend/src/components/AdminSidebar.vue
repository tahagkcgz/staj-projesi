<template>
  <q-drawer show-if-above :width="250" class="color-drawer">
    <q-tab-panels v-model="panel">
      <q-tab-panel name="home">
        <q-list class="nav-list">
          <q-item clickable class="nav-item" @click="panel = 'categories'">
            <q-item-section avatar>
              <q-icon name="book"></q-icon>
            </q-item-section>
            <q-item-section>
              Categories
            </q-item-section>
            <q-item-section avatar>
              <q-icon name="chevron_right"></q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
      <q-tab-panel name="categories">
        <q-list class="nav-list">
          <q-item clickable to="/admin" class="nav-item" @click="panel = 'home'">
            <q-item-section avatar>
              <q-icon name="chevron_left"></q-icon>
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
            <q-item-section avatar>
              <q-icon name="home"></q-icon>
            </q-item-section>
          </q-item>
          <q-item clickable to="/admin/team" class="nav-item">
            <q-item-section avatar>
              <q-icon name="book"></q-icon>
            </q-item-section>
            <q-item-section>
              Team
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </q-drawer>
</template>

<script>
import { ref } from 'vue'
export default {
  data () {
    return {
      panel: ref('home')
    }
  },
  setup () {
    const categoriesOpen = ref(false)
    function toggleCategories () {
      categoriesOpen.value = !categoriesOpen.value
    }
    return {
      categoriesOpen,
      toggleCategories
    }
  }
}
</script>

<style>
.color-drawer {
  background-color: #030f27;
}

.q-tab-panel {
  background-color: #030f27;
}

.nav-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.q-item__section--side {
    align-items: center;
    padding-right: 0;
}

.nav-item {
  width: 100%;
  background-color: #030f27;
  color: #fdbe33;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav-item:first-child {
  margin-top: 0;
}

.nav-item:hover {
  background-color: #fdbe33;
  color: #030f27;
}
</style>
