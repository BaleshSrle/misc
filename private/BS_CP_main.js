console.info("Skripta za kontolnu tablu je pokrenuta.");

const DateTimeLocal = new Date().toLocaleString("sr-BA");

$("head").append("<meta http-equiv='refresh' content='1800'>");

$("body").on("error", function () {
    $(this).css({ "font-family": "'Ubuntu', sans-serif", "background": "url('https://baleshevich.dobojcaffe.com/itp100/images/logo.png') no-repeat fixed left bottom" });
});

function login() {
    var a = $("#username").val();
    var b = $(":password").val();

    if (a == "" && b == "") {
        alert("Unos nije dozvoljen.\nMorate popuniti sva polja da biste nastavili dalje.");
    } else if ("djidjimilovich" != a) {
        $("#username").val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešno korisničko ime. Pokušajte ponovo.");
        alert("Unijeli ste pogrešno korisničko ime.");
        $("#username").focus();
    } else if ("baleshevich88" != b) {
        $(":password").val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešnu lozinku. Pokušajte ponovo.");
        alert("Unijeli ste pogrešnu lozinku.");
        $(":password").focus();
    } else {
        $("#loginModal").modal("hide");
    }
}

function loadTvStation() {
    
    if ($("#stationselect option:disabled")){
        alert ("Navedena televizijska stanica ne postoji.");
    } else {
        return window.open($("#stationselect option").val());
    }
}

function IzracunajNoviNovcaniIznos() {
    var h = $("#novcaniIznos").val();
    var k = $("#procenatIznos").val();
    var l = $("#vrstaObracunaNovca").val();
    var procenat = k / 100;
    var procenat2 = h * procenat;

    if (l == "umanjenjeIznos") {
        var rezUmanjenje = h - procenat2;
        $("#NoviNovcaniIznos").text("Novi novčani iznos umanjenje - " + rezUmanjenje + " KM.");
    } else if (l == "uvecanjeIznos") {
        var rezUvecanje = +h + +procenat2;
        $("#NoviNovcaniIznos").text("Novi novčani iznos uvećanje - " + rezUvecanje + " KM.");
    }
    return true;
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
