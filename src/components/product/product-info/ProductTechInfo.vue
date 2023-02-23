<template>
  <div class="product-tech">
    <span class="product-tech__title pb-2" v-if="$vuetify.breakpoint.mdAndUp"
      >Technical Information</span
    >
    <div class="mt-5">
      <div class="product-tech__card" v-for="(item, i) in items" v-bind:key="i">
        <div class="product-tech__card--text">
          {{ item?.text }}
        </div>
        <div class="product-tech__card--value">
          {{ item?.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTechInfo",
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.product {
  background: #f5f5f4;

  &-tech {
    font-family: "Raleway";

    &__title {
      border-bottom: 1px solid;
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #1e1e1e;
    }

    &__card {
      display: flex;
      border-bottom: 1px solid rgba(30, 30, 30, 0.1);
      padding: 16px 0;
      font-size: 16px;

      &--text {
        width: 60%;
        font-weight: 700;
      }

      &--value {
        font-weight: 500;
        font-size: 16px;
        color: #1e1e1e;
      }
    }
  }
}
</style>
