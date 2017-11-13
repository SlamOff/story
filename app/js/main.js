'use strict';

// import Vue from 'vue'
// import MultiLanguage from 'vue-multilanguage'
// 	// Vue.use(MultiLanguage, {
// 	// 	en: {
// 	// 		hi: 'Hello',
// 	// 		welcome: 'Welcome, {name}'
// 	// 	},
// 	// 	ru: {
// 	// 		hi: 'Привет',
// 	// 		welcome: 'Bem-vindo, {name}'
// 	// 	}
// 	// })
// 	Vue.use(MultiLanguage, {
// 	    default: 'en',
// 	    en: {
// 	        hi: 'Hello',
// 	        welcome: 'Welcome, {name}'
// 	    },
// 	    pt: {
// 	        hi: 'Olá',
// 	        welcome: 'Bem-vindo, {name}'
// 	    }
// 	})
// 	// Vue.component('menu-link', {
// 	// 	template: '#template1'
// 	// })
// 	new Vue({
// 		el: '#app',
// 		data: {
// 			mess: '123'
// 		}
// 	})
$(document).ready(function () {
	$('.header__menu__title').click(function () {
		$('.header__menu__dropdown').toggleClass('active');
	});
});