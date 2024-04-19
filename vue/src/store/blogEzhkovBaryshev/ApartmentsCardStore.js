const state = {
  ApartmentsCardStoreData: [
    {
      id: 1,
      name: "Trejo Beautiful Escape",
      price: 175,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      place: "Mexico Greenway 21 k",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 2,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 3,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 4,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 5,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 6,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 4,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 5,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      id: 6,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    }
  ]
}

const getters = {
  getApartmentsCardStore: state => state.ApartmentsCardStoreData,
  getFilteredApartmentsCardStore: state => finder=> state.ApartmentsCardStoreData.filter(ApartmentsCardStore => ApartmentsCardStore.name.toLowerCase().includes(finder.toLowerCase()))
}
const mutations = {
  addSmallCard: (state, newCard) => {
    state.ApartmentsCardStoreData.push(newCard)
  }
}
const actions = {
  addSmallCard: ({commit}, newCard) => {
    commit('addSmallCard', newCard)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}