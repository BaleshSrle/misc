//"use strict";

console.info("Skripta za kontolnu tablu je pokrenuta.");

const DateTimeLocal = new Date().toLocaleString("sr-BA");

var screenHeight = screen.availHeight;

$("head").append("<meta http-equiv='refresh' content='1800'>");

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
    $("img#imgResult").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css("rotate", $("#imgAngle").val() + 'deg').addClass("mx-auto d-block w-auto rounded-lg");
}