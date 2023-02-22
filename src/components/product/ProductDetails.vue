<template>
  <div class="product-details">
    <v-row no-gutters>
      <v-col cols="12" sm="7">
        <div class="">
          <product-image-carousel :images="items" />
        </div>
      </v-col>
      <v-spacer />
      <v-col cols="12" sm="5">
        <div class="product-details-description pl-md-15">
          <div class="mb-12">
            <div class="product-details-description__title mb-3">Canapone</div>
            <p class="product-details-description__text ml-2">
              Full-bodied and resistant double-width fabric in 100% linen.
              Thanks to linen's abrasion resistance and its pleasant feel to the
              touch.
            </p>
            <div
              class="text-decoration-underline product-details-description__btn ml-2"
            >
              See more
            </div>
          </div>
          <div class="product-details-description__color ml-2">
            <div class="product-details-description__color--title">
              Color selection
            </div>
            <div
              class="d-flex flex-wrap my-5 align-center product-details-description__color--colors"
            >
              <div
                v-for="color in colors"
                v-bind:key="color"
                :style="{ backgroundColor: color }"
                class="product-details-description__color--colors-box my-3 mr-2"
              ></div>
              <div
                class="ml-2 font-weight-bold product-details-description__color--colors-expand"
              >
                +83
              </div>
            </div>
            <v-card class="product-details-description__auth pa-6" flat tile>
              <p class="product-details-description__auth--text">
                To discover personalized products and custom designs log in or
                sign up
              </p>
              <div class="d-flex">
                <v-btn
                  color="dark"
                  outlined
                  dark
                  rounded
                  class="product-details-description__auth--btn"
                >
                  Sign up
                </v-btn>
                <v-spacer />
                <v-btn
                  depressed
                  color="dark"
                  dark
                  rounded
                  class="product-details-description__auth--btn"
                >
                  Log in
                </v-btn>
              </div>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="js">
import ProductImageCarousel from "./ProductImageCarousel"
export default {
  components: {
    ProductImageCarousel,
  },
  data: () => ({
    items: [
      "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    baseColor: '#76784D',
    colors: ["#76784D", "#958F44", "#936D42", "#663D25", "#4A262C", "#522934",
      "#522C22", "#5F3831", "#836863"],

  }),
  methods: {
    generateColors(n = 83) {
      for (let i = 0; i < n; i++) {
        const red = parseInt(this.baseColor.substr(1, 2), 16);
        const green = parseInt(this.baseColor.substr(3, 2), 16);
        const blue = parseInt(this.baseColor.substr(5, 2), 16);
        const randomRed = Math.floor(Math.random() * 255);
        const randomGreen = Math.floor(Math.random() * 255);
        const randomBlue = Math.floor(Math.random() * 255);
        const newRed = Math.round((red + randomRed) / 2);
        const newGreen = Math.round((green + randomGreen) / 2);
        const newBlue = Math.round((blue + randomBlue) / 2);
        const hexColor = `#${newRed.toString(16)}${newGreen.toString(16)}${newBlue.toString(16)}`;
        this.colors.push(hexColor);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.product-details {
  background: #f5f5f4;
  padding: 0 70px;

  &-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

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
    }

    &__color {
      font-family: "Raleway";

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
      .v-btn {
        text-transform: none;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 768px) {
  .product-details {
    padding: 0 10px;
    &-description {
      &__text {
        width: 100%;
      }

      &__auth {
        width: 100%;

        &--btn {
          height: 36px;
        }
      }
    }
  }
}
</style>
