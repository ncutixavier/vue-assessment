<template>
  <div class="product-care">
    <div class="product-care__header">
      <div class="product-care__header--title">Care</div>
      <div class="d-flex align-center mt-3">
        <div v-for="(item, i) in items" v-bind:key="i">
          <div class="mr-5">
            <v-img
              :src="require(`@/assets/icons/care/${item.icon}`)"
              contain
              width="38"
              height="38"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="product-care__details">
      <div
        class="product-care__details--card"
        v-for="(item, i) in items"
        v-bind:key="i"
      >
        <div class="d-flex align-center px-5 py-3">
          <div class="mr-5">
            <v-img
              :src="require(`@/assets/icons/care/${item.icon}`)"
              contain
              width="35"
              height="35"
            />
          </div>
          <div class="product-care__header--title">{{ item.title }}</div>
        </div>
        <div class="product-care__details--card-body mb-3 px-5">
          <div
            class="d-flex align-center justify-space-between"
            v-if="item?.isRange"
          >
            <div class="line">
              <div class="line-active" :style="`width: ${item.content}%`"></div>
            </div>
            <span>{{ item.content }}%</span>
          </div>
          <p v-else>{{ item.content }}</p>
        </div>
      </div>
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
.product-care {
  font-family: "Raleway";
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(30, 30, 30, 0.1);

  &__header {
    padding: 16px 0;

    &--title {
      font-weight: 700;
      font-size: 16px;
      color: #1e1e1e;
    }
  }

  &__details {
    background-color: #fff;

    &--card {
      border-bottom: 1px solid rgba(30, 30, 30, 0.3);

      &-body {
        font-weight: 500;
        font-size: 16px;
        color: rgba(30, 30, 30, 0.75);

        span {
          color: #00513c;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
}

.line {
  background: rgba(30, 30, 30, 0.5);
  height: 2px;
  width: 80%;
  display: flex;
  align-items: center;

  &-active {
    background: #00513c;
    height: 6px;
  }
}
</style>
