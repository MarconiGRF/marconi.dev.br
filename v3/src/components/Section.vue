<template>
	<div>
		<transition name="fade" mode="out-in">
			<section v-if="isProjectStageVisible" key="projectStage" class="projectStage">
				<div id="projects" class="labels">{{ $t('common.projects') }}</div>
				<!-- Project Displayer -->
				<div id="backButton" @click="toggleProjectStageVisibility">
					<img src="../assets/icons/chevron-back.png" class="chevron" />
					<div class="backLabel">{{ $t('common.back') }}</div>
				</div>
			</section>

			<section v-else key="defaultStage" class="defaultStage">
				<a class="content-disposition" :href="github.link" target="_blank">
					<img src="../assets/icons/github.png" class="image-content" :alt="github.alt"/>
					<h1 class="labels">{{ $t('common.github') }}</h1>
				</a>
				<a class="content-disposition" :href="cv.link" target="_blank">
					<img src="../assets/icons/cv.png" class="image-content" :alt="cv.alt"/>
					<h1 class="labels">{{ $t('common.cv') }}</h1>
				</a>
				<a class="content-disposition" href="#" @click="toggleProjectStageVisibility">
					<img src="../assets/icons/projects.png" class="image-content" :alt="projects.alt"/>
					<h1 class="labels">{{ $t('common.projects') }}</h1>
				</a>
			</section>
		</transition>
	</div>
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
			},
			isProjectStageVisible: false
		}
	},
	methods: {
		updateLocalizedValues() {
			this.github.alt = this.$t('alt.github');
			this.cv.alt = this.$t('alt.cv');
			this.cv.link =  this.$t('links.cv');
		},
		toggleProjectStageVisibility() {
			this.isProjectStageVisible = !this.isProjectStageVisible;
		}
	}
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.projectStage {
	display: flex;
	height: calc(100vh - 12.05rem);
	align-content: center;
	flex-direction: column;
	justify-content: stretch;
}

.projectStage #projects {
	height: 87%;
}

.projectStage #backButton {
	background: #4C94C2;
	height: 13%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.chevron {
	max-width: 1.8rem;
	max-height: 1.8rem;
}

.backLabel {
	font-family: 'Raleway';
	-webkit-font-smoothing: antialised;
	margin: 0 0 0 .7rem;
	font-size: 28px;
	font-weight: bold;
	color: white;
}

.defaultStage {
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
	.defaultStage {
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
	.defaultStage {
		flex-direction: column;
		height: calc(100vh - 10.05rem);
	}

	.projectStage {
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