$("html").attr("lang", "sr-Latn-BA");

function login() {
    var a = $("#username").val();
    var b = $("#password").val();

    if ("djidjimilovich" != a) {
        $("#greska").text("Pogrešno korisničko ime.");
        $("#greska").addClass("alert alert-danger text-center mt-2");
    } else if ("baleshevich88" != b) {
        $("#greska").text("Pogrešna lozinka.");
        $("#greska").addClass("alert alert-danger text-center mt-2");
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
        window.open("https://www.youtube.com/user/RussiaToday");
    } else if (document.stationform.stationselect.options[11].selected) {
        window.open("https://www.youtube.com/user/AJBalkans");
    }
    return true;
}

function IzracunajDividendu() {
    var d = $("#cijenaJedneAkcije").val();
    var f = $("#brojAkcija").val();
    var g = d * f;

    $("#iznosDividende").text("Očekivani vrijednost dividende iznosi " +g.toFixed(2)+ " KM.");
}

function reloadPage() {
    window.location.reload();
}