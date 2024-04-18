<template>
  <div>
    <div class="body-main">
      <h2 class="apartments-cards-name">Top 10 apartments</h2>
      <div class="apartments">
        <p class="apartments__cards-text">From a room for a night to a loft for as long like, there's a RoamStay for every
          occasion.</p>
        <div class="apartments__slider">
          <button class="apartments__slider-btn-size apartments__slider-btn--left">&lt;</button>
          <button class="apartments__slider-btn-size apartments__slider-btn--right">&gt;</button>
        </div>
      </div>
      <div class="card-list"
      >
        <BodyPriceCard            v-for="(card, index) in getApartmentsCardStore"
                                  :key="index"/>
      </div>
      <div class="text">
        <h2 class="text-logo">Conveniences<br>of our service</h2>
        <p class="text-right-logo">We can host guests on a daily bosis or on a long term bosis, and we can accommodate all
          <br> kinds of travelers (individuals, families, teams, etc.). We can host guests on a daily bosis or on
          <br> a long term bosis, and we can accommodate all kinds of travelers (individuals, families,
        <br> teams, etc.).</p>
      </div>
      <section class="service-information">
        <div class="service-information__card">
          <img class="service-information__card-image" src="../images/image-Photoroom.png-Photoroom.png" alt="Логотип сайта">
          <p class="service-information__card-paragraf">Kitchen with all<br><pre> equipment</pre></p>
        </div>
        <div class="service-information__card">
          <img class="service-information__card-image" src="../images/image-Photoroom.png-Photoroom-2.png" alt="Логотип сайта">
          <p class="service-information__card-paragraf"><br>One-tap WiFi<pre> access</pre></p>
        </div>
        <div class="service-information__card">
          <img class="service-information__card-image" src="../images/image-Photoroom.png-Photoroom-3.png" alt="Логотип сайта">
          <p class="service-information__card-paragraf">Round-the-clock<br><pre> support</pre></p>
        </div>
        <div class="service-information__card">
          <img class="service-information__card-image" src="../images/image-Photoroom.png-Photoroom-4.png" alt="Логотип сайта">
          <p class="service-information__card-paragraf">Request late<br><pre> checkout</pre></p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BodyPriceCard from "@/components/pages/blogEzhkovBaryshev/components/BodyPriceCard.vue";
import {mapGetters} from "vuex";

export default {
  components: {BodyPriceCard},
  computed: {
    ...mapGetters('ApartmentsCardStore', [
      'getApartmentsCardStore'
    ])
  }
}
</script>

<style scoped lang="less">

.body-main {
  height: 2500px;
  width: 100%;
}

.apartments{
  display: flex;

}

.card-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.apartments-cards-name {
  font-size: 70px;
  font-family: SansSerif,serif;
  margin-left: 190px;
  padding-top: 160px;
}
.text{
  display: flex;
  margin-left: 190px;
  padding-top: 160px;
}
.text-logo {
  font-size: 70px;
  font-family: SansSerif,serif;
  display: flex;
}
.text-logo-down {
  font-size: 70px;
  font-family: SansSerif,serif;
  margin-left: 190px;
}
.text-right-logo{
  font-size: 20px;
  margin-left: 208px;
  margin-top: 15px;
  line-height: 35px;
  color: #022E40;
}
.apartments__cards-text  {
  margin-left: 190px;
  padding-top: 10px;
  font-size: 27px;
}
.apartments__slider-btn-size {
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border-color: transparent;
  background: #022E40;
  margin-top: -10px;
  font-size: 35px;
  color: white;
}

.apartments__slider-btn--left {
  margin-left: 410px;
}

.apartments__slider-btn--right {
  margin-left: 25px;
}
.service-information{
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
  margin-left: 110px;
  background: transparent;
  font-size: 20px;
  font-family: Ar,sans-serif;
  &__card{
    height: 330px;
    width:  350px;
    background-color: white;
    &-paragraf{
      margin-left: 120px;

    }
    &:nth-child(1){
      border-top-left-radius: 90px;
    }
    &:nth-child(4){
      border-bottom-right-radius: 90px;
    }
    &-image{
      text-align-all:center;
      margin-left: 140px;
      margin-top: 90px;
    }
  }
}
</style>