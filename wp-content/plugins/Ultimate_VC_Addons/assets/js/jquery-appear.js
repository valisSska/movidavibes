/** jQuery.bsf_appear
 * https://github.com/bas2k/jquery.bsf_appear/
 * http://code.google.com/p/jquery-bsf_appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
( function ( $ ) {
	$.fn.bsf_appear = function ( fn, options ) {
		const settings = $.extend(
			{
				//arbitrary data to pass to fn
				data: undefined,
				//call fn only on the first bsf_appear?
				one: true,
				// X & Y accuracy
				accX: 0,
				accY: 0,
			},
			options
		);
		return this.each( function () {
			const t = $( this );
			//whether the element is currently visible
			t.bsf_appeared = false;
			if ( ! fn ) {
				//trigger the custom event
				t.trigger( 'bsf_appear', settings.data );
				return;
			}
			const w = $( window );
			//fires the bsf_appear event when appropriate
			const check = function () {
				//is the element hidden?
				if ( ! t.is( ':visible' ) ) {
					//it became hidden
					t.bsf_appeared = false;
					return;
				}
				//is the element inside the visible window?
				const a = w.scrollLeft();
				const b = w.scrollTop();
				const o = t.offset();
				const x = o.left;
				const y = o.top;
				const ax = settings.accX;
				const ay = settings.accY;
				const th = t.height();
				const wh = w.height();
				const tw = t.width();
				const ww = w.width();
				if (
					y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax
				) {
					//trigger the custom event
					if ( ! t.bsf_appeared )
						t.trigger( 'bsf_appear', settings.data );
				} else {
					//it scrolled out of view
					t.bsf_appeared = false;
				}
			};
			//create a modified fn with some additional logic
			const modifiedFn = function () {
				//mark the element as visible
				t.bsf_appeared = true;
				//is this supposed to happen only once?
				if ( settings.one ) {
					//remove the check
					w.off( 'scroll', check );
					const i = $.inArray( check, $.fn.bsf_appear.checks );
					if ( i >= 0 ) $.fn.bsf_appear.checks.splice( i, 1 );
				}
				//trigger the original fn
				fn.apply( this, arguments );
			};
			//bind the modified fn to the element
			if ( settings.one )
				t.one( 'bsf_appear', settings.data, modifiedFn );
			else t.bind( 'bsf_appear', settings.data, modifiedFn );
			//check whenever the window scrolls
			w.on( 'scroll', check );
			//check whenever the dom changes
			$.fn.bsf_appear.checks.push( check );
			//check now
			check();
		} );
	};
	//keep a queue of bsf_appearance checks
	$.extend( $.fn.bsf_appear, {
		checks: [],
		timeout: null,
		//process the queue
		checkAll() {
			let length = $.fn.bsf_appear.checks.length;

			if ( length > 0 ) {
				while ( length-- ) {
					$.fn.bsf_appear.checks[ length ]();
				}
			}
		},
		//check the queue asynchronously
		run() {
			if ( $.fn.bsf_appear.timeout ) {
				clearTimeout( $.fn.bsf_appear.timeout );
				$.fn.bsf_appear.timeout = setTimeout(
					$.fn.bsf_appear.checkAll,
					20
				);
			} else {
				$.fn.bsf_appear.timeout = setTimeout(
					$.fn.bsf_appear.checkAll,
					20
				);
			}
		},
	} );
	//run checks when these methods are called
	$.each(
		[
			'append',
			'prepend',
			'after',
			'before',
			'attr',
			'removeAttr',
			'addClass',
			'removeClass',
			'toggleClass',
			'remove',
			'css',
			'show',
			'hide',
		],
		function ( i, n ) {
			const old = $.fn[ n ];
			if ( old ) {
				$.fn[ n ] = function () {
					const r = old.apply( this, arguments );
					$.fn.bsf_appear.run();
					return r;
				};
			}
		}
	);
} )( jQuery );
