<template>
<div class="slider">
  <button v-for="(image, index) in images" :key="index" class="slider__button">4325345{{index}}</button>
</div>
</template>

<script>
export default {
  name: 'ButtonPagination',
  props: ['images'],
  methods: {
    handleClick(index) {
      this.$emit('change-index', index);
    }
  }
}
</script>

<style scoped lang="less">
.slider{
  display: flex;
  align-content: center;
}
</style>
