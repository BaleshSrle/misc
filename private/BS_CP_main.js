console.info("Skripta za kontolnu tablu je pokrenuta.");

const DateTimeLocal = new Date().toLocaleString("sr-BA");

$("head").append("<meta http-equiv='refresh' content='1800'>");

$("body").on("error", function () {
    $(this).css({ "font-family": "'Ubuntu', sans-serif", "background": "url('https://baleshevich.dobojcaffe.com/itp100/images/logo.png') no-repeat fixed left bottom" });
});

function login() {
    var a = $("#username").trim();
    var b = $(":password").trim();

    if (a.val() == "" && b.val() == "") {
        alert("Unos nije dozvoljen.\nMorate popuniti sva polja da biste nastavili dalje.");
    } else if ("djidjimilovich" != a.val()) {
        a.val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešno korisničko ime. Pokušajte ponovo.");
        alert("Unijeli ste pogrešno korisničko ime.");
        a.focus();
    } else if ("baleshevich88" != b.val()) {
        b.val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešnu lozinku. Pokušajte ponovo.");
        alert("Unijeli ste pogrešnu lozinku.");
        b.focus();
    } else {
        $("#loginModal").modal("hide");
    }
}

function loadTvStation() {
    return window.open($("#stationselect").val());
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
