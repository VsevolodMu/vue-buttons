<template>
  <div class="footer">
    <div class="footer-flex">
    <div class="footer-logo">
      <img class="footer-logo--img" src="../images/Logo.svg" alt="Логотип сайта">
      <h2 class = "footer-logo-text" >RoamStay</h2>
      <section class="footer__middle-buttons">
        <ul class="header-list">
          <li class="header-list-item header-list__first">
            <a href="#Check_in" class="header-list__link">About us</a>
          </li>
          <li class="header-list-item header-list__second">
            <a href="#Check_in" class="header-list__link">Business and groups</a>
          </li>
          <li class="header-list-item header-list__third">
            <a href="#Log In" class="header-list__link">Support</a>
          </li>
          <li class="header-list-item header-list__third">
            <a href="#Log In" class="header-list__link">Responsibility</a>
          </li>
          <li class="header-list-item header-list__third">
            <a href="#Log In" class="header-list__link">Blog</a>
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
  margin-bottom: 114px;
}
.footer-logo--img {
  margin-top: 30px;
  height: 40px;
  padding-right: 25px;
}
.footer-logo-text {
  margin-top: 30px;
  color: white;
  font-size: 33px;
}
.footer__middle-buttons{
  background: transparent;
  margin-left: 400px;
}
.header-list {
  list-style-type: none;
}
.header-list-item:nth-child(n+1) {
  margin-top: 35px;
}
.header-list__link{
  color: white;
  font-size: 22px;
}
</style>
<script setup lang="ts">
</script>