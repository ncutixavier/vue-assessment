<template>
  <div class="products-to-view">
    <div class="products-to-view__header pt-9 py-7">
      <div class="product-uses-title">Often viewed with</div>
    </div>

    <div class="products-to-view__body">
      <div class="products-to-view__body--card" v-for="i in 5" v-bind:key="i">
        <product-image-carousel
          :images="images"
          :height="'287'"
          :showWishlist="true"
        />

        <div class="products-to-view__body--card-content">
          <div class="products-to-view__body--card-title pt-4">
            Lorem ipsum dolor sit amet
          </div>
          <div class="products-to-view__body--card-logo">
            <v-img
              :src="require(`@/assets/images/brignoli_1.png`)"
              height="60px"
              contain
            />
          </div>
          <div class="products-to-view__body--card-price pb-3">
            from $12.00/meter
          </div>
          <div
            class="products-to-view__body--card-colors d-flex align-center pb-4"
          >
            <div
              v-for="color in colors"
              v-bind:key="color"
              :style="{ backgroundColor: color }"
              class="products-to-view__body--card-colors-box my-1 mr-2"
            ></div>
            <div class="products-to-view__body--card-colors-more mr-2">+20</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pr-5 pt-10 pb-6">
      <styled-pagination />
    </div>
  </div>
</template>

<script>
import ProductImageCarousel from "../ProductImageCarousel";
import StyledPagination from "@/components/styled/StyledPagination";

export default {
  components: {
    ProductImageCarousel,
    StyledPagination,
  },
  data: () => ({
    images: [
      "https://images.pexels.com/photos/7641149/pexels-photo-7641149.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1420710/pexels-photo-1420710.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6354084/pexels-photo-6354084.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3575850/pexels-photo-3575850.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    colors: ["#973528", "#9A9EA3", "#00513C", "#1E1E1E"],
  }),
};
</script>

<style lang="scss" scoped>
.products-to-view {
  background: #e9e9e9;
  padding: 0 0 50px 20px;

  &__body {
    display: flex;
    width: 100%;
    overflow: auto;

    &--card {
      background-color: #fff;
      min-width: 290px;
      margin-right: 30px;

      &-title {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 18px;
        color: #1e1e1e;
      }

      &-price {
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 14px;
        color: #1a1a1a;
      }

      &-colors {
        &-box {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        &-more {
          font-family: "Raleway";
          font-weight: 500;
          font-size: 14px;
          color: #000000;
        }
      }

      &-content {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    &--card:last-child {
      margin-right: 0px;
    }
  }

  &__body::-webkit-scrollbar {
    display: none;
  }
}
</style>
