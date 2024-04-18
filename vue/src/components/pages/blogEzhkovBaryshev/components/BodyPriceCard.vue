<template>
  <div class="card">
    <div class="card__plate">
      <h4 class="card__plate-text">
        Starting at
      </h4>
      <div class="card__plate-paragraph">
        <p class="card__plate-paragraph-price">
          $157
        </p>
        <p class="card__plate-paragraph-value">
          usd/Night
        </p>
      </div>
    </div>
    <div class="card__info">
      <div class="card__info-name">
        Trejo Beautiful Escape
      </div>
      <div class="card__info-location">
        Mexico Greenway 21 k
      </div>
      <div class="card__info-rooms">
        4 Guests | 2 Bedrooms | 2 Bathrooms
      </div>
    </div>
  </div>
</template>

<script>
export default {name: 'BodyPriceCard'}
</script>

<style scoped lang="less">
.card {
  height: 425px;
  width: 480px;
  background-image: url("https://sun9-30.userapi.com/impg/YQ0xW6F1GkV2-Yn6lO9VBlVJUfvKMQNZuspQQQ/8wUYBaP2IgA.jpg?size=1080x967&quality=95&sign=367cdc981841c1a936d18cabdca30e6f&type=album");
  background-position: center;
  background-size: 100%;
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
  font-family: SansSerif,serif;
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
