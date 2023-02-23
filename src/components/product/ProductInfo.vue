<template>
  <div class="product-info">
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="pa-0">
        <div class="product-tech-info">
          <product-tech-info :items="items" />
        </div>
      </v-col>
      <v-spacer />
      <v-col cols="12" sm="5" class="product-info-image">
        <v-img
          :src="require('@/assets/images/tech.png')"
          height="380"
          width="800"
        />
      </v-col>
    </v-row>
    <v-row class="product-info-details mt-15">
      <v-col cols="12" sm="6" class="pa-0">
        <v-img
          :src="require('@/assets/images/cotton.png')"
          height="490"
          class="ml-2"
        /> </v-col
      ><v-col cols="12" sm="5" class="pl-md-15">
        <div class="product-info-details__title pb-3 pt-md-15">
          Organic cotton
        </div>
        <div class="product-info-details__content ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. <br /><br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductTechInfo from "./product-info/ProductTechInfo";

export default {
  components: {
    ProductTechInfo,
  },
  data() {
    return {
      items: [
        {
          text: "Pattern",
          value: "Plain",
        },
        { text: "Width (cm)", value: "295.00" },
        { text: "Structure", value: "Sateen" },
        { text: "Composition", value: "100% Cotton" },
        { text: "Thread Count (T.C.)", value: "600" },
        { text: "Weight (g/m2)", value: "285.00" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product-tech-info {
  padding-left: 70px;
}

.product-info {
  background: #f5f5f4;
  padding: 70px 0;

  &-image {
    position: relative;

    .v-image {
      position: absolute;
      right: 0;
      top: 30px;
    }
  }

  &-details {
    padding: 40px 70px 0;

    &__title {
      font-family: "Bodoni Moda";
      font-size: 40px;
      color: #1e1e1e;
      font-weight: 700;
    }

    &__content {
      font-family: "Raleway";
      font-weight: 500;
      font-size: 16px;
      line-height: 1.7;
      letter-spacing: 0.03em;
      color: #1e1e1e;
    }
  }
}
</style>
