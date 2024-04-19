<template>
  <RouterLink :to="{ name: routeNames.APARTMENTSPAGE, params: { id: currentIndex } }">
    <div class="card" :style="cardImage">
      <div class="card__plate">
        <h4 class="card__plate-text">
          Starting at
        </h4>
        <div class="card__plate-paragraph">
          <p class="card__plate-paragraph-price">
            ${{ price }}
          </p>
          <p class="card__plate-paragraph-value">
            usd/Night
          </p>
        </div>
      </div>
      <div class="card__info">
        <div class="card__info-name">
          {{ name }}
        </div>
        <div class="card__info-location">
          {{ place }}
        </div>
        <div class="card__info-rooms">
          {{ guests + ' Guests | ' + bedrooms + ' Bedrooms | ' + bathrooms + ' Bathrooms ' }}
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
    cardArray: {
      type: Array,
      required: 'true'
    },
    id: {
      type: Number,
      require: 'true'
    },
    name: {
      type: String,
      require: 'true'
    },
    price: {
      type: Number,
      require: 'true'
    },
    guests: {
      type: Number,
      require: 'true'
    },
    bedrooms: {
      type: Number,
      require: 'true'
    },
    bathrooms: {
      type: Number,
      require: 'true'
    },
    place: {
      type: String,
      require: 'true'
    },
    image: {
      type: String,
      require: 'true',
    }
  },
  computed: {
    routeNames() {
      return RouteNames
    },
    cardImage() {
      return {backgroundImage: 'url(' + this.image + ')'}
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
