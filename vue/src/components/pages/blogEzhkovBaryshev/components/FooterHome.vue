<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer-logo-wrapper">
        <img class="footer__logo-image"
             src="../images/Logo.svg"
             alt="Логотип сайта">
        <h2 class="footer__logo-text">RoamStay</h2>
      </div>
      <section>
        <ul class="footer__panel-list">
          <li><a class="footer__panel-list-link" href="#">About us</a></li>
          <li><a class="footer__panel-list-link" href="#">Business and groups</a></li>
          <li><a class="footer__panel-list-link" href="#">Support</a></li>
          <li><a class="footer__panel-list-link" href="#">Responsibility</a></li>
          <li><a class="footer__panel-list-link" href="#">Blog</a></li>
        </ul>
      </section>
      <section>
        <ul class="footer__social-panel-list social-panel-list">
          <li>
            <a href="#">Social</a>
          </li>
          <li>
            <img
                class="footer__social-panel-list-image"
                src="../images/Facebook-Logo-Transparent-Background-PNG.png"
                alt="Логотип Фейсбука">
            <img
                class="footer__social-panel-list-image"
                src="../images/instagram-icon.jpg"
                alt="Логотип Инстаграмма">
            <img
                class="footer__social-panel-list-image"
                src="../images/twitter-icon.png"
                alt="Логотип Твиттера">
          </li>
          <li>
            <a href="#">Language</a>
          </li>
          <li>
            <button class="footer__social-panel-button"/>
          </li>
        </ul>
      </section>
    </div>
    <section>
      <ul class="footer__information">
        <li>
          <h3 class="logo__text-down-first">⊞ 2021 RoamStay All night reserved</h3>
        </li>
        <li>
          <h3 class="logo__text-down-second">Terms of Service</h3>
        </li>
        <li>
          <h3 class="logo__text-down-third">Privacy Policy</h3>
        </li>
        <li>
          <h3 class="logo__text-down-fourth">+1 665-555-5454</h3>
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped lang="less">

section {
  background-color: transparent;
}

ul li a {
  color: white;
  font-size: 25px;
}

h2, h3 {
  color: white;
}

.footer-wrapper {
  background-color: black;
  margin-top: 200px;
  padding-bottom: 30px;
}

.footer {
  display: flex;

  &-logo-wrapper {
    display: flex;
    margin-left: 190px;
    margin-top: 70px;
  }

  &__logo-image {
    height: 40px;
  }

  &__logo-text {
    font-size: 35px;
    padding-left: 35px;
  }

  &__panel-list {
    list-style-type: none;
    margin-left: 400px;
    margin-top: 80px;

    & li {
      margin-top: 30px;
    }
  }

  &__social {

    &-panel {
      &-list {
        list-style-type: none;
        margin-left: 230px;
        margin-top: 80px;

        &-image {
          height: 40px;
          object-fit: cover;
          background-color: transparent;
          border-radius: 30px;
          padding: 10px;
          border: 1px solid white;
          margin-right: 10px;
        }

        &-image:nth-of-type(2) {
          width: 40px;
        }

        & li {
          margin-top: 30px;
        }
      }

      &-button {
        height: 45px;
        width: 175px;
        border-radius: 20px;
        border-color: white;
        position: relative;
        border-style: solid;
        margin-top: -5px;
        background-color: transparent;
        color: white;

        &::before {
          font-size: 18px;
          content: 'English';
          width: 100%;
          height: 100%;
          position: absolute;
          right: 50px;
          top: 12px;
        }

        &::after {
          font-size: 20px;
          content: 'ᐁ';
          width: 100%;
          height: 100%;
          position: absolute;
          left: 60px;
          top: 8px;
        }
      }
    }
  }

  &__information {
    display: flex;
    margin-top: 60px;
    margin-left: 40px;

    & li {
      &:nth-of-type(n+1) {
        margin-left: 100px;
      }

      &:nth-of-type(2) {
        margin-left: 350px;
      }
    }
  }
}

</style>
<script>
</script>
