"use strict";

console.info("Glavna skripta je pokrenuta.");

$(document).ready(() => {
    const UrlCDN = ["https://cdn.jsdelivr.net/", "https://cdnjs.cloudflare.com/"];
    const GoogleFontsUrl = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
    const BadgesUrl = ["https://img.shields.io/", "https://badgen.net/"];
    (location.pathname != "/index.html") ? ($("html").attr("lang", "sr-BA"), $("head").prepend($("<meta>").attr({ "name": "robots", "content": "index, nofollow" }), $("<meta>").attr({ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }))) : null;
    (location.pathname == "/private/kontrolna_tabla.html") ? $.getScript(UrlCDN[0] + "gh/BaleshSrle/misc/private/BS_CP_main.min.js") : $.getScript(UrlCDN[0] + "gh/BaleshSrle/misc/private/BS_site.min.js");
    $("head").each((i, e) => {
        $(e).prepend(/*$("<meta>").attr("charset", "UTF-8"), */$("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
        $(e).prepend($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net" }), $("<meta>").attr({ "name": "designer", "content": "Servis računara &quot;BALEŠEVIĆ&quot;" }), $("<meta>").attr({ "name": "reply-to", "content": "baleshevichcompany%40dobojcaffe.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "www.dobojcaffe.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
        $(e).append($("<link>").attr({ "rel": "dns-prefetch", "href": UrlCDN[0] }).on("error", function () { this.href = UrlCDN[1] }), $("<link>").attr({ "rel": "dns-prefetch", "href": GoogleFontsUrl[1] }), $("<link>").attr({ "rel": "preconnect", "href": UrlCDN[0], "crossorigin": "anonymous" }).on("error", function () { this.href = UrlCDN[1] }), $("<link>").attr({ "rel": "preconnect", "href": GoogleFontsUrl[0] }), $("<link>").attr({ "rel": "preconnect", "href": GoogleFontsUrl[1], "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "prefetch", "href": BadgesUrl[0] }).on("error", function () { this.href = BadgesUrl[1] }), $("<link>").attr({ "rel": "stylesheet", "href": UrlCDN[0] + "npm/bootstrap@4/dist/css/bootstrap.min.css", "media": "all", "crossorigin": "anonymous" }).on("error", function () { this.href = UrlCDN[1] + "ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css" }), $("<link>").attr({ "rel": "stylesheet", "href": GoogleFontsUrl[0] + "/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap", "media": "all", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "stylesheet", "href": UrlCDN[0] + "npm/bootstrap-icons@1/font/bootstrap-icons.min.css", "media": "all", "crossorigin": "anonymous" }).on("error", function () { this.href = UrlCDN[1] + "ajax/libs/bootstrap-icons/1.13.1/font/bootstrap-icons.min.css" }), $("<link>").attr({ "rel": "icon", "href": UrlCDN[0] + "gh/BaleshSrle/baleshsrle.github.io/logo.png" }));
        $(e).append($("<style></style>").text(".ubuntu-regular { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: normal; }\n.ubuntu-regular-italic { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: italic; }\n.ubuntu-bold { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: normal; }\n.ubuntu-bold-italic { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; }"));

    });
    /* $("[href$='bootstrap.min.css'],[src$='jquery.min.js'],[href$='bootstrap.bundle.min.js']").on("error", function () {
        location.reload();
    }); */
    $("script[src*='bootstrap@4']").on("error", function () { this.src = UrlCDN[1] + "ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js"; });
    $("script[src*='jquery@3']").after($("<script></script>").attr("src", UrlCDN[0] + "npm/jquery-migrate@4/dist/jquery-migrate.min.js"));
    $("script[src*='moment@2']").on("error", function () { this.src = UrlCDN[1] + "ajax/libs/moment.js/2.30.1/moment.min.js"; });
    $("[href$='.min.css'],[src$='.min.js']").attr("crossorigin", "anonymous");
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
        //const Type = Boolean($(e).data("type")) === true ? "release" : "tag";
        //const TypeBackup = Boolean($(e).data("typebackup")) === true ? "release" : "tag";
        const $img = $(e);
        const { Type, Latest, Stable, Package, Filter, Logo, LogoColor, LogoSize, Label, LabelColor, Color } = { Type: $img.data("type").split(",").map(item => item.trim()), Latest: (Type[0] === "release") ? "/latest" : "", Stable: (Type[1] === "release") ? "/stable" : "", Package: $img.data("package"), Filter: $img.data("filter") || "*", Logo: $img.data("logo") || "github", LogoColor: $img.data("logocolor") || "", LogoSize: $img.data("logosize") || "", Label: encodeURIComponent($img.data("label")), LabelColor: $img.data("labelcolor") || "181717", Color: $img.data("color") || "blue" };
        $img.attr({
            "src": BadgesUrl[0] + "github/v/" + Type[0] + "/" + Package + "?filter=" + Filter + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20GitHub&labelColor=" + LabelColor + "&color=" + Color, "alt": "Badge for GitHub Package " + Package, "loading": "lazy", "crossorigin": "anonymous"
        }).on("error", function () {
            $(this).attr("src", BadgesUrl[1] + "github/" + Type[1] + "/" + Package + Stable + "?icon=" + Logo + "&label=" + Label + "%20%40%20GitHub&labelColor=" + LabelColor + "&color=" + Color);
        }).wrap($("<a></a>").attr({ "href": "https://github.com/" + Package + "/" + Type[0] + "s" + Latest, "hreflang": "en", "target": "_blank", "rel": "external" }));
    });
    $("img.StaticBadge").each((i, e) => {
        const $img = $(e);
        const { Label1Text, Label1Color, Label2Text, Label2Color, BadgeStyle, Logo, LogoColor, LogoSize, URL, URLLang } = { Label1Text: encodeURIComponent($img.data("label1") || ""), Label1Color: $img.data("color1") || "blue", Label2Text: encodeURIComponent($img.data("label2") || ""), Label2Color: $img.data("color2") || "555555", BadgeStyle: $img.data("badgestyle") || "", Logo: $img.data("logo") || "", LogoColor: $img.data("logocolor") || "", LogoSize: $img.data("logosize") || "", URL: $img.data("url"), URLLang: $img.data("urllang") || "" };
        //const Name = $(e).data("name") || "";
        (Label2Text === "") ? $img.attr({ "src": BadgesUrl[0] + "badge/" + Label1Text + "-" + Label1Color + "?style=" + BadgeStyle + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize, "alt": "Shields.io Static Badge"/* + Name*/, "loading": "lazy", "crossorigin": "anonymous" }) : $img.attr({ "src": BadgesUrl[0] + "badge/" + Label1Text + "-" + Label1Color + "?style=" + BadgeStyle + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label2Text + "&labelColor=" + Label2Color, "alt": "Shields.io Static Badge"/* + Name*/, "loading": "lazy", "crossorigin": "anonymous" }).on("error", function () {
            $(this).attr({ "src": BadgesUrl[1] + "static/" + Label2Text + "/" + Label1Text + "/" + Label1Color + "?icon=" + Logo + "&labelColor=" + Label2Color, "alt": "Badgen.net Static Badge" });
        });
        (URL) ? $img.wrap($("<a></a>").attr({ "href": URL, "hreflang": URLLang, "target": "_blank", "rel": "external" })) : $img.unwrap("a");
    });
    $("img.w3cValidationBadge").each((i, e) => {
        const $img = $(e);
        const { Parser, URL, LabelTxtSuffix } = { Parser: $img.data("parser"), URL: encodeURIComponent($img.data("url")), LabelTxtSuffix: $img.data("labeltxtsuffix") || "" };
        $img.attr({ "src": BadgesUrl[0] + "w3c-validation/" + Parser + "?targetUrl=" + URL + "&label=W3C%20Validation%20-%20" + LabelTxtSuffix + "&cacheSeconds=1800", "alt": "Shields.io W3C Validation Badge - " + LabelTxtSuffix, "loading": "lazy", "crossorigin": "anonymous" }).wrap($("<a></a>").attr({ "href": "https://validator.w3.org/nu/?doc=" + decodeURIComponent(URL), "target": "_blank", "hreflang": "en", "rel": "external" }));
    });
    $("img.websiteBadge").each((i, e) => {
        const $img = $(e);
        const { URL, Label, Logo, LogoColor, LogoSize, Color } = { URL: encodeURIComponent($img.data("url")), Label: encodeURIComponent($img.data("label") || "Website"), Logo: $img.data("logo") || "", LogoColor: $img.data("logocolor") || "", LogoSize: $img.data("logosize") || "", Color: $img.data("color") || "" };
        $img.attr({
            "src": BadgesUrl[0] + "website?url=" + URL + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "&labelColor=" + Color + "&cacheSeconds=1800", "alt": "Shields.io Website Badge", "loading": "lazy", "crossorigin": "anonymous"
        });
    });
    document.normalize();
});