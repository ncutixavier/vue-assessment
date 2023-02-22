<template>
  <div class="">
    <div class="nav">
      <main-navbar />
    </div>
    <div class="back-link d-flex align-center">
      <v-icon color="dark">mdi-chevron-left</v-icon>
      <span href="" class="ml-5 text-decoration-underline">Back</span>
    </div>

    <product-details />
    <product-uses />
    <product-info />
    <more-products />
    <Footer />
  </div>
</template>

<script>
import MainNavbar from "@/components/navbar/MainNavbar";
import ProductDetails from "@/components/product/ProductDetails";
import ProductUses from "@/components/product/ProductUses";
import ProductInfo from "@/components/product/ProductInfo";
import MoreProducts from "@/components/product/MoreProducts";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "HomeView",

  components: {
    MainNavbar,
    ProductDetails,
    ProductUses,
    ProductInfo,
    MoreProducts,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-link {
  cursor: pointer;
  height: 44px;
  padding: 0 80px;
  background-color: #fff;
  span {
    color: $dark;
    font-family: "Raleway";
    font-size: 16px;
  }
}
</style>
