const state = {
  ApartmentsCardStore: [
    {
      id: 1,
      name: "Trejo Beautiful Escape",
      price: 175,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      place: "Mexico Greenway 21 k",
    },
    {
      id: 2,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
    },
    {
      id: 3,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
    },
    {
      id: 4,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
    },
    {
      id: 5,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
    },
    {
      id: 6,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
    },
    {
      id: 4,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
    },
    {
      id: 5,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
    },
    {
      id: 6,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
    }
  ]
}

const getters = {
  getApartmentsCardStore: state => state.ApartmentsCardStore
}

export default {
  namespaced: true,
  state,
  getters
}