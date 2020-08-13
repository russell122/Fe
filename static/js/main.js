$(document).ready(function () {

	function ibg() {

		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}

	ibg();

	$('.header-burger').click(function (event) {
		$('.header-burger, .header-mnu').toggleClass('activeB');
		$('body').toggleClass('lock');
	});

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});

	svg4everybody({});
	$(".mouse-icon").click(function () {
		$("html, body").animate({
			scrollTop: $(".about-us").offset().top
		}, 800);
	});

	$('a[data-rel^=lightcase]').lightcase({});

	var mixer = mixitup('.recent-row', {
		selectors: {
			target: '.recent-item'
		},
		"animation": {
			"duration": 300,
			"nudge": true,
			"reverseOut": true,
			"effects": "fade scale(0.17) translateX(35%) translateY(44%) translateZ(-22px) rotateX(18deg) rotateY(53deg) rotateZ(55deg) stagger(38ms)"
		}
	});

	$('.count').counterUp({
		delay: 10,
		time: 1000
	});

	var swiper = new Swiper('.swiper-container');


});