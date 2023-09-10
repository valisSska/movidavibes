jQuery(function($){
	jQuery(window).resize(function(){
		resize()
	})
	function resize(){
		jQuery(".articoli_plus").each(function(index, element ){
			var t = jQuery(this);
			var w = t.width();
			var c = t.children("a");
			var c = c.children(".ap_desc");
			var cC = c.children(".ap_content"); //cC = children container
			var h2 = cC.children("h2");
			var p = cC.children("p");
			var draw  = c.children(".ap_draw");
			var scale = 0.75;
			if(w < 400){
				h2.css("font-size", resizeFont(h2.css("font-size"), scale));
				p.css("font-size", resizeFont(p.css("font-size"), scale));
				draw.css("background-size", "100% 35px");
				draw.css("top", "-35px");
				return;
			} 
			h2.css("font-size", 32);
			p.css("font-size", 16);
			draw.css("background-size", "100% 55px");
			draw.css("top", "-50px");
		});
	}
	
	function resizeFont(start, scale){
		start = start.replace("px","");
		var minSize = 14;
		if(start > minSize){
			return start * scale;
		}
		return minSize;
	}
	
	resize();
});