//"use strict";

/* $("body").on("error", function () {
    $(this).css({ "font-family": "'Ubuntu', sans-serif", "background": "url('https://baleshevich.dobojcaffe.com/itp100/images/logo.png') no-repeat fixed left bottom" });
}); */

/*function login() {

}*/

/* function loadTvStation() {
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
            $("#NoviNovcaniIznos").text("Novi novčani iznos umanjenje - " + rezUmanjenje.toFixed(2) + " KM.");
            break;
        case "uvecanjeIznos":
            var rezUvecanje = +h + +procenat2;
            $("#NoviNovcaniIznos").text("Novi novčani iznos uvećanje - " + rezUvecanje.toFixed(2) + " KM.");
    }
}

function IzracunajDividendu() {
    var d = $("#cijenaJedneAkcije").val();
    var f = $("#brojAkcija").val();
    var g = d * f;

    $("#iznosDividende").text("Očekivana vrijednost dividende iznosi " + g.toFixed(2) + " KM.");
}*/

function loadURL() {
    return $("#urlOutput").attr("src", $("#url").val());
}

/* function onSubmit(token) {
    document.getElementById("loginForm").submit();
    //$("form#loginForm").submit();
}*/

/*function imgApply() {
    $("img#imgResult").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css("transform", "rotate(" + $("#imgAngle").val() + "deg)").addClass("mx-auto d-block w-auto rounded-lg");
    //$("img#imgResult").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css({"rotate": $("#imgAngle").val() + 'deg', "transform": "rotate("+$("#imgAngle").val()+"deg)"}).addClass("mx-auto d-block w-auto rounded-lg");
}

function playTwitchStreamer() {
    $("iframe#TwitchPlayer").attr({ "src": function (index, src) { return 'https://player.twitch.tv/?channel=' + $("select#TwitchUsername").val() + '&parent=' + location.host }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
    $("iframe#chat_embed").attr({ "src": function (index, src) { return 'https://www.twitch.tv/embed/' + $("select#TwitchUsername").val() + '/chat?parent=' + location.host }, "allowfullscreen": "true" }).height(500).addClass("w-100 border-0 overflow-hidden rounded-lg");
}

function playKickStreamer() {
    $("iframe#KickPlayer").attr({ "src": function (index, src) { return 'https://player.kick.com/' + $("select#KickUsername").val() }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
} */

$(document).ready(function () {
    console.info("Skripta za kontolnu tablu je pokrenuta.");

    $("head").prepend("<meta http-equiv='refresh' content='1800'>");
    $("head").prepend("<link rel='dns-prefetch' href='https://api.twitch.tv/'>", "<link rel='dns-prefetch' href='https://passport.twitch.tv/'>", "<link rel='dns-prefetch' href='https://meta.wikimedia.org/'>", "<link rel='preconnect' href='https://www.auti.hr/djevojkadana/'>", "<link rel='preconnect' href='https://mojtv.hr/tv-navigator/'>", "<link rel='preconnect' href='https://api.twitch.tv/'>", "<link rel='preconnect' href='https://upload.wikimedia.org/'>", "<link rel='canonical' href='https://simpleicons.org/'>", "<link rel='canonical' href='https://cybermap.kaspersky.com/en/widget'>", "<link rel='canonical' href='https://www.accuweather.com/sr/ba/doboj/35305/current-weather/35305'>", "<link rel='canonical' href='https://www.livescore.bz/sr-rs/'>", "<link rel='canonical' href='https://naslovi.net/tehnologija/'>", "<link rel='canonical' href='https://store.steampowered.com/'>", "<link rel='canonical' href='https://www.twitch.tv/'>");
    $("head").append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flag-icons@6/css/flag-icons.min.css'>", "<script src='https://www.google.com/recaptcha/api.js'></script>", "<script src='https://oap.accuweather.com/launch.js' defer></script>", "<script src='https://www.livescore.bz/api.livescore.0.1.js' api='livescore' async></script>");
    $("script#skin").text("var fm_inf_1 = 'Arial';");
    $("div.accordion").delay("slow").fadeIn().addClass("mt-3");
    $("div.modal").attr({ "tabindex": "-1", "role": "dialog" });

    /*$("#loginModal").show(1).addClass("bg-secondary").modal({
        backdrop: 'static',
        keyboard: false,
        focus: true,
        show: true
    });*/
    /*$("#loginModal").on("hidden.bs.modal", function (event) {
        console.clear();
        "use strict";
    });*/
    $("div#loginModal").addClass("bg-secondary").modal({
        backdrop: 'static',
        keyboard: false,
        focus: true,
        show: true
    });
    $("body,input#password").keydown(function (event) {
        if (event.which == 20) {
            alert("Caps Lock je uključen");
        }
    });
    $("button#loginBtn").on("click", function () {
        switch ($("input#password").val()) {
            case "baleshevich88":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#vicDanaToast").attr({ "role": "status", "aria-live": "polite", "aria-atomic": "true", "data-autohide": "false" }).toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").attr({ "role": "status", "aria-live": "polite", "aria-atomic": "true", "data-delay": "3500" }).toast("show");
                break;
            case "demo":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#vicDanaToast").attr({ "role": "status", "aria-live": "polite", "aria-atomic": "true", "data-autohide": "false" }).toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").toast("hide").hide();
                $("div.carousel-item").last().hide();
                $("a[data-target='#sluzbeni'],a#djevojkaDanaBtn.nav-link").addClass("disabled");
                $("optgroup[label='Steamy Streamers']").attr("disabled", "disabled");
        }
    }).on("submit", function (token) {
        document.getElementById("loginForm").submit();
    }).addClass("btn btn-primary mt-1 g-recaptcha").attr({ "type": "button", "data-sitekey": "6LfGtPspAAAAANIjkM8CHWkePJivd8DREQyCgQRS", "data-callback": "onSubmit", "data-action": "submit" });
    $("button#loginResetBtn").on("click", function () {
        $("input#password").trigger("focus");
    }).addClass("btn btn-danger mt-1").attr("type", "reset");
    $("#time,#weather,#livescore,#FIBAlivescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni").modal({
        backdrop: 'static',
        keyboard: false,
        focus: false,
        show: false
    });
    $("div.collapse").collapse({
        parent: "#accordionControlPanel",
        toggle: false
    });
    /* $("div#collapseTwitchStatus.collapse").collapse({
        parent: "#AccordionTwitchStatus",
        toggle: false
    });*/
    $("button#imgRotateApply").on("click", function () {
        $("img#imgResult").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css("transform", "rotate(" + $("#imgAngle").val() + "deg)").addClass("mx-auto d-block w-auto rounded-lg");
    }).addClass("btn btn-primary mb-2 mr-sm-2").attr("type", "button");
    $("button#loadRadioStation").on("click", function () {
        return window.open($("#RadioStation").val());
    }).addClass("btn btn-info").attr("type", "button");
    $("button#loadTvStation").on("click", function () {
        return window.open($("#TvStation").val());
    }).addClass("btn btn-info").attr("type", "button");
    $("select#TwitchUsername").on("click", function () {
        $("iframe#TwitchPlayer").attr({ "src": function (index, src) { return 'https://player.twitch.tv/?channel=' + $("select#TwitchUsername").val() + '&parent=' + location.host }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
        $("iframe#chat_embed").attr({ "src": function (index, src) { return 'https://www.twitch.tv/embed/' + $("select#TwitchUsername").val() + '/chat?parent=' + location.host }, "allowfullscreen": "true" }).height(500).addClass("w-100 border-0 overflow-hidden rounded-lg");
    }).addClass("form-control bg-dark text-white");
    $("button#calculateNewValue").on("click", function () {
        var h = $("#novcaniIznos").val();
        var k = $("#procenatIznos").val();
        var procenat = k / 100;
        var procenat2 = h * procenat;

        switch ($("#vrstaObracunaNovca").val()) {
            case "umanjenjeIznos":
                var rezUmanjenje = h - procenat2;
                $("#NoviNovcaniIznos").text("Novi novčani iznos umanjenje - " + rezUmanjenje.toFixed(2) + " KM.");
                break;
            case "uvecanjeIznos":
                var rezUvecanje = +h + +procenat2;
                $("#NoviNovcaniIznos").text("Novi novčani iznos uvećanje - " + rezUvecanje.toFixed(2) + " KM.");
        }
    }).addClass("btn btn-primary btn-sm").attr("type", "button");
    $("button#calculateDividend").on("click", function () {
        var d = $("#cijenaJedneAkcije").val();
        var f = $("#brojAkcija").val();
        var g = d * f;

        $("#iznosDividende").text("Očekivana vrijednost dividende iznosi " + g.toFixed(2) + " KM.");
    }).addClass("btn btn-primary").attr("type", "button");
    $("select#KickUsername").on("click", function () {
        $("iframe#KickPlayer").attr({ "src": function (index, src) { return 'https://player.kick.com/' + $("select#KickUsername").val() }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
    }).addClass("form-control bg-dark text-white");
    $("[src*='simpleicons'],[src*='wikimedia']:gt(2),[alt='BaleshSrle Logo']").height(32).width(32);
    //$("img.devojkaCarouselIMG").addClass("mx-auto d-block w-auto rounded-lg").attr("loading", "lazy");
    $("img[src*='twitch']").attr({ "src": function (index, src) { return src + '&style=plastic&logo=twitch&logoColor=white&labelColor=9146ff&cacheSeconds=600' }, "alt": "Twitch Status" });
    $("img[src*='website'],img[src*='w3c']").attr("src", function (index, src) { return src + '&cacheSeconds=1800' });
    $("img[alt^='GitHub']").attr("src", function (index, src) { return src + '?logo=github&labelColor=181717' });
    $("iframe").addClass("d-block mx-auto border-0").attr("loading", "lazy");
    $("iframe:last,img#AutoHrIMG").attr("loading", "eager");
    $("[src*='fibacarousel']").attr({ "src": function (index, src) { return src + '&amp;lng=en' }, "height": "263" }).addClass("w-100 overflow-hidden");
    $("[src*='steampowered']").attr({ "height": "190", "width": "646" }).addClass("my-1");
    $("iframe[src*='blberza']").slice(0, 2).addClass("rounded-bottom");
    $("iframe[src*='blberza']").slice(2).height(110).width(200).addClass("mw-100 overflow-hidden rounded-lg");
    $("div.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        ride: 'carousel',
        touch: false
    });
    $("nav.navbar").delay("slow").fadeIn().css({ "background-color": "#adb5bd", "padding": "2px 16px" });
    $("a.nav-link").find("i").attr("role", "img").css("font-size", "x-large").addClass("d-inline-block align-middle");
    $("a.nav-link").find("span").addClass("pl-1 d-md-none");
    $("mark.bg-secondary,a#time_is_link,label:gt(2),div.modal-body a:eq(8)").addClass("text-white");
    $("a#time_is_link,span[id$='z609'],span[id$='z600'],span[id$='z60a'],span[id$='z726'],span[id$='z716'],span[id$='z18a'],span[id$='z123'],span[id$='z12b']").css("font-size", "16px");
    $("span").filter(".fi-au,.fi-ba,.fi-gb,.fi-ca,.fi-us").addClass("mr-1");
    $("i").filter(".bi-laptop,.bi-laptop,.bi-phone,.bi-tablet,.bi-image,.bi-snapchat,.bi-telegram,.bi-facebook,.bi-messenger,.bi-instagram,.bi-threads,.bi-whatsapp").css("font-size", "xx-large");
    $("i").filter(".bi-mailbox,.bi-headset,.bi-hourglass-split,.bi-globe,.bi-bug,.bi-kanban,.bi-stopwatch,.bi-briefcase,.bi-easel,.bi-shield").css("font-size", "larger").addClass("pr-1 align-middle");
    $("button.btn-link").addClass("text-white").attr({ "type": "bottom", "data-toggle": "collapse", "aria-expanded": "false" });
    $("button.btn-link").parents("div.card-header").addClass("py-2 border-bottom border-secondary");
    $("button.btn").filter(".btn-info,.btn-secondary:last").css({ "padding-top": "5px", "padding-bottom": "5px" });
    $("button.close").not($("button.close").slice(-3)).addClass("btn btn-danger my-0 ml-auto mr-0 py-2 text-white");
    $("button.close").slice(-3).addClass("ml-2 mb-1").attr({ "type": "button", "data-dismiss": "toast", "aria-label": "Close" });
    $("div.toast-header").addClass("py-0");
    $("div.toast-header").children("img").addClass("mr-1");
    $("div.modal-content").eq(10).addClass("bg-dark border-dark");
    $("div").filter(".modal-header,.modal-footer,card-footer").addClass("border-secondary");
    $("div.modal").filter("#TechNewsNasloviNET,#steam_games,#twitch,#programs,#Obracun1Modal").find("div.modal-header").addClass("d-lg-none");
    $("div").filter(".modal-header:eq(8),.modal-header:lt(14):gt(10),.modal-body:eq(7),.modal-body:eq(9)").addClass("p-0");
    $("div.modal").filter("#time,#weather,#FIBAlivescore,#livescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni,#Obracun2Modal").find("div.modal-header").addClass("py-0 pr-0");
    $("div").filter(".modal-body:eq(2),.modal-footer").addClass("py-1");
    $("div.modal").not("#loginModal").find("h5.modal-title").addClass("mt-1");
    $("div.modal-body:eq(8),img[src*='twitch']").addClass("p-1");
    $("div.modal-body").filter(":eq(0),:lt(5):gt(2),:eq(10),:gt(11)").addClass("p-2");
    $("div").filter(".position-fixed,.toast-body").addClass("p-2");
    $("div").filter(".modal-body:eq(1)").addClass("py-2");
    $("div.modal-footer").find("a").addClass("text-light");
    $("div.col-sm-8,div.col-sm-4,output").addClass("pt-2");
    $("div").filter(".col-sm-8,.col-sm-4").addClass("px-2");
    $("div").filter(".row:eq(1),.btn-group-vertical,.modal-dialog:eq(1)").addClass("mx-auto");
    $("div.col:even").addClass("pr-xl-1");
    $("div.col:odd").addClass("pl-xl-1");
    $("p.text-white-50.small:last,div.col:eq(2),li.navbar-item:eq(3),li.navbar-item:eq(8)").addClass("d-none d-md-block");
    $("div.btn-group-vertical").addClass("my-1");
    $("div.btn-group-vertical").eq(3).addClass("mw-100");
    $("div.card").slice(0, 6).addClass("mx-1 my-2");
    $("div.card").not($("div.card[style^='background']")).addClass("bg-transparent border-secondary");
    $("div#TwitchStatus").children("div.card").not(":last").addClass("mb-2");
    $("div").filter(".modal-body,.card-columns").find("div.card-header").addClass("py-2 text-white");
    $("div").filter(".modal-body,.card-columns").find("div.card-header").filter(":lt(19):gt(5),:lt(25):gt(21),:lt(37):gt(33)").addClass("border-dark");
    $("div").filter(".modal-body,.card-columns").find("div.card-header").filter(":lt(6),:lt(34):gt(24),:gt(36)").addClass("border-secondary");
    $("div.card-columns").find("div.card-header").slice(16).addClass("text-center");
    $("div.card-columns").parent("div.card-body").addClass("p-3");
    $("div.card-columns").find("div.card-body").slice(12, 14).addClass("bg-white");
    $("div.card-footer").addClass("border-top text-muted text-right");
    $("div.list-group.list-group-flush").slice(1).addClass("overflow-auto");
    $("div#aw-ad-container").remove();
    $("div.mojtvprogram").addClass("mx-2 my-3 px-1");
    $("h6.card-subtitle").addClass("mb-1 text-muted font-weight-bold font-italic");
    $("h2,h6:gt(1)").addClass("mb-0");
    $("div.input-group").filter(":eq(2),:gt(3)").addClass("mb-0")
    $("p.card-text").filter(":eq(2),:eq(5),:eq(8),:eq(11)").addClass("mb-0")
    $("h6").slice(20).addClass("text-wrap");
    $("div.input-group").slice(0, 2).addClass("mb-2 mr-sm-2");
    $("div.input-group").slice(3, 5).addClass("mb-2");
    $("ul").slice(0, 14).children("li").addClass("list-group-item-dark");
    $("ul").slice(0, 13).children("li").addClass("px-2 py-0");
    $("ul").slice(13, 16).children("li").addClass("px-2 py-1");
    $("div.list-group").children("a").slice(6).addClass("list-group-item-action");
    $("div.list-group").children("a").slice(6, 11).addClass("list-group-item-primary");
    $("div.list-group").children("a").slice(11, 13).addClass("list-group-item-secondary");
    $("div.list-group").children("a").not($("a.list-group-item").slice(6, 15)).addClass("list-group-item-dark");
    $("div.list-group").children("div").slice(2).addClass("d-flex justify-content-center flex-wrap mx-auto");
    $("div.list-group").children("div").children("a").addClass("list-group-item-dark");
    $("a").filter(".list-group-item:eq(1),.list-group-item:eq(4)").addClass("border-top-0");
    $("input:lt(6),select:not([id$='Username'],[id='dictionary-selector'])").addClass("form-control");
    $("input[type='number']:lt(2),select:eq(2)").filter(".form-control").addClass("form-control-sm");
    $("body,select[id$='Username'],div.modal-content:not(:eq(10))").addClass("bg-dark text-white");
    $("input[type='number']:even").attr("inputmode", "decimal");
    $("input[type='number']:odd").attr("inputmode", "numeric");
    $("input[type='url']").attr("inputmode", "url");
    $("table.table").addClass("table-sm table-hover table-dark text-center mb-1");
}); 