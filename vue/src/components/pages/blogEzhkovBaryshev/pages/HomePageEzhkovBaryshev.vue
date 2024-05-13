<template>
  <div>
    <HeaderHome/>
    <BodyMain/>
    <FooterHome/>
  </div>
</template>

<script>

import HeaderHome from "@/components/pages/blogEzhkovBaryshev/components/HeaderHome.vue";
import FooterHome from "@/components/pages/blogEzhkovBaryshev/components/FooterHome.vue";
import BodyMain from "@/components/pages/blogEzhkovBaryshev/components/BodyMain.vue";

export default {
  name: "HomePage",
  components: {
    HeaderHome,
    FooterHome,
    BodyMain}
}
</script>

<style scoped lang="less">
</style>
