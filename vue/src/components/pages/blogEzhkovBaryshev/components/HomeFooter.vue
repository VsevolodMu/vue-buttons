<template>
  <div class="footer">
    <div class="header__flex">
    <div class="header__logo">
      <img class="header__logo--img" src="../images/Logo.svg" alt="Логотип сайта">
      <h2>RoamStay</h2>
    </div>

    </div>
  </div>
</template>
<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 20px 30px;
  margin-top: 60px;
  background-color: black;
  color: white;
  font-family: "Calibri", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.header__flex {
  display: flex;
}
.header__logo {
  display: flex;
  margin-left: 190px;
  margin-top: 38px;
}
.header__logo--img {
  height: 40px;
  padding-right: 25px;
}
</style>
<script setup lang="ts">
</script>