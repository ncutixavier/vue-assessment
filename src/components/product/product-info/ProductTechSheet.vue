<template>
  <div class="product-sheet">
    <v-img
      :src="require(`@/assets/images/technical-sheet.png`)"
      contain
      height="400"
    />

    <div class="d-flex align-center">
      <div class="mr-3">
        <v-img
          :src="require(`@/assets/icons/download.png`)"
          contain
          height="24"
          width="24"
        />
      </div>
      <div class="product-sheet-download">Download technical sheet</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-sheet {
  &-download {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 16px;
    text-decoration-line: underline;
    color: #1e1e1e;
    cursor: pointer;
  }
}
</style>
