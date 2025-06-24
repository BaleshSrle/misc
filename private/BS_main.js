"use strict";

console.info("Glavna skripta je pokrenuta.");

$(document).ready(function () {

    if (location.pathname != "/index.html") {
        $("html").attr("lang", "sr-BA");
        $("head").prepend($("<meta>").attr({ "name": "robots", "content": "index, nofollow" }), $("<meta>").attr({ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }));
    }
    if (location.pathname == "/private/kontrolna_tabla.html"/* || location.pathname == "/F:/puovi/Documents/private/kontrolna_tabla.html"*/) {
        $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_CP_main.min.js");
    } else {
        $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_site.min.js");
    }

    $("head").each(function () {
        $(this).prepend($("<meta>").attr({ "name": "author", "content": "Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net" }), $("<meta>").attr({ "name": "designer", "content": "Servis računara &quot;BALEŠEVIĆ&quot;" }), $("<meta>").attr({ "name": "reply-to", "content": "baleshevichcompany%40dobojcaffe.com" }), $("<meta>").attr({ "name": "language", "content": "sr" }), $("<meta>").attr({ "name": "host", "content": "www.dobojcaffe.com" }), $("<meta>").attr({ "name": "geo.region", "content": "BA-SRP" }), $("<meta>").attr({ "name": "geo.placename", "content": "Добој" }), $("<meta>").attr({ "name": "twitter:creator", "content": "@BaleshSrle" }), $("<meta>").attr({ "name": "twitter:site", "content": "@BaleshSrle" }));
        $(this).prepend($("<meta>").attr({ "name": "MSThemeCompatible", "content": "yes" }), $("<meta>").attr({ "http-equiv": "cleartype", "content": "on" }), $("<meta>").attr({ "http-equiv": "x-dns-prefetch-control", "content": "on" }), $("<meta>").attr({ "http-equiv": "Cache-control", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Pragma", "content": "no-cache" }), $("<meta>").attr({ "http-equiv": "Expires", "content": "-1" }));
        $(this).append($("<link>").attr({ "rel": "dns-prefetch", "href": "https://cdn.jsdelivr.net/" }), $("<link>").attr({ "rel": "dns-prefetch", "href": "https://fonts.gstatic.com" }), $("<link>").attr({ "rel": "preconnect", "href": "https://cdn.jsdelivr.net/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "preconnect", "href": "https://fonts.googleapis.com" }), $("<link>").attr({ "rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "prefetch", "href": "https://img.shields.io/" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css", "media": "all", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap", "media": "all", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css", "media": "all", "crossorigin": "anonymous" }));
        $(this).append($("<link>").attr({ "rel": "icon", "href": "https://cdn.jsdelivr.net/gh/BaleshSrle/baleshsrle.github.io/logo.png" }));
    });
    $("[href$='bootstrap.min.css'],[src$='jquery.min.js'],[href$='bootstrap.bundle.min.js']").on("error", function () {
        location.reload();
    });
    $("[href$='.min.css'],[src$='.min.js']").attr("crossorigin", "anonymous");
    //$("body").css("font-family", "Ubuntu");

    $("style").text(".ubuntu-regular { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: normal; }\n.ubuntu-regular-italic { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: italic; }\n.ubuntu-bold { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: normal; }\n.ubuntu-bold-italic { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; }");
    $("body").addClass("ubuntu-regular");
    $("button#backBtn").on("click", function () {
        history.back();
    }).attr("type", "button");
    $("#godina").text(new Date().getFullYear() + '.');
    $("#lastmod").html("Ova stranica je poslednji put ažurirana " + new Date(document.lastModified).toLocaleDateString("sr-BA"));
    document.normalize();
});