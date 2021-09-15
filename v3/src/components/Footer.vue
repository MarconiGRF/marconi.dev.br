<template>
  <footer class="footer-content">
    <div class="footer-lefter">
      <a :href="email.link">
        <img
          class="footer-image"
          src="../assets/icons/mail.png"
          :alt="email.alt"
        />
      </a>
      <a :href="linkedin.link">
        <img
          class="footer-image"
          src="../assets/icons/in.png"
          :alt="linkedin.alt"
        />
      </a>
      <a :href="facebook.link">
        <img
          class="footer-image"
          src="../assets/icons/fb.png"
          :alt="facebook.link"
        />
      </a>
    </div>
    <div class="footer-righter">
      <a :alt="lgg.alt" href="#" @click="handleLangChange">
        <img class="footer-image" :src="getFlag()" :alt="flag.alt" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function () {
    return {
      email: {
        link: "mailto:mgrf@cin.ufpe.br",
        alt: this.$t("alt.mail"),
      },
      linkedin: {
        link: this.$t("links.linkedin"),
        alt: this.$t("alt.in"),
      },
      facebook: {
        link: "https://www.facebook.com/itsmarconi",
        alt: this.$t("alt.fb"),
      },
      flag: {
        alt: this.$t("alt.flag"),
      },
      lgg: {
        alt: this.$t("alt.lgg"),
      },
    };
  },
  methods: {
		getFlag() {
      var flags = require.context("../assets/icons/", false, /\.png$/);
      return flags("./" + this.$i18n.locale + ".png");
    },
    handleLangChange() {
      if (this.$i18n.locale === "pt") {
        this.$root.$i18n.locale = "en";
      } else {
        this.$root.$i18n.locale = "pt";
      }

			this.updateLocalizedValues();
			this.$emit('language-update');
    },
		updateLocalizedValues() {
			this.email.alt = this.$t("alt.mail");
			this.linkedin.link = this.$t("links.linkedin");
			this.linkedin.alt = this.$t("alt.in");
			this.facebook.alt = this.$t("alt.fb");
			this.flag.alt = this.$t("alt.flag");
			this.lgg.alt = this.$t("alt.lgg");
		}
  },
};
</script>

<style scoped>
.footer-content {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  padding: 0.5em 0.5em 0 0.5em;
  bottom: 0;
  height: 5rem;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  align-content: center;
}

.footer-text-p {
  display: block;
  margin: 0;
  font-family: "Raleway";
  font-weight: bold;
  color: white;
  font-size: 13px;
}

.footer-lefter {
  width: 70%;
  display: flex;
  align-items: center;
  text-align: left;
}

.footer-righter {
  width: 70%;
  text-align: right;
}

.App-link {
  color: #61dafb;
}

.column {
  width: 8.33%;
  float: left;
}

.flex {
  display: flex;
}

.footer-righter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media only screen and (max-width: 480px) {
  .footer-image {
    width: 2.5rem;
  }

  .footer-content {
    height: 4rem;
  }
}
</style>