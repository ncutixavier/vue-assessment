<template>
  <div class="product-gallery">
    <div class="product-gallery__description">
      <div class="">
        <v-img
          :src="require('@/assets/images/cotton.png')"
          height="300"
          contain
        />
      </div>
      <div class="product-fabric__header py-3">
        <div class="product-gallery__description--title">
          Organic cotton award
        </div>
        <div class="product-gallery__description--subtitle py-3">
          (editorial content)
        </div>
      </div>
      <div class="product-gallery__description--content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </div>
    </div>
    <div class="product-gallery__description--title px-5 pt-9 pb-7">
      Organic cotton award
    </div>
    <div class="product-gallery__images">
      <div
        v-for="i in 7"
        v-bind:key="i"
        :class="`product-gallery__images--image-${i}`"
      >
        <v-img
          :src="require(`@/assets/images/gallery/photo-${i}.png`)"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-gallery {
  &__description {
    background: #e9e9e9;
    padding: 30px 20px;

    &--title {
      font-family: "Bodoni Moda";
      font-weight: 700;
      font-size: 28px;
      color: #000000;
    }

    &--subtitle {
      font-family: "Raleway";
      font-weight: 400;
      font-size: 18px;
      text-transform: uppercase;
      color: #000000;
    }
    &--content {
      font-family: "Raleway";
      font-weight: 500;
      font-size: 16px;
      color: rgba(30, 30, 30, 0.75);
    }
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(5, auto);
    gap: 3px;

    &--image-1 {
      grid-area: 1/1/2/2;
      height: 155px;
    }

    &--image-2 {
      grid-area: 2/1/3/2;
      height: 155px;
    }

    &--image-3 {
      grid-area: 1/2/3/3;
      height: 313px;
    }
    &--image-4 {
      grid-area: 3/1/4/3;
      height: 200px;
    }
    &--image-5 {
      grid-area: 4/1/5/2;
      height: 155px;
    }
    &--image-6 {
      grid-area: 4/2/5/3;
      height: 155px;
    }
    &--image-7 {
      grid-area: 5/1/6/3;
      height: 200px;
    }
  }
}
</style>
