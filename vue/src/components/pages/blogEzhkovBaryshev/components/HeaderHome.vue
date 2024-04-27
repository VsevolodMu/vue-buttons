<template>
  <div class="background-img" :style="cardImage">
    <HeaderNav/>
    <h1 class="slider-header-text">Find Your Best Real Estate</h1>
    <p class="slider-paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et
      <br>
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
    <Search/>
    <div class="buttonPagination__component">
      <div
          v-for="(card, index) in getImages"
          :key="index"
          @click="() => move(index)"
      >
        <ButtonPagination
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
  components: {
    HeaderNav,
    Search,
    ButtonPagination
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapGetters('FlipperCardStore', [
      'getImages'
    ]),
    cardImage() {
      return {backgroundImage: 'url(' + this.getImages[this.currentIndex]['image'] + ')'}
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
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 1025px;
}

.buttonPagination__component {
  display: flex;
  justify-content: center;
  margin-top: 200px;

  &:not(:last-child) {
    margin-right: 25px;
  }
}

.slider {
  &-header-text {
    margin-top: 195px;
    text-align: center;
    font-size: 80px;
    color: white;
    font-family: SansSerif, serif;
  }

  &-paragraph-text {
    margin-top: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
    color: white;
    font-family: SansSerif, serif;
  }
}

</style>
