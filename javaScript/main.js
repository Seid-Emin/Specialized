$(document).ready(function () {

    //Mobile functions

    //Mobile Search
    $('.mobileNav-search-icon').click(function () {
        if ($('#mobileNav_search').css('bottom') == '0px') {
            $('#mobileNav_search').addClass('mobileNav_search-active');
        } else {
            $('#mobileNav_search').removeClass('mobileNav_search-active');
        }
        if ($('#mobile-nav-register_wrap-toggle').css('display') != "none") {
            $('#mobile-nav-register_wrap-toggle').slideToggle(400, "linear");
        }
        if ($('#mobile-nav-signIn_wrap-toggle').css('display') != "none") {
            $('#mobile-nav-signIn_wrap-toggle').slideToggle(400, "linear");
        }
    });


    //Mobile Sign In form Toggle
    $('.mobileNav_user-icon').click(function () {
        if ($('#mobile-nav-register_wrap-toggle').css('display') != "none") {
            $('#mobile-nav-register_wrap-toggle').slideToggle(400, "linear");
        } else {
            $('#mobile-nav-signIn_wrap-toggle').slideToggle(400, "linear");
        }
    });


    //Mobile Register form Toggle 
    $('.registerMe').click(function () {
        $('#mobile-nav-signIn_wrap-toggle').slideToggle(400, "linear", function () {
            $('#mobile-nav-register_wrap-toggle').slideToggle(500, "linear");
        });
    });


    //Mobile Menu slide - in
    $('.mobileNav-menu-icon').click(function () {
        $('#nav-drawer').animate({
            left: '0px',
        }, 200, 'linear');
    });


    //Mobile Menu slide - out
    $('.nav-drawer_exit').click(function () {
        if ($('#nav-drawer').css('left') === '0px')
            $('#nav-drawer').animate({
                left: '-120vw',
            }, 200, 'linear');
    });

    //Check anything active. If so, hide them
    $('.mobileNav_user-icon').click(function () {
        if ($('#mobileNav_search').css('bottom') != 0) {
            $('#mobileNav_search').removeClass('mobileNav_search-active');
        }
    });
    $('.registerMe').click(function () {
        if ($('#mobileNav_search').css('bottom') != 0) {
            $('#mobileNav_search').removeClass('mobileNav_search-active');
        }
    });
    $('.mobileNav-menu-icon').click(function () {
        if ($('#mobile-nav-register_wrap-toggle').css('display') != "none") {
            $('#mobile-nav-register_wrap-toggle').slideToggle(400, "linear");
        }
        if ($('#mobile-nav-signIn_wrap-toggle').css('display') != "none") {
            $('#mobile-nav-signIn_wrap-toggle').slideToggle(400, "linear");
        }

        if ($('#mobileNav_search').css('bottom') != 0) {
            $('#mobileNav_search').removeClass('mobileNav_search-active');
        }
    });


    //Desctop funtions

    // Hidden Menus script

    // Sign In form Toggle
    $('.sign-in').click(function () {
        if ($('#nav-register_wrap-toggle').css('display') != "none") {
            $('#nav-register_wrap-toggle').slideToggle(400, "linear");
        } else {
            $('#nav-signIn_wrap-toggle').slideToggle(400, "linear");
        }
    });


    // Register form Toggle
    $('.registerMe').click(function () {
        $('#nav-signIn_wrap-toggle').slideToggle(400, "linear", function () {
            $('#nav-register_wrap-toggle').slideToggle(400, "linear");
        });
    });


    // Search Show
    $('.nav-search').click(function () {
        if ($('#nav-search-hidden').css('bottom') == '0px') {
            $('#nav-search-hidden').addClass('search-hidden-active');
        } else {
            $('#nav-search-hidden').removeClass('search-hidden-active');
        }
        if ($('.sign-in').css('display') != "none") {
            $('#nav-signIn_wrap-toggle').slideUp();
        }
        if ($('.registerMe').css('display') != "none") {
            $('#nav-register_wrap-toggle').slideUp();
        }
    });

    //Check anything active. If so, hide them
    $('.sign-in').click(function () {
        if ($('.nav-search-hidden').css('bottom') != 0) {
            $('.nav-search-hidden').removeClass('search-hidden-active');
        }
    });
    $('.registerMe').click(function () {
        if ($('.nav-search-hidden').css('bottom') != 0) {
            $('.nav-search-hidden').removeClass('search-hidden-active');
        }
    });


    // ShortCuts Show And Hide


    function shortCut(e) {
        let bikeType = ['trail', 'downhill', 's-works'];
        $('.hide-shortCut-' + 'bikeType[e]').hide();
        $('.' + 'bikeType[e]' + '-ul').slideToggle();
    }

    $('.category_holder-bikes').click(function () {
        if (this.innerHTML == 'Trail') {
            $('.trail-ul').slideToggle();
            if ($('.hide-shortCut-trail').css('display') != 'none') {
                $('.hide-shortCut-trail').hide();
            } else {
                $('.hide-shortCut-trail').show();
            }
        } else if (this.innerHTML == 'Downhill') {
            $('.downhill-ul').slideToggle();
            if ($('.hide-shortCut-downhill').css('display') != 'none') {
                $('.hide-shortCut-downhill').hide();
            } else {
                $('.hide-shortCut-downhill').show();
            }
        } else {
            $('.s-works-ul').slideToggle();
            if ($('.hide-shortCut-s-works').css('display') != 'none') {
                $('.hide-shortCut-s-works').hide();
            } else {
                $('.hide-shortCut-s-works').show();
            }
        }
    });


    var categoryTrail = $('.category-trail');
    var categoryDownhill = $('.category-downhill');
    var categorySworks = $('.category-s-works');

    // var shortCutShowHide = $('.category-title-wrap');
    // console.log(shortCutShowHide);



    // $('.category-trail').click(function () {

    //     if ($('.category_activator-hide-shortCut').css('display') != 'none') {
    //         $('.category_activator-hide-shortCut').hide();
    //         $('.trail-ul').slideToggle();
    //     } else {
    //         $('.category_activator-hide-shortCut').show();
    //         $('.trail-ul').slideToggle();
    //     }
    // });




    // var shortCutSign = $('.category_activator-wrap');
    // var shortCutTitle = $('.category_activator-wrap')
    // console.log(shortCutSign);
    // // if ()
    // $('.category-title-wrap').click(function () {
    // $('.category_activator-show-shortCut').toggle();
    // $('.category_activator-hide-shortCut').toggle();
    // this('category-bikes-ul').toggle();
    // console.log(this);

    // console.log(this.('category-bikes-ul'));
    // console.log($(this).find('category-bikes-ul'));

    // })











    // Shop Script






});