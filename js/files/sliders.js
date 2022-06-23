/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, /*Parallax,*/ Autoplay, Thumbs } from 'swiper'; //Если будешь редактировать шапку включи Parallax-------------------------------
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	function sliders_bild_callback(params) { }


	if (document.querySelector('.slider-rooms__body')) {
		new Swiper('.slider-rooms__body', {
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 24,
			speed: 800,
			loop: true,
			watchOverflow: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,
			// Dotts
			pagination: {
				el: '.slider-rooms__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.slider-rooms .slider-arrow_next',
				prevEl: '.slider-rooms .slider-arrow_prev',
			}
		});
	}

	if (document.querySelector('.slider-tips__body')) {
		new Swiper('.slider-tips__body', {
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 32,
			speed: 800,
			loop: true,
			watchOverflow: true,
			// Dotts
			pagination: {
				el: '.slider-tips__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.slider-tips .slider-arrow_next',
				prevEl: '.slider-tips .slider-arrow_prev',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.1,
					spaceBetween: 15
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 992px
				992: {
					slidesPerView: 3,
					spaceBetween: 32
				}
			}
		})

	}

	if (document.querySelector('.products-slider')) {
		new Swiper('.products-slider__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-slider__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1370: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
	}
	if (document.querySelector('.products-new')) {
		new Swiper('.products-new__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1330: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
	}

	if (document.querySelector('.thumbs-images')) {
		const thumbsSwiper = new Swiper('.thumbs-images', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 16,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.products-new__dotts',
				clickable: true,
				dynamicBullets: true
			},

			breakpoints: {
				992: {
					slidesPerView: 3,
				},
				1330: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},
			on: {
				init: function (swiper) {

				}
			}
		});
		new Swiper('.images-product__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			on: {
				init: function (swiper) {

				}
			}
		});

	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});



