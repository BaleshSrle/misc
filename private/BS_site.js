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
        $(this).append("<meta name='copyright' content='DobojCaffe.com & Servis računara &quot;BALEŠEVIĆ&quot; &copy;" + new Date().getFullYear() + "'>", "<meta name='GENERATOR' content='Visual Studio Code 1.96.2'>");
        $(this).append($.getScript('https://static.mywot.com/website_owners_badges/websiteOwnersBadge.js'));
    });
    if ($("a.nav-link.dropdown-toggle").hasClass("active") == true) {
        $("head").prepend('<title>.::Servis računara B@LESHEVICH:: - ::' + $("li.breadcrumb-item:last").prev().text() + ':: - ::' + $("li.breadcrumb-item:last").text() + '::.</title>');
    } else {
        $("head").prepend('<title>.::Servis računara B@LESHEVICH:: - ::' + $("li.breadcrumb-item:last").text() + '::.</title>');
    }
    switch (new Date().getMonth() + 1) {
        case 1:
        case 12:
            $("img#hosting").attr("src", "https://cdn.jsdelivr.net/gh/BaleshSrle/misc/banner/img/dobojcaffe.png");
            break;
        default:
            $("img#hosting").attr("src", "https://cdn.jsdelivr.net/gh/BaleshSrle/misc/banner/img/docaffe.jpg");
    }
    $("header").each(function () {
        $(this).addClass("mb-sm-0 py-sm-2 overflow-hidden");
        $(this).children("a").addClass("text-decoration-none text-body ml-md-1");
        $(this).find("img").addClass("border-0").css("margin", "3px 0px");
        $(this).find("p").addClass("small ml-md-1").text("Uvijek u službi korisnika i računara");
    });
    $("ol.breadcrumb").each(function () {
        $(this).addClass("mb-1 py-1");
        $(this).children().last().addClass("active").attr("aria-current", "page");
    });
    $("nav.navbar").addClass("py-sm-1");
    $("li.nav-item").each(function () {
        $("li.nav-item").children("a.nav-link").filter(":eq(4),:eq(6),:eq(8)").attr("target", "_blank");
        $("li.nav-item").find("i.bi").addClass("pr-sm-1");
    });
    $("i").filter(".bi-disc-fill, .bi-cloud-download").parents("li.nav-item").addClass("d-none d-md-block");
    $("img").filter("[src*='style=for-the-badge'],[alt$='Ubuntu'],[alt='IP2Location'],[alt^='Joomla']:gt(0)").addClass("rounded-lg");
    $("img[src*='style=for-the-badge']:gt(0)").attr("src", function (index, src) { return src + '&logoSize=auto' });
    $("div.container-fluid").each(function () {
        $(this).addClass("overflow-hidden mx-auto");
        $(this).find("img").addClass("border-0").css("margin", "3px 0px");
        $(this).find("img").parents("div.card-body").addClass("px-2");
        $(this).find("a").not(".btn").attr("target", "_blank");
    });
    $("div.col-sm-3.col-xl-2").each(function () {
        $(this).filter(":first").addClass("my-1 pr-md-2");
        $(this).filter(":last").addClass("my-1 pl-md-2");
        $(this).children().addClass("my-1 shadow-sm");
    });
    $("div").each(function () {
        $(this).filter(".github-box.repo, .wot-badge").addClass("shadow-sm");
        $(this).filter("#countdown").parents(".card").addClass("bg-danger font-weight-bold text-white");
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
    $("div.github-widget").parent("div").addClass("col p-1");
    $("div.btn-toolbar").addClass("d-flex justify-content-center flex-row flex-fill");
    $("div.btn-group.btn-group-lg").each(function () {
        $("div.btn-group.btn-group-lg").filter(":first").addClass("pr-xl-1 py-1");
        $("div.btn-group.btn-group-lg").filter(":last").addClass("pl-xl-1 py-1 d-none d-md-block");
    });
    $(".bi-skype,.bi-telegram,.bi-envelope,.bi-cone-striped").addClass("h2 align-middle");
    $(".btn-vlc").each(function () {
        $(this).css({ "background-color": "darkorange", "color": "white" });
        $(this).hover(function () { $(this).css({ "background-color": "#d87600", "color": "white" }); }, function () { $(this).css({ "background-color": "darkorange", "color": "white" }); });
    });
    $("footer").each(function () {
        $("footer").addClass("d-sm-flex flex-sm-row align-items-center mb-0 py-1 text-center");
        $("footer").children("div").eq(0).addClass("d-flex flex-wrap flex-sm-column mx-md-2").html("<div class='mx-auto'><img src='https://img.shields.io/github/v/release/twbs/bootstrap?filter=v4.*&logo=bootstrap&logoColor=white&label=Bootstrap&labelColor=7952b3&color=7952b3' alt='Bootstrap'></div><div class='mx-auto'><img src='https://img.shields.io/github/v/release/jquery/jquery?filter=3.*&logo=jquery&logoColor=white&label=jQuery&labelColor=0769ad&color=0769ad' alt='jQuery'></div><div class='mx-auto'><img src='https://img.shields.io/website?url=https%3A%2F%2Fcdn.jsdelivr.net%2F&logo=jsdelivr&logoColor=white&label=jsDelivr%20CDN&labelColor=e84d3d&cacheSeconds=600' alt='jsDelivr CDN'></div>");
        $("footer").children("div").eq(1).addClass("flex-grow-1 small h6 my-sm-1 my-md-0");
        $("footer").find("p").not(":last").addClass("mb-1");
        $("footer").find("p").eq(0).html("<a href='https://d.wps.com' title='Free Office Suite'>Free WPS Office Suite</a> Friendly Word processing, Spreadsheets and Presentation software.");
        $("footer").find("p").eq(1).html("&copy;&nbsp;" + new Date().getFullYear() + ".&nbsp;<a href='../'>.::Servis računara B@LESHEVICH::.</a> &amp; <a title='DobojCaffe' href='https://dobojcaffe.com/'>DobojCaffe</a><!--<br>Ova stranica je kreirana pomoću<a href='https://getbootstrap.com/'><img src='https://img.shields.io/badge/logo-Bootstrap-7952b3?logo=bootstrap&label=&labelColor=555555&logoColor=white' alt='Bootstrap'></a>,<a href='https://www.jsdelivr.com/'><img src='https://img.shields.io/badge/logo-jsDelivr-e84d3d?logo=jsdelivr&label=&labelColor=555555&logoColor=white' alt='jsDelivr'></a>, <a href='https://cdnjs.com' class='text-decoration-none'><strong>cdnjs</strong></a> ,<img src='https://img.shields.io/badge/logo-HTML5-e34f26?logo=html5&label=&labelColor=555555&logoColor=white' alt='HTML5'>i<img src='https://img.shields.io/badge/logo-CSS3-1572b6?logo=css3&label=&labelColor=555555&logoColor=white' alt='CSS'>kodova i <a href='https://icons.getbootstrap.com' class='text-decoration-none'><strong>Bootstrap ikonica</strong></a>-->.");
        $("footer").find("p").eq(3).addClass("mb-0").html("Ovaj sajt je zaštićen pomoću zaštitnog zida koji je kreiran pomoću sajta<a href='https://ip2location.com'><img src='https://img.shields.io/badge/IP2Location-084e8f' alt='IP2Location'></a>.");
        $("footer").find("a").not(":eq(1)").attr("target", "_blank");
        //$("footer").find("img").filter("[alt='Bootstrap'],[alt='jsDelivr'],[alt='HTML5'],img[alt='CSS']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
        //$("footer").find("img").css("margin-left", "1px");
        $("footer").find("img").addClass("ml-1");
        $("footer").children("div.wot").addClass("mx-md-2").html("<a id='wot-badge0' class='wot-badge mx-auto' href='https://www.mywot.com/scorecard/baleshevich.dobojcaffe.com?wot_badge=0_white' target='_blank'><div class='wot-logo'></div><div class='wot-shield'></div><p class='wot-secured'>Verified Website</p><div class='wot-vertical'></div><p class='wot-report'>See Report</p></a>");
    });
});