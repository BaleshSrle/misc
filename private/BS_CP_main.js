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

/*function loadURL() {
    return $("#urlOutput").attr("src", $("#url").val());
}*/

/* function onSubmit(token) {
    document.querySelector("form#loginForm").submit();
    //$("form#loginForm").submit();
} */

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

    var day = (new Date().getDate()).toString().padStart(2, "0");
    var month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    var year = new Date().getFullYear();

    /* function onSubmit(token) {
        document.querySelector("form#loginForm").submit();
    }*/

    $("head").each(function () {
        $(this).prepend("<meta http-equiv='refresh' content='1800'>");
        $(this).append("<link rel='dns-prefetch' href='https://api.twitch.tv/'>", "<link rel='dns-prefetch' href='https://passport.twitch.tv/'>", "<link rel='dns-prefetch' href='https://meta.wikimedia.org/'>", "<link rel='preconnect' href='https://www.auti.hr/djevojkadana/'>", "<link rel='preconnect' href='https://mojtv.hr/tv-navigator/'>", "<link rel='preconnect' href='https://api.twitch.tv/'>", "<link rel='preconnect' href='https://upload.wikimedia.org/'>", "<link rel='canonical' href='https://simpleicons.org/'>", "<link rel='canonical' href='https://cybermap.kaspersky.com/en/widget'>", "<link rel='canonical' href='https://www.accuweather.com/sr/ba/doboj/35305/current-weather/35305'>", "<link rel='canonical' href='https://www.livescore.bz/sr-rs/'>", "<link rel='canonical' href='https://naslovi.net/tehnologija/'>", "<link rel='canonical' href='https://store.steampowered.com/'>", "<link rel='canonical' href='https://www.twitch.tv/'>");
        $(this).append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css'>"/*, $.getScript("https://oap.accuweather.com/launch.js")*/, $.getScript("https://widget.iqair.com/script/widget_v3.0.js")/*, $.getScript("https://www.google.com/recaptcha/api.js")*/);
    });
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
    $("#loginBtn").on("click", function () {
        switch ($("input#password").val()) {
            case "baleshevich88":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#airQualityToast,#vicDanaToast").attr("data-autohide", "false").toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").attr("data-delay", "3500").toast("show");
                break;
            case "demo":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#airQualityToast,#vicDanaToast").attr("data-autohide", "false").toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").toast("hide").hide();
                $("a[title^='Boobpedia']").parent().hide();
                $("a[data-target='#sluzbeni'],a#djevojkaDanaBtn.nav-link").addClass("disabled");
                $("optgroup[label='Steamy Streamers']").attr("disabled", "disabled");
        }
    }).addClass("dropdown-item").attr("role", "button").removeAttr("target").text("Prijavljivanje").prepend($("<i></i>").addClass("bi bi-box-arrow-in-right pr-1"))/*.addClass("dropdown-item g-recaptcha").attr({ "role": "button", "data-sitekey": "6LfGtPspAAAAANIjkM8CHWkePJivd8DREQyCgQRS", "data-callback": "onSubmit", "data-action": "submit" }).removeAttr("target")*/;
    $("#loginResetBtn").on("click", function () {
        document.querySelector("form#loginForm").reset();
        $("input#password").trigger("focus");
    }).addClass("dropdown-item").attr("role", "button").removeAttr("target").text("Reset").prepend($("<i></i>").addClass("bi bi-eraser-fill pr-1"));
    /*$("#time,#weather,#livescore,#FIBAlivescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni").modal({
        backdrop: 'static',
        keyboard: false,
        focus: false,
        show: false
    });*/
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
    }).addClass("btn btn-primary mb-2 mr-sm-2").attr("type", "button").text("Primjeni");
    $("button#loadRadioStation").on("click", function () {
        return window.open($("#RadioStation").val());
    }).addClass("btn btn-info").attr("type", "button").append($("<i></i>").addClass("bi bi-broadcast"));
    $("button#loadTvStation").on("click", function () {
        return window.open($("#TvStation").val());
    }).addClass("btn btn-info").attr("type", "button").append("<i></i>").addClass("bi bi-tv");
    $("select#TwitchUsername").on("click", function () {
        const TwitchUsername = $("select#TwitchUsername").val();
        $("iframe#TwitchPlayer").attr({ "src": function (index, src) { return 'https://player.twitch.tv/?channel=' + TwitchUsername + '&parent=' + location.host + '&muted=true' }, "allowfullscreen": "false" }).addClass("border-0 overflow-hidden rounded-lg");
        $("iframe#chat_embed").attr({ "src": function (index, src) { return 'https://www.twitch.tv/embed/' + TwitchUsername + '/chat?parent=' + location.host }, "allowfullscreen": "false" }).addClass("w-100 h-100 border-0 overflow-hidden rounded-lg");
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
    }).addClass("btn btn-primary btn-sm").attr("type", "button").text("Izračunaj").prepend($("<i></i>").addClass("bi bi-calculator pr-1"));
    $("button#calculateDividend").on("click", function () {
        var d = $("#cijenaJedneAkcije").val();
        var f = $("#brojAkcija").val();
        var g = d * f;

        $("#iznosDividende").text("Očekivana vrijednost dividende iznosi " + g.toFixed(2) + " KM.");
    }).addClass("btn btn-primary btn-sm").attr("type", "button").text("Izračunaj").prepend($("<i></i>").addClass("bi bi-calculator pr-1"));
    $("select#KickUsername").on("click", function () {
        $("iframe#KickPlayer").attr("src", function (index, src) { return 'https://player.kick.com/' + $("select#KickUsername").val() + '?muted=true&allowfullscreen=false' }).addClass("border-0 overflow-hidden rounded-lg");
    }).addClass("form-control bg-dark text-white");
    $("select#url").on("click", function () {
        $("iframe#urlOutput").attr("src", $("#url").val());
    }).addClass("form-control bg-dark text-white");
    $("[src*='simpleicons'],[src*='wikimedia']:gt(2),[src*='wpscdn'],[alt='BaleshSrle Logo'],[alt='SPC_logo'],[alt='iqAir_logo']").height(32);
    //$("img.devojkaCarouselIMG").addClass("mx-auto d-block w-auto rounded-lg").attr("loading", "lazy");
    $("img").filter("[src*='website'],[src*='w3c']").attr("src", function (index, src) { return src + '&cacheSeconds=1800' });
    $("img[alt^='GitHub']").attr({ "src": function (index, src) { return src + '?logo=github&labelColor=181717' }, "loading": "lazy" });
    $("img[alt$='deployments']").attr("src", function (index, src) { return src + '&label=Deployments' });
    $("div#DjevojkadanaAutiHRToast").children("div.toast-body").append($("<img>").attr("src", "https://www.auti.hr/djevojkadana/img/" + year + "-" + month + "/" + day + ".jpg").addClass("mx-auto d-block img-fluid rounded-lg"));
    $("iframe").not("[src*='naslovi']").addClass("d-block mx-auto border-0").attr("loading", "lazy");
    $("iframe:last,img#AutoHrIMG").attr("loading", "eager");
    $("[src*='fibacarousel']").attr({ "src": function (index, src) { return src + '&amp;lng=en' }, "height": "263" }).addClass("w-100 overflow-hidden");
    //$("iframe[src*='blberza']").slice(0, 2).addClass("rounded-bottom");
    $("iframe[src*='blberza']").parent("div.card-body").slice(0, 2).addClass("bg-white rounded-bottom");
    $("iframe[src*='blberza']").slice(2).width(200).height(110).addClass("overflow-hidden rounded-lg");
    $("div.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        ride: 'carousel',
        touch: false
    });
    $("div#IQAirCarousel").css({ "width": "314px", "height": "100px" });
    $("nav.navbar").delay("slow").fadeIn().css({ "background-color": "#adb5bd", "padding": "2px 16px" });
    $("mark.bg-secondary,a#time_is_link,label:gt(2)").addClass("text-white");
    $("a#time_is_link,span[id$='z609'],span[id$='z600'],span[id$='z60a'],span[id$='z726'],span[id$='z716'],span[id$='z18a'],span[id$='z123'],span[id$='z12b']").css("font-size", "16px");
    $("span").each(function () {
        $(this).filter(".fi-au,.fi-ba,.fi-ca,.fi-eu,.fi-gb,.fi-nz,.fi-us").addClass("mr-1");
        $(this).filter(".badge").addClass("badge-dark").append($("<i></i>").addClass("bi bi-fire text-warning"));
    });
    $("i").each(function () {
        $(this).filter(".bi-laptop,.bi-laptop,.bi-phone,.bi-tablet,.bi-image,.bi-snapchat,.bi-telegram,.bi-facebook,.bi-messenger,.bi-instagram,.bi-threads,.bi-whatsapp").css("font-size", "xx-large");
        $(this).filter(".bi-mailbox,.bi-headset,.bi-hourglass-split,.bi-globe,.bi-bug,.bi-kanban,.bi-stopwatch,.bi-briefcase,.bi-easel,.bi-shield").css("font-size", "larger").addClass("pr-1 align-middle");
    });
    $("button.btn-link").each(function () {
        $(this).addClass("text-white").attr({ "type": "bottom", "data-toggle": "collapse", "aria-expanded": "false" });
        $(this).parents("div.card-header").addClass("py-2 border-bottom border-secondary");
    });
    $("button.btn").filter(".btn-info,.btn-secondary:last").css({ "padding-top": "5px", "padding-bottom": "5px" });
    $("div.toast").each(function () {
        $(this).parent("div").addClass("position-fixed").css({ "z-index": "5", "right": "0", "bottom": "56px", "width": "350px" });
        $(this).attr({ "role": "status", "aria-live": "polite", "aria-atomic": "true" }).addClass("mb-2");
    });
    $("div.toast-header").each(function () {
        $("div.toast-header").addClass("py-0");
        $("div.toast-header").children("img").not(":eq(2)").addClass("mr-1");
        $("div.toast-header").children("img").eq(2).addClass("mr-auto");
        $("div.toast-header").children("button.close").addClass("ml-2 mb-1").attr({ "type": "button", "data-dismiss": "toast", "aria-label": "Zatvori" });
    });
    $("div.toast-body").each(function () {
        $("div.toast-body").not(":eq(2)").addClass("p-2");
        $("div.toast-body").eq(2).addClass("py-2 px-3");
        $("div.toast-body").eq(3).addClass("text-body");
        $("div.toast-body").children("iframe").addClass("m-0 overflow-hidden border-0 w-100").css({ "min-height": "54px", "max-height": "102px" });
    });
    $("div.modal").each(function () {
        $(this).children("div").attr("role", "document");
        $(this).filter("#mailSettings,#sluzbeni").children("div").addClass("modal-dialog modal-sm modal-dialog-centered");
        $(this).filter("#calculator").children("div").addClass("modal-dialog modal-dialog-centered");
        $(this).filter("#tvguide,#kick,#FamilyNotes").children("div").addClass("modal-dialog modal-lg modal-dialog-centered");
        $(this).filter("#time,[id^='Obracun'],#FujitsuLifeBookS751").children("div").addClass("modal-dialog modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#weather,#livescore,#TechNewsNasloviNET,#steam_games").children("div").addClass("modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#FIBAlivescore,#imgRotate,#twitch,#programs,#CarService").children("div").addClass("modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#time").children("div").addClass("mx-auto");
        $(this).filter("#calculator").find("div.modal-content").addClass("bg-dark border-dark");
        $(this).find("div.modal-header").children("button.close").addClass("btn btn-danger my-0 ml-auto mr-0 py-2 text-white").attr({ "type": "button", "data-dismiss": "modal", "aria-label": "Zatvori" });
        $(this).filter("#TechNewsNasloviNET,#steam_games,#twitch,#programs,#Obracun1Modal").find("div.modal-header").addClass("d-lg-none");
        $(this).filter("#time,#weather,#FIBAlivescore,#livescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni,#Obracun2Modal").find("div.modal-header").addClass("py-0 pr-0");
        $(this).filter("#TechNewsNasloviNET,#twitch").find(".modal-header").addClass("p-0");
        $(this).filter("#calculator").find("div.modal-header").addClass("px-1 pb-0");
        $(this).find("div").filter(".modal-header,.modal-footer").addClass("border-secondary");
        $(this).find("hr").addClass("border-secondary");
        $(this).not("#loginModal").find("h5.modal-title").addClass("mt-1");
        $(this).filter("#tvguide,#programs").find("div.modal-body").addClass("p-0");
        $(this).filter("#TechNewsNasloviNET").find("div.modal-body").addClass("p-0").append($("<iframe></iframe>").attr({ "src": "https://naslovi.net/widget/?type=tehnologija&bgcolor=343A40&textcolor=FFFFFF&sourcecolor=FFFFFF80&separatorcolor=6C757D&count=10&", "height": "915", "loading": "lazy" }).addClass("d-block mx-auto border-0 w-100"));
        $(this).filter("#sluzbeni,#steam_games,#CarService").find("div.modal-body").addClass("p-1");
        $(this).filter("#steam_games").find("iframe").attr({ "width": "646", "height": "190" }).addClass("my-1");
        $(this).filter("#loginModal,#imgRotate,#twitch,#calculator,#FujitsuLifeBookS751,#kick,#FamilyNotes").find("div.modal-body").addClass("p-2");
        $(this).filter("#time").find("div.modal-body").addClass("py-2");
        $(this).filter("#mailSettings").find("div.modal-body").addClass("px-2 py-1");
        $(this).find("div.modal-footer").addClass("py-1");
        $(this).find("div.modal-footer").find("a").addClass("text-light");
        $(this).filter("#CarService").find("th:eq(2)").addClass("w-50");
        $(this).filter("#CarService").find("time:eq(0)").text(new Date(2024, 5, 18, 8, 53).toLocaleString("sr-Latn-BA", { dateStyle: "full", timeStyle: "short" }));
        $(this).filter("#CarService").find("time:eq(1)").text(new Date(2025, 0, 22, 15, 4).toLocaleString("sr-Latn-BA", { dateStyle: "full", timeStyle: "short" }));
        $(this).filter("#CarService").find("time:eq(2)").text(new Date(2025, 0, 28, 14, 22).toLocaleString("sr-Latn-BA", { dateStyle: "full", timeStyle: "short" }));
    });
    $("div.col-sm-8,output").addClass("pt-2");
    $("div.col-sm-8").addClass("px-2");
    $("div").filter(".row:eq(1),.btn-group-vertical,[name^='airvisual']").addClass("mx-auto");
    $("div#weatherforecast").children("div").attr({ "id": "awtd1504180838200", "data-locationkey": "35305", "data-unit": "c", "data-language": "sr", "data-useip": "false", "data-uid": "awtd1504180838200", "data-editlocation": "true" }).addClass("aw-widget-36hour");
    $("div#livescore").children("a").attr({ "href": "https://www.livescore.bz/rs", "target": "_blank", "sport": "football(soccer)", "data-1": "today", "lang": "rs" }).text("Rezultati uživo");
    $("p.text-white-50.small:last,li.navbar-item:eq(3),li.navbar-item:eq(8)").addClass("d-none d-md-block");
    $("div.btn-group-vertical").each(function () {
        $(this).addClass("my-1");
        $(this).eq(3).addClass("mw-100");
    });
    $("div.card-deck").each(function () {
        $(this).children("div.card:even").addClass("mr-xl-1");
        $(this).children("div.card:even").eq(2).addClass("d-none d-md-block");
        $(this).children("div.card:odd").addClass("ml-xl-1");
    });
    /*$("div.card").each(function(){
        $(this).not($("[style^='background')")).addClass("bg-transparent border secondary");
    });*/
    //$("div.card").slice(0, 6).addClass("mx-1 my-2");
    $("div.card").not($("div.card[style^='background']")).addClass("bg-transparent border-secondary");
    $("div.card-header").each(function () {
        $("div.card-header").not(":eq(22),:eq(28)").addClass("py-2 text-white");
        $("div.card-header").filter(":eq(21),:eq(28)").addClass("pt-1 text-white");
        $("div.card-header").filter(":lt(6),:lt(23):gt(19),:lt(28):gt(23),:lt(34):gt(31)").addClass("border-bottom border-secondary");
        $("div.card-header").filter(":lt(19):gt(14),:eq(23),:eq(28),:lt(32):gt(29)").addClass("border-bottom border-dark");
        $("div.card-header").eq(14).addClass("border-bottom border-white");
        $("div.card-header").slice(30).addClass("text-center");
    });
    $("div#TwitchChat").prev().addClass("col-sm pt-2 px-2");
    $("div#TwitchStatus").each(function () {
        $(this).children("div.card").not(":last").addClass("mb-2");
        //$(this).find("li.list-group-item").addClass("justify-content-between");
        $(this).find("img").attr({ "src": function (index, src) { return src + '&style=plastic&logo=twitch&logoColor=white&labelColor=9146ff&cacheSeconds=300' }, "alt": "Twitch Status", "loading": "lazy" }).addClass("p-1");
    });
    $("div[id^='Twitch']").addClass("pt-2 px-2 collapse width");
    $("div.card-columns").parent("div.card-body").addClass("p-3");
    //$("div.card-columns").find("div.card-body").slice(12, 14).addClass("bg-white");
    $("div.card-body").children("div.mojtvprogram").addClass("mx-2 my-3 px-1");
    $("h6.card-subtitle").addClass("mb-1 text-muted ubuntu-bold-italic");
    $("div.card-footer").addClass("border-top border-secondary text-muted text-right");
    $("div#aw-ad-container").remove();
    $("h2,h6:gt(1)").addClass("mb-0");
    $("p.card-text").filter(":eq(2),:eq(5),:eq(8),:eq(11)").addClass("mb-0")
    $("h6").slice(20).addClass("text-wrap");
    $("hr").slice(0, -2).addClass("my-2");
    $("div.input-group").each(function () {
        $("div.input-group").slice(1, 3).addClass("mb-2 mr-sm-2");
        $("div.input-group").filter(":eq(0),:lt(6):gt(2)").addClass("mb-2");
        $("div.input-group").slice(6).addClass("mb-0");
        $("div.input-group").slice(4, 6).addClass("input-group-sm");
    });
    $("ul.list-group").each(function () {
        $("ul.list-group").slice(0, -2).addClass("list-group-flush");
        $("ul.list-group").slice(-4, -2).addClass("list-group-horizontal flex-wrap");
        $("ul.list-group").slice(0, -2).children("li.list-group-item").addClass("list-group-item-dark px-2 py-0 d-flex align-items-center");
        $("ul.list-group").slice(0, -4).children("li.list-group-item").addClass("justify-content-between");
        $("ul.list-group").slice(-2).children("li.list-group-item").addClass("px-2 py-1");
        $("ul.list-group").slice(-4, -2).children("li.list-group-item").addClass("flex-fill justify-content-around");
        $("ul.list-group").slice(-4, -2).children("li.list-group-item").filter(":first-of-type,:last-of-type").addClass("rounded-0");
    });
    $("ul.nav").each(function () {
        $(this).parent().removeClass("py-2").addClass("pt-1");
        $(this).children().removeClass("px-2 py-1");
        $(this).addClass("d-flex flex-nowrap text-nowrap").css({ "overflow-y": "hidden", "overflow-x": "auto" }).attr("role", "tablist");
    });
    $("ul[id$='List']").find("a").on("click", function (e) {
        e.preventDefault()
        $(this).tab("show");
    }).addClass("py-1").attr({ "data-toggle": "tab", "role": "tab" });
    $("div.list-group").each(function () {
        $("div.list-group").has("a").filter(":lt(4):gt(1),:lt(11):gt(5)").addClass("list-group-horizontal");
        $("div.list-group").has("a").filter(":eq(4),:eq(6),:gt(10)").addClass("list-group-flush");
        $("div.list-group").has("a").filter(":eq(6),:gt(10)").addClass("overflow-auto");
        $("div.list-group").filter(":eq(5),:eq(13)").addClass("p-2");
        $("div.list-group").has("a").slice(7, 11).addClass("p-1");
        $("div.list-group").children("div").slice(2).addClass("d-flex justify-content-center flex-wrap mx-auto");
        $("div.list-group").find("a.list-group-item").filter(":lt(15):gt(6),:lt(58):gt(41),:gt(69)").addClass("list-group-item-action");
        $("div.list-group").find("a.list-group-item").filter(":lt(11):gt(5),:eq(54)").addClass("list-group-item-primary");
        $("div.list-group").find("a.list-group-item").filter(":lt(13):gt(10),:lt(57):gt(54)").addClass("list-group-item-secondary");
        $("div.list-group").find("a.list-group-item").eq(57).addClass("list-group-item-info");
        $("div.list-group").find("a.list-group-item").filter(":lt(6),:lt(54):gt(14),:gt(57)").addClass("list-group-item-dark");
        $("div.list-group").find("a.list-group-item").filter(":eq(0),:eq(4)").addClass("border-top-0");
        $("div.list-group").eq(6).find("a.list-group-item").filter(":first,:last").addClass("rounded-0");
    });
    $("li.navbar-item").each(function () {
        $("li.navbar-item").not(":eq(1)").children("a").slice(0, -1).addClass("nav-link").attr({ "href": "#", "role": "button", "data-toggle": "modal", "aria-pressed": "true" });
        $("li.navbar-item").find("i").attr("role", "img").css("font-size", "x-large").addClass("d-inline-block align-middle");
        $("li.navbar-item").find("span").addClass("pl-1 d-md-none");
    });
    $("div.dropdown-menu:gt(0)").children("a").not("[data-toggle='collapse']").addClass("dropdown-item").attr({ "role": "button", "target": "_blank" });
    $("a").filter("#time_is_link,.list-group-item,.navbar-brand:eq(1),.btn").not("[data-toggle='collapse'],[data-toggle='modal'],.nav-link").attr("target", "_blank");
    $("a[href='#google'],div#google").css("background-color", "#4285f4");
    $("a[href='#microsoft'],div#microsoft").css("background-color", "#5e5e5e");
    $("input:lt(6),select:not([id$='Username'],[id='dictionary-selector'])").addClass("form-control");
    $("input[type='number']:lt(2),select:eq(2)").filter(".form-control").addClass("form-control-sm");
    $("body,select[id$='Username'],div.modal-content:not(:eq(10))").addClass("bg-dark text-white");
    $("input[type='number']").each(function () {
        $(this).filter("#novcaniIznos,#cijenaJedneAkcije").attr("inputmode", "decimal");
        $(this).filter("#procenatIznos,#brojAkcija").attr("inputmode", "numeric");
    });
    $("input[type='url']").attr("inputmode", "url");
    $("table.table").each(function () {
        $(this).addClass("table-sm table-hover table-dark text-center mb-1");
        //$(this).find("td").has("br:eq(12)").addClass("align-middle");
        //$(this).find("td").has("br").siblings("td").not(":eq(1),:eq(5),:eq(7),:eq(11),:eq(13),:eq(15),:lt(21):gt(18),:eq(24),:eq(27),:eq(29),:lt(33):gt(30),:eq(35),:eq(46)").addClass("align-middle");
        $(this).find("th").has("br").siblings("th").addClass("align-middle");
        $(this).find("td").has("br").siblings("td").addClass("align-middle");
        $(this).find("img[src*='logo']").attr("src", function (index, src) { return src + '&logoColor=white' });
        $(this).find("img[src*='logo']").not("[src*='logo=nodedotjs'],[src*='logo=vlcmediaplayer'],[src*='logo=epicgames'],[src*='logo=ubisoft'],[src*='logo=bitdefender']").attr("src", function (index, src) { return src + '&logoSize=auto' });
    });

}); 