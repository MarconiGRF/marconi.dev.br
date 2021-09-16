<template>
		<header class="header flex">
				<div class="pp">
						<img class="logo-adeq" src="../assets/icons/pp.png" :alt="pp.alt" />
				</div>
				<div class="description">
						<h1 class="header-name">{{ $t('common.name') }}</h1>
						<h3 class="subdescription">{{ $t('common.gradinfo') }}</h3>
				</div>
		</header>
</template>

<script>
export default {
	name: "Header",
	data: function () {
		return {
			pp: {
				alt: this.$t('alt.pp')
			}
		}
	},
	methods: {
		updateLocalizedValues() {
			this.pp.alt = this.$t('alt.pp');
		}
	}
}
</script>

<style scoped>
header {
	color: rgb(201, 224, 238);
}

.header {
	z-index: 1;
	height: 6rem;
	top: 0;
	left: 0;
	padding: 0.5em 1.5em 0.5em 1.5em;
	background-image: linear-gradient(#37877b 10px,  #336280);
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
	border-bottom: 1px solid rgb(46, 90, 117);
	align-items: center;
	justify-content: space-between;
}

.header-name {
	font-family: 'Raleway';
	margin: 1rem auto;
	width: 100%;
	font-weight: bold;
	line-height: 0.8;
	text-align: center;
	font-size: 38px;
}

.description {
	width: 100%;
}

.subdescription {
	font-family: 'Raleway';
	font-size: 15px;
	margin: 0.5rem auto;
	text-align: center;
	word-wrap: break-word;
	padding: 0 1.5rem;
}

.logo-adeq {
	display: block;
	height: 100%;
	border-radius: 50%;
}

.pp {
	display: block;
	height: 90%;
	border-radius: 50%;
}

@media only screen and (max-width: 480px) {
  .header {
    height: 5rem;
  }

  .header-name {
    font-size: 24px;
    margin: 0.7rem auto;
  }

  .subdescription {
    font-size: 12px;
  }
}
</style>