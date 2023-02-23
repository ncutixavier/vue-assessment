<template>
  <div class="mobile-navbar pb-6">
    <div class="d-flex align-center justify-space-between pa-5">
      <div class="">
        <v-img
          :src="require('@/assets/logo_short.png')"
          transition="scale-transition"
          contain
          width="50"
        />
      </div>
      <div
        class="d-flex justify-space-between align-center mobile-navbar-icons"
      >
        <div>
          <v-img
            :src="require('@/assets/icons/user.png')"
            transition="scale-transition"
            contain
            width="28"
          />
        </div>
        <div>
          <v-img
            :src="require('@/assets/icons/wishlist.png')"
            transition="scale-transition"
            contain
            width="28"
          />
        </div>
        <div>
          <v-img
            :src="require('@/assets/icons/cart.png')"
            transition="scale-transition"
            contain
            width="28"
          />
        </div>
        <div>
          <v-btn outlined fab color="white" small>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <search-bar class="mx-5" />
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.mobile-navbar {
  background-color: $dark;

  &-icons {
    width: 60%;
  }
}
</style>
