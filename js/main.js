(function () {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if (typeof capture !== "boolean") {
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    }
})();

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $(".site-content").fadeIn("slow");

    $(".navbar-nav a").each(function () {
        if (
            window.location.href ==
            window.location.origin + window.location.pathname + "index.html" &&
            this.href.includes("/index.html")
        ) {
            $(this).closest("li").addClass("active");
        } if ((window.location.href ===
            window.location.origin + window.location.pathname.replace(/\.[a-zA-Z]+/, '')) &&
            this.href.includes("/index.html")) {
            $(this).closest("li").addClass("active");
        } else if (window.location.href.includes(this.href)) {
            $(this).closest("li").addClass("active");
            return;
        }
    });

    $(".vertical-menu a").each(function () {
        if (window.location.href.includes(this.href)) {
            $(this).closest("li").addClass("active");
        }
    });
});

$(document).ready(function () {
    "use strict";

    $(".post-carousel-twoCol").slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    });

    $(".carousel-topNav-prev").click(function () {
        $(".post-carousel-twoCol").slick("slickPrev");
    });
    $(".carousel-topNav-next").click(function () {
        $(".post-carousel-twoCol").slick("slickNext");
    });

    $(".post-carousel-widget").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    });

    $(".custom-showcase-widget").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    });

    $(".carousel-botNav-prev").click(function () {
        $(".post-carousel-widget").slick("slickPrev");
        $(".custom-showcase-widget").slick("slickPrev");
    });
    $(".carousel-botNav-next").click(function () {
        $(".post-carousel-widget").slick("slickNext");
        $(".custom-showcase-widget").slick("slickNext");
    });

    var $header = $(".header-default"),
        $clone = $header.before($header.clone().addClass("clone"));
    $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", fromTop > 300);
    });
});

$(function () {
    "use strict";

    $(".sidebar").stickySidebar({
        topSpacing: 60,
        bottomSpacing: 30,
        containerSelector: ".main-content",
    });
    $(".submenu").before('<i class="icon-arrow-down switch"></i>');
    $(".vertical-menu li i.switch").on("click", function () {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

    $("button.burger-menu").on("click", function () {
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on("click", function () {
        $(".canvas-menu").removeClass("open");
        $(".main-overlay").removeClass("active");
    });

    $("button.search").on("click", function () {
        $(".search-popup").addClass("visible");
    });

    $(".search-popup .btn-close").on("click", function () {
        $(".search-popup").removeClass("visible");
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $(".search-popup").removeClass("visible");
        }
    });

    // loader tab pane
    $('button[data-bs-toggle="tab"]').on("click", function () {
        $(".tab-pane").addClass("loading");
        $(".lds-dual-ring").addClass("loading");
        setTimeout(function () {
            $(".tab-pane").removeClass("loading");
            $(".lds-dual-ring").removeClass("loading");
        }, 500);
    });
    // share toggle button
    $(".post button.toggle-button").each(function () {
        $(this).on("click", function (e) {
            $(this).next(".social-share .icons").toggleClass("visible");
            $(this).toggleClass("icon-close").toggleClass("icon-share");
        });
    });

    var list = document.getElementsByClassName("spacer");
    for (var i = 0; i < list.length; i++) {
        var size = list[i].getAttribute("data-height");
        list[i].style.height = "" + size + "px";
    }

    var list = document.getElementsByClassName("data-bg-image");

    for (var i = 0; i < list.length; i++) {
        var bgimg = list[i].getAttribute("data-bg-image");
        list[i].style.backgroundImage = "url('" + bgimg + "')";
    }
});
