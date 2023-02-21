<template>
  <div class="">
    <main-navbar />
    <product-details />
    <product-uses />
    <product-info />
    <more-products />
  </div>
</template>

<script>
import MainNavbar from "@/components/navbar/MainNavbar";
import ProductDetails from "@/components/product/ProductDetails";
import ProductUses from "@/components/product/ProductUses";
import ProductInfo from "@/components/product/ProductInfo";
import MoreProducts from "@/components/product/MoreProducts";

export default {
  name: "HomeView",

  components: {
    MainNavbar,
    ProductDetails,
    ProductUses,
    ProductInfo,
    MoreProducts,
  },
};
</script>
