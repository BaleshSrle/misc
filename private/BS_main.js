"use strict";

console.info("Glavna skripta je pokrenuta.");

$(document).ready(function () {
    document.normalize();
    if (location.pathname != "/index.html") {
        $("html").attr("lang", "sr-BA");
        $("head").prepend("<meta name='robots' content='index, nofollow'>", "<meta http-equiv='X-UA-Compatible' content='IE=edge'>");
    }
    if (location.pathname == "/private/kontrolna_tabla.html" || location.pathname == "/D:/PC-Admin/Documents/private/kontrolna_tabla.html") {
        $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_CP_main.min.js");
    } else {
        $.getScript("https://cdn.jsdelivr.net/gh/BaleshSrle/misc/private/BS_site.min.js");
    }

    $("head").each(function () {
        $(this).prepend("<meta name='author' content='Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net'>", "<meta name='designer' content='Servis računara &quot;BALEŠEVIĆ&quot;'>", "<meta name='reply-to' content='baleshevichcompany%40dobojcaffe.com'>", "<meta name='language' content='sr'>", "<meta name='host' content='www.dobojcaffe.com'>", "<meta name='geo.region' content='BA-SRP'>", "<meta name='geo.placename' content='Добој'>", "<meta name='twitter:creator' content='@BaleshSrle'>", "<meta name='twitter:site' content='@BaleshSrle'>");
        $(this).prepend("<meta name='MSThemeCompatible' content='yes'>", "<meta http-equiv='cleartype' content='on'>", "<meta http-equiv='x-dns-prefetch-control' content='on'>", "<meta http-equiv='Cache-control' content='no-cache'>", "<meta http-equiv='Pragma' content='no-cache'>", "<meta http-equiv='Expires' content='-1'>");
        $(this).append("<link rel='dns-prefetch' href='https://cdn.jsdelivr.net/'>", "<link rel='dns-prefetch' href='https://fonts.gstatic.com'>", "<link rel='preconnect' href='https://cdn.jsdelivr.net/'>", "<link rel='preconnect' href='https://fonts.googleapis.com'>", "<link rel='preconnect' href='https://fonts.gstatic.com'>", "<link rel='prefetch' href='https://img.shields.io/'>", "<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap' media='all'>", "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css' media='all'>");
        $(this).append("<link rel='icon' href='https://cdn.jsdelivr.net/gh/BaleshSrle/baleshsrle.github.io/images/logo.png'>");
    });
    $("[href$='bootstrap.min.css'],[src$='jquery.min.js'],[href$='bootstrap.bundle.min.js']").on("error", function () {
        location.reload();
    });
    $("[rel='preconnect']:not([href*='googleapis']:first),[href$='.min.css'],[src$='.min.js']").attr("crossorigin", "anonymous");
    //$("body").css("font-family", "Ubuntu");

    $("style").text(".ubuntu-regular { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: normal; }\n.ubuntu-regular-italic { font-family: 'Ubuntu', sans-serif; font-weight: 400; font-style: italic; }\n.ubuntu-bold { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: normal; }\n.ubuntu-bold-italic { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; }");
    $("body").addClass("ubuntu-regular");
    $("button#backBtn").on("click", function () {
        history.back();
    }).attr("type", "button");
    $("#godina").text(new Date().getFullYear() + '.');
    $("#lastmod").html("Ova stranica je poslednji put ažurirana " + new Date(document.lastModified).toLocaleDateString("sr-BA"));
});