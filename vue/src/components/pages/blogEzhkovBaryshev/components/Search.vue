<template>
  <div class = "search-wrapper">
    <div class="search">
      <ul class = "search-list">
        <li class="search-list__items search-list--size search-list__item-margin">
          <h3 class="search-list__location-header">Location</h3>
          <p class="search-list__paragraph--size search-list__location-destination">Where are you going?</p>
        </li>
        <li class="search-list__items search-list--size search-list__item-margin">
          <h3 class="search-list__check-in-header">Check-in</h3>
          <p class="search-list__paragraph--size search-list__check-in-date">Add dates</p>
        </li>
        <li class="search-list__items search-list--size search-list__item-margin">
          <h3 class="search-list__check-out-header">Check-out</h3>
          <p class="search-list__paragraph--size search-list__check-out-date">Add dates</p>
        </li>
        <li class="search-list__items search-list--size search-list__item-margin">
          <h3 class="search-list__guests-header">Guests</h3>
          <p class="search-list__paragraph--size search-list__guests-add">Add guests</p>
        </li>
      </ul>
    </div>

  </div>

</template>


<script>
export default {name: 'HomeSearch'}

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

.search-list__item-margin {
  padding-top: 25px;
}



.search-list--size{
  font-size: 25px;
}


.search-list__paragraph--size{
  margin-top: 5px;
  font-size: 22px;
}

.search-list {
  display: flex;
  list-style: none;
}

.search-list__items:first-child{
  margin-left: 20px;
}

.search-list__items:nth-child(n+2) {
  margin-left: 150px;
}


</style>
