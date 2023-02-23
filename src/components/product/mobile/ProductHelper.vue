<template>
  <div class="product-helper">
    <div class="product-helper__card" v-for="(item, i) in items" v-bind:key="i">
      <div class="">
        <v-img
          :src="require(`@/assets/images/helper/${item.icon}`)"
          height="36"
          width="36"
        />
      </div>
      <div class="product-helper__card--title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductHelper",
  data: () => ({
    items: [
      { title: "cutomer care", icon: "care.png" },
      { title: "returns", icon: "returns.png" },
      { title: "payments", icon: "payment.png" },
      { title: "shipping", icon: "shipping.png" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.product-helper {
  padding: 40px 0;
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-bottom: 2px solid rgba(30, 30, 30, 0.1);

    &--title {
      margin-top: 20px;
      text-decoration-line: underline;
      text-transform: uppercase;
      cursor: pointer;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #1e1e1e;
    }
  }

  &__card:last-child {
    border-bottom: none;
  }
}
</style>
