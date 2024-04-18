<template>
  <div class="background-img" :style="cardImage">
    <HeaderNav/>
    <h1 class="slider-header-text">Find Your Best Real Estate</h1>
    <p class="slider-paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et
      <br>
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
    <Search/>
    <div class="buttonPagination">
      <div
          @click="() => move(index)"
          v-for="(card, index) in getImages"
          :key="index"
      >
        <ButtonPagination
            class="buttonPagination__component"
            :is-active="index === currentIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPagination from "@/components/pages/blogEzhkovBaryshev/components/ButtonPagination.vue";
import HeaderNav from "@/components/pages/blogEzhkovBaryshev/components/HeaderNav.vue";
import Search from "@/components/pages/blogEzhkovBaryshev/components/Search.vue";
import {mapGetters} from "vuex";

export default {
  name: "HeaderHome",
  components: {HeaderNav, Search, ButtonPagination},
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapGetters('BackgroundCardStore' [
      'getImages'
    ]),
    cardImage() {
      return { backgroundImage: 'url(' + this.getImages[this.currentIndex]['image'] + ')' }
    }
  },
  methods: {
    move(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped lang="less">
.background-img {
  background-image: url(../images/HeaderSliderImgFirst.jpg);
  width: 100%;
  height: 1025px;
}

.buttonPagination {
  display: flex;
  justify-content: center;
  margin-top: 200px;

  &__component:not(:last-child) {
    margin-right: 25px;
  }
}

.slider-header-text {
  margin-top: 195px;
  text-align: center;
  font-size: 80px;
  color: white;
  font-family: SansSerif, serif;
}

.slider-paragraph-text {
  margin-top: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 25px;
  color: white;
  font-family: SansSerif, serif;
}
</style>
