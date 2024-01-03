"use strict";

console.info("Skripta za web sajt je pokrenuta.");

jQuery(function ($) {
    $("head").prepend("<base href=" + location.origin + ">");
    $("head").append("<meta name='copyright' content='DobojCaffe.com & Servis računara &quot;BALEŠEVIĆ&quot; &copy;" + new Date().getFullYear() + "'>");
    $("head").append("<meta name='GENERATOR' content='Visual Studio Code 1.84.0'>");
    switch (new Date().getMonth() + 1) {
        case 1:
        case 12:
            $("img#hosting").attr("src", "https://cdn.jsdelivr.net/gh/BaleshSrle/misc@main/banner/img/dobojcaffe.png");
            break;
        default:
            $("img#hosting").attr("src", "https://cdn.jsdelivr.net/gh/BaleshSrle/misc@main/banner/img/docaffe.jpg");
    }
    $("header").addClass("mb-sm-0 py-sm-2 overflow-hidden");
    $(".breadcrumb").addClass("mb-1 py-1");
    $(".navbar").addClass("py-sm-1");
    $("li.nav-item a i.bi").addClass("pr-sm-1");
    $("img").addClass("border-0").css("margin", "3px 0px");
    $(".container-fluid").addClass("overflow-hidden mx-auto");
    $("div.col-sm-3.col-xl-2:first").addClass("my-1 pr-md-2");
    $("div.col-sm-3.col-xl-2:last").addClass("my-1 pl-md-2");
    $("div.col-sm-6.col-xl-8").addClass("my-2 px-md-2");
    $("#microsoft.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        touch: false
    });
    $(".bi-skype,.bi-telegram,.bi-envelope,.bi-cone-striped").addClass("h2 align-middle");
    $(".btn-vlc").css({ "background-color": "darkorange", "color": "white" });
    $(".btn-vlc").hover(function () { $(this).css({ "background-color": "#d87600", "color": "white" }); }, function () { $(this).css({ "background-color": "darkorange", "color": "white" }); });
    $("#internet.carousel").addClass("carousel-fade").carousel({
        interval: 2800,
        keyboard: false,
        touch: false
    });
    $("#linux.carousel").addClass("carousel-fade").carousel({
        interval: 2900,
        keyboard: false,
        touch: false
    });
    $("div#microsoft img,div#internet img,div#linux img").css("max-width", "180px").addClass("d-block mx-auto h-auto");
    $("footer").addClass("mb-0 py-1 text-center small");
});