"use strict";

console.info("Skripta za web sajt je pokrenuta.");

jQuery(function ($) {
    switch (location.pathname) {
        case "/it_news.html":
        case "/drivers.html":
        case "/mini_service.html":
        case "/support.html":
        case "/web_design.html":
        case "/github_projects.html":
        case "/blog.html":
        case "/contact.html":
        case "/404.html":
            $("head").each(function () {
                $(this).prepend("<meta name='mobile-web-app-capable' content='yes'>", "<meta name='apple-mobile-web-app-capable' content='yes'>", "<meta name='msvalidate.01' content='6605C60582C09EBF05D19C7AA9FF5496'>", "<meta name='msvalidate.01' content='78FE17549C9303A86665F2ECA50117F0'>", "<meta name='google-site-verification' content='cFg281al1tonGR827hLOMjiF1v-OjzuWS7nYOHCgxgA'>", "<meta name='wot-verification' content='13f1e38cf44480f6feee'>", "<meta name='norton-safeweb-site-verification' content='pofkh9sr3qjpu47evek-cna-t1f48yawpkz7mj20baj2eu2y22swvcipivgni0sv9eosd7402ko30s2bq7ip7mr8pg7co-2locptqg-e3kniin48fy1ium1kjxn76tr-'>", "<meta name='avgthreatlabs-verification' content='32fe796e7c8dd69cd046f4e24ef2f6a1a579b717'>");
                $(this).append("<link href='humans.txt' rel='author'>");
            });
    }
    $("head").each(function () {
        $(this).prepend("<base href=" + location.origin + ">");
        $(this).append("<meta name='copyright' content='DobojCaffe.com & Servis računara &quot;BALEŠEVIĆ&quot; &copy;" + new Date().getFullYear() + "'>", "<meta name='GENERATOR' content='Visual Studio Code 1.93.1'>");
    });

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
    $("i").filter(".bi-disc-fill, .bi-cloud-download").parents("li.nav-item").addClass("d-none d-md-block");
    $("img").each(function(){
        $(this).addClass("border-0").css("margin", "3px 0px");
        $(this).parents("div.card-body").addClass("px-2");
    });
    $("img").filter("[src*='style=for-the-badge'],[alt$='Ubuntu'],[alt='IP2Location'],[alt^='Joomla']:gt(0)").addClass("rounded-lg");
    $("img[src*='style=for-the-badge']:gt(0)").attr("src", function (index, src) { return src + '&logoSize=auto' });
    $("div.container-fluid").addClass("overflow-hidden mx-auto");
    $("div.col-sm-3.col-xl-2").each(function () {
        $(this).filter(":first").addClass("my-1 pr-md-2");
        $(this).filter(":last").addClass("my-1 pl-md-2");
        $(this).children().addClass("my-1 shadow-sm");
    });
    $("div").each(function () {
        $(this).filter(".github-box.repo").addClass("shadow-sm");
        $(this).filter("#microsoft").parents(".card").addClass("d-none d-md-block").height(131.94);
        $(this).filter("#linux").parents(".card").addClass("d-none d-md-block");
        $(this).filter("#linux, #internet").parents(".card").height(228);
        $(this).filter("#microsoft,#linux,#internet").find("img").css("max-width", "180px").addClass("d-block mx-auto h-auto");
    });
    $("div.col-sm-6.col-xl-8").addClass("my-2 px-md-2");
    $("p.small").each(function () {
        $(this).find("img").filter("[alt='Visual Studio Code'],[alt='HTML5'],[alt='CSS'],[alt='Font Awesome']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
        $(this).find("img").filter("[alt='Joomla'],[alt='Bootstrap'],[alt='WordPress'],[alt='jQuery']").addClass("my-0 ml-1 mr-0 align-text-top").removeAttr("style");
    });
    $("img[alt='CCleaner']").addClass("my-0 ml-1 mr-0 align-text-top").removeAttr("style");
    $("div#microsoft.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        touch: false
    });
    $("div.btn-toolbar").addClass("d-flex justify-content-center flex-row flex-fill");
    $("div.btn-group.btn-group-lg").each(function () {
        $(this).filter(":first").addClass("pr-xl-1 py-1");
        $(this).filter(":last").addClass("pl-xl-1 py-1 d-none d-md-block");
    });
    $(".bi-skype,.bi-telegram,.bi-envelope,.bi-cone-striped").addClass("h2 align-middle");
    $(".btn-vlc").each(function () {
        $(this).css({ "background-color": "darkorange", "color": "white" });
        $(this).hover(function () { $(this).css({ "background-color": "#d87600", "color": "white" }); }, function () { $(this).css({ "background-color": "darkorange", "color": "white" }); });
    });
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
    $("footer").each(function () {
        $("footer").addClass("mb-0 py-1 text-center small");
        $("footer").find("img").filter("[alt='Bootstrap'],[alt='jsDelivr'],[alt='HTML5'],img[alt='CSS']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
    });
});