function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}



function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';
	
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		
		for (var j = 0; j < pathBits.length; j++) {
			pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[j];
			document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
		}		
    }
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


$(document).ready(function(){
	
	$("#accept_cookie").click(function(e){
		$("#cookie_banner").hide();
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_google_analytics', 'ok', 1000);
		createCookie('cookies_policy_google_maps', 'ok', 1000);
		createCookie('cookies_policy_facebook', 'ok', 1000);
		createCookie('cookies_policy_facebook2', 'ok', 1000);
		e.stopPropagation();
		e.preventDefault();
		$("#cookie_form").submit();
		return false;
	});
	
	$("#deny_cookie").click(function(e){
		$("#cookie_banner").hide();
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_google_analytics', 'no', 1000);
		createCookie('cookies_policy_google_maps', 'no', 1000);
		createCookie('cookies_policy_facebook', 'no', 1000);
		createCookie('cookies_policy_facebook2', 'no', 1000);
		e.stopPropagation();
		e.preventDefault();
		return false;
	});
	
	

	$("#OK_google_analytics").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_google_analytics', 'ok', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});

	$("#NO_google_analytics").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_google_analytics', 'no', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});

	$("#OK_google_maps").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_google_maps', 'ok', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});

	$("#NO_google_maps").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_google_maps', 'no', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});

	$("#OK_facebook").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_facebook', 'ok', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});

	$("#NO_facebook").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_facebook', 'no', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});
	
	$("#OK_facebook2").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_facebook2', 'ok', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});

	$("#NO_facebook2").click(function(e){
		createCookie('cookies_policy2', 'ok', 1000);
		createCookie('cookies_policy_facebook2', 'no', 1000);
		alert('OK');
		$("#cookie_banner").hide();
		e.stopPropagation();
		e.preventDefault();
		return false;
	});
	
	

	$("#mobile_menu > li.menu-item-has-children > a").click(function(event){
		event.stopPropagation();
		event.preventDefault();				 
		var chld = $(this).next("#mobile_menu .sub-menu");
		$("#mobile_menu .sub-menu").not(chld).hide().removeClass('sub-menu-visited');
		if (chld.hasClass('sub-menu-visited')) {
			chld.hide();
			chld.removeClass('sub-menu-visited');
		} else {
			chld.fadeIn(250);
			chld.addClass('sub-menu-visited');
		}
		
		$(".mobile_menu_bar").trigger("click");
		
		return false;
	});
	
	$('.popup-modal').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		preloader: false
	});	
	
});
