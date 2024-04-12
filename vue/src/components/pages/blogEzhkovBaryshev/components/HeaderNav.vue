<template>
  <header class="header">
    <div class="header__flex">
      <div class="header__logo">
        <img class="header__logo--img" src="../images/Logo.svg" alt="Логотип сайта">
        <h2>RoamStay</h2>
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
export default {name: 'HomePage'}
</script>

<style scoped lang="less">


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

.header__right-buttons {
  background: transparent;
  margin-top: 30px;
}

.header-list {
  list-style-type: none;
  display: flex;
}

.header-list__first {
  padding-right: 32px;
}

.header-list__first-button {
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


.header-list__link {
  font-size: 25px;
  color: white;
}

.header-list__second {
  padding-right: 60px;
}


.header-list__third {
  padding-right: 22px;
}

.header-list__second-button {
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

.header-list__fourth {
  padding-right: 45px;
}

.header-list__fifth {
  margin-top: -15px;
}

.header-list__menu-symbol {
  font-size: 50px;
}

.header__line {
  height: 1px;
  margin-top: 20px;
  background-color: white;

}

</style>
