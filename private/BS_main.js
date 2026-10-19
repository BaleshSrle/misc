"use strict";

console.info("Glavna skripta je pokrenuta.");
const Url = {};
const Version = {};
Object.assign(Url, { CDN: ["https://cdn.jsdelivr.net/", "https://cdnjs.cloudflare.com/"], Badges: ["https://img.shields.io/", "https://badgen.net/"], GitHub: "https://github.com/" });
Object.assign(Version, { Bootstrap: "4.6.2", jQuery: "3.7.1", BootstrapIcon: "1.13.1", MomentJS: "2.30.1", jQueryCountdown: "2.2.0" });

$(document).ready(() => {
    const GoogleFontsUrl = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
    (location.pathname != "/index.html") ? ($("html").attr("lang", "sr-BA"), $("head").prepend($("<meta>").attr({ "name": "robots", "content": "index, nofollow" }), $("<meta>").attr({ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }))) : null;
    // (location.pathname == "/private/kontrolna_tabla.html") ? $.getScript(Url.CDN[0] + "gh/BaleshSrle/misc/private/BS_CP_main.min.js") : $.getScript(Url.CDN[0] + "gh/BaleshSrle/misc/private/BS_site.min.js");
    $("head").each((i, e) => {
        $(e).prepend(/*$("<meta>").attr("charset", "UTF-8"), */$("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
        $(e).prepend($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net" }), $("<meta>").attr({ "name": "designer", "content": "Servis računara &quot;BALEŠEVIĆ&quot;" }), $("<meta>").attr({ "name": "reply-to", "content": "baleshevichcompany%40dobojcaffe.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "www.dobojcaffe.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
        $(e).append($("<link>").attr({ "rel": "dns-prefetch", "href": Url.CDN[0] }).on("error", function () { this.href = Url.CDN[1] }), $("<link>").attr({ "rel": "dns-prefetch", "href": GoogleFontsUrl[1] }), $("<link>").attr({ "rel": "preconnect", "href": Url.CDN[0], "crossorigin": "anonymous" }).on("error", function () { this.href = Url.CDN[1] }), $("<link>").attr({ "rel": "preconnect", "href": GoogleFontsUrl[0] }), $("<link>").attr({ "rel": "preconnect", "href": GoogleFontsUrl[1], "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "prefetch", "href": Url.Badges[0] }).on("error", function () { this.href = Url.Badges[1] }), $("<link>").attr({ "rel": "stylesheet", "href": Url.CDN[0] + "npm/bootstrap@" + parseInt(Version.Bootstrap, 10) + "/dist/css/bootstrap.min.css", "media": "all", "crossorigin": "anonymous" }).one("error", function () { this.href = Url.CDN[1] + "ajax/libs/bootstrap/" + Version.Bootstrap + "/css/bootstrap.min.css" }), $("<link>").attr({ "rel": "stylesheet", "href": GoogleFontsUrl[0] + "/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap", "media": "all", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "stylesheet", "href": Url.CDN[0] + "npm/bootstrap-icons@" + parseInt(Version.BootstrapIcon, 10) + "/font/bootstrap-icons.min.css", "media": "all", "crossorigin": "anonymous" }).one("error", function () { this.href = Url.CDN[1] + "ajax/libs/bootstrap-icons/" + Version.BootstrapIcon + "/font/bootstrap-icons.min.css" }), $("<link>").attr({ "rel": "icon", "href": Url.CDN[0] + "gh/BaleshSrle/baleshsrle.github.io/logo.png" }));
        $(e).append($("<style></style>").text(".ubuntu-regular { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: normal; }\n.ubuntu-regular-italic { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: italic; }\n.ubuntu-bold { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: normal; }\n.ubuntu-bold-italic { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; }"));

    });
    /* $("[href$='bootstrap.min.css'],[src$='jquery.min.js'],[href$='bootstrap.bundle.min.js']").on("error", function () {
        location.reload();
    }); */
    $("script[src*='moment@" + parseInt(Version.MomentJS, 10) + "']").one("error", function () { this.src = Url.CDN[1] + "ajax/libs/moment.js/" + Version.MomentJS + "/moment.min.js"; });
    $("script[src*='bootstrap@" + parseInt(Version.Bootstrap, 10) + "']").one("error", function () { this.src = Url.CDN[1] + "ajax/libs/bootstrap/" + Version.Bootstrap + "/js/bootstrap.bundle.min.js"; });
    $("script[src*='jquery-coundown@" + parseInt(Version.jQueryCountdown, 10) + "']").one("error", function () { this.src = Url.CDN[1] + "ajax/libs/jquery.countdown/" + Version.jQueryCountdown + "/jquery.countdown.min.js"; });
    // $("<script>").attr("src", Url.CDN[0] + "npm/jquery-migrate@3/dist/jquery-migrate.min.js").one("error", function () { this.src = Url.CDN[1] + "ajax/libs/jquery-migrate/3.6.0/jquery-migrate.min.js" }).insertAfter("script[src*='jquery@3']");
    /*$("script[src*='jquery@3']").after($("<script></script>").on("error", function () {$(this).remove(); $("<script></script>").attr("src", Url.CDN[1] + "ajax/libs/jquery-migrate/4.0.2/jquery-migrate.min.js").insertAfter("script[src*='jquery@3']"); }).attr("src", Url.CDN[0] + "npm/jquery-migrate@4/dist/jquery-migrate.min.js"));*/
    // $("[href$='.min.css'],[src$='.min.js']").attr("crossorigin", "anonymous");
    $("[src$='.min.js']").attr("crossorigin", "anonymous");
    //$("body").css("font-family", "Ubuntu");
    $("body").addClass("ubuntu-regular");
    $("span.ScreenResolution").text(screen.width + "px x " + screen.height + "px");
    $("span.dpr").text(window.devicePixelRatio);
    $("span.UserAgent").text(navigator.userAgent);
    $("button#backBtn").on("click", (event) => {
        history.back();
    }).attr("type", "button");
    $("#godina").text(new Date().getFullYear() + '.');
    $("#lastmod").html("Ova stranica je poslednji put ažurirana " + new Date(document.lastModified).toLocaleDateString("sr-BA"));
    /*$("img.BadgenStaticBadge").each((i, e) => {
        const Label = encodeURIComponent($(e).data("label"));
        const Status = encodeURIComponent($(e).data("status"));
        const Color = $(e).data("color") || "blue";
        const Icon = $(e).data("icon") || "";
        const LabelColor = $(e).data("labelcolor") || "";
        const URL = $(e).data("url");
        const URLLang = $(e).data("urllang");
        $(e).attr({ "src": "https://badgen.net/static/" + Label + "/" + Status + "/" + Color + "?icon=" + Icon + "&labelColor=" + LabelColor, "loading": "lazy", "crossorigin": "anonymous" });
        (URL) ? $(e).wrap($("<a></a>").attr({ "href": URL, "hreflang": URLLang, "target": "_blank", "rel": "external" })) : $(e).unwrap("a");
    });*/
    $("img.githubBadge").each((i, e) => {
        const $img = $(e);
        const Type = $img.data("type").split(",").map(item => item.trim());
        const Logo = ($img.data("logo") ? String($img.data("logo")) : "").split(",").map(item => item.trim());
        const Label = $img.data("label").split(",").map(item => item.trim());
        const { Latest, Stable, Package, Filter, LogoIco, LogoColor, LogoSize, LabelTxt, LabelColor, Color } = { Latest: (Type[0] === "release") ? "/latest" : "", Stable: (Type[1] === "release") ? "/stable" : "", Package: $img.data("package"), Filter: $img.data("filter") || "*", LogoIco: Logo[0] || "github", LogoColor: Logo[1] || "white", LogoSize: Logo[2] || "", LabelTxt: encodeURIComponent(Label[0]), LabelColor: Label[1] || "181717", Color: $img.data("color") || "blue" };
        $img.attr({ "src": Url.Badges[0] + "github/v/" + Type[0] + "/" + Package + "?filter=" + Filter + "&logo=" + LogoIco + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + LabelTxt + "%20%40%20GitHub&labelColor=" + LabelColor + "&color=" + Color, "alt": "Badge for GitHub Package " + Package, "loading": (i === 0) ? "eager" : "lazy", "crossorigin": "anonymous" }).one("error", function () { this.src = Url.Badges[1] + "github/" + Type[1] + "/" + Package + Stable + "?icon=" + LogoIco + "&label=" + LabelTxt + "%20%40%20GitHub&labelColor=" + LabelColor + "&color=" + Color; }).wrap($("<a></a>").attr({ "href": Url.GitHub + Package + "/" + Type[0] + "s" + Latest, "hreflang": "en", "target": "_blank", "rel": "external" }));
    });
    $("img.StaticBadge").each((i, e) => {
        const $img = $(e);
        const Label1 = ($img.data("label1") ? String($img.data("label1")) : "").split(",").map(item => item.trim());
        const Label2 = ($img.data("label2") ? String($img.data("label2")) : "").split(",").map(item => item.trim());
        const Logo = ($img.data("logo") ? String($img.data("logo")) : "").split(",").map(item => item.trim());
        const { Label1Text, Label1Color, Label2Text, Label2Color, BadgeStyle, LogoIco, LogoColor, LogoSize, URL, URLLang } = { Label1Text: encodeURIComponent(Label1[0] || ""), Label1Color: Label1[1] || "blue", Label2Text: encodeURIComponent(Label2[0] || ""), Label2Color: Label2[1] || "", BadgeStyle: $img.data("badgestyle") || "", LogoIco: Logo[0] || "", LogoColor: Logo[1] || "", LogoSize: Logo[2] || "", URL: $img.data("url"), URLLang: $img.data("urllang") || "" };
        //const Name = $(e).data("name") || "";
        $img.attr({ "src": Url.Badges[0] + "badge/" + Label1Text + "-" + Label1Color + "?style=" + BadgeStyle + "&logo=" + LogoIco + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label2Text + "&labelColor=" + Label2Color, "alt": "Shields.io Static Badge"/* + Name*/, "loading": (i === 0) ? "eager" : "lazy", "crossorigin": "anonymous" }).one("error", function () { $(this).attr({ "src": Url.Badges[1] + "static/" + Label2Text + "/" + Label1Text + "/" + Label1Color + "?icon=" + LogoIco + "&labelColor=" + Label2Color, "alt": "Badgen.net Static Badge"/* + Name*/ }); });
        (URL) ? $img.wrap($("<a></a>").attr({ "href": URL, "hreflang": URLLang, "target": "_blank", "rel": "external" })) : $img.unwrap("a");
    });
    $("img.w3cValidationBadge").each((i, e) => {
        const $img = $(e);
        const { Parser, URL, LabelTxtSuffix } = { Parser: $img.data("parser"), URL: encodeURIComponent($img.data("url")), LabelTxtSuffix: $img.data("labeltxtsuffix") || "" };
        $img.attr({ "src": Url.Badges[0] + "w3c-validation/" + Parser + "?targetUrl=" + URL + "&label=W3C%20Validation%20-%20" + LabelTxtSuffix + "&cacheSeconds=1800", "alt": "Shields.io W3C Validation Badge - " + LabelTxtSuffix, "loading": (i === 0) ? "eager" : "lazy", "crossorigin": "anonymous" }).wrap($("<a></a>").attr({ "href": "https://validator.w3.org/nu/?doc=" + decodeURIComponent(URL), "target": "_blank", "hreflang": "en", "rel": "external" }));
    });
    $("img.websiteBadge").each((i, e) => {
        const $img = $(e);
        const Logo = ($img.data("logo") ? String($img.data("logo")) : "").split(",").map(item => item.trim());
        const { URL, Label, LogoIco, LogoColor, LogoSize, Color } = { URL: encodeURIComponent($img.data("url")), Label: encodeURIComponent($img.data("label") || "Website"), LogoIco: Logo[0] || "", LogoColor: Logo[1] || "", LogoSize: Logo[2] || "", Color: $img.data("color") || "" };
        $img.attr({ "src": Url.Badges[0] + "website?url=" + URL + "&logo=" + LogoIco + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "&labelColor=" + Color + "&cacheSeconds=1800", "alt": "Shields.io Website Badge", "loading": (i === 0) ? "eager" : "lazy", "crossorigin": "anonymous" });
    });
    document.normalize();
});