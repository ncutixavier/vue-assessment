<template>
  <div class="">
    <v-carousel hide-delimiters height="600">
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
        <div class="image-cover"></div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="js">
export default {
  name: "ProductImageCarousel",
  props: {
    images: Array,
  },

};
</script>

<style>
.image-cover {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30) 0.47%,
    rgba(217, 217, 217, 0.1) 17.11%
  );
  background-blend-mode: multiply;
  transform: rotate(-180deg);
}
</style>
