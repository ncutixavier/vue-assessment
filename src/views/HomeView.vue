<template>
  <div class="">
    <div class="nav">
      <mobile-navbar v-if="$vuetify.breakpoint.smAndDown" />
      <main-navbar />
    </div>
    <div class="back-link d-flex align-center">
      <v-icon color="dark">mdi-chevron-left</v-icon>
      <span href="" class="ml-5 text-decoration-underline">Back</span>
    </div>

    <product-details />
    <product-uses />
    <div>
      <product-info v-if="$vuetify.breakpoint.mdAndUp" />
      <div v-else>
        <product-mobile-info />
        <product-fabric-swatch />
        <product-gallery />
        <products-to-view />
      </div>
    </div>
    <div>
      <more-products v-if="$vuetify.breakpoint.mdAndUp" />
      <product-helper v-else />
    </div>
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
import ProductHelper from "@/components/product/mobile/ProductHelper";
import MobileNavbar from "@/components/navbar/mobile/MobileNavbar";
import ProductMobileInfo from "@/components/product/mobile/ProductMobileInfo";
import ProductFabricSwatch from "@/components/product/mobile/ProductFabricSwatch";
import ProductGallery from "@/components/product/mobile/ProductGallery";
import ProductsToView from "@/components/product/mobile/ProductsToView";

export default {
  name: "HomeView",

  components: {
    MainNavbar,
    ProductDetails,
    ProductUses,
    ProductInfo,
    MoreProducts,
    Footer,
    ProductHelper,
    MobileNavbar,
    ProductMobileInfo,
    ProductFabricSwatch,
    ProductGallery,
    ProductsToView,
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

@media (max-width: 768px) {
  .back-link {
    padding: 0 20px;
  }
}
</style>
