import axios from "axios";

const state = {
  apartmentsCardStorage: []
}

const getters = {
  getApartmentsCardStore: state => state.apartmentsCardStorage/*
  getFilteredApartmentsCardStore: state => finder => state.apartmentsCardStorage.filter(apartmentsCardStorage => apartmentsCardStorage.name.toLowerCase().includes(finder.toLowerCase()))*/
}
const mutations = {
  setSmallCard: (state, payload) => {
    state.apartmentsCardStorage = payload
  }
}

const actions = {
  loadSmallCard: ({commit}, payload) => {
    axios.get('http://localhost:3000/apartmentsCardStorage', {
      params: {
        name: payload
      }
    })
      .then((response) => {
        commit('setSmallCard', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('finally')
      })
  },
  loadSmallCardById: ({commit}, payload) => {
    axios.get(`http://localhost:3000/apartmentsCardStorage/${payload}`)
      .then((response) => {
        commit('setSmallCard', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('finally')
      })
  },
  addSmallCard: ({dispatch}, newCard) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/apartmentsCardStorage', newCard)
        .then((response) => {
          console.log(response.data)
          dispatch('loadSmallCard')
          resolve(response.data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
        .finally(() => {
          console.log('finally')
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
