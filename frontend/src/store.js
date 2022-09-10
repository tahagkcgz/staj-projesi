import Vuex from 'vuex'
import { getAPI } from './axios-api'

export default new Vuex.Store({
  state: {
    user: { username: '' },
    accessToken: JSON.parse(localStorage.getItem('token')),
    refreshToken: null
  },
  mutations: {
    updateStorage (state, { access, refresh }) {
      state.accessToken = access
      state.refreshToken = refresh
      localStorage.setItem('token', JSON.stringify(access))
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
      localStorage.removeItem('token')
    },
    setUserData (state, userInfo) {
      state.user.username = userInfo.username
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    },
    userData: (state) => state.user
  },
  actions: {
    getUserData (context) {
      return getAPI.get('/api/auth/me/', { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` } }).then((res) => {
        context.commit('setUserData', res.data)
        return Promise.resolve(res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    userLogout (context) {
      if (context.getters.loggedIn) {
        context.commit('destroyToken')
      }
    },
    userLogin (context, userCredentials) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api-token/', {
          username: userCredentials.username,
          password: userCredentials.password
        }).then(response => {
          context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    userRegister (context, userCredentials) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api/auth/register/', {
          username: userCredentials.username,
          email: userCredentials.email,
          password: userCredentials.password,
          password2: userCredentials.password2
        }).then((res) => {
          resolve(res.data)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
})
