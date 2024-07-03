"use strict";

console.info("Skripta za web sajt je pokrenuta.");

jQuery(function ($) {
    $("head").prepend("<base href=" + location.origin + ">");
    $("head").append("<meta name='copyright' content='DobojCaffe.com & Servis računara &quot;BALEŠEVIĆ&quot; &copy;" + new Date().getFullYear() + "'>", "<meta name='GENERATOR' content='Visual Studio Code 1.91.0'>");
    switch (new Date().getMonth() + 1) {
        case 1:
        case 12:
            $("img#hosting").attr("src", "https://cdn.jsdelivr.net/gh/BaleshSrle/misc/banner/img/dobojcaffe.png");
            break;
        default:
            $("img#hosting").attr("src", "https://cdn.jsdelivr.net/gh/BaleshSrle/misc/banner/img/docaffe.jpg");
    }
    $("header").addClass("mb-sm-0 py-sm-2 overflow-hidden");
    $("ol.breadcrumb").addClass("mb-1 py-1");
    $("nav.navbar").addClass("py-sm-1");
    $("li.nav-item").find("i.bi").addClass("pr-sm-1");
    $("img").addClass("border-0").css("margin", "3px 0px");
    $("img[src*='style=for-the-badge'],img[alt$='Ubuntu'],img[alt='IP2Location'],img[alt^='Joomla']:gt(0)").addClass("rounded-lg");
    $("div.container-fluid").addClass("overflow-hidden mx-auto");
    $("div.col-sm-3.col-xl-2").first().addClass("my-1 pr-md-2");
    $("div.card,div.github-box.repo").addClass("shadow-sm");
    $("div.card.my-1.d-none.d-md-block").eq(0).height(131.94);
    $("div.col-sm-3.col-xl-2").last().addClass("my-1 pl-md-2");
    $("div.card.my-1.d-none.d-md-block:eq(1),div.card.my-1:last").height(228);
    $("div.col-sm-6.col-xl-8").addClass("my-2 px-md-2");
    $("p.small").find("img").filter("[alt='Visual Studio Code'],[alt='HTML5'],[alt='CSS'],[alt='Font Awesome']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
    $("p.small").find("img").filter("[alt='Joomla'],[alt='Bootstrap'],[alt='WordPress'],[alt='jQuery']").addClass("my-0 ml-1 mr-0 align-text-top").removeAttr("style");
    $("img[alt='CCleaner']").addClass("my-0 ml-1 mr-0 align-text-top").removeAttr("style");
    $("div#microsoft.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        touch: false
    });
    $("div.btn-toolbar").addClass("d-flex justify-content-center flex-row flex-fill");
    $("div.btn-group.btn-group-lg").first().addClass("pr-xl-1 py-1");
    $("div.btn-group.btn-group-lg").last().addClass("pl-xl-1 py-1 d-none d-md-block");
    $(".bi-skype,.bi-telegram,.bi-envelope,.bi-cone-striped").addClass("h2 align-middle");
    $(".btn-vlc").css({ "background-color": "darkorange", "color": "white" });
    $(".btn-vlc").hover(function () { $(this).css({ "background-color": "#d87600", "color": "white" }); }, function () { $(this).css({ "background-color": "darkorange", "color": "white" }); });
    $("div#internet.carousel").addClass("carousel-fade").carousel({
        interval: 2800,
        keyboard: false,
        touch: false
    });
    $("div#linux.carousel").addClass("carousel-fade").carousel({
        interval: 2900,
        keyboard: false,
        touch: false
    });
    $("div#microsoft,div#internet,div#linux").find("img").css("max-width", "180px").addClass("d-block mx-auto h-auto");
    $("footer").addClass("mb-0 py-1 text-center small");
    $("footer").find("img").filter("[alt='Bootstrap'],[alt='jsDelivr'],[alt='HTML5'],img[alt='CSS']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
});