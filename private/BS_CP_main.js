console.info("Skripta za kontolnu tablu je pokrenuta.");

const DateTimeLocal = new Date().toLocaleString("sr-RS");

$("head").append("<meta http-equiv='refresh' content='1800'>");

$("body").on("error", function () {
    $(this).css({ "font-family": "'Ubuntu', sans-serif", "background": "url('https://baleshevich.dobojcaffe.com/itp100/images/logo.png') no-repeat fixed left bottom" });
});

function login() {
    var a = $("#username").val();
    var b = $("#password").val();

    if (a == "" && b == "") {
        alert("Unos nije dozvoljen.\nMorate popuniti sva polja da biste nastavili dalje.");
    } else if ("djidjimilovich" != a) {
        $("#username").val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešno korisničko ime. Pokušajte ponovo.");
        alert("Unijeli ste pogrešno korisničko ime.");
        $("#username").focus();
    } else if ("baleshevich88" != b) {
        $("#password").val("");
        console.error(DateTimeLocal, ": Unijeli ste pogrešnu lozinku. Pokušajte ponovo.");
        alert("Unijeli ste pogrešnu lozinku.");
        $("#password").focus();
    } else {
        $("#loginModal").modal("hide");
    }
}

/*function go_to_station() {
    const stationSelect = document.stationform.stationselect;

    if (stationSelect.options[1].selected) {
        window.open("https://rtrs.tv/program/uzivo.php?c=1");
    } else if (stationSelect.options[2].selected) {
        window.open("https://www.rtvbn.com/tv");
    } else if (stationSelect.options[3].selected) {
        window.open("https://bhrt.ba/uzivo/tv");
    } else if (stationSelect.options[4].selected) {
        window.open("https://www.redportal.rs/");
    } else if (stationSelect.options[5].selected) {
        window.open("https://www.euronews.rs/tv-uzivo");
    } else if (stationSelect.options[6].selected) {
        window.open("https://www.youtube.com/channel/UCSrZ3UV4jOidv8ppoVuvW9Q");
    } else if (stationSelect.options[7].selected) {
        window.open("https://www.youtube.com/user/skynews");
    } else if (stationSelect.options[8].selected) {
        window.open("https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg");
    } else if (stationSelect.options[9].selected) {
        window.open("https://www.youtube.com/user/deutschewelleenglish");
    } else if (stationSelect.options[10].selected) {
        window.open("https://www.rt.com/on-air/");
    } else if (stationSelect.options[11].selected) {
        window.open("https://www.youtube.com/user/AJBalkans");
    }
    return true;
}*/

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