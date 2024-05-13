<template>
  <div class="apartment">
    <HeaderNav/>
    <div class="apartment__card" :style="cardImage">
      <h2 class="apartment__card-name">
        {{ getApartmentsCardStore[$route.params.id]['name'] }}
      </h2>
      <p class="apartment__card-size">
        Price: {{ getApartmentsCardStore[$route.params.id]['price'] }} per night
      </p>
      <p class="apartment__card-size">
        Quests: {{ getApartmentsCardStore[$route.params.id]['guests'] }}
      </p>
      <p class="apartment__card-size">
        Bedrooms: {{ getApartmentsCardStore[$route.params.id]['bedrooms'] }}
      </p>
      <p class="apartment__card-size">
        Bathrooms: {{ getApartmentsCardStore[$route.params.id]['bathrooms'] }}
      </p>
      <p class="apartment__card-size">
        Place: {{ getApartmentsCardStore[$route.params.id]['place'] }}
      </p>
      <button class="apartment__card-book">BOOK NOW</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HeaderNav from "@/components/pages/blogEzhkovBaryshev/components/HeaderNav.vue";

export default {
  name: "TourPage",
  components: {
    HeaderNav
  },
  computed: {
    ...mapGetters('ApartmentsCardStore', [
      'getApartmentsCardStore'
    ]),
    cardImage() {
      return {backgroundImage: 'url(' + this.getApartmentsCardStore[this.$route.params.id]['image'] + ')'};
    }
  }
}
</script>

<style scoped lang="less">
.apartment {
  background-color: #88509d;
  display: flex;
  flex-direction: column;
  color: chartreuse;
  height: 100vh;

  &__card {
    margin: 70px 250px 50px;
    height: 400px;
    font-size: 50px;
    padding: 10px 50px;
    flex: 1 1 auto;
    flex-direction: column;
    border-radius: 20px;
    background-size: cover;
    line-height: 130px;

    &-size {
      margin: 0;
      padding: 0;
    }

    &-name {
      color: #D9354B;
      font-size: 148px;
      text-align: center;
    }

    &-book {
      color: chartreuse;
      background: none;
      border: #D9354B solid 3px;
      border-radius: 20px;
      font-size: 48px;
      font-weight: 700;
      width: 30%;
      height: 10%;

      &:hover {
        color: #D9354B;
      }
    }
  }
}
</style>