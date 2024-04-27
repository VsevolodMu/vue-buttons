<template>
  <div class="search-wrapper">
    <div class="search">
      <ul class="search-list">
        <li class="search-list__items search-list--size search-list__item-margin">
          <h3 class="search-list__location-header">Location</h3>
          <p class="search-list__paragraph--size search-list__location-destination">Where are you going?</p>
        </li>
        <li class="search-list__items search-list--size search-list__item-margin">
          <div class="search-list__left-border-column"></div>
          <h3 class="search-list__check-in-header">Check-in</h3>
          <p class="search-list__paragraph--size search-list__check-in-date">Add dates</p>
        </li>
        <li class="search-list__items search-list--size search-list__item-margin">
          <div class="search-list__left-border-column"></div>
          <h3 class="search-list__check-out-header">Check-out</h3>
          <p class="search-list__paragraph--size search-list__check-out-date">Add dates</p>
        </li>
        <li class="search-list__items search-list--size search-list__item-margin">
          <div class="search-list__left-border-column"></div>
          <h3 class="search-list__guests-header">Guests</h3>
          <p class="search-list__paragraph--size search-list__guests-add">Add guests</p>
        </li>
        <li class="search-list__counter search-list--size">
          <button class="search-list__counter-btn-size search-list__counter-btn--minus">-</button>
          <div class="search-list__counter-value">2</div>
          <button class="search-list__counter-btn-size search-list__counter-btn--plus">+</button>
        </li>
        <li class="search-list__counter-search">
          <button class="search-list__counter-search-btn">
          </button>
        </li>
      </ul>
    </div>

  </div>

</template>


<script>
export default {
  name: 'HomeSearch'
}

</script>

<style scoped lang="less">
.search-wrapper {
  margin-top: 58px;
  width: 1390px;
  height: 130px;
  background: white;
  margin-left: 265px;
  border-radius: 60px;
}

.search-list {
  display: flex;
  list-style: none;

  &__items:first-child {
    margin-left: 20px;
  }

  &__items:nth-child(n+2) {
    margin-left: 150px;
  }

  &__items:nth-child(n+1)::before {
    margin-left: 150px;
  }

  &__left-border-column::before {
    position: absolute;
    width: 3px;
    top: 7px;
    height: 65px;
    left: -35px;
    background: #022E40;
    border-radius: 1px;
    content: "";
  }

  &__counter {
    display: flex;
    margin-left: 50px;
    margin-top: 59px;

    &-btn-size {
      height: 35px;
      width: 35px;
      border-radius: 20px;
      font-size: 25px;
      border-color: transparent;
      margin-right: 20px;
      margin-left: 20px;
    }

    &-search {
      margin-top: 27px;
      margin-left: 17px;

      &-btn {
        background: #D9354B;
        height: 75px;
        width: 75px;
        border-radius: 100%;
        border-color: transparent;
        background-image: url("../images/SearchLoop.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50px 50px;
      }
    }
  }

  &__left-border-column {
    position: relative;
  }

  &__item-margin {
    padding-top: 25px;
  }

  &--size {
    font-size: 25px;
  }

  &__paragraph--size {
    margin-top: 5px;
    font-size: 22px;
  }
}
</style>
