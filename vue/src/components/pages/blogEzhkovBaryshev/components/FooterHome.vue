<template>
  <div class="footer">
    <div class="footer-flex">
    <div class="footer-logo">
      <img class="footer-logo__img" src="../images/Logo.svg" alt="Логотип сайта">
      <h2 class = "footer-logo__text" >RoamStay</h2>
      <section class="footer__middle-buttons">
        <ul class="footer-list">
          <li class="footer-list__item footer-list__first">
            <a href="#Check_in" class="footer-list__link">About us</a>
          </li>
          <li class="footer-list__item footer-list__second">
            <a href="#Check_in" class="footer-list__link">Business and groups</a>
          </li>
          <li class="footer-list__item footer-list__third">
            <a href="#Log In" class="footer-list__link">Support</a>
          </li>
          <li class="footer-list__item footer-list__third">
            <a href="#Log In" class="footer-list__link">Responsibility</a>
          </li>
          <li class="footer-list__item footer-list__third">
            <a href="#Log In" class="footer-list__link">Blog</a>
          </li>
        </ul>
      </section>
      <section class="footer__right-buttons">
        <ul class="footer-list">
          <li class="footer-list__item footer-list__first">
            <a href="#Check_in" class="footer-list__link">Social</a>
          </li>
          <li class="footer-list__item footer-list__second">
            <a href="#Check_in" class="footer-list__link">Business and groups</a>
          </li>
          <li class="footer-list__item footer-list__third">
            <a href="#Log In" class="footer-list__link">Language</a>
          </li>
            <li class="footer-list__item header-list__first">
              <button class="footer-list__first-button"/>
            </li>
        </ul>
      </section>
    </div>

    </div>
  </div>
</template>
<style>
.footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  padding: 20px 30px;
  margin-top: 60px;
  background-color: black;
  color: white;
  font-family: "Calibri", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
}
.footer-flex {
  display: flex;
}
.footer-logo {
  display: flex;
  margin-left: 165px;
  margin-bottom: 90px;
}
.footer-logo__img {
  margin-top: 30px;
  height: 40px;
  padding-right: 25px;
}
.footer-logo__text {
  margin-top: 30px;
  color: white;
  font-size: 33px;
}
.footer__middle-buttons{
  background: transparent;
  margin-left: 400px;
}
.footer__right-buttons{
  background: transparent;
  margin-left: 240px;
}
.footer-list {
  list-style-type: none;
}
.footer-list__item:nth-child(n+1) {
  margin-top: 35px;
}
.footer-list__link{
  color: white;
  font-size: 22px;
}
.footer-list__first-button {
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
  &::after{
    font-size: 20px;
    content:'ᐁ';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 60px;
    top: 8px;
  }
}
</style>
<script setup lang="ts">
</script>