//"use strict";

/* $("body").on("error", function () {
    $(this).css({ "font-family": "'Ubuntu', sans-serif", "background": "url('https://baleshevich.dobojcaffe.com/itp100/images/logo.png') no-repeat fixed left bottom" });
}); */

function login() {
    /*var a = $("#username");
    var b = $(":password");
    const user = { username: "djidjimilovich", password: "baleshevich88" };*/
    const passwords = ["baleshevich88", "demo"];

    /* if (a.val() === "" && b.val() === "") {
        alert("Unos nije dozvoljen.\nMorate popuniti sva polja da biste nastavili dalje.");
    } else if (user.username !== a.val()) {
        a.val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešno korisničko ime. Pokušajte ponovo.");
        alert("Unijeli ste pogrešno korisničko ime.");
        a.focus();
    } else if (user.password !== b.val()) {
        b.val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešnu lozinku. Pokušajte ponovo.");
        alert("Unijeli ste pogrešnu lozinku.");
        b.focus();
    } else {
        $("#loginModal").modal("hide");
    } */
    switch ($(":password").val()) {
        case passwords[0]:
            $("#loginModal").modal("hide");
            break;
        case passwords[1]:
            $("#loginModal").modal("hide");
            //$("button#djevojkaDanaBtn").attr("disabled", "");
            $("a#djevojkaDanaBtn").addClass("disabled");
            $("[data-target='#sluzbeni']").addClass("disabled");
            $("[title^='Boobpedia']").addClass("d-none");
            break;
        case !(passwords[0]):
        case !(passwords[1]):
            console.error(DateTimeLocal, ": Unijeli ste pogrešnu lozinku. Pokušajte ponovo.");
            alert("Unijeli ste pogrešnu lozinku.");
            break;
        case (""):
            $(":password").val("").focus();
            console.error(DateTimeLocal, ": Unos nije dozvoljen. Polje mora biti popunjeno.");
            alert("Unos nije dozvoljen.\nPolje mora biti popunjeno.");
            break;
        default:
            $(":password").val("").focus();
    }
}

function loadTvStation() {
    return window.open($("#TvStation").val());
}

function loadRadioStation() {
    return window.open($("#RadioStation").val());
}

function IzracunajNoviNovcaniIznos() {
    var h = $("#novcaniIznos").val();
    var k = $("#procenatIznos").val();
    var procenat = k / 100;
    var procenat2 = h * procenat;

    switch ($("#vrstaObracunaNovca").val()) {
        case "umanjenjeIznos":
            var rezUmanjenje = h - procenat2;
            $("#NoviNovcaniIznos").text("Novi novčani iznos umanjenje - " + rezUmanjenje + " KM.");
            break;
        case "uvecanjeIznos":
            var rezUvecanje = +h + +procenat2;
            $("#NoviNovcaniIznos").text("Novi novčani iznos uvećanje - " + rezUvecanje + " KM.");
    }
}

function IzracunajDividendu() {
    var d = $("#cijenaJedneAkcije").val();
    var f = $("#brojAkcija").val();
    var g = d * f;

    $("#iznosDividende").text("Očekivana vrijednost dividende iznosi " + g.toFixed(2) + " KM.");
}

function loadURL() {
    return $("#urlOutput").attr("src", $("#url").val());
}

function imgApply() {
    $("img#imgResult").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css("transform", "rotate(" + $("#imgAngle").val() + "deg)").addClass("mx-auto d-block w-auto rounded-lg");
    //$("img#imgResult").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css({"rotate": $("#imgAngle").val() + 'deg', "transform": "rotate("+$("#imgAngle").val()+"deg)"}).addClass("mx-auto d-block w-auto rounded-lg");
}

function playTwitchStreamer() {
    $("iframe#TwitchPlayer").attr({ "src": function (index, src) { return 'https://player.twitch.tv/?channel=' + $("select#TwitchUsername").val() + '&parent=' + location.host }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
    $("iframe#chat_embed").attr({ "src": function (index, src) { return 'https://www.twitch.tv/embed/' + $("select#TwitchUsername").val() + '/chat?parent=' + location.host }, "allowfullscreen": "true" }).height(500).width(350).addClass("border-0 overflow-hidden rounded-lg");
}

function playKickStreamer() {
    $("iframe#KickPlayer").attr({ "src": function (index, src) { return 'https://player.kick.com/' + $("select#KickUsername").val() }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
}

$(document).ready(function () {
    console.info("Skripta za kontolnu tablu je pokrenuta.");
    const DateTimeLocal = new Date().toLocaleString("sr-BA");
    $("head").append("<meta http-equiv='refresh' content='1800'>");
    $("div.modal").attr({ "tabindex": "-1", "role": "dialog" });
    $("#loginModal").modal({
        backdrop: 'static',
        keyboard: false,
        focus: true,
        show: true
    });
    $("#loginModal").on("hidden.bs.modal", function (event) {
        console.clear();
        "use strict";
    });
    $("#time,#vicdana,#weather,#livescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni").modal({
        backdrop: 'static',
        keyboard: false,
        focus: false,
        show: false
    });
    $("div.collapse").collapse({
        parent: "#accordionControlPanel",
        toggle: false
    });
    $("[src*='simpleicons'],[alt='BaleshSrle Logo']").height(32).width(32);
    //$("img.devojkaCarouselIMG").addClass("mx-auto d-block w-auto rounded-lg").attr("loading", "lazy");
    $("img[src*='twitch']").attr({ "src": function (index, src) { return src + '&style=plastic&logo=twitch&logoColor=white&labelColor=9146ff' }, "alt": "Twitch Status" });
    $("[src*='steampowered']").addClass("mx-auto d-block border-0").attr({ "height": "190", "width": "646", "loading": "lazy" });
    $("[src*='IssuerChart']").addClass("mx-auto d-block border-0 mw-100 overflow-hidden");
    $("div.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        ride: 'carousel',
        touch: false
    });
    $("nav.navbar").css({ "background-color": "#adb5bd", "padding": "2px 16px" });
    $("a.nav-link i").attr("role", "img").css("font-size", "x-large").addClass("d-inline-block align-middle");
    $("a.nav-link span").addClass("pl-1 d-md-none");
    $("a#time_is_link,span[id$='z609'],span[id$='z600'],span[id$='z60a'],span[id$='z726'],span[id$='z716'],span[id$='z18a'],span[id$='z123'],span[id$='z12b']").css("font-size", "16px");
    $("span.fi-au,span.fi-ba,span.fi-gb,span.fi-ca,span.fi-us").addClass("mr-1");
    $("i.bi-laptop,i.bi-laptop,i.bi-phone,i.bi-tablet,i.bi-image,i.bi-snapchat,i.bi-telegram,i.bi-facebook,i.bi-messenger,i.bi-instagram,i.bi-threads,i.bi-whatsapp").css("font-size", "xx-large");
    $("i.bi-mailbox,i.bi-headset,i.bi-hourglass-split,i.bi-globe,i.bi-bug,i.bi-kanban,i.bi-stopwatch,i.bi-briefcase,i.bi-easel,i.bi-shield").css("font-size", "larger").addClass("pr-1 align-middle");
    $("button.close").addClass("btn btn-danger my-0 ml-auto mr-0 py-2");
    $("button.btn.btn-info,button.btn.btn-secondary:last").css({ "padding-top": "5px", "padding-bottom": "5px" });
    $("div.modal-header:eq(8),div.modal-header:lt(14):gt(9),div.modal-header:gt(14)").addClass("p-0 d-lg-none");
    $("div.modal-header:lt(8):gt(0),div.modal-header:eq(9)").addClass("py-0 pr-0");
    $("div.modal-header:eq(14)").addClass("py-0 pr-0 d-lg-none");
    $("div.modal-header:eq(0),div.modal-body:eq(2),div.modal-body:eq(9),div.modal-footer,div.card-body:eq(10),div.card-body:eq(18)").addClass("py-1");
    $("h5.modal-title:gt(0)").addClass("mt-1");
    $("div.modal-body:eq(8),div.card-body:eq(6),div.card-body:eq(17)").addClass("p-0");
    $("img[src*='twitch'],div.modal-body:eq(13),div.card-body:eq(8),div.card-body:eq(9),div.card-body:eq(19),div.card-body:eq(20)").addClass("p-1");
    $("div.modal-body:eq(12),div.modal-body:eq(14),div.modal-body:eq(15),div.card:eq(2),div.card-body:eq(5),div.card-body:eq(11),div.card-body:eq(12),div.card-body:eq(14),div.list-group:eq(5),div.list-group:eq(6)").addClass("p-2");
    $("div.card-header:eq(0),div.card-header:eq(7),div.card-header:eq(18),div.card-header:eq(23),div.modal-body:eq(1),div.modal-body:eq(3),div.modal-body:eq(10)").addClass("py-2");
    $("div.card.card-body").addClass("px-2 py-3 rounded-0 border-top-0 border-bottom-0");
    $("div.card:eq(5)").addClass("border-0 w-auto");
    $("div.card:eq(12)").addClass("border-0 d-none d-md-block");
    $("div.card-header:lt(4):gt(0)").addClass("text-white border-bottom");
    $("div.card-body:eq(1),div.card-body:eq(7),div.card-body:eq(16)").addClass("p-3");
    $("div.card-body:lt(5):gt(1),div.card-body:eq(13),div.card-body:eq(15)").addClass("px-1 py-2");
    $("div.card-body:eq(9),div.card-body:eq(10),div.card-body:eq(16)").addClass("text-center");
    $("div.row:eq(1),div.card-body:eq(18),div.btn-group-vertical").addClass("mx-auto");
    $("div.col-sm-8,div.col-sm-4").addClass("px-2");
    $("div.btn-group-vertical").addClass("my-1");
    $("div.btn-group-vertical:eq(3)").addClass("mw-100");
    $("div.card-body:eq(21)").addClass("px-0 pt-1 pb-0");
    $("h6.card-subtitle,p.card-text:eq(0),p.card-text:eq(1),p.card-text:eq(3),p.card-text:eq(4)").addClass("mb-1")
    $("div.card-footer").addClass("text-muted text-right");
    $("div.list-group.list-group-flush:eq(1),div.list-group.list-group-flush:eq(2)").addClass("overflow-auto");
    $("div.col:even").addClass("pr-xl-1");
    $("div.col:odd").addClass("pl-xl-1");
    $("div.col:eq(2)").addClass("d-none d-md-block");
    $("div#tvguide2 div.card-body div.mojtvprogram").addClass("mx-2 my-3 px-1");
    $("h6.card-subtitle").addClass("text-muted font-weight-bold font-italic");
    $("h6:gt(1),p.card-text:eq(2),p.card-text:eq(5),div.input-group:eq(4),div.input-group:eq(5)").addClass("mb-0");
    $("h6:gt(19)").addClass("text-wrap");
    $("div.input-group:eq(0),div.input-group:eq(1)").addClass("mb-2 mr-sm-2");
    $("div.input-group:eq(2),div.input-group:eq(3)").addClass("mb-3");
    $("input[type='text'],input[type='password'],input[type='number'],input[type='url'],select[id$='Station'],select#imgAngle,select[id$='Username'],select#vrstaObracunaNovca").addClass("form-control");
    $("select[id$='Username'].form-control").addClass("bg-dark text-white");
    $("input[type='number']:even").attr("inputmode", "decimal");
    $("input[type='number']:odd").attr("inputmode", "numeric");
    $("input[type='url']").attr("inputmode", "url");
});