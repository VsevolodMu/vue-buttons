<template>
  <header class="header">
    <div class="header__flex">
      <div class="header__logo">
        <img class="header__logo--img" src="../images/Logo.svg" alt="Логотип сайта">
        <router-link :to="{ name: routeNames.HOMEPAGEEZHKOVBARYSHEV }">
          <h2>RoamStay</h2>
        </router-link>
      </div>
      <section class="header__right-buttons">
        <ul class="header-list">
          <li class="header-list__first">
            <button class="header-list__first-button"/>
          </li>
          <li class="header-list__second">
            <a href="#Check_in" class="header-list__link">Check in</a>
          </li>
          <li class="header-list__third">
            <a href="#Log In" class="header-list__link">Log In</a>
          </li>
          <li class="header-list__fourth">
            <button class="header-list__second-button"/>
          </li>
          <li class="header-list__fifth">
            <a href="#Menu" class="header-list__link header-list__menu-symbol">☰</a>
          </li>
        </ul>
      </section>
    </div>

    <div class="header__line">
    </div>

  </header>

</template>

<script>
import {RouteNames} from "@/router/routes";

export default {
  name: 'HeaderNav',
  computed: {
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">

.header {

  &__line {
    height: 1px;
    margin-top: 20px;
    background-color: white;
  }

  &__flex {
    display: flex;
  }

  &__logo {
    display: flex;
    margin-left: 190px;
    margin-top: 38px;

    &--img {
      height: 40px;
      padding-right: 25px;
    }
  }

  &__right-buttons {
    background: transparent;
    margin-top: 30px;
  }

  &-list {
    list-style-type: none;
    display: flex;

    &__first {
      padding-right: 32px;

      &-button {
        height: 45px;
        width: 80px;
        margin-left: 725px;
        border-radius: 20px;
        border-color: white;
        position: relative;
        border-style: solid;
        margin-top: -5px;
        color: white;
        background: transparent;

        &::before {
          font-size: 18px;
          content: 'EN ᐁ';
          width: 100%;
          height: 100%;
          position: absolute;
          right: 0;
          top: 8px;
        }
      }
    }

    &__link {
      font-size: 25px;
      color: white;
    }

    &__second {
      padding-right: 60px;
    }

    &__third {
      padding-right: 22px;
    }

    &__second-button {
      margin-top: -15px;
      height: 60px;
      width: 136px;
      border-radius: 30px;
      position: relative;
      border-style: none;
      background: #D9354B;

      &::before {
        font-size: 24px;
        color: white;
        content: 'Sign up';
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 14px;
      }
    }

    &__fourth {
      padding-right: 45px;
    }

    &__fifth {
      margin-top: -15px;
    }

    &__menu-symbol {
      font-size: 50px;
    }
  }
}
</style>
