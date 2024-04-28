<template>
  <div class="footer-wrapper">
    <div class = "footer">
      <img class="logo-image" src="../images/Logo.svg" alt="Логотип сайта">
      <h2 class="association-name">RoamStay</h2>
      <section class="middle-buttons">
        <ul class="right-list">
          <li class="right-footer__item list__first">
            <a href="#Check_in" class="right__link">About us</a>
          </li>
          <li class="right-footer__item list__second">
            <a href="#Check_in" class="right__link">Business and groups</a>
          </li>
          <li class="right-footer__item list__third">
            <a href="#Log In" class="right__link">Support</a>
          </li>
          <li class="right-footer__item list__third">
            <a href="#Log In" class="right__link">Responsibility</a>
          </li>
          <li class="right-footer__item list__third">
            <a href="#Log In" class="right__link">Blog</a>
          </li>
        </ul>
      </section>
      <section class="right-buttons">
        <ul class="right-list">
          <li class="right-footer__item list__first">
            <a href="#Check_in" class="right__link">Social</a>
          </li>
          <li class="right-footer__item list__second">
            <img class="logo-image" src="../images/Facebook-Logo-Transparent-Background-PNG.png"
                 alt="Логотип сайта">
            <img class="logo-image" src="../images/instagram-icon.jpg" alt="Логотип сайта">
            <img class="logo-image" src="../images/twitter-icon.png" alt="Логотип сайта">
          </li>
          <li class="right-footer__item list__third">
            <a href="#Log In" class="right__link">Language</a>
          </li>
          <li class="right-footer__item list__first">
            <button class="special__first-button"/>
          </li>
        </ul>
      </section>
    </div>
      <section class="down-buttons">
        <ul class="right-list-down" style="display: flex; flex-direction: row;">
          <li>
            <h3 class="logo__text-down">⊞ 2021 RoamStay All night reserved</h3>
          </li>
          <li>
            <h3 class="terms-service">Terms of Service</h3>
          </li>
          <li>
            <h3 class="privacy-policy">Privacy Policy</h3>
          </li>
          <li>
            <h3 class="number">+1 665-555-5454</h3>
          </li>
        </ul>
      </section>
  </div>
</template>
<style>

.footer-wrapper {
  background-color: black;
  padding: 20px 30px;
}

.footer {
  margin-left: 165px;
  margin-bottom: 90px;
  display: flex;
}

.logo-image {
  margin-top: 30px;
  height: 40px;
  padding-right: 25px;
}

.association-name {
  margin-top: 30px;
  color: white;
  font-size: 33px;
}

.logo__text-down {
  margin-top: 1px;
  color: white;
  font-size: 17px;
}

.terms-service {
  margin-top: 1px;
  color: white;
  font-size: 17px;
  margin-left: 339px;
}

.privacy-policy {
  margin-top: 1px;
  color: white;
  font-size: 17px;
  margin-left: 68px;
}

.number {
  margin-top: 1px;
  color: white;
  font-size: 17px;
  margin-left: 140px;
}

.middle-buttons {
  background: transparent;
  margin-left: 400px;
}

.right-buttons {
  background: transparent;
  margin-left: 240px;
}

.right-list {
  list-style-type: none;

  &-down {
    display: flex;
  }
}

.right-footer__item:nth-child(n+1) {
  margin-top: 35px;
}

.right__link {
  color: white;
  font-size: 22px;
}

.down-buttons {
  display: flex;
  background: transparent;
  margin-top: -10px;
  margin-left: 115px;
}

.special__first-button {
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
</style>