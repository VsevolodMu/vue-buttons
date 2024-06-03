import axios from "axios";

const state = {
  flipperCardStore: []
};

const getters = {
  getImages: (state) => state.flipperCardStore
};

const mutations = {
  setImages: (state, payload) => {
    state.flipperCardStore = payload;
  }
};

const actions = {
  loadImages: ({ commit }) => {
    axios.get('http://localhost:3000/flipperCardStorage')
      .then((response) => {
        commit('setImages', response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('finally');
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
