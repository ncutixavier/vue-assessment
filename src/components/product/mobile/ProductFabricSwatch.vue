<template>
  <div class="product-fabric">
    <div class="product-fabric__header pb-3">
      <div class="product-uses-title">Not sure yet?</div>
      <div class="product-fabric__header--subtitle py-4">
        Order a fabric swatch or color card
      </div>
    </div>
    <div class="product-fabric__body">
      <div
        class="product-fabric__body--card"
        v-for="(item, i) in items"
        v-bind:key="i"
      >
        <div class="white">
          <v-img
            :src="require(`@/assets/images/fabric-swatch.png`)"
            height="240"
            contain
          />
        </div>
        <div class="pt-3">
          <span class="product-fabric__body--card-title">
            {{ item.title }}
          </span>
          <span class="product-fabric__body--card-dimension">
            ({{ item.dimension }})
          </span>
        </div>
        <div class="product-fabric__body--card-pid pt-1">{{ item.pid }}</div>
        <div class="product-fabric__body--card-price pt-2">
          {{ item.price }}
        </div>
        <v-btn
          outlined
          depressed
          color="dark"
          dark
          rounded
          block
          class="product-product-fabric__body--card-btn mt-5"
        >
          CTA mini
        </v-btn>
      </div>
    </div>
    <div class="pr-5 pt-10 pb-6">
      <styled-pagination />
    </div>
  </div>
</template>

<script>
import StyledPagination from "@/components/styled/StyledPagination";
export default {
  name: "ProductFabricSwatch",
  components: { StyledPagination },

  data: () => ({
    items: [
      {
        image: "fabric-swatch.png",
        title: "Fabric swatch",
        dimension: "15x15 cm",
        pid: "PCAR0040-000001",
        price: "€ 1.00",
      },
      {
        image: "fabric-swatch.png",
        title: "Fabric swatch",
        dimension: "15x15 cm",
        pid: "PCAR0040-000001",
        price: "€ 1.00",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.product-fabric {
  background: #f8f8f7;
  padding: 50px 20px;

  &__header {
    &--subtitle {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      text-transform: uppercase;
      color: #000000;
    }
  }

  &__body {
    display: flex;
    width: 100%;
    overflow: auto;

    &--card {
      min-width: 290px;
      margin-right: 30px;

      &-title {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 18px;
        color: #1e1e1e;
      }

      &-dimension {
        font-family: "Raleway";
        font-weight: 500;
        font-size: 18px;
        color: #1e1e1e;
      }

      &-pid {
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 16px;
        color: rgba(30, 30, 30, 0.5);
      }

      &-price {
        font-family: "Raleway";
        font-weight: 500;
        font-size: 22px;
        color: #1e1e1e;
      }
    }

    &--card:last-child {
      margin-right: 0px;
    }
  }

  &__body::-webkit-scrollbar {
    display: none;
  }

  .v-btn {
    text-transform: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    padding: 20px 0 !important;
  }

  .v-pagination > li > button {
    box-shadow: none !important;
  }

  &__pagination {
    ul {
      background-color: #000000 !important;
    }
  }
}
</style>
