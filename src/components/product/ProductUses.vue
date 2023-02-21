<!-- eslint-disable prettier/prettier -->
<template>
  <div class="product-uses">
    <div class="product-uses-title">Typically used for</div>

    <div class="product-uses-card__container d-flex justify-space-between align-center my-4">
      <div
        class="product-uses-card pa-5"
        v-for="(item, i) in items"
        v-bind:key="i"
      >
        <v-img
          :src="require('@/assets/icons/' + item?.image)"
          transition="scale-transition"
          contain
          width="79"
          height="80"
        />
        <div
          class="my-3 text-uppercase font-weight-thin product-uses-card__title"
        >
          {{ item?.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductUses",
  data: () => ({
    items: [
      {
        title: "Bedding",
        image: "bedding.png",
      },
      { title: "courtains", image: "courtains.png" },

      { title: "hospital & yachting", image: "hospital.png" },

      {
        title: "home decor",
        image: "decor.png",
      },
      { title: "table", image: "table.png" },
    ],
  }),
};
</script>

<style lang="scss">
.product-uses {
  padding: 45px 80px 30px;

  &-title {
    font-family: "Bodoni Moda";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
  }

  &-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.16em;
      color: #1e1e1e;
      text-align: center;
    }
  }
}

@media (max-width: 768px) {
  .product-uses {
    padding: 30px 10px;

    &-card {
      flex-direction: row;
      justify-content: start;
      width: 100%;

      &__container {
        flex-direction: column;
      }

      .v-responsive {
        flex: 0 auto !important;
        margin-right: 20px;
      }
    }
  }
}
</style>
