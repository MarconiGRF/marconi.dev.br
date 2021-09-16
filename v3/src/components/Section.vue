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
    <a class="content-disposition" href="#">
			<img src="../assets/icons/projects.png" class="image-content" :alt="projects.alt"/>
      <h1 class="labels">{{ $t('common.projects') }}</h1>
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
			},
      projects: {
        alt: this.$t('alt.projects')
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
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-content:hover {
  transition: top .17s ease-in-out, transform .17s ease-in-out;
  top: -10px;
  transform: rotate(-5deg);
}

.image-content {
  transition: top .17s ease-in-out, transform .17s ease-in-out;
  position: relative;
  transform: rotate(0deg);
  top: 0px;
  width: 30%;
  box-sizing: border-box;
  background: transparent;
}

.labels {
  display: block;
  margin: 1em 0;
  font-family: 'Raleway';
  -webkit-font-smoothing: antialised;
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
    justify-content: flex-start;
    width: 55vw;
  }

  .image-content {
    margin-right: 1rem;
    width: 20%;
  }

  .labels {
    font-size: 28px;
  }
}

@media only screen and (max-width: 480px) {
  .content {
    flex-direction: column;
    height: calc(100vh - 10.05rem);
  }

  .content-disposition {
    flex-direction: row;
    justify-content: flex-start;
    width: 90vw;
  }

  .image-content {
    width: 19%;
    margin-right: 1rem;
  }

  .labels {
    font-size: 25px;
  }

  .image-content:hover {
    transition: none;
    transform: rotate(0deg);
    top: 0px;
  }
}
</style>