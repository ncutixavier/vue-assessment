<template>
  <div class="product-details">
    <v-row no-gutters>
      <v-col cols="12" sm="7" v-if="$vuetify.breakpoint.mdAndUp">
        <div class="">
          <product-image-carousel :images="items" />
        </div>
      </v-col>
      <v-col cols="12" sm="5">
        <div class="pl-md-15">
          <product-description
            :colors="$vuetify.breakpoint.mdAndUp ? colors : colors.slice(3)"
            :showColors="showColors"
            :handleShowColors="handleShowColors"
            :images="items"
            :fabrics="fabrics"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="js">
import ProductImageCarousel from "./ProductImageCarousel"
import ProductDescription from "./ProductDescription";

export default {
  components: {
    ProductImageCarousel,
    ProductDescription,
  },
  data: () => ({
    items: [
      "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    fabrics: [
      "https://images.pexels.com/photos/7641149/pexels-photo-7641149.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1420710/pexels-photo-1420710.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6354084/pexels-photo-6354084.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3575850/pexels-photo-3575850.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    baseColor: '#76784D',
    mainColors: ["#76784D", "#958F44", "#936D42", "#663D25", "#4A262C", "#522934",
      "#522C22", "#5F3831", "#836863"],
    showColors: false,
    colors: [],
  }),
  methods: {
    handleShowColors() {
      this.showColors = !this.showColors
      if (this.showColors) {
        this.generateColors()
      } else {
        this.colors = [...this.mainColors]
      }
    },
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
      this.colors = [...this.mainColors, ...this.colors]
    },
  },
  mounted() {
    this.colors = [...this.mainColors]
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.product-details {
  background: #f5f5f4;
  padding: 70px;
}

@media (max-width: 768px) {
  .product-details {
    padding: 0;
  }
}
</style>
