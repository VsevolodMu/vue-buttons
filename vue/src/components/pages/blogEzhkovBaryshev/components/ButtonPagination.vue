<template>
  <div class="slider">
    <button
        class="slider__btn"
        :class="{ 'slider__btn--active': isActive }"
    />
  </div>
</template>

<script>
export default {
  name: "ButtonPagination",
  props: {
    isActive: Boolean
  }
}
</script>

<style scoped lang="less">
.slider {
  display: flex;
  align-content: center;

  &__btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    margin: 0 5px;
    background-color: transparent;
    cursor: pointer;

    &--active {
      background-color: rgb(255, 183, 0);
    }
  }
}
</style>
