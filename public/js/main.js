/* 
 * Selecter v3.2.3 - 2014-10-24 
 * A jQuery plugin for replacing default select elements. Part of the Formstone Library. 
 * http://formstone.it/selecter/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

(function(e,t){"use strict";function l(t){t=e.extend({},a,t||{});if(u===null){u=e("body")}var n=e(this);for(var r=0,i=n.length;r<i;r++){c(n.eq(r),t)}return n}function c(t,r){if(!t.hasClass("selecter-element")){r=e.extend({},r,t.data("selecter-options"));r.multiple=t.prop("multiple");r.disabled=t.is(":disabled");if(r.external){r.links=true}var i=t.find("[selected]").not(":disabled"),o=t.find("option").index(i);if(!r.multiple&&r.label!==""){t.prepend('<option value="" class="selecter-placeholder" selected>'+r.label+"</option>");if(o>-1){o++}}else{r.label=""}var u=t.find("option, optgroup"),a=u.filter("option");if(!i.length){i=a.eq(0)}var f=o>-1?o:0,l=r.label!==""?r.label:i.text(),c="div";r.tabIndex=t[0].tabIndex;t[0].tabIndex=-1;var d="",v="";v+="<"+c+' class="selecter '+r.customClass;if(s){v+=" mobile"}else if(r.cover){v+=" cover"}if(r.multiple){v+=" multiple"}else{v+=" closed"}if(r.disabled){v+=" disabled"}v+='" tabindex="'+r.tabIndex+'">';v+="</"+c+">";if(!r.multiple){d+='<span class="selecter-selected">';d+=e("<span></span>").text(A(l,r.trim)).html();d+="</span>"}d+='<div class="selecter-options">';d+="</div>";t.addClass("selecter-element").wrap(v).after(d);var g=t.parent(".selecter"),y=e.extend({$select:t,$allOptions:u,$options:a,$selecter:g,$selected:g.find(".selecter-selected"),$itemsWrapper:g.find(".selecter-options"),index:-1,guid:n++},r);h(y);if(!y.multiple){N(f,y)}if(e.fn.scroller!==undefined){y.$itemsWrapper.scroller()}y.$selecter.on("touchstart.selecter",".selecter-selected",y,p).on("click.selecter",".selecter-selected",y,m).on("click.selecter",".selecter-item",y,w).on("close.selecter",y,b).data("selecter",y);y.$select.on("change.selecter",y,E);if(!s){y.$selecter.on("focusin.selecter",y,S).on("blur.selecter",y,x);y.$select.on("focusin.selecter",y,function(e){e.data.$selecter.trigger("focus")})}}}function h(t){var n="",r=t.links?"a":"span",i=0;for(var s=0,o=t.$allOptions.length;s<o;s++){var u=t.$allOptions.eq(s);if(u[0].tagName==="OPTGROUP"){n+='<span class="selecter-group';if(u.is(":disabled")){n+=" disabled"}n+='">'+u.attr("label")+"</span>"}else{var a=u.val();if(!u.attr("value")){u.attr("value",a)}n+="<"+r+' class="selecter-item';if(u.hasClass("selecter-placeholder")){n+=" placeholder"}if(u.is(":selected")){n+=" selected"}if(u.is(":disabled")){n+=" disabled"}n+='" ';if(t.links){n+='href="'+a+'"'}else{n+='data-value="'+a+'"'}n+=">"+e("<span></span>").text(A(u.text(),t.trim)).html()+"</"+r+">";i++}}t.$itemsWrapper.html(n);t.$items=t.$selecter.find(".selecter-item")}function p(e){e.stopPropagation();var t=e.data;t.touchStartEvent=e.originalEvent;t.touchStartX=t.touchStartEvent.touches[0].clientX;t.touchStartY=t.touchStartEvent.touches[0].clientY;t.$selecter.on("touchmove.selecter",".selecter-selected",t,d).on("touchend.selecter",".selecter-selected",t,v)}function d(e){var t=e.data,n=e.originalEvent;if(Math.abs(n.touches[0].clientX-t.touchStartX)>10||Math.abs(n.touches[0].clientY-t.touchStartY)>10){t.$selecter.off("touchmove.selecter touchend.selecter")}}function v(e){var t=e.data;t.touchStartEvent.preventDefault();t.$selecter.off("touchmove.selecter touchend.selecter");m(e)}function m(n){n.preventDefault();n.stopPropagation();var r=n.data;if(!r.$select.is(":disabled")){e(".selecter").not(r.$selecter).trigger("close.selecter",[r]);if(!r.mobile&&s&&!o){var i=r.$select[0];if(t.document.createEvent){var u=t.document.createEvent("MouseEvents");u.initMouseEvent("mousedown",false,true,t,0,0,0,0,0,false,false,false,false,0,null);i.dispatchEvent(u)}else if(i.fireEvent){i.fireEvent("onmousedown")}}else{if(r.$selecter.hasClass("closed")){g(n)}else if(r.$selecter.hasClass("open")){b(n)}}}}function g(e){e.preventDefault();e.stopPropagation();var t=e.data;if(!t.$selecter.hasClass("open")){var n=t.$selecter.offset(),r=u.outerHeight(),i=t.$itemsWrapper.outerHeight(true),s=t.index>=0?t.$items.eq(t.index).position():{left:0,top:0};if(n.top+i>r){t.$selecter.addClass("bottom")}t.$itemsWrapper.show();t.$selecter.removeClass("closed").addClass("open");u.on("click.selecter-"+t.guid,":not(.selecter-options)",t,y);C(t)}}function y(t){t.preventDefault();t.stopPropagation();if(e(t.currentTarget).parents(".selecter").length===0){b(t)}}function b(e){e.preventDefault();e.stopPropagation();var t=e.data;if(t.$selecter.hasClass("open")){t.$itemsWrapper.hide();t.$selecter.removeClass("open bottom").addClass("closed");u.off(".selecter-"+t.guid)}}function w(t){t.preventDefault();t.stopPropagation();var n=e(this),r=t.data;if(!r.$select.is(":disabled")){if(r.$itemsWrapper.is(":visible")){var i=r.$items.index(n);if(i!==r.index){N(i,r);k(r)}}if(!r.multiple){b(t)}}}function E(t,n){var r=e(this),i=t.data;if(!n&&!i.multiple){var s=i.$options.index(i.$options.filter("[value='"+O(r.val())+"']"));N(s,i);k(i)}}function S(t){t.preventDefault();t.stopPropagation();var n=t.data;if(!n.$select.is(":disabled")&&!n.multiple){n.$selecter.addClass("focus").on("keydown.selecter-"+n.guid,n,T);e(".selecter").not(n.$selecter).trigger("close.selecter",[n])}}function x(e,t,n){e.preventDefault();e.stopPropagation();var r=e.data;r.$selecter.removeClass("focus").off("keydown.selecter-"+r.guid);if(r.$selecter.hasClass("open")){b(e);N(r.index,r)}k(r)}function T(t){var n=t.data;if(t.keyCode===13){if(n.$selecter.hasClass("open")){b(t);N(n.index,n)}k(n)}else if(t.keyCode!==9&&!t.metaKey&&!t.altKey&&!t.ctrlKey&&!t.shiftKey){t.preventDefault();t.stopPropagation();var r=n.$items.length-1,s=n.index<0?0:n.index;if(e.inArray(t.keyCode,i?[38,40,37,39]:[38,40])>-1){s=s+(t.keyCode===38||i&&t.keyCode===37?-1:1);if(s<0){s=0}if(s>r){s=r}}else{var o=String.fromCharCode(t.keyCode).toUpperCase(),u,a;for(a=n.index+1;a<=r;a++){u=n.$options.eq(a).text().charAt(0).toUpperCase();if(u===o){s=a;break}}if(s<0||s===n.index){for(a=0;a<=r;a++){u=n.$options.eq(a).text().charAt(0).toUpperCase();if(u===o){s=a;break}}}}if(s>=0){N(s,n);C(n)}}}function N(e,t){var n=t.$items.eq(e),r=n.hasClass("selected"),i=n.hasClass("disabled");if(!i){if(t.multiple){if(r){t.$options.eq(e).prop("selected",null);n.removeClass("selected")}else{t.$options.eq(e).prop("selected",true);n.addClass("selected")}}else if(e>-1&&e<t.$items.length){var s=n.html(),o=n.data("value");t.$selected.html(s).removeClass("placeholder");t.$items.filter(".selected").removeClass("selected");t.$select[0].selectedIndex=e;n.addClass("selected");t.index=e}else if(t.label!==""){t.$selected.html(t.label)}}}function C(t){var n=t.$items.eq(t.index),r=t.index>=0&&!n.hasClass("placeholder")?n.position():{left:0,top:0};if(e.fn.scroller!==undefined){t.$itemsWrapper.scroller("scroll",t.$itemsWrapper.find(".scroller-content").scrollTop()+r.top,0).scroller("reset")}else{t.$itemsWrapper.scrollTop(t.$itemsWrapper.scrollTop()+r.top)}}function k(e){if(e.links){L(e)}else{e.callback.call(e.$selecter,e.$select.val(),e.index);e.$select.trigger("change",[true])}}function L(e){var n=e.$select.val();if(e.external){t.open(n)}else{t.location.href=n}}function A(e,t){if(t===0){return e}else{if(e.length>t){return e.substring(0,t)+"..."}else{return e}}}function O(e){return typeof e==="string"?e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):e}var n=0,r=t.navigator.userAgent||t.navigator.vendor||t.opera,i=/Firefox/i.test(r),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(r),o=i&&s,u=null;var a={callback:e.noop,cover:false,customClass:"",label:"",external:false,links:false,mobile:false,trim:0};var f={defaults:function(t){a=e.extend(a,t||{});return e(this)},disable:function(t){return e(this).each(function(n,r){var i=e(r).parent(".selecter").data("selecter");if(i){if(typeof t!=="undefined"){var s=i.$items.index(i.$items.filter("[data-value="+t+"]"));i.$items.eq(s).addClass("disabled");i.$options.eq(s).prop("disabled",true)}else{if(i.$selecter.hasClass("open")){i.$selecter.find(".selecter-selected").trigger("click.selecter")}i.$selecter.addClass("disabled");i.$select.prop("disabled",true)}}})},destroy:function(){return e(this).each(function(t,n){var r=e(n).parent(".selecter").data("selecter");if(r){if(r.$selecter.hasClass("open")){r.$selecter.find(".selecter-selected").trigger("click.selecter")}if(e.fn.scroller!==undefined){r.$selecter.find(".selecter-options").scroller("destroy")}r.$select[0].tabIndex=r.tabIndex;r.$select.find(".selecter-placeholder").remove();r.$selected.remove();r.$itemsWrapper.remove();r.$selecter.off(".selecter");r.$select.off(".selecter").removeClass("selecter-element").show().unwrap()}})},enable:function(t){return e(this).each(function(n,r){var i=e(r).parent(".selecter").data("selecter");if(i){if(typeof t!=="undefined"){var s=i.$items.index(i.$items.filter("[data-value="+t+"]"));i.$items.eq(s).removeClass("disabled");i.$options.eq(s).prop("disabled",false)}else{i.$selecter.removeClass("disabled");i.$select.prop("disabled",false)}}})},refresh:function(){return f.update.apply(e(this))},update:function(){return e(this).each(function(t,n){var r=e(n).parent(".selecter").data("selecter");if(r){var i=r.index;r.$allOptions=r.$select.find("option, optgroup");r.$options=r.$allOptions.filter("option");r.index=-1;i=r.$options.index(r.$options.filter(":selected"));h(r);if(!r.multiple){N(i,r)}}})}};e.fn.selecter=function(e){if(f[e]){return f[e].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof e==="object"||!e){return l.apply(this,arguments)}return this};e.selecter=function(e){if(e==="defaults"){f.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}})(jQuery,window)
// Page resize function
$(window).resize(function() {

});
// Page init function
$(document).ready(initPage);
function initPage(){
	$('select').selecter({
        mobile: true
    });
}
// Custom Functions
