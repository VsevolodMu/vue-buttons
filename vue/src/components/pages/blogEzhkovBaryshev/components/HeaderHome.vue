<template>
  <div class="background-img">
    <HeaderNav/>
    <h1 class = "slider-header-text">Find Your Best Real Estate</h1>
    <p class = "slider-paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      <br>
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
    <Search/>
    <ButtonPagination/>
  </div>
</template>

<script>
import ButtonPagination from "@/components/pages/blogEzhkovBaryshev/components/ButtonPagination.vue";
import HeaderNav from "@/components/pages/blogEzhkovBaryshev/components/HeaderNav.vue";
import Search from "@/components/pages/blogEzhkovBaryshev/components/Search.vue";

export default {
  components: {ButtonPagination, HeaderNav, Search },
}
</script>

<style scoped lang="less">
.background-img {
  background-image: url(../images/HeaderSliderImgFirst.jpg);
  width: 100%;
  height: 1025px;
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
