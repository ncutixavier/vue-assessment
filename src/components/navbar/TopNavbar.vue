<template>
  <div>
    <div
      class="top-navbar d-none d-md-flex align-center justify-space-between px-15"
    >
      <div class="">
        <v-img
          :src="require('@/assets/logo.png')"
          transition="scale-transition"
          contain
          width="200"
        />
      </div>
      <div class="d-flex align-center top-navbar-login">
        <div>
          <a href="" class="d-flex align-center">
            <v-img
              :src="require('@/assets/icons/user.png')"
              transition="scale-transition"
              contain
              width="20"
            />
            <div class="ml-2 text-uppercase font-weight-regular">Log in</div>
          </a>
        </div>
        <div>
          <v-btn outlined fab color="white" small>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.top-navbar {
  background-color: $dark;
  height: 110px;

  &-login {
    width: 200px;
    justify-content: space-between;
    a {
      color: $light;
      text-decoration: none;
      font-family: "Montserrat";
      font-size: 20px;
    }
  }
}
</style>
