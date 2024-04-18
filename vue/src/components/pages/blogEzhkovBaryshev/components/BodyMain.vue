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
      <div class="text">
        <h2 class="text-logo">Conveniences<br>of our service</h2>
        <h2 class="text-right-logo">We can host guests on a daily bosis or on a long term bosis, and we can accommodate all
          <br> kinds of travelers (individuals, families, teams, etc.). We can host guests on a daily bosis or on
          <br> a long term bosis, and we can accommodate all kinds of travelers (individuals, families,
        <br> teams, etc.).</h2>
      </div>
    </div>
    <BodyPriceCard/>
  </div>
</template>

<script>
import BodyPriceCard from "@/components/pages/blogEzhkovBaryshev/components/BodyPriceCard.vue";

export default {
  components: {BodyPriceCard}
}
</script>

<style scoped lang="less">

.body-main {
  height: 1880px;
  width: 100%;
}

.apartments{
  display: flex;

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

</style>