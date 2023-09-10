(function( $ ){
    $(document).ready( function() {
        $(setting.form).submit(function(e){
            e.preventDefault();
            let icon = $(setting.form + " .b13dm-newsletter-send-state");
            $(setting.form + " input").prop("readonly", true);
            let nonce = $(this).data("nonce");
            let option = $(this).data("option");
            let formData = $(setting.form).serialize();
            
            let formSecure = btoa(formData);
            data = {
                'action':setting.action,
                's':nonce,
                'd': formSecure,
                'ss':setting.ss,
                'o': option
            };
            
            icon.addClass("process");
            $.post(setting.ajaxurl, data,function(res){
                icon.removeClass("process");
                if(res.success == true){
					alert('ok');
                    icon.addClass("success");
                    $(setting.form + " .b13dm-newsletter-send-state");
                } else {
                    icon.addClass("error");
					alert('ko');
                }
            });
            setTimeout(() => {
                $(setting.form + " input").prop("readonly", false);
                icon.removeClass("process").removeClass("success").removeClass("error");
                $(setting.form).trigger("reset");
            }, 2500);
        });
    });
})(jQuery);