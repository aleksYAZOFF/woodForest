
(function ($) {
var hwNeedLinks = true;

$(document).ready(function(e) {
	var slideNum = 3;
	var widthSlide = $('#slider .slide').outerWidth(true);
	var transXnew = widthSlide*2*(-1);
	slideCount = $('#slider .slide').size();
	photoCount = slideCount-4;
	$('.slider-block').find('.count-photo').children('.photo-two').text(photoCount);
	var animSlide = function(arrow){
		
		
		if(arrow == 'next')
			{
			transXnew = transXnew - widthSlide;
			$('#slider').css('transition', 'all 0.6s');
			$('#slider').css('transform', 'translateX('+transXnew+'px)');
			slideNum++
			if(slideNum == (slideCount-1))
				{
				slideNum=3;
				setTimeout(function(){
				$('#slider').css('transition', 'none');
				$('#slider').css('transform', 'translateX('+widthSlide*2*(-1)+'px)');
				transXnew = widthSlide*2*(-1);
				}, 600);
				}
			}
		else if(arrow == 'prew')
			{
			transXnew = transXnew + widthSlide;
			$('#slider').css('transition', 'all 0.6s');
			$('#slider').css('transform', 'translateX('+transXnew+'px)');
			slideNum-=1
			if(slideNum == 1)
				{
				slideNum=slideCount-3;
				setTimeout(function(){
				$('#slider').css('transition', 'none');
				$('#slider').css('transform', 'translateX('+widthSlide*(slideNum-1)*(-1)+'px)');
				transXnew = widthSlide*(slideNum-1)*(-1);
				}, 600);
				}
			}
			var photoNum = slideNum-2;
			if(photoNum==0){photoNum=3;}
			$('.slider-block').find('.count-photo').children('.photo-one').text(photoNum);
		}
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
	.prependTo('.slider-block');		
	$('#nextbutton').click(function(){
		animSlide("next");
		return false;
		})
	$('#prewbutton').click(function(){
		animSlide("prew");
		return false;
		})
}
});
})(jQuery);