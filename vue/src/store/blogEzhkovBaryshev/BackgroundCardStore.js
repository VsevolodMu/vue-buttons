
const state = {
  BackgroundCardStore: [
    {
      image: "https://travel-dom.ru/wp-content/uploads/2019/07/iStock-645374604.jpg"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
    },
    {
      image: "https://mebellka.ru/wp-content/uploads/b/7/5/b7568bf35260cb115edbad2cf0f0bd25.jpeg"
    },
    {
      image: "https://i.pinimg.com/originals/59/e0/9b/59e09b2791980e268d38ef3694be3a6e.jpg"
    },
    {
      image: "https://i.pinimg.com/originals/14/49/f5/1449f501d15e8f7ac7adf4fa54763786.jpg"
    }
  ]
}

const getters = {
  getImages: (state) => state.BackgroundCardStore
}


export default {
  namespaced: true,
  state,
  getters,
}