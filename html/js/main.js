$(document).ready(function(){

//loader
$(window).load(function() {
    $('.loader').delay(400).fadeOut(200);
	});	
	

//scroll to top	
$(window).scroll(function(){
	if($(this).scrollTop()>250){
		$('.scrollup').fadeIn();
	}else{
		$('.scrollup').fadeOut();
		}
	});
$('.scrollup').click(function(){
	$("html, body").animate({scrollTop:0}, 600);
	return false;
	});	
	
 
		

// owl-carousel banner 
$('#owldemo1').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
	
	
// owl-carousel services 
$('#owldemo2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
		margin:15,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
		margin:15,
        dots: false,
		navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            900: {
                items: 3
            },
            1024: {
                items: 4
            }
			
        }
    });
	
// owl-carousel testimonials 
$('#owldemo3').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
		margin:15,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
			1200: {
                items: 2
            }
			
        }
    });
		



//===== Mobile Menu =============================//
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });
        
    }
});	


				
				
// counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});		


// aos animation //
AOS.init(); 

	
	
