import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n)

export const i18n = new Vuei18n({
	locale: 'en',
	fallbackLocale: 'ru',
	messages:{
			en: {
					welcomeMsg: 'Not welcome to Your Vue.js App',
					pluginsTxt: 'Remove these CLI Plugins',
					guideTxt: 'For a guide and recipes on how to configurate / customize this project',
					guideDocTxt: 'vue-cli documentation'
				},
			ru: {
					welcomeMsg: 'Не приветсвуем в Vue.js App',
					pluginsTxt: 'Удали эти CLI Plugins',
					guideTxt: 'Для руководства и примеров как настроить этот проект,{break} смотри в мануале для чайников',
					guideDocTxt: 'vue-cli документации'
				}
		}
})