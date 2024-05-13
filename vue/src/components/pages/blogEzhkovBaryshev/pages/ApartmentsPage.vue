<template>
  <div class="apartment">
    <HeaderNav/>
    <div class="apartment__card" :style="cardImage">
      <h2 class="apartment__card-name">
        {{ apartment.name }}
      </h2>
      <p class="apartment__card-size">
        Price: {{ apartment.price }} per night
      </p>
      <p class="apartment__card-size">
        Guests: {{ apartment.guests }}
      </p>
      <p class="apartment__card-size">
        Bedrooms: {{ apartment.bedrooms }}
      </p>
      <p class="apartment__card-size">
        Bathrooms: {{ apartment.bathrooms }}
      </p>
      <p class="apartment__card-size">
        Place: {{ apartment.place }}
      </p>
      <button class="apartment__card-book">BOOK NOW</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    apartment() {
      const apartmentId = this.$route.params.id;
      return this.getApartmentsCardStore[apartmentId];
    },
    cardImage() {
      return { backgroundImage: 'url(' + this.apartment.image + ')' };
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
