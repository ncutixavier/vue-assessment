<template>
  <div class="product-mobile-info">
    <v-expansion-panels
      active-class="active"
      accordion
      v-model="panel"
      tile
      flat
    >
      <v-expansion-panel>
        <v-expansion-panel-header
          :class="
            panel === 0
              ? 'product-mobile-info__header--active'
              : 'product-mobile-info__header--inactive'
          "
          >Technical Information
          <template v-slot:actions>
            <v-icon color="primary">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <product-tech-info :items="items" />
          <product-care-info :items="careData" />
          <product-tech-sheet />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header
          :class="
            panel === 1
              ? 'product-mobile-info__header--active'
              : 'product-mobile-info__header--inactive'
          "
          >Shipping
          <template v-slot:actions>
            <v-icon color="primary">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header
          :class="
            panel === 2
              ? 'product-mobile-info__header--active'
              : 'product-mobile-info__header--inactive'
          "
          >Returns
          <template v-slot:actions>
            <v-icon color="primary">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import ProductCareInfo from "../product-info/ProductCareInfo";
import ProductTechInfo from "../product-info/ProductTechInfo";
import ProductTechSheet from "../product-info/ProductTechSheet";

export default {
  components: {
    ProductTechInfo,
    ProductCareInfo,
    ProductTechSheet,
  },
  data: () => ({
    panel: 0,
    items: [
      { text: "Pattern", value: "Plain" },
      { text: "Width (cm)", value: "295.00" },
      { text: "Structure", value: "Sateen" },
      { text: "Composition", value: "100% Cotton" },
      { text: "Thread Count (T.C.)", value: "600" },
      { text: "Weight (g/m2)", value: "285.00" },
    ],
    careData: [
      { icon: "care-1.png", title: "Lorem ipsum", isRange: true, content: 80 },
      { icon: "care-2.png", title: "Lorem ipsum", isRange: true, content: 65 },
      {
        icon: "care-3.png",
        title: "Lorem ipsum",
        isRange: false,
        content: "Lorem ipsum dolor si amet, lorem ipsum",
      },
      {
        icon: "care-4.png",
        title: "Lorem ipsum dolor sit",
        isRange: false,
        content: "Lorem ipsum dolor si amet, lorem ipsum",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.product-mobile-info {
  border-top: 2px solid rgba(30, 30, 30, 0.1);
  background: #f5f5f4;
  padding-bottom: 50px;

  &__header {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: rgba(30, 30, 30, 0.75);
    text-transform: uppercase;

    &--active {
      font-weight: 700;
      color: #1e1e1e;
      text-transform: uppercase;

      i,
      .v-icon {
        color: #1e1e1e !important;
      }
    }

    &--inactive {
      text-transform: uppercase;
      font-weight: 500;
      color: rgba(30, 30, 30, 0.75);
    }
  }

  .active {
    border-bottom: 1px solid #1e1e1e !important;
  }

  .v-expansion-panel {
    border-bottom: 2px solid rgba(30, 30, 30, 0.1);
    padding: 40px 0 10px;
    background-color: #f5f5f4 !important;
  }

  .v-expansion-panel-content__wrap {
    font-weight: 500;
    font-size: 16px;
    color: rgba(30, 30, 30, 0.75);
  }
}
</style>
