<template>
  <div>
    <v-pagination
      v-model="page"
      circle
      :length="length"
      class="product__pagination"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "StyledPagination",
  props: {
    length: {
      type: Number,
      default: 4,
    },
  },
  data: () => ({ page: 1 }),
};
</script>

<style scoped>
.product__pagination >>> .v-pagination__navigation {
  box-shadow: none;
  border: 1px solid #1e1e1e;
}

.product__pagination >>> li:first-child,
li:last-child {
  width: 30%;
}

.product__pagination >>> li:last-child {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

.product__pagination >>> .v-pagination__item {
  box-shadow: none;
  border: none;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 16px;
  color: #1e1e1e;
  opacity: 0.3;
}

.product__pagination >>> .v-pagination__item--active {
  color: #1e1e1e !important;
  background-color: transparent !important;
  opacity: 1;
}
</style>
