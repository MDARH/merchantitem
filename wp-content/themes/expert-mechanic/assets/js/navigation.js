/* global ExpertMechanicScreenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

jQuery(function($){
 	"use strict";
   	jQuery('.main-menu-navigation > ul').superfish({
		delay:       500,
		animation:   {opacity:'show',height:'show'},  
		speed:       'fast'
   	});
});

function expert_mechanic_open() {
	window.expert_mechanic_mobileMenu=true;
	jQuery(".sidenav").addClass('show');
}
function expert_mechanic_close() {
	window.expert_mechanic_mobileMenu=false;
	jQuery(".sidenav").removeClass('show');
}

window.expert_mechanic_currentfocus=null;
expert_mechanic_checkfocusdElement();
var expert_mechanic_body = document.querySelector('body');
expert_mechanic_body.addEventListener('keyup', expert_mechanic_check_tab_press);
var expert_mechanic_gotoHome = false;
var expert_mechanic_gotoClose = false;
window.expert_mechanic_mobileMenu=false;
function expert_mechanic_checkfocusdElement(){
 	if(window.expert_mechanic_currentfocus=document.activeElement.className){
	 	window.expert_mechanic_currentfocus=document.activeElement.className;
 	}
}
function expert_mechanic_check_tab_press(e) {
	"use strict";
	// pick passed event or global event object if passed one is empty
	e = e || event;
	var activeElement;

	if(window.innerWidth < 999){
		if (e.keyCode == 9) {
			if(window.expert_mechanic_mobileMenu){
				if (!e.shiftKey) {
					if(expert_mechanic_gotoHome) {
						jQuery( ".main-menu-navigation ul:first li:first a:first-child" ).focus();
					}
				}
				if (jQuery("a.closebtn.responsive-menu").is(":focus")) {
					expert_mechanic_gotoHome = true;
				} else {
					expert_mechanic_gotoHome = false;
				}
			}else{
				if(window.expert_mechanic_currentfocus=="mobiletoggle"){
					jQuery( "" ).focus();
				}
			}
		}
	}
	if (e.shiftKey && e.keyCode == 9) {
		if(window.innerWidth < 999){
			if(window.expert_mechanic_currentfocus=="header-search"){
				jQuery(".mobiletoggle").focus();
			}else{
				if(window.expert_mechanic_mobileMenu){
					if(expert_mechanic_gotoClose){
						jQuery("a.closebtn.responsive-menu").focus();
					}
					if (jQuery( ".main-menu-navigation ul:first li:first a:first-child" ).is(":focus")) {
						expert_mechanic_gotoClose = true;
					} else {
						expert_mechanic_gotoClose = false;
					}
				
				}else{
					if(window.expert_mechanic_mobileMenu){
					}
				}
			}
		}
	}
 	expert_mechanic_checkfocusdElement();
}