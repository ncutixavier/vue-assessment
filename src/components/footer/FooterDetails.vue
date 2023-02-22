<template>
  <div class="footer-details__content">
    <div
      class="footer-details__content--link"
      v-for="(item, i) in items"
      :key="i"
    >
      <router-link
        class="footer-details__content--link-title"
        :to="item.link"
        v-if="item?.isTitle"
        >{{ item.text.toUpperCase() }}</router-link
      >
      <router-link :to="item.link" v-else>{{ item.text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.footer {
  &-details {
    &__content {
      &--link {
        height: 28px;
        margin-bottom: 20px;
        a {
          text-decoration: none;
          color: white;
          font-family: "Raleway";
          font-weight: 400;
          font-size: 12px;
          letter-spacing: 2px;
        }
        &-title {
          font-weight: 700 !important;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
