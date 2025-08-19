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
                $(this).prepend($("<meta>").attr({ "name": "mobile-web-app-capable", "content": "yes" }), $("<meta>").attr({ "name": "apple-mobile-web-app-capable", "content": "yes" }), $("<meta>").attr({ "name": "msvalidate.01", "content": "6605C60582C09EBF05D19C7AA9FF5496" }), $("<meta>").attr({ "name": "msvalidate.01", "content": "78FE17549C9303A86665F2ECA50117F0" }), $("<meta>").attr({ "name": "google-site-verification", "content": "cFg281al1tonGR827hLOMjiF1v-OjzuWS7nYOHCgxgA" }), $("<meta>").attr({ "name": "wot-verification", "content": "13f1e38cf44480f6feee" }), $("<meta>").attr({ "name": "norton-safeweb-site-verification", "content": "pofkh9sr3qjpu47evek-cna-t1f48yawpkz7mj20baj2eu2y22swvcipivgni0sv9eosd7402ko30s2bq7ip7mr8pg7co-2locptqg-e3kniin48fy1ium1kjxn76tr-" }), $("<meta>").attr({ "name": "avgthreatlabs-verification", "content": "32fe796e7c8dd69cd046f4e24ef2f6a1a579b717" }));
                $(this).append($("<link>").attr({ "rel": "author", "href": "humans.txt" }));
            });
    }
    $("head").each(function () {
        $(this).prepend($("<base>").attr("href", location.origin));
        // $(this).prepend("<base href=file:///D:/company/>");
        $(this).append($("<meta>").attr({ "name": "copyright", "content": "DobojCaffe.com & Servis računara &quot;BALEŠEVIĆ&quot; &copy;" + new Date().getFullYear() }), $("<meta>").attr({ "name": "GENERATOR", "content": "Visual Studio Code 1.100.2" }));
        $(this).append($.getScript('https://static.mywot.com/website_owners_badges/websiteOwnersBadge.js'));

    });
    if ($("li.nav-item.dropdown").hasClass("active")) {
        //$("head").prepend($("<title></title>").text(".::Servis računara B@LESHEVICH:: - ::" + $("li.breadcrumb-item:eq(1)").text() + ":: - ::" + $("li.breadcrumb-item:last").text() + "::."));
        document.title = ".::Servis računara B@LESHEVICH:: - ::" + $("li.breadcrumb-item:eq(1)").text() + ":: - ::" + $("li.breadcrumb-item:last").text() + "::.";
    } else {
        //$("head").prepend($("<title></title>").text(".::Servis računara B@LESHEVICH:: - ::" + $("li.breadcrumb-item:last").text() + "::."));
        document.title = ".::Servis računara B@LESHEVICH:: - ::" + $("li.breadcrumb-item:last").text() + "::.";
    }
    switch (new Date().getMonth() + 1) {
        case 1:
        case 12:
            $("div.card#hosting_banner > div.card-body").children("a").attr("target", "_blank").wrapInner($("<img>").addClass("d-block mx-auto img-fluid").attr({ "src": "https://cdn.jsdelivr.net/gh/BaleshSrle/misc/banner/img/dobojcaffe.png", "alt": "Web hosting by DobojCaffe.com", "loading": "eager" }).on("error", function () { this.src = this.src; }));
            break;
        default:
            $("div.card#hosting_banner > div.card-body").children("a").wrapInner($("<img>").addClass("d-block mx-auto img-fluid").attr({ "src": "https://cdn.jsdelivr.net/gh/BaleshSrle/misc/banner/img/docaffe.jpg", "alt": "Web hosting by DobojCaffe.com", "loading": "eager" }).on("error", function () { this.src = this.src; }));
    }
    $("header").each(function () {
        $(this).children("a").addClass("text-decoration-none text-body ml-md-1").prepend($("<img>").addClass("border-0 img-fluid").css("margin", "3px 0px").attr({ "src": "images/baleshevichcompany2.png", "alt": "Servis računara 'BALEŠEVIĆ'" }));
        $(this).find("p").addClass("small ml-md-1").text("Uvijek u službi korisnika i računara");
    }).addClass("mb-sm-0 py-sm-2 overflow-hidden");
    $("ol.breadcrumb").each(function () {
        $(this).addClass("mb-1 py-1");
        $(this).children().last().addClass("active").attr("aria-current", "page");
    });
    $("nav.navbar").each(function () {
        $(this).addClass("navbar-expand-sm navbar-dark bg-primary py-sm-1");
        $(this).children("button").addClass("navbar-toggler").attr({ "type": "button", "data-toggle": "collapse", "data-target": "#collapsibleNavbar" });
    });
    $("li.nav-item").each(function () {
        $("li.nav-item:eq(0)").html("<a class='nav-link' href='index.html'><i class='bi bi-house pr-1'></i>Početna</a>");
        $("li.nav-item:eq(1)").html("<a class='nav-link' href='it_news.html'><i class='bi bi-newspaper pr-1'></i>Vijesti</a>");
        $("li.nav-item:eq(2)").addClass("d-none d-md-block").html("<a class='nav-link' href='drivers.html'><i class='bi bi-disc-fill pr-1'></i>Drajveri</a>");
        $("li.nav-item:eq(3)").addClass("dropdown").html("<a class='nav-link dropdown-toggle' data-toggle='dropdown' href='#' id='navbardrop'>Usluge</a><div class='dropdown-menu'><a class='dropdown-item' href='mini_service.html'><i class='bi bi-wrench pr-1'></i>Mini servis</a><a class='dropdown-item' href='support.html'><i class='bi bi-headset pr-1'></i>Podrška</a><a class='dropdown-item' href='web_design.html'><i class='bi bi-code-slash pr-1'></i>Izrada web sajtova</a><a class='dropdown-item' href='github_projects.html'><i class='bi bi-github pr-1'></i>GitHub projekti</a></div>");
        $("li.nav-item:eq(3) > a").on("click", function () {
            $("div.dropdown-menu").addClass("mt-md-n1");
        });
        $("li.nav-item:eq(4)").addClass("d-none d-md-block").html("<a class='nav-link' href='https://1drv.ms/f/s!Ap_NgLjjdst_hF1G61KtOFOu6d6O' target='_blank'><i class='bi bi-cloud-download pr-sm-1'></i>Preuzimanje</a>");
        $("li.nav-item:eq(5)").html("<a class='nav-link' href='blog.html'><i class='bi bi-wordpress pr-1'></i>Blog</a>");
        $("li.nav-item:eq(6)").html("<a class='nav-link' href='https://photos.app.goo.gl/b4ypN3f8FY2OTc2r1' target='_blank'><i class='bi bi-images pr-1'></i>Smiješne slike</a>");
        $("li.nav-item:eq(7)").html("<a class='nav-link' href='contact.html'><i class='bi bi-telephone-inbound-fill pr-1'></i>Kontakt</a>");
        $("li.nav-item:eq(8)").html("<a class='nav-link' href='sitemap.xml'><i class='bi bi-diagram-3-fill pr-1'></i>Mapa sajta</a>");
    });
    $("img").filter("[src*='style=for-the-badge'],[alt$='Ubuntu'],[alt='IP2Location'],[alt^='Joomla']:gt(0)").addClass("rounded-lg");
    //$("img[src*='style=for-the-badge']:gt(0)").attr("src", function (index, src) { return src + '&logoSize=auto' });
    $("main").each(function () {
        $(this).find("img").addClass("border-0").css("margin", "3px 0px");
        $(this).find("img").parents("div.card-body").addClass("px-2");
        //$(this).find("a").not(".btn").attr("target", "_blank");
    }).addClass("container-fluid overflow-hidden mx-auto");
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
        //$(this).filter("#microsoft,#linux,#internet").find("img").css("max-width", "180px").addClass("d-block mx-auto h-auto");
        //$(this).filter("#MediaPlayer,#WebBrowser,#microsoft,#linux,#internet").find("carousel-item:first-child").addClass("active");
        $(this).filter("#MinOfInteriorSrpskaCyber").children("div.card-body").wrapInner($("<a></a>").attr({ "href": "https://mup.vladars.rs/vtk-lat/", "hreflang": "sr-BA", "target": "_blank" }).append($("<img>").attr({ "src": "images/vtk.png", "alt": "MUP R. Srpske - Uprava krim. policije - Jedinica za opšti kriminalitet - Odjeljenje za visokotehnološki kriminalitet" }).addClass("d-block mx-auto img-fluid").css("width", "180")));
        $(this).filter("#speedtest_banner").children("div.card-body").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Speedtest%20by%20Ookla-141526?style=for-the-badge&logo=speedtest&logoSize=auto&link=https%3A%2F%2Fspeedtest.net", "name": "Provjerite brzinu svog Interneta" }).addClass("rounded-lg d-block mx-auto img-fluid"));
    });
    //$("div.col-sm-6.col-xl-8").addClass("my-2 px-md-2");
    $("article").each(function () {
        $(this).find("a[href^='https']").attr("target", "_blank");
    }).addClass("col-sm-6 col-xl-8 my-2 px-md-2");
    $("p.small").each(function () {
        $(this).find("img").filter("[alt='Visual Studio Code'],[alt='HTML5'],[alt='CSS3'],[alt='Font Awesome']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
        $(this).find("img.StaticBadge").filter("[alt='Joomla'],[alt='Bootstrap'],[alt='WordPress'],[alt='jQuery'],[alt$='šablon']").addClass("my-0 ml-1 align-text-top").removeAttr("style");
        $(this).children("i.bi-skype").addClass("text-muted");
    });
    $("object[name='CCleaner'],img[alt='CCleaner']").addClass("my-0 ml-1 mr-0 align-text-top").removeAttr("style");
    $("div#MediaPlayer.carousel").each(function () {
        $(this).carousel({
            interval: 3000,
            keyboard: false,
            ride: "carousel",
            touch: false
        }).addClass("slide carousel-fade").wrapInner($("<div></div>").addClass("carousel-inner").append($("<div></div>").addClass("carousel-item active"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item")));
        $(this).find("div.carousel-item:eq(0)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Get%20VLC%20media%20player-ff8800?style=for-the-badge&logo=vlcmediaplayer&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwww.videolan.org%2Fvlc%2Findex.sr.html", "name": "Get VLC media player - It plays, it streams, it kills WiMPs!!" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
        $(this).find("div.carousel-item:eq(1)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Get%20Winamp-f93821?style=for-the-badge&logo=winamp&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwinamp.com%2Fplayer", "name": "Download Winamp Player" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
        $(this).find("div.carousel-item:eq(2)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Download%20Spotify-1ed760?style=for-the-badge&logo=spotify&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwww.spotify.com%2Frs-sr%2Fdownload%2Fwindows%2F", "name": "Windows Download - Spotify" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
    });
    $("div#WebBrowser.carousel").each(function () {
        $(this).carousel({
            interval: 3000,
            keyboard: false,
            ride: "carousel",
            touch: false
        }).addClass("slide carousel-fade").wrapInner($("<div></div>").addClass("carousel-inner").append($("<div></div>").addClass("carousel-item active"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item")));
        $(this).find("div.carousel-item:eq(0)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Get%20Vivaldi%20Browser-ef3939?style=for-the-badge&logo=vivaldi&logoColor=white&logoSize=auto&link=https%3A%2F%2Fvivaldi.com%2Fsr%2F", "name": "Download Vivaldi Web Browser Today!" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
        $(this).find("div.carousel-item:eq(1)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Download%20Google%20Chrome-4285f4?style=for-the-badge&logo=googlechrome&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwww.google.com%2Fchrome%2F", "name": "Download Google Chrome" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
        $(this).find("div.carousel-item:eq(2)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Download%20Firefox-ff7139?style=for-the-badge&logo=firefoxbrowser&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwww.firefox.com%2Fsr%2F", "name": "Download Firefox" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
        $(this).find("div.carousel-item:eq(3)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Download%20Opera%20Browser-ff1b2d?style=for-the-badge&logo=opera&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwww.opera.com%2Fdownload", "name": "Download Opera Browser" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "3px 0px"));
    });
    $("div#microsoft.carousel").each(function () {
        $(this).carousel({
            interval: 3000,
            keyboard: false,
            ride: "carousel",
            touch: false
        }).addClass("slide carousel-fade").wrapInner($("<div></div>").addClass("carousel-inner").append($("<div></div>").addClass("carousel-item active"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item")));
        $(this).find("div.carousel-item:eq(0)").wrapInner($("<a></a>").attr({ "href": "https://support.microsoft.com/sr-latn-rs/help/14210/security-essentials-download", "hreflang": "sr-RS", "target": "_blank" }).append($("<img>").attr({ "src": "images/MSE.png", "alt": "Microsoft Security Essentials" }).addClass("border-0 d-block mx-auto my-4 img-fluid")));
        $(this).find("div.carousel-item:eq(1)").wrapInner($("<a></a>").attr({ "href": "https://support.microsoft.com/sr-latn-rs/help/14165/windows-personalize-your-pc", "hreflang": "sr-RS", "target": "_blank" }).append($("<img>").attr({ "src": "images/win_wallpaper.png", "alt": "Windows Personalizovanje računara" }).addClass("border-0 d-block mx-auto my-n3 my-n3 img-fluid")));
        $(this).find("div.carousel-item:eq(2)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Download%20Bing%20Wallpaper-0f6cbd?style=for-the-badge&logoColor=white&logoSize=auto&link=https%3A%2F%2Fwww.bing.com%2Fapps%2Fwallpaper%2Fdownload", "name": "Bing Wallpaper" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "32px 0px"));
        $(this).find("div.carousel-item:eq(3)").append($("<object></object>").attr({ "data": "https://img.shields.io/badge/Visual%20Studio%20Code-007acc?style=for-the-badge&link=https%3A%2F%2Fcode.visualstudio.com%2F", "name": "Visual Studio Code" }).addClass("rounded-lg border-0 d-block mx-auto img-fluid").css("margin", "32px 0px"));
    });
    $("div#linux.carousel").each(function () {
        $(this).carousel({
            interval: 2900,
            keyboard: false,
            ride: "carousel",
            touch: false
        }).addClass("slide carousel-fade").wrapInner($("<div></div>").addClass("carousel-inner").append($("<div></div>").addClass("carousel-item active"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item")));
        $(this).find("div.carousel-item:eq(0)").wrapInner($("<a></a>").attr({ "href": "http://ubunt.eu/zesty", "hreflang": "en", "target": "_blank" }).wrapInner($("<img>").attr({ "src": "https://assets.ubuntu.com/v1/61f4fb91-release-widgetv5.jpg", "alt": "Download latest version of Ubuntu" }).addClass("rounded-lg border-0 d-block mx-auto h-auto").css({ "margin": "3px 0px", "max-width": "180px" })));
        $(this).find("div.carousel-item:eq(1)").wrapInner($("<a></a>").attr({ "href": "https://www.linuxliteos.com/download.php", "hreflang": "en", "target": "_blank" }).append($("<img>").attr({ "src": "images/linux_lite_feather_logo.png", "alt": "Download Linux Lite Free Linux Operating System" }).addClass("rounded-lg border-0 d-block mx-auto w-auto").css({ "margin": "3px 0px", "max-height": "180px" })));
        $(this).find("div.carousel-item:eq(2)").wrapInner($("<a></a>").attr({ "href": "https://mxlinux.org/download-links/", "hreflang": "en", "target": "_blank" }).append($("<img>").attr({ "src": "https://mxlinux.org/wp-content/uploads/2019/01/MX-Menu-icon-pyramids.svg", "alt": "MX Linux - Download Links" }).addClass("border-0 d-block mx-auto h-auto").css({ "margin": "10px 0px", "max-width": "180px" })));
        $(this).find("div.carousel-item:eq(3)").wrapInner($("<a></a>").attr({ "href": "https://www.opensuse.org/", "hreflang": "en", "target": "_blank" }).append($("<img>").attr({ "src": "https://raw.githubusercontent.com/openSUSE/artwork/master/logos/official/logo-color.svg", "alt": "openSUSE - Linux OS. The makers' choice for sysadmins, developers and desktop users." }).addClass("border-0 d-block mx-auto h-auto").css({ "margin": "35px 0px", "max-width": "180px" })));
        $(this).find("div.carousel-item:eq(4)").wrapInner($("<a></a>").attr({ "href": "https://www.debian.org/distrib/", "hreflang": "en", "target": "_blank" }).append($("<img>").attr({ "src": "https://www.debian.org/logos/openlogo-nd-100.png", "alt": "Download Debian" }).addClass("rounded-lg border-0 d-block mx-auto h-auto").css({ "margin": "30px 0px", "max-width": "180px" })));
        //$(this).find("div.carousel-item:eq(2)").wrapInner($("<a></a>").attr({ "href": "https://lxle.net/", "hreflang": "en", "target": "_blank" }).append($("<img>").attr({ "src": "images/smalllxledark.png", "alt": "Revive that old PC!&lt;The LXLE Desktop" }).addClass("border-0 d-block mx-auto h-auto").css({ "margin": "3px 0px", "max-width": "180px" })));
        $(this).find("div.carousel-item:eq(5)").wrapInner($("<a></a>").attr({ "href": "https://www.debian-srbija.iz.rs/", "hreflang": "sr-RS", "target": "_blank" }).append($("<img>").attr({ "src": "images/serbian_debian.png", "alt": "Debian Srbija" }).addClass("border-0 d-block mx-auto h-auto").css({ "margin": "3px 0px", "max-width": "180px" })));
    });
    $("div#internet.carousel").each(function () {
        $(this).carousel({
            interval: 2800,
            keyboard: false,
            ride: "carousel",
            touch: false
        }).addClass("slide carousel-fade").wrapInner($("<div></div>").addClass("carousel-inner").append($("<div></div>").addClass("carousel-item active"), $("<div></div>").addClass("carousel-item"), $("<div></div>").addClass("carousel-item")));
        $(this).find("div.carousel-item:eq(0)").wrapInner($("<a></a>").attr({ "href": "https://internetdefenseleague.org", "hreflang": "en", "target": "_blank" }).wrapInner($("<img>").attr({ "src": "images/IDL_Shield_badge.png", "alt": "Internet Defense League" }).addClass("border-0 d-block mx-auto h-auto").css({ "margin": "3px 0px", "max-width": "180px" })));
        $(this).find("div.carousel-item:eq(1)").wrapInner($("<a></a>").attr({ "href": "https://www.worldipv6launch.org/", "hreflang": "en", "target": "_blank" }).wrapInner($("<img>").attr({ "src": "images/World_IPv6_launch.png", "alt": "World IPv6 Launch" }).addClass("border-0 d-block mx-auto h-auto").css({ "margin": "3px 0px", "max-width": "180px" })));
        $(this).find("div.carousel-item:eq(2)").wrapInner($("<a></a>").attr({ "href": "https://www.ip2location.com/free/widgets", "hreflang": "en", "target": "_blank" }).wrapInner($("<img>").attr({ "src": "https://tools.ip2location.com/200x200.png", "alt": "IP2Location" }).addClass("rounded-lg border-0 d-block mx-auto h-auto").css({ "margin": "3px 0px", "max-width": "180px" })));
    });
    //$("div.github-widget div").addClass("col p-1");
    $("div.btn-toolbar").attr({ "role": "toolbar", "aria-label": "ToolbarButtonGroup" }).addClass("d-flex justify-content-center flex-row flex-fill");
    $("div.btn-group.btn-group-lg").each(function () {
        $("div.btn-group.btn-group-lg:first").addClass("pr-xl-1 py-1").attr("aria-label", "Komunikacija");
        $("div.btn-group.btn-group-lg:last").addClass("pl-xl-1 py-1 d-none d-md-block").attr("aria-label", "Ostalo");
    }).attr("role", "group");
    $(".bi-skype,.bi-telegram,.bi-envelope,.bi-cone-striped").addClass("h2 align-middle");
    $("i.bi-skype").parent("a").attr(/*"href", "skype:srdjan.baleshevich?chat"*/{ "href": "skype:srdjan.baleshevich?chat", "aria-disabled": "true" }).addClass("disabled");
    $("i.bi-telegram").parent("a").attr({ "href": "https://baleshsrle.t.me", "hreflang": "en", "target": "_blank" });
    $(".btn-vlc").each(function () {
        $(this).hover(function () { $(this).css({ "background-color": "#d87600", "color": "white" }); }, function () { $(this).css({ "background-color": "darkorange", "color": "white" }); });
    }).attr({ "href": "radio.pls", "download": "BS_RadioPlaylist" }).css({ "background-color": "darkorange", "color": "white" });
    $("footer").each(function () {
        $("footer > div:eq(0)").addClass("d-flex justify-content-center flex-wrap mx-auto").css("max-width", "292px").append($("<div></div>").addClass("mr-1").wrapInner($("<img>").attr({ "src": "https://img.shields.io/github/v/release/twbs/bootstrap?filter=v4.*&logo=bootstrap&logoColor=white&label=Bootstrap&labelColor=7952b3&color=7952b3", "alt": "Bootstrap" })), $("<div></div>").wrapInner($("<img>").attr({ "src": "https://img.shields.io/github/v/release/jquery/jquery?filter=3.*&logo=jquery&logoColor=white&label=jQuery&labelColor=0769ad&color=0769ad", "alt": "jQuery" })), $("<div></div>").addClass("mr-1").wrapInner($("<img>").attr({ "src": "https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2F" + location.host + "%2F&label=W3C%20Validation", "alt": "W3C Validation - HTML" })), $("<div></div>").wrapInner($("<img>").attr({ "src": "https://img.shields.io/website?url=https%3A%2F%2Fcdn.jsdelivr.net%2F&logo=jsdelivr&logoColor=white&label=jsDelivr%20CDN&labelColor=e84d3d&cacheSeconds=600", "alt": "jsDelivr CDN" })));
        //$("footer > div:eq(0)").addClass("d-flex flex-wrap flex-sm-column mx-md-2").html("<div class='mx-auto'><img src='https://img.shields.io/github/v/release/twbs/bootstrap?filter=v4.*&logo=bootstrap&logoColor=white&label=Bootstrap&labelColor=7952b3&color=7952b3' alt='Bootstrap'></div><div class='mx-auto'><img src='https://img.shields.io/github/v/release/jquery/jquery?filter=3.*&logo=jquery&logoColor=white&label=jQuery&labelColor=0769ad&color=0769ad' alt='jQuery'></div><div class='mx-auto'><img src='https://img.shields.io/website?url=https%3A%2F%2Fcdn.jsdelivr.net%2F&logo=jsdelivr&logoColor=white&label=jsDelivr%20CDN&labelColor=e84d3d&cacheSeconds=600' alt='jsDelivr CDN'></div>");
        $("footer > div:eq(1)").addClass("flex-grow-1 small h6 my-sm-1 my-md-0");
        $("footer p").not(":last").addClass("mb-1");
        $("footer p:eq(0)").text("Friendly Word processing, Spreadsheets and Presentation software.").prepend($("<a></a>").attr({ "href": "https://d.wps.com", "title": "Free Office Suite" }).text("Free WPS Office Suite").addClass("mr-1"));
        $("footer p:eq(1)").html("&copy;&nbsp;" + new Date().getFullYear() + ".&nbsp;<a href='../'>.::Servis računara B@LESHEVICH::.</a> &amp; <a title='DobojCaffe' href='https://dobojcaffe.com/' hreflang='sr-BA'>DobojCaffe</a><!--<br>Ova stranica je kreirana pomoću<a href='https://getbootstrap.com/'><img src='https://img.shields.io/badge/logo-Bootstrap-7952b3?logo=bootstrap&label=&labelColor=555555&logoColor=white' alt='Bootstrap'></a>,<a href='https://www.jsdelivr.com/'><img src='https://img.shields.io/badge/logo-jsDelivr-e84d3d?logo=jsdelivr&label=&labelColor=555555&logoColor=white' alt='jsDelivr'></a>, <a href='https://cdnjs.com' class='text-decoration-none'><strong>cdnjs</strong></a> ,<img src='https://img.shields.io/badge/logo-HTML5-e34f26?logo=html5&label=&labelColor=555555&logoColor=white' alt='HTML5'>i<img src='https://img.shields.io/badge/logo-CSS3-1572b6?logo=css3&label=&labelColor=555555&logoColor=white' alt='CSS'>kodova i <a href='https://icons.getbootstrap.com' class='text-decoration-none'><strong>Bootstrap ikonica</strong></a>-->.");
        $("footer p:eq(3)").addClass("mb-0").text("Ovaj sajt je zaštićen pomoću zaštitnog zida koji je kreiran pomoću sajta").append($("<img>").attr({ "src": "https://img.shields.io/badge/IP2Location-084e8f", "alt": "IP2Location" }).addClass("ml-1 align-middle").wrap($("<a></a>").attr({ "href": "https://www.ip2location.com/", "hreflang": "en", "target": "_blank" })));
        $("footer a").not(":eq(1)").attr("target", "_blank");
        //$("footer img").filter("[alt='Bootstrap'],[alt='jsDelivr'],[alt='HTML5'],img[alt='CSS']").addClass("my-0 mx-1 align-text-top").removeAttr("style");
        //$("footer img").css("margin-left", "1px");
        //$("footer img").addClass("ml-1");
        $("footer > div.wot").addClass("mx-md-2").wrapInner($("<a></a>").attr({ "id": "wot-badge0", "href": "https://www.mywot.com/scorecard/" + location.host + "?wot_badge=0_white", "hreflang": "en", "target": "_blank" }).addClass("wot-badge mx-auto").append($("<div></div>").addClass("wot-logo"), $("<div></div>").addClass("wot-shield"), $("<p></p>").addClass("wot-secured").text("Verified Website"), $("<div></div>").addClass("wot-vertical"), $("<p></p>").addClass("wot-report").text("See Report")));
    }).addClass("d-sm-flex flex-sm-row align-items-center mb-0 py-1 text-center");
});