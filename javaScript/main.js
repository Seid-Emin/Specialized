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




});