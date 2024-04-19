
const state = {
  BackgroundCardStore: [
    {
      image: "https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/4/53/756069837119534.jpg"
    },
    {
      image: "https://static4.banki.ru/ugc/9c/bb/d5/6c/10993780.jpg"
    },
    {
      image: "https://s0.rbk.ru/v6_top_pics/media/img/6/75/754678189948756.jpeg"
    },
    {
      image: "https://static.news.ru/photo/1e0b066e-9b27-11ee-a3f5-02420a0000c9_1024.jpg"
    },
    {
      image: "https://b1.m24.ru/c/1926535.jpg"
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