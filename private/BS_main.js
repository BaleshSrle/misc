"use strict";

console.info("Glavna skripta je pokrenuta.");

$(document).ready(function () {
    if (location.pathname != "/index.html") {
        $("html").attr("lang", "sr-BA");
        $("head").prepend($("<meta>").attr({ "name": "robots", "content": "index, nofollow" }), $("<meta>").attr({ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }));
    }
    (location.pathname == "/private/kontrolna_tabla.html") ? $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_CP_main.min.js") : $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_site.min.js");
    $("head").each(function () {
        $(this).prepend($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net" }), $("<meta>").attr({ "name": "designer", "content": "Servis računara &quot;BALEŠEVIĆ&quot;" }), $("<meta>").attr({ "name": "reply-to", "content": "baleshevichcompany%40dobojcaffe.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "www.dobojcaffe.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
        $(this).prepend(/*$("<meta>").attr("charset", "UTF-8"), */$("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
        $(this).append($("<link>").attr({ "rel": "dns-prefetch", "href": "https://cdn.jsdelivr.net/" }), $("<link>").attr({ "rel": "dns-prefetch", "href": "https://fonts.gstatic.com" }), $("<link>").attr({ "rel": "preconnect", "href": "https://cdn.jsdelivr.net/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "preconnect", "href": "https://fonts.googleapis.com" }), $("<link>").attr({ "rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "prefetch", "href": "https://img.shields.io/" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css", "media": "all", "crossorigin": "anonymous" }).on("error", function () { this.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap", "media": "all", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css", "media": "all", "crossorigin": "anonymous" }).on("error", function () { this.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.13.1/font/bootstrap-icons.min.css" }));
        $(this).append($("<style></style").text(".ubuntu-regular { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: normal; }\n.ubuntu-regular-italic { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: italic; }\n.ubuntu-bold { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: normal; }\n.ubuntu-bold-italic { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; }"));
        $(this).append($("<link>").attr({ "rel": "icon", "href": "https://cdn.jsdelivr.net/gh/BaleshSrle/baleshsrle.github.io/logo.png" }));
    });
    /* $("[href$='bootstrap.min.css'],[src$='jquery.min.js'],[href$='bootstrap.bundle.min.js']").on("error", function () {
        location.reload();
    }); */
    $("script[src*='bootstrap@4']").attr("crossorigin", "anonymous").on("error", function () { this.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js"; })
    $("[href$='.min.css'],[src$='.min.js']").attr("crossorigin", "anonymous");
    //$("body").css("font-family", "Ubuntu");
    $("body").addClass("ubuntu-regular");
    $("button#backBtn").on("click", function () {
        history.back();
    }).attr("type", "button");
    $("#godina").text(new Date().getFullYear() + '.');
    $("#lastmod").html("Ova stranica je poslednji put ažurirana " + new Date(document.lastModified).toLocaleDateString("sr-BA"));
    $("img.BadgenStaticBadgeLink").each(function () {
        const Label = encodeURIComponent($(this).data("label"));
        const Status = encodeURIComponent($(this).data("status"));
        const Color = $(this).data("color");
        const Icon = $(this).data("icon") || "";
        const LabelColor = $(this).data("labelcolor") || "";
        const url = $(this).data("url");
        const urlLang = $(this).data("urllang");
        $(this).attr({ "src": "https://badgen.net/static/" + Label + "/" + Status + "/" + Color + "?icon=" + Icon + "&labelColor=" + LabelColor, "loading": "lazy" }).wrap($("<a></a>").attr({ "href": url, "hreflang": urlLang, "target": "_blank" }));
    });
    $("img.BadgenStaticBadge").each(function () {
        const Label = encodeURIComponent($(this).data("label"));
        const Status = encodeURIComponent($(this).data("status"));
        const Color = $(this).data("color") || "blue";
        const Icon = $(this).data("icon") || "";
        const LabelColor = $(this).data("labelcolor") || "";
        $(this).attr({ "src": "https://badgen.net/static/" + Label + "/" + Status + "/" + Color + "?icon=" + Icon + "&labelColor=" + LabelColor, "loading": "lazy" });
    });
    $("img.githubBadge").each(function () {
        const Release1 = Boolean($(this).data("release1")) === true ? "release" : "tag";
        const Release2 = Boolean($(this).data("release2")) === true ? "release" : "tag";
        const Stable = (Release2 === "release") ? "/stable" : "";
        const Package = $(this).data("package");
        const Filter = $(this).data("filter") || "*";
        const Logo = $(this).data("logo") || "github";
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const Label = encodeURIComponent($(this).data("label"));
        //const LabelColor = $(this).data("labelcolor") || "";
        const Color = $(this).data("color") || "blue";
        $(this).attr({
            "src": "https://img.shields.io/github/v/" + Release1 + "/" + Package + "?filter=" + Filter + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20GitHub&labelColor=181717&color=" + Color, "alt": "Badge for GitHub Package " + Package, "loading": "lazy"
        }).on("error", function () {
            $(this).attr("src", "https://badgen.net/github/" + Release2 + "/" + Package + Stable + "?icon=" + Logo + "&label=" + Label + "%20%40%20GitHub&labelColor=181717&color=" + Color);
        });
    });
    $("img.githubLinkBadge").each(function () {
        const Release1 = Boolean($(this).data("release1")) === true ? "release" : "tag";
        const Release2 = Boolean($(this).data("release2")) === true ? "release" : "tag";
        const Stable = (Release2 === "release") ? "/stable" : "";
        const Package = $(this).data("package");
        const Filter = $(this).data("filter") || "*";
        const Logo = $(this).data("logo") || "github";
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const Label = encodeURIComponent($(this).data("label"));
        const LabelColor = $(this).data("labelcolor") || "";
        const Color = $(this).data("color") || "blue";
        const URL = $(this).data("url");
        $(this).attr({
            "src": "https://img.shields.io/github/v/" + Release1 + "/" + Package + "?filter=" + Filter + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "&labelColor=" + LabelColor + "&color=" + Color, "alt": "Link Badge for GitHub Package " + Package, "loading": "lazy"
        }).on("error", function () {
            $(this).attr("src", "https://badgen.net/github/" + Release2 + "/" + Package + Stable + "?icon=" + Logo + "&label=" + Label + "%20%40%20GitHub&labelColor=181717&color=" + Color);
        }).wrap($("<a></a>").attr({ "href": URL, "target": "_blank" }));
    });
    $("img.StaticBadge").each(function () {
        const Label1Text = encodeURIComponent($(this).data("label1") || "");
        const Label1Color = $(this).data("color1") || "";
        const Label2Text = encodeURIComponent($(this).data("label2") || "");
        const Label2Color = $(this).data("color2") || "";
        const BadgeStyle = $(this).data("badgestyle") || "";
        const Logo = $(this).data("logo") || "";
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const URL = $(this).data("url");
        const URLLang = $(this).data("urllang") || "";
        const Name = $(this).data("name") || "";
        $(this).attr({ "src": "https://img.shields.io/badge/" + Label1Text + "-" + Label1Color + "?style=" + BadgeStyle + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label2Text + "&labelColor=" + Label2Color, "alt": "Shields.io Static Badge" + Name, "loading": "lazy" }).wrap($("<a></a>").attr({ "href": URL, "target": "_blank", "hreflang": URLLang }));
    });
    $("img.StaticBadge2").each(function () {
        const Label1Text = encodeURIComponent($(this).data("label1") || "");
        const Label1Color = $(this).data("color1") || "";
        const Label2Text = encodeURIComponent($(this).data("label2") || "");
        const Label2Color = $(this).data("color2") || "";
        const BadgeStyle = $(this).data("badgestyle") || "";
        const Logo = $(this).data("logo") || "";
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const Name = $(this).data("name") || "";
        $(this).attr({ "src": "https://img.shields.io/badge/" + Label1Text + "-" + Label1Color + "?style=" + BadgeStyle + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label2Text + "&labelColor=" + Label2Color, "alt": "Shields.io Static Link Badge " + Name, "loading": "lazy" });
    });
    $("img.w3cValidationBadge").each(function () {
        const Parser = $(this).data("parser");
        const URL = encodeURIComponent($(this).data("url"));
        const LabelTxtSuffix = $(this).data("labeltxtsuffix") || "";
        $(this).attr({ "src": "https://img.shields.io/w3c-validation/" + Parser + "?targetUrl=" + URL + "&label=W3C%20Validation%20-%20" + LabelTxtSuffix + "&cacheSeconds=1800", "alt": "Shields.io W3C Validation Badge - " + LabelTxtSuffix, "loading": "lazy" }).wrap($("<a></a>").attr({ "href": "https://validator.w3.org/nu/?doc=" + decodeURIComponent(URL), "target": "_blank", "hreflang": "en" }));
    });
    $("img.websiteBadge").each(function () {
        const URL = encodeURIComponent($(this).data("url"));
        const Label = encodeURIComponent($(this).data("label") || "Website");
        const Logo = $(this).data("logo") || "";
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const Color = $(this).data("color") || "";
        $(this).attr({
            "src": "https://img.shields.io/website?url=" + URL + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "&labelColor=" + Color + "&cacheSeconds=1800", "alt": "Shields.io Website Badge", "loading": "lazy"
        });
    });
    document.normalize();
});