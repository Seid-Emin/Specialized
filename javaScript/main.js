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

    // also works but is not good for changes made - like adding new category

    // $('.category-trail').click(function () {
    //     $('.trail-ul').slideToggle();
    //     if ($('.hide-shortCut-trail').css('display') != 'none') {
    //         $('.hide-shortCut-trail').hide();
    //     } else {
    //         $('.hide-shortCut-trail').show();
    //     }
    // });

    // $('.category-downhill').click(function () {
    //     $('.downhill-ul').slideToggle();
    //     if ($('.hide-shortCut-downhill').css('display') != 'none') {
    //         $('.hide-shortCut-downhill').hide();
    //     } else {
    //         $('.hide-shortCut-downhill').show();
    //     }
    // });

    // $('.category-s-works').click(function () {
    //     $('.s-works-ul').slideToggle();
    //     if ($('.hide-shortCut-s-works').css('display') != 'none') {
    //         $('.hide-shortCut-s-works').hide();
    //     } else {
    //         $('.hide-shortCut-s-works').show();
    //     }
    // });

    $(".category-wrap").click(function () {


        var categoryEl = $(this);
        categoryEl.next().slideToggle();
        if (categoryEl.find('.hide-shortCut').css('display') === 'none') {
            categoryEl.find('.hide-shortCut').toggle();
        } else {
            categoryEl.find('.hide-shortCut').toggle();
        }
        // also works
        // categoryEl.find('.hide-shortCut').toggle();

        // but this is better
        categoryEl.toggleClass('active');

    });

    // Shop/Specialized Script


    // var path = window.location.pathname;
    // path = path.replace('/Specialized/shop/', "");

    if (window.location.href.indexOf("bikes.html") > -1) {
        $(this).closest('li').addClass('active');
        window.addEventListener('scroll', function () {
            if (window.scrollY >= 325 && window.scrollY < 1200) {
                $('.category-shortCut-trail').addClass('bolder-scroll');
            } else {
                $('.category-shortCut-trail').removeClass('bolder-scroll');
            }
            if (window.scrollY >= 1200 && window.scrollY < 1675) {
                $('.category-shortCut-downhill').addClass('bolder-scroll');
            } else {
                $('.category-shortCut-downhill').removeClass('bolder-scroll');
            }
            if (window.scrollY >= 1675 && window.scrollY < 2552) {
                $('.category-shortCut-s-works').addClass('bolder-scroll');
            } else {
                $('.category-shortCut-s-works').removeClass('bolder-scroll');
            }
        });
    };

    // Scroll event - hightlight the current section at shortCuts
    // window.addEventListener('scroll', function () {
    //     if (window.scrollY >= 478 && window.scrollY < 1800) {
    //         $('.category-shortCut-trail').addClass('bolder-scroll');
    //     } else {
    //         $('.category-shortCut-trail').removeClass('bolder-scroll');
    //     }
    //     if (window.scrollY >= 1800 && window.scrollY < 2716) {
    //         $('.category-shortCut-downhill').addClass('bolder-scroll');
    //     } else {
    //         $('.category-shortCut-downhill').removeClass('bolder-scroll');
    //     }
    //     if (window.scrollY >= 2716 && window.scrollY < 4000) {
    //         $('.category-shortCut-s-works').addClass('bolder-scroll');
    //     } else {
    //         $('.category-shortCut-s-works').removeClass('bolder-scroll');
    //     }
    // });


    // set active link to current page and expand shortCuts of current page section

    for (let i = 0; i < pageNames.length; i++) {
        let currentPageName = pageNames[i];
        let fullPageName = currentPageName.concat('.html');
        if (window.location.href.indexOf(fullPageName) > -1) {
            tempPageName = currentPageName;
            $(".nav-links").each(function () {
                var href = $(this).attr('href');
                if (href == fullPageName) {
                    $(this).addClass('active-links');
                    $(".hide-shortCut-" + currentPageName).addClass('hide-shortCut');
                    $(".ul-" + currentPageName).addClass('current-active');
                }
            });
        }
    }

    // set current active page-inner-title_links
    $(".page_innet-title_links:last-child").addClass('active-links');




});