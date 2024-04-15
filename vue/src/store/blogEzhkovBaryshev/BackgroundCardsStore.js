export default {
  namespaced: true,
  state: {
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png",
    ],
    currentIndex: 0
  },
  getters: {
    getImages: state => state.currentIndex,
    getCurrentIndex: state => state.currentIndex,
    currentImage: state => state.images[state.currentIndex]
  },

  mutations: {
  },

  actions: {
  }
}
