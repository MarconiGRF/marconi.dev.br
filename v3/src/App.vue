<template>
  <div class="App">
    <Header ref="header" />
		<Section ref="linkSection" />
		<Footer @language-update="test()" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Section from './components/Section.vue';

export default {
  name: 'App',
  components: {
    Header,
    Section,
    Footer
  },
	methods: {
		test() {
			this.$refs.linkSection.updateLocalizedValues();
			this.$refs.header.updateLocalizedValues();
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

body{
  background-color: rgb(10, 72, 110);
  height: 100%;
  margin: 0;
}

a {
  text-decoration: none;
}

.App {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.flex {
  display: flex;
}
</style>
