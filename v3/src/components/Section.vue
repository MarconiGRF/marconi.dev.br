<template>
	<section class="content">
		<a class="content-disposition" :href="github.link" target="_blank">
			<img src="../assets/icons/github.png" class="image-content" :alt="github.alt"/>
				<h1 class="labels">{{ $t('common.github') }}</h1>
		</a>
		<a class="content-disposition" :href="cv.link" target="_blank">
			<img src="../assets/icons/cv.png" class="image-content" :alt="cv.alt"/>
				<h1 class="labels">{{ $t('common.cv') }}</h1>
		</a>
	</section>
</template>

<script>
export default {
  name: "Section",
	data: function () {
		return {
			github: {
				link: "https://github.com/MarconiGRF",
				alt: this.$t('alt.github')
			},
			cv: {
				link: this.$t('links.cv'),
				alt: this.$t('alt.cv')
			}
		}
	},
	methods: {
		updateLocalizedValues() {
			this.github.alt = this.$t('alt.github');
			this.cv.alt = this.$t('alt.cv');
			this.cv.link =  this.$t('links.cv')
		}
	}
};
</script>

<style scoped>
.content {
  align-items: center;
  height: calc(100vh - 12.05rem);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
}

.content-disposition {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-content {
  width: 30%;
  box-sizing: border-box;
}

.labels {
  display: block;
  margin: 1em 0;
  font-family: 'Raleway';
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: white;
}

@media only screen and (min-width: 480px) and (max-width: 900px) {
  .content {
    flex-direction: column;
  }

  .content-disposition {
    flex-direction: row;
    justify-content: space-evenly;
    width: 50vw;
  }

  .image-content {
    width: 20%;
  }
}

@media only screen and (max-width: 480px) {
  .content {
    flex-direction: column;
    height: calc(100vh - 10.05rem);
  }

  .content-disposition {
    flex-direction: row;
    justify-content: space-evenly;
    width: 90vw;
  }

  .image-content {
    width: 19%;
  }
}
</style>