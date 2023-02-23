<template>
  <div class="footer">
    <div
      class="footer-header mb-md-8 d-flex justify-space-between align-center"
    >
      <div class="">
        <v-img
          :src="
            require(`@/assets/${
              $vuetify.breakpoint.smAndDown ? `logo_footer_flat` : `logo_footer`
            }.png`)
          "
          transition="scale-transition"
          contain
          width="200"
        />
      </div>

      <div
        class="footer-header__social d-flex justify-space-between align-center"
      >
        <a
          href=""
          v-if="$vuetify.breakpoint.mdAndUp"
          class="white--text footer-header__social--text"
          >Contatti</a
        >
        <a href="" class="text-decoration-none"
          ><v-icon color="white" size="23">mdi-instagram</v-icon></a
        >
        <a href="" class="text-decoration-none">
          <v-img
            :src="require('@/assets/icons/facebook.png')"
            transition="scale-transition"
            contain
            width="22"
          />
        </a>
      </div>
    </div>

    <div class="footer-header__mobile">
      <a href="" class="white--text footer-header__social--text">Contatti</a>
    </div>

    <div class="footer-details">
      <div class="footer-details__description">
        <span class="font-weight-thin">
          Dal 1947 lo spirito imprenditoriale
          <span>MARTINELLIGINETTO</span>
          si fonda sulle competenze tecniche, l’utilizzo delle tecnologie
          tessili più avanzate e sulla capacità di mobilitare energie
          professionali e creative in grado di innovare il prodotto a tutti i
          livelli.
        </span>
      </div>
      <footer-details :items="settori" class="footer-details__details-1" />
      <footer-details :items="innovazione" class="footer-details__details-2" />
      <footer-details
        :items="responsabilita"
        class="footer-details__details-3"
      />
      <footer-details :items="carriera" class="footer-details__details-4" />
    </div>

    <div class="">
      <Partners />
    </div>

    <div class="d-flex justify-space-between mt-10 footer-details__bottom">
      <div class="footer-details__bottom--links">
        <router-link to="">Privacy</router-link>
        <router-link to="">Cookie policy</router-link>
      </div>
      <div class="">
        Martinelli Ginetto S.p.A - C.F. e Partita Iva 03403660164 Cap.Sociale
        10.000.000 I.v. REA: BG – 375519
      </div>
    </div>
  </div>
</template>

<script>
import FooterDetails from "./FooterDetails";
import Partners from "./Partners";

export default {
  components: {
    FooterDetails,
    Partners,
  },
  name: "footer_",
  data: () => ({
    settori: [
      { text: "settori", link: "", isTitle: true },
      { text: "Filati", link: "", isTitle: false },
      { text: "Tessuti", link: "", isTitle: false },
      { text: "Nobilitazione", link: "", isTitle: false },
      { text: "Editoria", link: "", isTitle: false },
    ],
    innovazione: [
      { text: "INNOVAZIONE", link: "", isTitle: true },
      { text: "Creatività e Design", link: "", isTitle: false },
      { text: "Realtà produttiva", link: "", isTitle: false },
      { text: "Vision Digitale", link: "", isTitle: false },
    ],

    responsabilita: [
      { text: "Responsabilità", link: "", isTitle: true },
      { text: "Economica", link: "", isTitle: false },
      { text: "Ambientale", link: "", isTitle: false },
      { text: "Sociale", link: "", isTitle: false },
    ],

    carriera: [
      { text: "CARRIERA", link: "", isTitle: true },
      { text: "Giovani", link: "", isTitle: false },
      { text: "Scuola lavoro", link: "", isTitle: false },
      { text: "Lavora con noi", link: "", isTitle: false },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.footer {
  background-color: $dark;
  padding: 30px 70px;
  &-header {
    background-color: $dark;

    &__social {
      width: 180px;
      &--text {
        font-family: "Raleway";
        font-weight: 300;
        font-size: 11px;
        letter-spacing: 2px;
      }
    }

    &__mobile {
      display: none;
    }
  }

  &-details {
    display: grid;
    grid-template-columns: 29% repeat(4, 1fr);
    gap: 50px;
    &__description {
      font-family: "Raleway";
      font-size: 12px;
      line-height: 2;
      letter-spacing: 2px;
      color: #ffffff;

      span {
        font-weight: 700;
      }
    }

    &__bottom {
      align-items: center;
      div {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 28px;
        color: #ffffff;
        letter-spacing: 2px;

        a {
          color: #ffffff;
          margin-right: 40px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 20px;
    &-header {
      &__social {
        width: 80px;
      }

      &__mobile {
        display: flex;
        padding: 30px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        margin-bottom: 30px;
      }
    }

    &-details {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, auto);
      gap: 40px;

      &__description {
        grid-row: 1/2;
        grid-column: 1/3;
      }

      &__details-1 {
        grid-row: 2/3;
        grid-column: 1/2;
      }

      &__details-2 {
        grid-row: 2/3;
        grid-column: 2/3;
      }

      &__details-3 {
        grid-row: 3/4;
        grid-column: 1/2;
      }
      &__details-4 {
        grid-row: 3/4;
        grid-column: 2/3;
      }

      &__bottom {
        flex-direction: column-reverse !important;
        align-items: flex-start;
        &--links {
          padding: 30px 0 20px;
        }
      }
    }
  }
}
</style>
