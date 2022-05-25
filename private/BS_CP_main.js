$("html").attr("lang", navigator.language);
$("head").append("<meta http-equiv='refresh' content='1800'>");

function login() {
    var a = $("#username").val();
    var b = $("#password").val();

    if (a == "" &&  b == "") {
        alert("Unos nije dozvoljen.\nMorate popuniti sva polja da biste nastavili dalje.");
    } else if ("djidjimilovich" != a) {
		$("#username").val("");
        alert("Unijeli ste pogrešno korisničko ime.");
        $("#username").focus();
    } else if ("baleshevich88" != b) {
		$("#password").val("");
        alert("Unijeli ste pogrešnu lozinku.");
        $("#password").focus();
    } else {
        $("#loginModal").modal("hide");
    }
}

function go_to_station() {
    if (document.stationform.stationselect.options[1].selected) {
        window.open("https://rtrs.tv/program/uzivo.php?c=1");
    } else if (document.stationform.stationselect.options[2].selected) {
        window.open("https://www.rtvbn.com/tv");
    } else if (document.stationform.stationselect.options[3].selected) {
        window.open("https://bhrt.ba/uzivo/tv");
    } else if (document.stationform.stationselect.options[4].selected) {
        window.open("https://www.redportal.rs/");
    } else if (document.stationform.stationselect.options[5].selected) {
        window.open("https://www.euronews.rs/tv-uzivo");
    } else if (document.stationform.stationselect.options[6].selected) {
        window.open("https://www.youtube.com/channel/UCSrZ3UV4jOidv8ppoVuvW9Q");
    } else if (document.stationform.stationselect.options[7].selected) {
        window.open("https://www.youtube.com/user/skynews");
    } else if (document.stationform.stationselect.options[8].selected) {
        window.open("https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg");
    } else if (document.stationform.stationselect.options[9].selected) {
        window.open("https://www.youtube.com/user/deutschewelleenglish");
    } else if (document.stationform.stationselect.options[10].selected) {
        window.open("https://www.rt.com/on-air/");
    } else if (document.stationform.stationselect.options[11].selected) {
        window.open("https://www.youtube.com/user/AJBalkans");
    }
    return true;
}

function IzracunajNoviNovcaniIznos() {
    var h = $("#novcaniIznos").val();
    var k = $("#procenatIznos").val();
    var l = $("#vrstaObracunaNovca").val();
    var procenat = k / 100;
    var procenat2 = h * procenat;

    if ( l == "umanjenjeIznos") {
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

function reloadPage() {
    window.location.reload();
}
