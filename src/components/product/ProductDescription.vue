<template>
  <div class="product-description">
    <div class="mb-md-12">
      <div class="mt-12 mb-6" v-if="$vuetify.breakpoint.smAndDown">
        <span class="product-description__status">
          Processing time
          <span class="text-uppercase ml-2">3 Working days </span>
        </span>
      </div>
      <div class="product-description__title mb-3">Canapone</div>
      <div class="mt-5" v-if="$vuetify.breakpoint.smAndDown">
        <div class="mb-15 px-5">
          <product-image-carousel
            :images="images"
            :height="300"
            :showWishlist="true"
          />
        </div>

        <div class="product-description__carousel-bottom">
          <v-btn
            depressed
            color="dark"
            dark
            rounded
            block
            class="product-description__auth--btn"
          >
            Select options
          </v-btn>
        </div>
      </div>
      <p
        class="product-description__text ml-2"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        Full-bodied and resistant double-width fabric in 100% linen. Thanks to
        linen's abrasion resistance and its pleasant feel to the touch.
      </p>
      <div class="text-decoration-underline product-description__btn">
        See more
      </div>
    </div>
    <div
      class="product-description__color-details"
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <product-image-carousel
        :images="fabrics"
        :height="250"
        :showBottom="false"
      />
      <div class="dark white--text product-description__color-details-text">
        DOLOMIA 792117 *REATT
      </div>
    </div>
    <div class="product-description__color">
      <div class="product-description__color--title">Color selection</div>
      <div
        class="d-flex flex-wrap my-5 align-center product-description__color--colors"
      >
        <div
          v-for="color in colors"
          v-bind:key="color"
          :style="{ backgroundColor: color }"
          class="product-description__color--colors-box my-1 mr-2"
        ></div>
        <div
          @click="handleShowColors"
          class="ml-2 font-weight-bold product-description__color--colors-expand"
        >
          <span>{{ showColors ? "Show less" : "+83" }}</span>
        </div>
      </div>
      <v-card
        class="product-description__auth pa-6"
        flat
        tile
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <p class="product-description__auth--text">
          To discover personalized products and custom designs log in or sign up
        </p>
        <div class="d-flex">
          <v-btn
            color="dark"
            outlined
            dark
            rounded
            class="product-description__auth--btn"
          >
            Sign up
          </v-btn>
          <v-spacer />
          <v-btn
            depressed
            color="dark"
            dark
            rounded
            class="product-description__auth--btn"
          >
            Log in
          </v-btn>
        </div>
      </v-card>
    </div>
    <div class="px-5 pt-7 pb-15" v-if="$vuetify.breakpoint.smAndDown">
      <v-btn
        depressed
        color="dark"
        dark
        rounded
        block
        class="product-description__auth--btn"
      >
        Select options
      </v-btn>
      <v-btn
        outlined
        depressed
        color="dark"
        dark
        rounded
        block
        class="product-description__auth--btn mt-5"
      >
        Get samples
      </v-btn>
    </div>
  </div>
</template>

<script>
import ProductImageCarousel from "./ProductImageCarousel";

export default {
  name: "ProductDescription",
  components: {
    ProductImageCarousel,
  },
  data: () => ({}),
  props: {
    colors: Array,
    images: Array,
    showColors: Boolean,
    handleShowColors: Function,
    fabrics: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.product {
  &-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    &__status {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 13px;
      text-align: center;
      color: #ffffff;
      background: #00513c;
      margin: 0 20px;
      padding: 12px 20px;

      span {
        font-weight: 700;
        font-size: 18px;
      }
    }

    &__title {
      font-family: "Bodoni Moda";
      font-weight: 700;
      font-size: 56px;
      color: $dark;
    }
    &__text {
      color: rgba(30, 30, 30, 0.75);
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.8;
      width: 80%;
    }
    &__btn {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: $dark;
      margin-left: 8px;
    }
    &__color {
      font-family: "Raleway";
      margin-left: 8px;
      &--title {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #000000;
      }
      &--colors {
        &-box {
          width: 36px;
          height: 30px;
        }
        &-expand {
          border-bottom: 1px solid;
          cursor: pointer;
        }
      }
    }
    &__auth {
      width: 90%;
      &--text {
        color: rgba(30, 30, 30, 0.75);
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
      }
      &--btn {
        width: 45%;
        height: 56px !important;
      }
    }

    &__carousel-bottom {
      background-color: white;
      padding: 20px;
      border-top: 1px solid rgba(30, 30, 30, 0.5);
    }
  }
}

.v-btn {
  text-transform: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
}

@media (max-width: 768px) {
  .product-description {
    &__title {
      padding-left: 20px;
    }

    &__btn {
      margin: 30px 20px;
    }

    &__color {
      margin-left: 20px;
    }

    &__color-details {
      padding: 10px 20px 30px;
      &-text {
        padding: 10px 20px;
        font-family: "Raleway";
        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.03em;
        color: #f5f5f4;
      }
    }
  }
}
</style>
