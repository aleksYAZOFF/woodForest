$(function ($) {

function placeh(place_tag){
	$(place_tag).focus(function(){
			$(this).attr("placeholder", ""); 
	    }).blur(function(){
	            $(this).attr("placeholder", $(this).data('empty')); 
	    }).each(function(){
	         $(this).attr("placeholder", $(this).data('empty'));  
		});
}
function chekb(class_one,class_activ){
		if(class_one.children('input').prop('checked') == false)
			{
			class_one.addClass(class_activ);
			class_one.children('input').attr('checked','checked');
			}
		else
			{
			class_one.removeClass(class_activ);
			class_one.children('input').removeAttr('checked');
			}
}
function chekb_val(class_one,class_activ){
	if(class_one.children('input').prop('checked') == true)
			{
			class_one.addClass(class_activ);
			class_one.children('input').attr('checked','checked');
			}
}
function radiob(this_pick,class_one,class_activ){
		if(this_pick.children('input').prop('checked') == false)
			{
			var name_rad = this_pick.children('input').attr('Name');
			$('input[name='+name_rad+']').each(function () {
				$(this).parent().removeClass(class_activ);
				$(this).removeAttr('checked');
			});
			this_pick.addClass(class_activ);
			this_pick.children('input').attr('checked','checked');
			}
}
function radiob_val(this_pick,class_activ){
if(this_pick.children('input').prop('checked') == true)
	{
	this_pick.addClass(class_activ);
	this_pick.children('input').attr('checked','checked');
	}
}

function placeh(place_tag){
	$(place_tag).focus(function(){
		$(this).attr("placeholder", "");
	}).blur(function(){
		$(this).attr("placeholder", $(this).data('empty'));
	}).each(function(){
		$(this).attr("placeholder", $(this).data('empty'));
	});
}

function chekb(class_one,class_activ){
if(class_one.children('input').prop('checked') == false)
{
class_one.addClass(class_activ);
class_one.children('input').attr('checked','checked');
}
else
{
class_one.removeClass(class_activ);
class_one.children('input').removeAttr('checked');
}
}
function chekb_val(class_one,class_activ){
if(class_one.children('input').prop('checked') == true)
{
class_one.addClass(class_activ);
class_one.children('input').attr('checked','checked');
}
}

function radiob(this_pick,class_one,class_activ){
if(this_pick.children('input').prop('checked') == false)
{
var name_rad = this_pick.children('input').attr('Name');
$('input[name='+name_rad+']').each(function () {
$(this).parent().removeClass(class_activ);
$(this).removeAttr('checked');
});
this_pick.addClass(class_activ);
this_pick.children('input').attr('checked','checked');
}
}
function radiob_val(this_pick,class_activ){
if(this_pick.children('input').prop('checked') == true)
{
this_pick.addClass(class_activ);
this_pick.children('input').attr('checked','checked');
}
}

$(document).ready(function(e) {
	var widthWindow = $(window).outerWidth(true);
	$(window).resize(function() {
		widthWindow = $(window).outerWidth(true);
		if(widthWindow > 713){
			$('.close-menu').css('display','block');
			$('.katalog-menu').removeClass('open-menu');
			$('header').removeClass('open-menu open-buter');
		    $('.hid-menu').css('display','none');
		}
		else{
			$('.hid-menu').css('display','block');
			$('.buter-menu-icon').removeClass('open-menu');
		    $('.buter-menu-icon').removeClass('open-buter');
		    $('.close-menu').css('display','none');
			$('header').removeClass('open-menu open-buter');
		}
		
	});
	//alert (widthWindow);
	//меню каталог
	$('.katalog-menu').click(function(){
		if(widthWindow > 713){
			if($('.katalog-menu').hasClass('open-menu')){
				$('.katalog-menu').removeClass('open-menu');
				$('header').removeClass('open-menu');
				$('.hid-menu').slideUp();
			}
			else{
				$(this).addClass('open-menu');
				$('.hid-menu').slideDown();
				$('header').addClass('open-menu');
			}
		}
		else{
			
			$(this).addClass('open-menu');
			$('header').addClass('open-menu');
		}
	});
	
	$('.buter-menu-icon').click(function(){
		if($(this).hasClass('open-menu')){
			$('.hid-menu').slideUp();
			$(this).removeClass('open-menu');
			$(this).removeClass('open-buter');
			setTimeout(function(){
				$('header').removeClass('open-menu');
				$('.hid-menu').css('display','block');
			}, 500);
			$('.close-menu').slideUp();
		}
		else{
			$(this).addClass('open-menu');
			$(this).addClass('open-buter');
			$('.close-menu').slideDown();
		}
	});
	$('.back-arrow-menu').click(function(){
		$('header').removeClass('open-menu');
	});
	//кнопка показать больше проектов
	$('.button-all-project').click(function(){
		var heightallproject = $('.hide-all-projects').height();
		$('.projects').height(heightallproject);
		$(this).css({'display':'none'});
		$('.link-all-project').fadeIn();
		/*$( ".projects" ).animate({
	      height: heightallproject
	    }, 1500);
		console.log(heightallproject);*/
	
	});
	
	$('.button-more-project').click(function(){
		var heightmoreproject = $('.hide-project-card').height();
		$('.project-card').height(heightmoreproject);
		$(this).css({'display':'none'});
		$('.link-more-project').fadeIn();
		/*$( ".projects" ).animate({
	      height: heightallproject
	    }, 1500);
		console.log(heightallproject);*/
	
	});
	
	//placeholder
	placeh('#name-map, #phone-map');
	placeh('#name-main-map, #phone-main-map');
	placeh('.one-text-box input');
	placeh('#calc-com');
	placeh('.one-text-box-phone input');
	
	//кнопка показать больше работ
	$('.button-all-jobs').click(function(){
		var heightalljobs = $('.hide-all-cards').height();
		$('.all-cards').height(heightalljobs);
		$(this).css({'display':'none'});
		$('.link-all-jobs').fadeIn();
		/*$( ".projects" ).animate({
	      height: heightallproject
	    }, 1500);
		console.log(heightallproject);*/
	
	});
	
	//кнопка показать больше работа
	$('.button-more-jobs').click(function(){
		var heightmorejobs = $('.hide-more-cards').height();
		$('.more-cards').height(heightmorejobs);
		$(this).css({'display':'none'});
		$('.link-more-jobs').fadeIn();
		/*$( ".projects" ).animate({
	      height: heightallproject
	    }, 1500);
		console.log(heightallproject);*/
	
	});
	
	//наведение на карточку товара
	$('.name-project, .button-project, .one-project img').hover(function(){
		$(this).closest('.one-project').find('.name-project').css({'text-decoration':'underline'});
	},function(){	
		$(this).closest('.one-project').find('.name-project').css({'text-decoration':'none'});
	});
	
	/*$('.button-project').hover(function(){
		$(this).closest('.info-project').find('.name-project').css({'text-decoration':'underline'});
	},function(){	
		$(this).closest('.info-project').find('.name-project').css({'text-decoration':'none'});
	});
	
	$('.one-project img').hover(function(){
		$(this).closest('.one-project').find('.name-project').css({'text-decoration':'underline'});
	},function(){	
		$(this).closest('.one-project').find('.name-project').css({'text-decoration':'none'});
	});*/
	
	
	
	
	//активация пунктов фильтров
	$('.button-filter').click(function(){
		if($(this).hasClass('open-filter'))
			{
			$(this).removeClass('open-filter');
			$(this).parent().find('.filter-list').slideUp(300);
			}
		else
			{
			$(this).closest('.one-filter').siblings().find('.button-filter').removeClass('open-filter');
			$(this).closest('.one-filter').siblings().find('.filter-list').slideUp(300);
			$(this).addClass('open-filter');
			$(this).parent().find('.filter-list').slideDown(300);
			$(document).mouseup(function (e){ 
				var div = $('.one-filter');
				if (!div.is(e.target) 
					&& div.has(e.target).length === 0) {
					div.find('.filter-list').slideUp(300);
					div.find('.button-filter').removeClass('open-filter');	
				}
			});
			}
	});
	
	$('.filter-list li').click(function(){
		$(this).siblings().removeClass('actvie');
		$(this).addClass('actvie');
		var nameFilter = $(this).attr('data-filter');
		$(this).closest('.one-filter').find('.button-filter').html(nameFilter);
		$(this).closest('.one-filter').find('.button-filter').removeClass('open-filter');
		$(this).closest('.one-filter').find('.button-filter').addClass('active-filter');
		$(this).closest('.filter-list').slideUp(300);
		
		//alert(nameFilter);
	});
	$('.button-filter').on('click', '.close-button-filter', function() {
		$(this).closest('.button-filter').removeClass('active-filter');
		var defaultName = $(this).closest('.button-filter').attr('data-default');
		$(this).closest('.one-filter').find('.actvie').removeClass('actvie');
		$(this).closest('.button-filter').html(defaultName);
		
		
	});
	
	//нижняя панель страниц каталога
	$('.page-item').click(function(){
		var clickId = $(this).attr('id');
		$(this).siblings().removeClass('active-item');;
		if(clickId == 'previous-page' || clickId == 'next-page'){
			
		}
		else{
			$(this).addClass('active-item');
		}
	});
	
	
	//слайдер
	var indexSlide = 0;
	var countAllSlide = $('.slide').length;
	$('.count-slide').text(countAllSlide);
	var activeSlide = 1;
	$('.arrow-slider').click(function(){
		var slider = $(this).closest('.slider');
		var slide = slider.find('.slide');
		var sliderTrack =slider.find('.slider-track');
		var widthSlideTrue = slider.find('.slide').outerWidth(true);
		var countSlide = slide.length;
		var transformTrack;
		
		var widhtSlider = slider.outerWidth();
		var widthSlide = slider.find('.slide').outerWidth(); 
		var ostatokSlide = widhtSlider - widthSlide;
		//alert(ostatokSlide);
		if($(this).attr('id') == 'nav-left')
			{
			indexSlide--;
			$('#nav-right').fadeIn(300);
			transformTrack = widthSlideTrue * indexSlide;
			sliderTrack.css('transform', 'translateX(-'+transformTrack+'px)');
			activeSlide--;
			if(indexSlide <= 0)
				{
				$('#nav-left').fadeOut(300);
				}	
			}
		else
			{
			indexSlide++;
			$('#nav-left').fadeIn(300);
			activeSlide++;
			if(activeSlide >= countAllSlide)
				{
				transformTrack = widthSlideTrue * indexSlide - ostatokSlide;
				sliderTrack.css('transform', 'translateX(-'+transformTrack+'px)');
				$('#nav-right').fadeOut(300);
				}
			else
				{
				transformTrack = widthSlideTrue * indexSlide;
				sliderTrack.css('transform', 'translateX(-'+transformTrack+'px)');
				}	
			}	
		$('.active-slide').text(activeSlide);
	});
	
	//аккардион
	$('.line-equip').click(function(){
		if(!$(this).hasClass('open-equip'))
		{
			$(this).siblings().removeClass('open-equip');
			$(this).addClass('open-equip');
			$(this).siblings().find('.desc-equip').slideUp(300);
			$(this).find('.desc-equip').slideDown(300);
		}
		else
		{
			$(this).removeClass('open-equip');
			$(this).find('.desc-equip').slideUp(300);
		}
	});
	$('.one-text').siblings().css('display', 'none');
	$('.one-text').eq(0).fadeIn();
	var widthOneType = $('.one-type').outerWidth(true);
	$('.line-type').css('width', widthOneType - 32);
	$('.one-type').click(function(){
		var oneTypeIndex = $(this).index();
		var oneTypeLeft = $(this).position().left;
		//alert(oneTypeLeft);
		$('.line-type').css('left', oneTypeLeft);
		$(this).siblings().removeClass('active-type');
		$(this).addClass('active-type');
		$('.one-text').siblings().css('display', 'none');
		$('.one-text').eq(oneTypeIndex).fadeIn();
	});
	//cheakbox
	$('.chekbox-dop').each(function () {
		chekb_val($(this),'activ-chek');
	});
	$('.chekbox-dop').click(function(){
		chekb($(this),'active-cheked');
	});
	
	$('.calc-chek-box').each(function () {
		chekb_val($(this),'activ-chek');
	});
	$('.calc-chek-box').click(function(){
		chekb($(this),'active-cheked');
	});
	
	//radiobox
	$('.radio-chek').each(function () {
		radiob_val($(this),'activ-chek');
	});
	$('.radio-chek').click(function(){
		radiob($(this),'.radio-chek','activ-chek');
	});
	
	//slider при наведении на выполненные работы
	$('.pic-card').each(function(ind){
		if($(this).find('.card-img').length > 1)
		{
			$(this).addClass('pic-card-katalog');
			var htmlAllPic = $(this).html();
			$(this).html('<div class="all-pic-card">'+htmlAllPic+'</div>');
			$(this).append('<div class="navigate-pic-card"></div>');
			$(this).append('<div class="mouse-pic"></div>');
			var countImage = 0;
			$(this).find('.card-img').each(function(i){
				$('.pic-card').find('.mouse-pic').append('<div class="mouse-one-pic"></div>');
				countImage++;
				if(countImage == 1){
					$('.pic-card').eq(ind).find('.navigate-pic-card').append('<div class="one-navigate active"></div>');
				}
				else{
					$('.pic-card').eq(ind).find('.navigate-pic-card').append('<div class="one-navigate"></div>');
				}
				
			});
			var summImages = $(this).find('.card-img').length;
			var widthNavigatePicCard = $(this).find('.navigate-pic-card').width() / summImages;
			var widthMouseBlock = $(this).find('.mouse-pic').width() / summImages;
			//alert(widthNavigatePicCard);
			$(this).find('.one-navigate').css('width',widthNavigatePicCard - 6);
			$(this).find('.mouse-one-pic').css('width','calc(100% /'+summImages+')' );
			//функция наведения на слайдер
			$(this).find('.mouse-one-pic').mouseover(function(){
				var hoverIndex = $(this).index();
				$(this).closest('.pic-card').find('.card-img').eq(hoverIndex).siblings().css('display','none');
				$(this).closest('.pic-card').find('.card-img').eq(hoverIndex).css('display','block');
				$(this).closest('.pic-card').find('.one-navigate').eq(hoverIndex).siblings().removeClass(' active');
				$(this).closest('.pic-card').find('.one-navigate').eq(hoverIndex).addClass('active');
			});
			$(this).find('.mouse-one-pic').mouseout(function(){
				$(this).closest('.pic-card').find('.card-img').siblings().css('display','none');
				$(this).closest('.pic-card').find('.card-img').eq(0).css('display','block');
				$(this).closest('.pic-card').find('.one-navigate').siblings().removeClass(' active');
				$(this).closest('.pic-card').find('.one-navigate').eq(0).addClass('active');
			});
		}
	});	
	
	var countImageCard= $('.hidden-photo').find('img').length;
	$('.count-photo').find('span').text(countImageCard);
	
	//подсчет картинок и выравнивание их
	$('.more-img-block').each(function(){
		var countImgBlock = $(this).find('.img-text-page').length;
		if(countImgBlock == 2){
			$(this).find('.img-text-page').addClass('double-img');
		}
		if(countImgBlock == 3){
			$(this).find('.img-text-page').addClass('triple-img');
		}
	});
	
	
	//калькулятор стоимости фокус на imput
	$('.one-text-box').find('input').focus(function(){
		$(this).closest('.one-text-box').find('span').fadeIn();
	});
	$('.one-text-box').find('input').focusout(function(){
		$(this).closest('.one-text-box').find('span').css('display','none');
	});
	
	
	
	$('.sel-calc').click(function(){
		if($(this).hasClass('open-filter')){
		$(this).removeClass('open-filter');	
		$(this).closest('.one-text-box').find('.filter-calc-list').slideUp(300);
		}
		else{
		$(this).addClass('open-filter');	
		$(this).closest('.one-text-box').find('.filter-calc-list').slideDown(300);
		$(document).mouseup(function (e){ 
			var div = $('.one-text-box');
			if (!div.is(e.target) 
				&& div.has(e.target).length === 0) {
				div.find('.filter-calc-list').slideUp(300);
				div.find('.sel-calc').removeClass('open-filter');	
			}
		});
		}
	});
	
	$('.filter-calc-list li').click(function(){
		$(this).siblings().removeClass('open-filter');
		var nameFilter = $(this).text();
		//alert(nameFilter);
		$(this).closest('.one-text-box').find('.sel-calc').removeClass('open-filter');
		$(this).closest('.one-text-box').find('.sel-calc span').text(nameFilter);
		$(this).closest('.filter-calc-list').slideUp(300);
		
		//alert(nameFilter);
	});
	
	$(document).mouseup(function (e){ 
		var div = $('.consult-windows, .order-window, .ty-window');
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) {
			div.fadeOut();
			div.closest('.shadow-consult').fadeOut();
			//div.find('.sel-calc').removeClass('open-filter');	
		}
	});
	
	
	
});
});