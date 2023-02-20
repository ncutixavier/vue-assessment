import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#A3846B",
        secondary: "rgba(30, 30, 30, 0.75)",
        accent: "#8c9eff",
        error: "#b71c1c",
        dark: "#1E1E1E",
      },
    },
  },
});
