// CUSTOM JS //

//  header fix start //
$(window).scroll(function() {
    var nav = $('.header_fix');
    var top = 0.01;
    if ($(window).scrollTop() >= top) {
        nav.addClass('affix');
	} 
	else {
        nav.removeClass('affix');
	}
});
if (matchMedia('only screen and (max-width:767px)').matches) {
	$(window).scroll(function() {
		var nav = $('.header_fix');
		var top = 1;
		if ($(window).scrollTop() >= top) {
			nav.addClass('affix');
		} 
		else {
			nav.removeClass('affix');
		}
	});
}
//  header fix end //

// mobile menu responsive start //
$('.mobile_menu').click(function(){
	$(".collapse").addClass("slide_effect");
	if ($('.slide_effect').length) {
		$('body').addClass('modal-open');
	} 
})
$('.mobile_close').click(function(){
	$(".collapse").removeClass("slide_effect");
	$('body').removeClass('modal-open');
})

if (matchMedia('only screen and (max-width:767px)').matches) {
	//$(".mobile_logo").show();
}

// mobile menu responsive start //
$('.mobile_menu_user').click(function(){
	$(".sidebar_menu").addClass("slide_effect");
	if ($('.slide_effect').length) {
		$('body').addClass('modal-open');
	} 
})
$('.user_mobile_close').click(function(){
	$(".sidebar_menu").removeClass("slide_effect");
	$('body').removeClass('modal-open');
})

$(function(){
	var $button = $('.navbar-brand').clone();
	$('.mobile_logo span').html($button);
});
// mobile menu responsive end //



// SCROLL JS START//
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
			}else{
            $('#scroll').fadeOut();
		}
	});
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
	});	
});
// SCROLL JS END//

// text-capitalize start //
function applySentenceCase() {
    var selector = document.getElementsByClassName('text-capitalize');
    for( i =0; i<selector.length; i++) {
      var selectorTest = selector[i].innerHTML;
      var replaceText = (selectorTest.charAt(0).toUpperCase() + selectorTest.substr(1).toLowerCase());
      selector[i].innerHTML = replaceText;
    }
}
applySentenceCase();
// text-capitalize end //

// owl carousel script start //
$(document).ready(function() {
	
    // main slider //
    $("#home_slider").owlCarousel({
		nav:false,
		dots: true,
		autoplayHoverPause:true,
		//animateOut: 'fadeOut',
		autoplayTimeout:5000,
		autoplaySpeed: 1500,
		loop:true,
        //center: true,
		autoplay:false,
		items : 1,	
		responsiveClass: true,
		responsive: {
			0:{
		       loop:true,
			   items: 1
			},
			480:{
		       loop:true,
			   items: 1
			},
			768:{
		      nav:false,
			  items: 1
			},
			1199:{
			  items: 1
			}
		}
	});
	
	// slide arrow icon //
	$( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
	$( ".owl-next").html('<i class="fa fa-angle-right"></i>');
	
});

// owl carousel script end //

	



// wow script start //
wow = new WOW(
	{
		animateClass: 'animated',
		offset:       100,
		callback:     function(box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	}
);
wow.init();
//document.getElementById('moar').onclick = function() {
//var section = document.createElement('section');
// section.className = 'section--purple wow fadeInDown';
// this.parentNode.insertBefore(section, this);
//};

// wow script end //



if (matchMedia('only screen and (max-width:767px)').matches) {
	
	$('.mobile_topbar').prepend($('.language_box'));
	
}

// ADD ACTIVE CLASS //

$(document).ready(function() {
	
	$(".ak_menu .navbar-nav li a").click(function () {
		$(".ak_menu .navbar-nav li a").removeClass("active");
		$(this).addClass("active");   
	});
	
});







