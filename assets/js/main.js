(function($){
    $(document).ready(function(){
        $('.hero-head-sliders').slick({
            prevArrow: '<button class="headline-arrow headline-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="headline-arrow headline-next"><i class="fas fa-chevron-right"></i></button>',
            autoplay: true
        });

        $('.feature-product-slides').slick({
            slidesToShow: 4,
            prevArrow: '<button class="fpro-arrow fpro-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="fpro-arrow fpro-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('.menu-toggle i').on('click', function(){
            $('.mobile-menu-wrap').addClass('active-menu');
        });

        $('button.menu-times').on('click', function(){
            $('.mobile-menu-wrap').removeClass('active-menu');
        });


        $('.testimony-sliders').slick({
            slidesToShow: 3,
            prevArrow: '<button class="review-arrow review-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button class="review-arrow review-next"><i class="fas fa-chevron-right"></i></button>',
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });


        $('ul.nav-list li a').on('mouseover', function(){
           var mega_id =  $(this).attr('data-mega');
            $('#category-'+mega_id).show();
            $('#category-'+mega_id).addClass('hover-class-added');
            console.log(mega_id);
        });

        $('.mega-menu-wrap').on('mouseleave', function(){
            var mega_id =  $(this).attr('data-mega');
            $('.mega-menu-wrap').hide();
 
         });

         $('.accor-btn').on('click', function(e){
            e.preventDefault();

            $(this).next().slideToggle();
         });

         $('select').niceSelect();


         $( "#slider-range" ).slider({
            range: true,
            min: 749,
            max: 34499,
            values: [ 749, 34499 ],
            slide: function( event, ui ) {
              $( "#slider-range .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#slider-range .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#slider-range span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$749</span>');
        $('#slider-range span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$34499</span>');

          $( "#mslider-range" ).slider({
            range: true,
            min: 749,
            max: 34499,
            values: [ 749, 34499 ],
            slide: function( event, ui ) {
              $( "#mslider-range .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#mslider-range .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          

        $('#mslider-range span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$749</span>');
        $('#mslider-range span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$34499</span>');

        $( "#slider-range2" ).slider({
            range: true,
            min: 27,
            max: 301,
            values: [ 27, 301 ],
            slide: function( event, ui ) {
              $( "#slider-range2 .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#slider-range2 .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#slider-range2 span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$27</span>');
        $('#slider-range2 span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$301</span>');

        $( "#mslider-range2" ).slider({
            range: true,
            min: 27,
            max: 301,
            values: [ 27, 301 ],
            slide: function( event, ui ) {
              $( "#mslider-range2 .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#mslider-range2 .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#mslider-range2 span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$27</span>');
        $('#mslider-range2 span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$301</span>');


        $( "#slider-range3" ).slider({
            range: true,
            min: 27,
            max: 104,
            values: [ 27, 104 ],
            slide: function( event, ui ) {
              $( "#slider-range3 .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#slider-range3 .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#slider-range3 span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$27</span>');
          $('#slider-range3 span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$301</span>');

        $( "#mslider-range3" ).slider({
            range: true,
            min: 27,
            max: 104,
            values: [ 27, 104 ],
            slide: function( event, ui ) {
              $( "#mslider-range3 .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#mslider-range3 .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#mslider-range3 span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$27</span>');
         $('#mslider-range3 span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$301</span>');

        $( "#slider-range4" ).slider({
            range: true,
            min: 1,
            max: 273,
            values: [ 1, 273 ],
            slide: function( event, ui ) {
              $( "#slider-range4 .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#slider-range4 .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#slider-range4 span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$1</span>');
          $('#slider-range4 span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$273</span>');

        $( "#mslider-range4" ).slider({
            range: true,
            min: 1,
            max: 273,
            values: [ 1, 273 ],
            slide: function( event, ui ) {
              $( "#mslider-range4 .handle-min-price" ).html( "$" + ui.values[ 0 ]);
              $( "#mslider-range4 .handle-max-price" ).html( "$" + ui.values[ 1 ]);
            }
          });

          $('#mslider-range4 span.ui-slider-handle:nth-child(2)').append('<span class="handle-tooltip handle-min-price">$1</span>');
         $('#mslider-range4 span.ui-slider-handle:last-child').append('<span class="handle-tooltip handle-max-price">$273</span>');

        $('.filter-drop-btn').on('click', function(){
            
            if($(this).next().hasClass('active-filter-area')){
                $(this).next().removeClass('active-filter-area');
                console.log('true');
            }else{
                $('.filter-dropdown').removeClass('active-filter-area');
                $(this).next().addClass('active-filter-area');
                console.log('false');
            }
            
            $(this).toggleClass('active-filter-btn');
        });


        $('.filter-accor').on('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active-filter-btn');
        });

        $('.mobile-filter-wrap button').on('click', function(){
            $('.mobile-filter-fields').show();
        });

        $('.m-filter-close').on('click', function(){
            $('.mobile-filter-fields').hide();
        });

        $('.m-filter-close').on('click', function(){
            $('.mobile-filter-fields').hide();
        });

        $('.submit-filter').on('click', function(){
            $('.mobile-filter-fields').hide();
        });


        // qunatity increament
        $('.qty-plus').on('click', function(){
            var value = $('.qty-input');
            value.val(Number(value.val())+1);
        });
        // qunatity decreament          
        $('.qty-minus').on('click', function(){
            var value = $('.qty-input');
            var amount = Number(value.val());
            if(amount > 1){
                value.val(amount-1);
            }
        });

        $('.inclusive-btn').on('click', function(){
            $(this).next().slideToggle();
        });

        $('.product-accor-head').on('click', function(){
            $(this).toggleClass('active-pah');
            $(this).next().slideToggle();
        });

        $('.cupon-btn').on('click', function(){
            $(this).next().slideToggle();
        });

        $('.calculation-head').on('click', function(){
            $(this).toggleClass('active-calc-head');
            $(this).next().slideToggle();
        });

        $('.cart-area a').on('mouseover', function(){
            $('.cart-dropdown-wrap').show();
        });

        $('.mini-cart-remove').on('click', function(){
            $('.cart-dropdown-wrap').hide();
        });

        // payment method check

        $('.payment-gateway-radio').on('change', function(){
            if(this.checked){
                $('.payment-gateway-head').next().slideUp();
                $(this).parent('.payment-gateway-head').next().slideToggle();
            }
        });

        $('.pay-step').on('click', function(){
            $('.checkout-first-step').hide();
            $('.checkout-second-step').show();
        });

        $('.cc-summary-head').on('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active-summary-head');
        });

        $('.cc-coupon-head').on('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active-toggle-class');
        });

        $('.mobile-sidebar-btn').on('click', function(){
            $('.checkout-sidebar').fadeIn();
        });

        $('.csidebar-time').on('click', function(){
            $('.checkout-sidebar').fadeOut();
        });

        $('.dfaq-question').on('click', function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active-dfaq');
        });

        
            $('.footer-content-head').on('click', function(){
                $(this).toggleClass('active-footer-accor');
                $(this).next().slideToggle();
            });

        
        
    });
})(jQuery);