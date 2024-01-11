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

$(document).ready(function () {
    console.info("Skripta za kontolnu tablu je pokrenuta.");
    const DateTimeLocal = new Date().toLocaleString("sr-BA");
    $("head").append("<meta http-equiv='refresh' content='1800'>");
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
    $(".collapse").collapse({
        parent: "#accordionControlPanel",
        toggle: false
    });
    $("[src*='simpleicons'],[alt='BaleshSrle Logo']").height(32).width(32);
    //$("img.devojkaCarouselIMG").addClass("mx-auto d-block w-auto rounded-lg").attr("loading", "lazy");
    $("[src*='twitch']").attr("src", function (index, src) { return src + '?style=plastic&logo=twitch&logoColor=white&label=Twitch&labelColor=9146ff' });
    $("[src*='steampowered']").addClass("mx-auto d-block border-0").attr({ "height": "190", "width": "646", "loading": "lazy" });
    $("[src*='IssuerChart']").addClass("mx-auto d-block border-0 mw-100 overflow-hidden");
    $(".carousel").carousel({
        interval: 3000,
        keyboard: false,
        touch: false
    });
    $("nav.navbar").css({ "background-color": "#adb5bd", "padding": "2px 16px" });
    $("button.close").addClass("btn btn-danger my-0 ml-auto mr-0 py-2");
    $("div.modal-header:eq(8),div.modal-header:lt(14):gt(9)").addClass("p-0 d-lg-none");
    $("div.modal-header:lt(8):gt(0),div.modal-header:eq(9)").addClass("py-0 pr-0");
    $("div.modal-header:eq(14)").addClass("py-0 pr-0 d-lg-none");
    $("div.modal-header:eq(0),div.modal-body:eq(2),div.modal-body:eq(9),div.modal-footer,div.card-body:eq(10),div.card-body:eq(18)").addClass("py-1");
    $("h5.modal-title:gt(0)").addClass("mt-1");
    $("div.modal-body:eq(8),div.card-body:eq(6),div.card-body:eq(17)").addClass("p-0");
    $("div.modal-body:eq(12),div.modal-body:eq(13),div.card-body:eq(8),div.card-body:eq(9),div.card-body:eq(19),div.card-body:eq(20)").addClass("p-1");
    $("div.modal-body:eq(14),div.modal-body:eq(15),div.card:eq(2),div.card-body:eq(5),div.card-body:eq(11),div.card-body:eq(12),div.card-body:eq(14),div.list-group:eq(5)").addClass("p-2");
    $("div.card-header:eq(0),div.card-header:eq(7),div.card-header:eq(18),div.card-header:eq(23),div.modal-body:eq(1),div.modal-body:eq(3),div.modal-body:eq(10)").addClass("py-2");
    $("div.card.card-body").addClass("px-2 py-3 rounded-0 border-top-0 border-bottom-0");
    $("div.card:eq(5)").addClass("border-0 w-auto");
    $("div.card:eq(12)").addClass("border-0 d-none d-md-block");
    $("h6.card-subtitle").addClass("text-muted font-weight-bold font-italic");
    $("h6:gt(1),p.card-text:eq(2),p.card-text:eq(5),div.input-group:eq(4),div.input-group:eq(5)").addClass("mb-0");
    $("h6:gt(19)").addClass("text-wrap");
    $("div.input-group:eq(0),div.input-group:eq(1)").addClass("mb-2 mr-sm-2");
    $("div.input-group:eq(2),div.input-group:eq(2)").addClass("mb-3");
    $("div.card-header:lt(4):gt(0)").addClass("text-white border-bottom");
    $("div.card-body:eq(1),div.card-body:eq(7),div.card-body:eq(16)").addClass("p-3");
    $("div.card-body:lt(5):gt(1),div.card-body:eq(13),div.card-body:eq(15)").addClass("px-1 py-2");
    $("div.card-body:eq(9),div.card-body:eq(10),div.card-body:eq(16)").addClass("text-center");
    $("div.card-body:eq(18),div.btn-group-vertical").addClass("mx-auto");
    $("div.btn-group-vertical").addClass("my-1");
    $("div.btn-group-vertical:eq(3)").addClass("mw-100");
    $("div.card-body:eq(21)").addClass("px-0 pt-1 pb-0");
    $("h6.card-subtitle,p.card-text:eq(0),p.card-text:eq(1),p.card-text:eq(3),p.card-text:eq(4)").addClass("mb-1")
    $("div.card-footer").addClass("text-muted text-right");
    $("div.list-group.list-group-flush:eq(1),div.list-group.list-group-flush:eq(2)").addClass("overflow-auto");
    $("div.col:even").addClass("pr-xl-1");
    $("div.col:odd").addClass("pl-xl-1");
    $("div.col:eq(2)").addClass("d-none d-md-block");
});