<template>
  <q-card v-for="employee in employees" :key="employee" class="categories-card">
    <q-card-section>
      Name: {{ employee.name }}<br>
      Position: {{ employee.position }}
    </q-card-section>
    <q-card-section>
      <q-btn-dropdown flat label="Change Position" class="full-width">
        <q-card-actions vertical>
          <div class="control-group">
            <input type="text" class="form-control" v-model="newpositions[employee.id - 1]" placeholder="New Position"
              required="required" />
            <p class="help-block text-danger"></p>
          </div>
          <q-btn flat @click="changePosition(employee.id)">Change Position</q-btn>
        </q-card-actions>
      </q-btn-dropdown>
    </q-card-section>
    <q-card-section>
      <q-btn flat @click="deleteMember(employee.id)">Delete Member</q-btn>
    </q-card-section>
  </q-card>
  <q-card class="categories-card">
    <q-card-section>
      Add New Team Member
    </q-card-section>
    <q-card-section>
      <div class="control-group">
        <input type="text" class="form-control" v-model="name" placeholder="Name"
          required="required" />
        <p class="help-block text-danger"></p>
      </div>
      <div class="control-group">
          <input type="text" class="form-control" v-model="position" placeholder="Position"
              required="required" />
          <p class="help-block text-danger"></p>
      </div>
    </q-card-section>
    <q-card-section>
      <q-btn flat @click="createMember">Create Member</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import { getAPI } from '@/axios-api'
export default {
  data () {
    return {
      employees: [],
      name: '',
      position: '',
      newpositions: []
    }
  },
  mounted () {
    getAPI.get('/team/')
      .then(response => {
        this.employees = response.data
      })
      .catch(err => {
        console.log(err)
      })
    for (let i = 0; i < this.employees.length; i++) {
      this.newpositions.append('')
    }
  },
  methods: {
    createMember () {
      getAPI.post('/team/', { name: this.name, position: this.position, id: this.employees.length + 1 }).then(() => {
        this.$router.push({ name: 'admin' })
      }).catch(error => {
        console.log(error)
      })
    },
    deleteMember (id) {
      getAPI.delete('/team/' + id).then(() => {
        getAPI.post('/team-refresh/', { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
        this.$router.push({ name: 'admin' })
      }).catch(error => {
        console.log(error)
      })
    },
    changePosition (id) {
      getAPI.patch('/team/' + id + '/', { position: this.newpositions[id - 1] }).then(() => {
        this.$router.push({ name: 'admin' })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.categories-card {
  background-color: #030c27;
  color: #fdbe33;
  text-align: center;
  width: 280px;
  height: 260px;
  margin: 20px;
}

.q-btn .row {
  margin-left: 0;
  margin-right: 0;
}

.q-btn:hover {
  color: #030c27;
  background-color: #fdbe33;
}
</style>
