 window.requestAnimFrame=function()
 {
	 return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();
	 var XANI=XANI||{};
 	 XANI.Bootstrap=function(){window.addEventListener("load",function(){var a=document.querySelectorAll(".carousel");
 for(var b=0;b<a.length;b++)
 new XANI.Carousel(a[b])},!1)}();
 var XANI=XANI||{};
 XANI.GUI=function(){var a=0,b=$("body.home #news-container ol > li > span");
 b.bind("selectstart",!1).bind("click touchstart",function(b){var c=$(this),d=parseInt(c.data("index"),10)-1;
 if(d!==a){$("#news-container ul li").removeClass("next").removeClass("prev").removeClass("transitionable");
 $("#news-container ul li:gt("+d+")").addClass("next");$("#news-container ul li:lt("+d+")").addClass("prev");
 $("#news-container ul li:eq("+d+")").addClass("transitionable");$("#news-container ul li:eq("+a+")").addClass("transitionable");
 $("#news-container ol li").removeClass("active");c.closest("li").addClass("active");a=d}b.stopImmediatePropagation();return!1});
 $("header #see-menu").bind("click",function(a){var b=$("nav ul"),c=$(this);
 b.toggleClass("active");
 if(b.is(":visible")){c.addClass("menu");
 c.text("Hide Menu")}else{c.removeClass("menu");
 c.text("See Menu")}return!1})}();
 var XANI=XANI||{};
 XANI.Easing={Linear:function(a){return Math.min(Math.max(0,a),1)}};var TWEEN={Easing:{Quintic:{EaseIn:function(a){return a*a*a*a*a},EaseOut:function(a){return(a-=1)*a*a*a*a+1},EaseInOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}}}};
 XANI.Carousel=function(a){function B(){if(m.clientWidth&&m.clientHeight){C();
 if(u){var a=A((Date.now()-z)/y);XANI.CarouselAnimations[x]({percentage:a,duration:y,onScreenBufferCtx:j,offScreenBufferCtx:k,offScreenBuffer:g,viewportChanged:t,width:r,height:s,fromImage:o[p],toImage:o[q]});if(a>=1){var c=o[p];u=!1;p=q;v=Date.now();w=c.getAttribute("data-time")||b;n.setAttribute("href",o[p].getAttribute("data-link")||"default.htm")}}else l.length&&l[l.length-1]!=p&&(w=0)}t=!1;requestAnimFrame(B)}
 function C(){var a=Date.now()-v,b=o[p];if(!u&&a>w){l.length||E(1);q=l[l.length-1];l.length=0;x=b.getAttribute("data-transition")||c;y=b.getAttribute("data-duration")||d;z=Date.now();u=!0}}
 function D(){if(m.clientWidth&&m.clientHeight){r=f.width=g.width=m.clientWidth;s=f.height=g.height=m.clientHeight;t=!0;J()}}
 function E(a){var b=p;l.length?b=l[l.length-1]:u&&(b=q);var c=(b+o.length+a)%o.length;l.push(c)}
 function F(){o[0].style.visibility="hidden";m.appendChild(f)}function G(a){E(1);w=0;a.preventDefault()}function H(a){E(-1);w=0;a.preventDefault()}function I(){h.setAttribute("class","next active");h.setAttribute("href","#");h.addEventListener("click",G,!1);h.addEventListener("touchend",G,!1);i.setAttribute("class","prev active");i.setAttribute("href","#");i.addEventListener("click",H,!1);i.addEventListener("touchend",H,!1);
 m.appendChild(i);m.appendChild(h)}function J(){var a=o[p];j.drawImage(a,0,0,r,s)}
 function K(){
	 if(o.length===1)return;window.addEventListener("resize",D,!1);
 D();
 F();
 I();
 B()
 }
 var b=4e3,c="crossFade",d=700,e=XANI.Easing.Linear,f=document.createElement("canvas"),g=document.createElement("canvas"),h=document.createElement("a"),i=document.createElement("a"),j=f.getContext("2d"),k=g.getContext("2d"),l=[],m=a,n=m.querySelector("#storylink"),o=m.querySelectorAll("img"),p=0,q=0,r=0,s=0,t=!1,u=!1,v=Date.now(),w=o[0].getAttribute("data-time")||b,x=0,y=0,z=0,A=window[o[0].getAttribute("easing")]||e;K()};
 XANI.CarouselAnimations={constants:{STRIPES:10,STRIPE_HORIZONTAL:1,STRIPE_VERTICAL:2,STRIPE_DIRECTION:1,STRIPE_DELAY:30},crossFade:function(a){var b=a.percentage,c=a.onScreenBufferCtx,d=a.width,e=a.height,f=a.fromImage,g=a.toImage;c.save();c.globalAlpha=1-b;c.drawImage(f,0,0,d,e);c.globalAlpha=b;c.drawImage(g,0,0,d,e);c.restore()},dipToBlack:function(a){var b=a.percentage,c=a.onScreenBufferCtx,d=a.offScreenBufferCtx,e=a.offScreenBuffer,f=a.width,g=a.height,h=a.fromImage,i=a.toImage,j=0;b*=2;c.clearRect(0,0,f,g);
 if(b===0){d.save();d.clearRect(0,0,f,g);
 d.fillStyle="#000";d.fillRect(0,0,f,g);
 d.globalCompositeOperation="destination-in";
 d.drawImage(i,0,0,f,g);
 d.restore()}c.save();c.drawImage(e,0,0,f,g);if(b<1){j=1-b;c.globalAlpha=TWEEN.Easing.Quintic.EaseIn(j);
 c.drawImage(h,0,0,f,g)}else{j=b-1;c.globalAlpha=TWEEN.Easing.Quintic.EaseOut(j);c.drawImage(i,0,0,f,g)}c.restore()},stripeHorizontal:function(a){a.stripeDirection=XANI.CarouselAnimations.constants.STRIPE_HORIZONTAL;XANI.CarouselAnimations._stripes(a)},stripeHorizontalAlternated:function(a){a.stripeDirection=XANI.CarouselAnimations.constants.STRIPE_HORIZONTAL;a.stripeAlternatedX=!0;XANI.CarouselAnimations._stripes(a)},stripeVertical:function(a){a.stripeDirection=XANI.CarouselAnimations.constants.STRIPE_VERTICAL;
 XANI.CarouselAnimations._stripes(a)},stripeVerticalAlternated:function(a){a.stripeDirection=XANI.CarouselAnimations.constants.STRIPE_VERTICAL;a.stripeAlternatedY=!0;
 XANI.CarouselAnimations._stripes(a)},_stripes:function(a){var b=a.percentage,c=a.duration,d=b*c,e=a.onScreenBufferCtx,f=a.offScreenBufferCtx,g=a.offScreenBuffer,h=a.width,i=a.height,j=a.fromImage,k=a.toImage,l=a.stripeAlternatedX||!1,m=a.stripeAlternatedY||!1,n=j.getAttribute("data-stripecount")||XANI.CarouselAnimations.constants.STRIPES,o=a.stripeDirection||XANI.CarouselAnimations.constants.STRIPE_DIRECTION,p=j.getAttribute("data-stripedelay")||XANI.CarouselAnimations.constants.STRIPE_DELAY,q=c-(n-1)*p,r=a.easingFunction||TWEEN.Easing.Quintic.EaseInOut,s=C*p,t=d-s,u=Math.min(1,t/q),v=0,w=0,x=0,y=0,z=0,A=0,B=0;if(o===XANI.CarouselAnimations.constants.STRIPE_VERTICAL){x=Math.ceil(h/n);y=i}else{x=h;y=Math.ceil(i/n)}if(b===0||a.viewportChanged){f.clearRect(0,0,h,i);f.drawImage(k,0,0,h,i)}e.clearRect(0,0,h,i);e.drawImage(j,0,0,h,i);for(var C=0;C<n;C++){s=C*p;t=d-s;u=Math.min(1,t/q);z=r(u);o===XANI.CarouselAnimations.constants.STRIPE_VERTICAL?A=C*x:B=C*y;if(d<s||z<=0||A>h||B>i)continue;v=z*x;w=z*y;o===XANI.CarouselAnimations.constants.STRIPE_VERTICAL?v=Math.min(x,h-A):w=Math.min(y,i-B);if(x<1||y<1||v<1||w<1)continue;e.drawImage(g,l&&C%2===0?h-v:A,m&&C%2===0?i-w:B,v,w,l&&C%2?h-v:A,m&&C%2?i-w:B,v,w)}}};var XANI=XANI||{};
 /*XANI.ShareSubscribe=function(){var a=$("#share-subscribe-toggle"),b=a.closest(".share-subscribe");a.click(function(){b.toggleClass("expanded");return!1});
 b.bind("click touchstart",function(a){a.stopPropagation()});$(document).bind("click touchstart",function(a){b.hasClass("expanded")&&b.removeClass("expanded")})}();var XANI=XANI||{},Modernizr=Modernizr||{};
 XANI.Tweets=function(){var a=$(".tweets"),b="../search.twitter.com/search.json",c="xani",d=2,e=36e5,f=400;$.ajaxSetup({cache:!0});$.getJSON(b+"@callback=@&rpp="+d+"&q=from:"+c,function(b){if(!!b.results){a.empty();$.each(b.results,function(b,c){var d=c.text.replace(/@([A-Z_0-9]*)/gi,'<a target="_blank" href="../twitter.com/$1">@$1</a>'),g=new Date(c.created_at),h=new Date,i=(h-g)/e,j=" hours ago",k=null;if(i<1){i*=60;j=" minutes ago"}i=Math.round(i)+j;k='<div class="tweet"><p>'+d+"</p>"+'<aside class="date">About '+i+"</aside>"+"</div>";k=$(k);if(Modernizr.opacity){k.hide();k.fadeIn(f)}k.appendTo(a)})}})}();*/