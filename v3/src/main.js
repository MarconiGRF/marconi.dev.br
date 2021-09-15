import Vue from 'vue';
import App from './App.vue';

import i18n from './utils/i18n-config';
import './assets/global.css';

new Vue({
	i18n,
	render: h => h(App),
}).$mount('#app')
