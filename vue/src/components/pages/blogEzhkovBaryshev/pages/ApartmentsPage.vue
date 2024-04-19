<template>
  <div class="tour island-styles">
    <HeaderNav/>
    <div class="tour__card" :style="cardImage">
      <h2 class="tour__card__title">
        {{ getApartmentsCardStore[$route.params.id]['name'] }}
      </h2>
      <p class="tour__card__rating">
        Price: {{ getApartmentsCardStore[$route.params.id]['price'] }} per person
      </p>
      <p class="tour__card__price">
        Quests: ${{ getApartmentsCardStore[$route.params.id]['guests'] }}
      </p>
      <p class="tour__card__price">
        Bedrooms: ${{ getApartmentsCardStore[$route.params.id]['bedrooms'] }}
      </p>
      <p class="tour__card__price">
        Bathrooms: ${{ getApartmentsCardStore[$route.params.id]['bathrooms'] }}
      </p>
      <p class="tour__card__price">
        Place: ${{ getApartmentsCardStore[$route.params.id]['place'] }}
      </p>
      <button class="tour__card__book">BOOK NOW</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HeaderNav from "@/components/pages/blogEzhkovBaryshev/components/HeaderNav.vue";
export default {
  name: "TourPage",
  components: {HeaderNav},
  computed: {
    ...mapGetters('ApartmentsCardStore', [
      'getApartmentsCardStore'
    ]),
    cardImage() {
      return { backgroundImage: 'url(' + this.getApartmentsCardStore[this.$route.params.id]['image'] + ')' };
    }
  }
}
</script>

<style scoped lang="less">
.tour {
  padding: 20px 20px;
  height: 100vh;
  background-color: #88509d;
  display: flex;
  flex-direction: column;
  &__card {
    margin-top: 20px;
    padding: 10px 50px;
    flex: 1 1 auto;
    flex-direction: column;
    border-radius: 20px;
    background-size: cover;
    line-height: 130px;
    &__title {
      color: #fff;
      font-size: 148px;
      text-align: center;
    }
    &__rating {
      color: #fff;
      font-size: 96px;
    }
    &__price {
      color: #fff;
      font-size: 96px;
    }
    &__book {
      background: none;
      color: #fff;
      border: #fff solid 3px;
      border-radius: 20px;
      font-size: 48px;
      font-weight: 700;
      width: 30%;
      height: 10%;
      &:hover {
        background: #fff;
        color: #1a1e18;
      }
    }
  }
}
</style>