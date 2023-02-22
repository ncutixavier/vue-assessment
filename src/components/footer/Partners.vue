<template>
  <div class="partner d-flex justify-space-between align-center">
    <div class="partner-image" v-for="i in 5" :key="i">
      <img :src="require(`@/assets/images/partners/partner-${i}.png`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "partners_",
};
</script>

<style lang="scss">
.partner {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 40px 0;
  margin: 20px 0;

  &-image {
    width: 150px;
    height: 60px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    &:last-child {
      width: auto;
    }
  }
}
</style>
