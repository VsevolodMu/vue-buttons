<template>
  <div>
    <div class="body-main">
      <div class="search-wrapper-block">
        <h2 class="apartments-cards-name">Top 10 apartments</h2>

        <div class="search-block">
          <form class="search-block__form">
            <input type="text" name="text" class="search-block__text" placeholder="Поиск" v-model="searchRequest">
            <input type="submit" name="submit" class="search-block__submit" value="">
          </form>
        </div>
      </div>

      <div class="social">
        <a href="https://twitter.com/StefCharle" target="_blank">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149103/twitter.svg" alt="">
        </a>
      </div>
      <div class="apartments">
        <p class="apartments__cards-text">From a room for a night to a loft for as long like, there's a RoamStay for
          every
          occasion.</p>
        <router-link :to="{ name: routeNames.ADDAPARTMENTSCARD }">
          <button class="apartments__button-add">Add Card</button>
        </router-link>
        <div class="apartments__slider">
          <button class="apartments__slider-btn-size apartments__slider-btn--left">&lt;</button>
          <button class="apartments__slider-btn-size apartments__slider-btn--right">&gt;</button>
        </div>
      </div>
      <div class="card-list"
      >
        <BodyPriceCard
            v-for="(card, index) in getFilteredCard"
            :key="index"
            :currentIndex="index"
            :cardObject="card"
        />

      </div>
      <div class="text">
        <h2 class="text-logo">Conveniences<br>of our service</h2>
        <p class="text-right-logo">We can host guests on a daily bosis or on a long term bosis, and we can accommodate
          all
          <br> kinds of travelers (individuals, families, teams, etc.). We can host guests on a daily bosis or on
          <br> a long term bosis, and we can accommodate all kinds of travelers (individuals, families,
          <br> teams, etc.).</p>
      </div>
      <section class="service-information">
        <div class="service-information__card">
          <img
              class="service-information__card-image"
              src="../images/image-Photoroom.png-Photoroom.png"
              alt="Логотип сайта">
          <p class="service-information__card-paragraf">Kitchen with all<br> equipment
          </p>
        </div>
        <div class="service-information__card">
          <img
              class="service-information__card-image"
              src="../images/image-Photoroom.png-Photoroom-2.png"
              alt="Логотип сайта">
          <p class="service-information__card-paragraf">One-tap <br> WiFi access
          </p>
        </div>
        <div class="service-information__card">
          <img
              class="service-information__card-image"
              src="../images/image-Photoroom.png-Photoroom-3.png"
              alt="Логотип сайта">
          <p class="service-information__card-paragraf">Round-the-clock<br> support
          </p>
        </div>
        <div class="service-information__card">
          <img
              class="service-information__card-image"
              src="../images/image-Photoroom.png-Photoroom-4.png"
              alt="Логотип сайта">
          <p class="service-information__card-paragraf">Request late<br> checkout
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BodyPriceCard from "@/components/pages/blogEzhkovBaryshev/components/BodyPriceCard.vue";
import {mapGetters} from "vuex";
import {RouteNames} from "@/router/routes";

export default {
  components: {BodyPriceCard},
  data() {
    return {
      searchRequest: ''
    }
  },
  computed: {
    ...mapGetters('ApartmentsCardStore', [
      'getApartmentsCardStore',
      'getFilteredApartmentsCardStore'
    ]),
    getFilteredCard() {
      return this.getFilteredApartmentsCardStore(this.searchRequest)
    },
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">

.body-main {
  height: 100%;
  width: 100%;
}

.apartments {
  display: flex;

  &-cards-name {
    font-size: 70px;
    font-family: SansSerif, serif;
    margin-left: 190px;
    padding-top: 160px;
    width: 600px;
  }

  &__cards-text {
    margin-left: 190px;
    padding-top: 10px;
    font-size: 27px;
  }

  &__slider-btn {
    &--right {
      margin-left: 25px;
    }

    &-size {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      border-color: transparent;
      background: #022E40;
      margin-top: -10px;
      font-size: 35px;
      color: white;
    }
  }

  &__button-add {
    margin-left: 100px;
    margin-top: 30px;
    color: white;
    height: 40px;
    background-color: rgba(217, 53, 75, 0.9);
  }

  &__slider {
    width: 170px;
    display: flex;
    margin-left: 200px;
  }
}

.search {
  &-wrapper-block {
    display: flex;
    margin-left: 80px;
    margin-bottom: 100px;
  }

  &-block {
    width: 1000px;
    margin-top: 180px;

    &__form {
      width: 600px;
      height: 50px;
      display: flex;
      margin: 0 auto;
    }

    &__text {
      width: calc(100% - 54px);
      height: auto;
      background-color: #c1c1c1;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border: 0;
      padding-left: 15px;
    }

    &__submit {
      background: url("https://img.icons8.com/ffffff/search") center center/50% auto no-repeat #D9354B;
      border: 0;
      width: 54px;
      height: auto;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

  }
}

.card-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}


.text {
  display: flex;
  margin-left: 190px;
  padding-top: 160px;

  &-right-logo {
    font-size: 20px;
    margin-left: 208px;
    margin-top: 15px;
    line-height: 35px;
    color: #022E40;
  }

  &-logo {
    font-size: 70px;
    font-family: SansSerif, serif;
    display: flex;

    &-down {
      font-size: 70px;
      font-family: SansSerif, serif;
      margin-left: 190px;
    }
  }
}

.service-information {
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
  margin-left: 110px;
  background: transparent;
  font-size: 20px;
  font-family: Ar, sans-serif;

  &__card {
    height: 330px;
    width: 350px;
    background-color: white;
    line-height: 40px;

    &-paragraf {
      text-align: center;

    }

    &:nth-child(1) {
      border-top-left-radius: 90px;
    }

    &:nth-child(4) {
      border-bottom-right-radius: 90px;
    }

    &-image {
      text-align-all: center;
      margin-left: 140px;
      margin-top: 90px;
    }
  }
}

</style>