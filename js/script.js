$(document).ready(function(){
	$('.mobile-menu').click(function(){
		$('.header-menu nav').fadeToggle(1000);
		return false
	});
	WOW = new WOW({
		boxClass                  :       'wow',      //default
		animateClass              :       'animated', //default
		offset                    :       0,          //default
		mobile                    :       true,       //default
		live                      :       true        //default
	})
	WOW.init();
});