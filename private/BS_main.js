"use strict";

console.info("Glavna skripta je pokrenuta.");

$(document).ready(() => {
    if (location.pathname != "/index.html") {
        $("html").attr("lang", "sr-BA");
        $("head").prepend($("<meta>").attr({ "name": "robots", "content": "index, nofollow" }), $("<meta>").attr({ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }));
    }
    (location.pathname == "/private/kontrolna_tabla.html") ? $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_CP_main.min.js") : $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_site.min.js");
    $("head").each((i, e) => {
        $(e).prepend(/*$("<meta>").attr("charset", "UTF-8"), */$("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
        $(e).prepend($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net" }), $("<meta>").attr({ "name": "designer", "content": "Servis računara &quot;BALEŠEVIĆ&quot;" }), $("<meta>").attr({ "name": "reply-to", "content": "baleshevichcompany%40dobojcaffe.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "www.dobojcaffe.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
        $(e).append($("<link>").attr({ "rel": "dns-prefetch", "href": "https://cdn.jsdelivr.net/" }), $("<link>").attr({ "rel": "dns-prefetch", "href": "https://fonts.gstatic.com" }), $("<link>").attr({ "rel": "preconnect", "href": "https://cdn.jsdelivr.net/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "preconnect", "href": "https://fonts.googleapis.com" }), $("<link>").attr({ "rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "prefetch", "href": "https://img.shields.io/" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css", "media": "all", "crossorigin": "anonymous" }).on("error", function () { this.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap", "media": "all", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css", "media": "all", "crossorigin": "anonymous" }).on("error", function () { this.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.13.1/font/bootstrap-icons.min.css" }), $("<link>").attr({ "rel": "icon", "href": "https://cdn.jsdelivr.net/gh/BaleshSrle/baleshsrle.github.io/logo.png" }));
        $(e).append($("<style></style>").text(".ubuntu-regular { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: normal; }\n.ubuntu-regular-italic { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: italic; }\n.ubuntu-bold { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: normal; }\n.ubuntu-bold-italic { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; }"));

    });
    /* $("[href$='bootstrap.min.css'],[src$='jquery.min.js'],[href$='bootstrap.bundle.min.js']").on("error", function () {
        location.reload();
    }); */
    $("script[src*='bootstrap@4']").attr("crossorigin", "anonymous").on("error", function () { this.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js"; })
    $("[href$='.min.css'],[src$='.min.js']").attr("crossorigin", "anonymous");
    //$("body").css("font-family", "Ubuntu");
    $("body").addClass("ubuntu-regular");
    $("button#backBtn").on("click", (event) => {
        history.back();
    }).attr("type", "button");
    $("#godina").text(new Date().getFullYear() + '.');
    $("#lastmod").html("Ova stranica je poslednji put ažurirana " + new Date(document.lastModified).toLocaleDateString("sr-BA"));
    $("img.BadgenStaticBadge").each((i, e) => {
        const Label = encodeURIComponent($(e).data("label"));
        const Status = encodeURIComponent($(e).data("status"));
        const Color = $(e).data("color") || "blue";
        const Icon = $(e).data("icon") || "";
        const LabelColor = $(e).data("labelcolor") || "";
        const URL = $(e).data("url");
        const URLLang = $(e).data("urllang");
        $(e).attr({ "src": "https://badgen.net/static/" + Label + "/" + Status + "/" + Color + "?icon=" + Icon + "&labelColor=" + LabelColor, "loading": "lazy", "crossorigin": "anonymous" });
        (URL) ? $(e).wrap($("<a></a>").attr({ "href": URL, "hreflang": URLLang, "target": "_blank", "rel": "external" })) : $(e).unwrap();
    });
    $("img.githubBadge").each((i, e) => {
        const Type = Boolean($(e).data("type")) === true ? "release" : "tag";
        const TypeBackup = Boolean($(e).data("typebackup")) === true ? "release" : "tag";
        const Latest = (Type === "release") ? "/latest" : "";
        const Stable = (TypeBackup === "release") ? "/stable" : "";
        const Package = $(e).data("package");
        const Filter = $(e).data("filter") || "*";
        const Logo = $(e).data("logo") || "github";
        const LogoColor = $(e).data("logocolor") || "";
        const LogoSize = $(e).data("logosize") || "";
        const Label = encodeURIComponent($(e).data("label"));
        const LabelColor = $(e).data("labelcolor") || "181717";
        const Color = $(e).data("color") || "blue";
        $(e).attr({
            "src": "https://img.shields.io/github/v/" + Type + "/" + Package + "?filter=" + Filter + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20GitHub&labelColor=" + LabelColor + "&color=" + Color, "alt": "Badge for GitHub Package " + Package, "loading": "lazy", "crossorigin": "anonymous"
        }).on("error", function () {
            $(e.target).attr("src", "https://badgen.net/github/" + TypeBackup + "/" + Package + Stable + "?icon=" + Logo + "&label=" + Label + "%20%40%20GitHub&labelColor=" + LabelColor + "&color=" + Color);
        }).wrap($("<a></a>").attr({ "href": "https://github.com/" + Package + "/" + Type + "s" + Latest, "hreflang": "en", "target": "_blank", "rel": "external" }));
    });
    $("img.StaticBadge").each((i, e) => {
        const Label1Text = encodeURIComponent($(e).data("label1") || "");
        const Label1Color = $(e).data("color1") || "";
        const Label2Text = encodeURIComponent($(e).data("label2") || "");
        const Label2Color = $(e).data("color2") || "";
        const BadgeStyle = $(e).data("badgestyle") || "";
        const Logo = $(e).data("logo") || "";
        const LogoColor = $(e).data("logocolor") || "";
        const LogoSize = $(e).data("logosize") || "";
        const URL = $(e).data("url");
        const URLLang = $(e).data("urllang") || "";
        const Name = $(e).data("name") || "";
        $(e).attr({ "src": "https://img.shields.io/badge/" + Label1Text + "-" + Label1Color + "?style=" + BadgeStyle + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label2Text + "&labelColor=" + Label2Color, "alt": "Shields.io Static Badge " + Name, "loading": "lazy", "crossorigin": "anonymous" });
        (URL) ? $(e).wrap($("<a></a>").attr({ "href": URL, "hreflang": URLLang, "target": "_blank", "rel": "external" })) : $(e).unwrap();
    });
    $("img.w3cValidationBadge").each((i, e) => {
        const Parser = $(e).data("parser");
        const URL = encodeURIComponent($(e).data("url"));
        const LabelTxtSuffix = $(e).data("labeltxtsuffix") || "";
        $(e).attr({ "src": "https://img.shields.io/w3c-validation/" + Parser + "?targetUrl=" + URL + "&label=W3C%20Validation%20-%20" + LabelTxtSuffix + "&cacheSeconds=1800", "alt": "Shields.io W3C Validation Badge - " + LabelTxtSuffix, "loading": "lazy", "crossorigin": "anonymous" }).wrap($("<a></a>").attr({ "href": "https://validator.w3.org/nu/?doc=" + decodeURIComponent(URL), "target": "_blank", "hreflang": "en", "rel": "external" }));
    });
    $("img.websiteBadge").each((i, e) => {
        const URL = encodeURIComponent($(e).data("url"));
        const Label = encodeURIComponent($(e).data("label") || "Website");
        const Logo = $(e).data("logo") || "";
        const LogoColor = $(e).data("logocolor") || "";
        const LogoSize = $(e).data("logosize") || "";
        const Color = $(e).data("color") || "";
        $(e).attr({
            "src": "https://img.shields.io/website?url=" + URL + "&logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "&labelColor=" + Color + "&cacheSeconds=1800", "alt": "Shields.io Website Badge", "loading": "lazy", "crossorigin": "anonymous"
        });
    });
    document.normalize();
});