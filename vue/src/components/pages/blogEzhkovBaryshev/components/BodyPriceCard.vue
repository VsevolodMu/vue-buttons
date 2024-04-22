<template>
  <RouterLink :to="{ name: routeNames.APARTMENTSPAGE, params: { id: currentIndex } }">
    <div class="card" :style="cardImage">
      <div class="card__plate">
        <h4 class="card__plate-text">
          Starting at
        </h4>
        <div class="card__plate-paragraph">
          <p class="card__plate-paragraph-price">
            ${{ cardObject.price }}
          </p>
          <p class="card__plate-paragraph-value">
            usd/Night
          </p>
        </div>
      </div>
      <div class="card__info">
        <div class="card__info-name">
          {{ cardObject.name }}
        </div>
        <div class="card__info-location">
          {{ cardObject.place }}
        </div>
        <div class="card__info-rooms">
          {{ cardObject.guests + ' Guests | ' + cardObject.bedrooms + ' Bedrooms | ' + cardObject.bathrooms + ' Bathrooms ' }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>

import {RouteNames} from "@/router/routes";

export default {
  name: 'BodyPriceCard',
  props: {
    currentIndex: {
      type: Number,
      required: 'true'
    },
    cardObject: {
      type: Object,
      required: 'true'
    }
  },
  computed: {
    routeNames() {
      return RouteNames
    },
    cardImage() {
      return {backgroundImage: 'url(' + this.cardObject.image + ')'}
    }
  }
}

</script>

<style scoped lang="less">
.card {
  margin-left: 50px;
  margin-bottom: 200px;
  height: 425px;
  width: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  color: rgba(255, 255, 255, 0.8);

  &__plate {
    width: 190px;
    height: 83px;
    background: #D9354B;
    border-bottom-right-radius: 30px;

    &-text {
      font-size: 18px;
      padding-left: 13px;
      padding-top: 10px;
      color: rgba(255, 255, 255, 0.8);
    }

    &-paragraph {
      display: flex;

      &-price {
        font-size: 26px;
        margin-top: 4px;
        padding-left: 15px;
        width: 60px;
      }

      &-value {
        margin-top: 7px;
        font-size: 21px;
      }
    }
  }
}

.card__info {
  margin-top: 370px;
  color: #022E40;
  font-size: 23px;
  font-family: SansSerif, serif;

  &-location {
    margin-top: 5px;
  }

  &-name {
    font-size: 35px;
  }

  &-rooms {
    margin-top: 15px;
  }

}

</style>
