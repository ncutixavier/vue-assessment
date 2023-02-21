<template>
  <div class="more-products">
    <div
      class="d-flex justify-space-between align-center more-products__header"
    >
      <div class="more-products__title">Products you might like</div>
      <div class="d-flex justify-space-between more-products__header--btn">
        <button @click="prev" :class="{ active: hasPrev, inactive: !hasPrev }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button @click="next" :class="{ active: hasNext, inactive: !hasNext }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="more-products__products">
      <vue-horizontal
        ref="horizontal"
        class="horizontal"
        :button="false"
        @scroll-debounce="onScrollDebounce"
      >
        <div class="item" v-for="(item, i) in items" :key="i">
          <div class="image" :style="{ background: `url(${item})` }"></div>
        </div>
      </vue-horizontal>
    </div>
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";

export default {
  components: { VueHorizontal },

  data: () => ({
    items: [
      "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1538577880403-f9998e75dd06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    hasPrev: false,
    hasNext: true,
  }),
  methods: {
    prev() {
      this.$refs.horizontal.prev();
    },
    next() {
      this.$refs.horizontal.next();
    },
    onScrollDebounce({ hasPrev, hasNext }) {
      this.hasPrev = hasPrev;
      this.hasNext = hasNext;
    },
  },
};
</script>

<style lang="scss">
.more-products {
  background: #edeae6;
  padding: 20px 0 60px;

  &__header {
    padding: 20px 70px;

    &--btn {
      width: 80px;
    }
  }

  &__title {
    font-family: "Bodoni Moda";
    font-weight: 700;
    font-size: 40px;
  }

  &__products {
    padding-left: 70px;
  }
}
</style>
<style scoped>
.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 100%;
  position: relative;
  width: 100%;
  height: 100%;
}

.header {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  align-items: center;
}

svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  color: rgb(30, 30, 30);
}

button.inactive svg {
  color: rgba(30, 30, 30, 0.1);
}

button {
  padding: 4px;
}

button:focus {
  outline: none;
}
</style>

<style scoped>
.horizontal {
  --count: 2;
  --gap: 16px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 3;
    --gap: 24px;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 5;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --count: 6;
  }
}

.item {
  width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
  margin-right: var(--gap);
  height: 300px;
}

.item:last-child {
  margin-right: 0px;
}
</style>
