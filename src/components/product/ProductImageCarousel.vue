<template>
  <div class="">
    <v-carousel hide-delimiters :height="height">
      <template v-slot:prev="{ on, attrs }">
        <v-btn outlined fab color="white" small v-bind="attrs" v-on="on"
          ><v-icon>mdi-chevron-left</v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn outlined fab color="white" small v-bind="attrs" v-on="on"
          ><v-icon>mdi-chevron-right</v-icon></v-btn
        >
      </template>
      <v-carousel-item
        v-for="(item, i) in images"
        :key="i"
        :src="item"
        class="relative"
      >
        <div class="image-top-cover" v-if="showWishlist">
          <div class="">
            <v-img
              :src="require('@/assets/icons/wishlist.png')"
              height="20"
              width="23"
              contain
            />
          </div>
          <div class="image-top-cover__text">Cutting service available</div>
        </div>
        <div class="image-bottom-cover" v-if="showBottom"></div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="js">
export default {
  name: "ProductImageCarousel",
  props: {
    images: Array,
    height: {
      type: String,
      default: "600",
    },
    showWishlist: Boolean,
    showBottom: {
      type: Boolean,
      default: true,
    },
  },

};
</script>

<style lang="scss">
.image-top-cover {
  height: 70px;
  background: linear-gradient(
    176.32deg,
    rgba(41, 45, 50, 0.45) 3.09%,
    rgba(217, 217, 217, 0) 135.65%
  );
  background-blend-mode: multiply;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  &__text {
    background: rgba(30, 30, 30, 0.75);
    font-family: "Montserrat";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    height: 25px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #f5f5f4;
  }
}

.image-bottom-cover {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30) 0.47%,
    rgba(217, 217, 217, 0.1) 10.11%
  );
  background-blend-mode: multiply;
  transform: rotate(-180deg);
}
</style>
