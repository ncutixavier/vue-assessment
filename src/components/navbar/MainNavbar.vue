<template>
  <div>
    <TopNavbar />
    <div class="main-navbar d-flex align-center justify-space-between px-15">
      <div class="">
        <v-img
          :src="require('@/assets/logo_brignoli.png')"
          transition="scale-transition"
          contain
          width="200"
        />
      </div>
      <div class="d-flex align-center">
        <div class="text-uppercase font-weight-black main-navbar-catalog mr-3">
          Catalog
        </div>
        <v-card width="600" flat color="primary">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="white"
            show-arrows
            active-class="text-decoration-underline"
            dark
          >
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab
              v-for="item in items"
              :key="item"
              :href="'#' + item"
              class="main-navbar-tab-item font-weight-thin white--text"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-card>
      </div>
    </div>
    <div class="px-15 ml-6 py-3 main-navbar-link">
      <v-icon color="dark">mdi-chevron-left</v-icon>
      <span href="" class="ml-5 text-decoration-underline font-weight-thin"
        >Back</span
      >
    </div>
  </div>
</template>

<script lang="js">
import TopNavbar from './TopNavbar';
export default {
    name: "MainNavbar",
    components: {
    TopNavbar
  },
    data: () => ({
    tab: null,
    items: [
        'Solutions', 'News', 'Projects', 'Products',
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.main-navbar {
  background: $primary;
  height: 100px;

  &-link {
    cursor: pointer;
    span {
      color: $dark;
      font-family: "Raleway";
      font-size: 16px;
    }
  }

  &-catalog {
    font-family: "Montserrat";
    font-size: 24px;
    color: white;
  }

  &-tab-item {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
}
.inactive {
  color: white;
}
</style>
