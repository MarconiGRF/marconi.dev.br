import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '../locales/messages';

Vue.use(VueI18n)

function determinateUserLanguage() {
    let userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.startsWith('pt')) {
      return 'pt';
    }
    else {
      return 'en';
    }
}

export default new VueI18n({
    locale: determinateUserLanguage(),
    fallbackLocale: 'en',
    messages: messages
})