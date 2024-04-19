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
      image: "https://skyview.ru/upload/resize_cache/iblock/f49/1148_700_1/pve10j7i8j7pd3lgrip8ogubdyb9m9dr.webp"
    },
    {
      id: 2,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
      image: "https://s7.stc.all.kpcdn.net/family/wp-content/uploads/2022/11/top-chto-takoe-apartamenty-960x540-1-960x540.jpg"
    },
    {
      id: 3,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://novostroycity.ru/uploads/journal_entries/1602508947.jpg"
    },
    {
      id: 4,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
      image: "https://www.palladaran.ru/uploads/images/apartamenty-v-gostinice.jpg"
    },
    {
      id: 5,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://content.cdn-cian.ru/realty/articles/content/36585/3982790.jpg"
    },
    {
      id: 6,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://mainadmin.novostroyki.shop/media/imagemanager/43242_ee445a56ae509627ddd968ecef5c63f1.jpg"
    },
    {
      id: 4,
      name: "Super Sea",
      price: 225,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      place: "Atlanta Sorich 11 a",
      image: "https://design.pibig.info/uploads/posts/2023-03/1678914150_design-pibig-info-p-apartamenti-s-terrasoi-dizain-instagram-21.jpg"
    },
    {
      id: 5,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://giak.ru/wp-content/uploads/2020/03/72d723c7749a098b2dc44323a43d8113.jpg"
    },
    {
      id: 6,
      name: "Bomj Edition",
      price: 150,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      place: "Italy Rukshwell 7 d",
      image: "https://design.pibig.info/uploads/posts/2023-03/1678914161_design-pibig-info-p-apartamenti-s-terrasoi-dizain-instagram-2.jpg"
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