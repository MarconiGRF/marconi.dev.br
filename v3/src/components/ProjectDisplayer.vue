<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="toggler" key="togglerOn" class="displayer">
        <h1>{{ content.title }}</h1>
        <img :src="image" />
        <p v-html="content.description"></p>
        <div v-if="content.externalLinks" class="externalLinks">
        	<div v-if="content.externalLinks.first" v-html="content.externalLinks.first"></div>
        </div>
      </div>

      <div v-else key="togglerOff" class="displayer">
        <h1>{{ content.title }}</h1>
        <img :src="image" />
        <p v-html="content.description"></p>
        <div v-if="content.externalLinks" class="externalLinks">
          	<div v-if="content.externalLinks.first" v-html="content.externalLinks.first"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ContentDisplayer",
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      toggler: true,
    };
  },
  computed: {
    image() {
      if (!this.content.image) {
        return;
      }
      let filename = this.content.image.split(".");
      let images;
      if (filename[1] === "gif") {
        images = require.context("../assets/", false, /\.gif$/);
      } else {
        images = require.context("../assets/", false, /\.png$/);
      }
      return images("./" + filename[0] + "." + filename[1]);
    },
  },
  watch: {
    content: function () {
      this.toggler = !this.toggler;
    },
  },
};
</script>

<style scoped>
.displayer {
  padding: 5vh 0;
  display: flex;
  width: 40vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
}
.displayer h1 {
  color: white;
  font-family: PT Sans;
  margin: 0 0 2.5rem 0;
}
.displayer img {
  width: 20rem;
  margin: 5rem 0;
  border-radius: 50%;
  border-style: solid;
  border-color: #fff;
  border-width: 0.5em;
}
.displayer p {
  color: white;
  font-family: PT Sans;
  text-align: center;
  padding: 1em 7.5em;
}
.externalLinks {
  display: flex;
  width: 85%;
  justify-content: space-around;
  align-items: center;
}
.externalLinks div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>