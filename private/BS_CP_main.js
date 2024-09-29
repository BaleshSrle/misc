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

    function onSubmit(token) {
        document.querySelector("form#loginForm").submit();
        //$("form#loginForm").submit();
    }

    $("head").each(function () {
        $(this).prepend("<meta http-equiv='refresh' content='1800'>");
        $(this).append("<link rel='dns-prefetch' href='https://api.twitch.tv/'>", "<link rel='dns-prefetch' href='https://passport.twitch.tv/'>", "<link rel='dns-prefetch' href='https://meta.wikimedia.org/'>", "<link rel='preconnect' href='https://www.auti.hr/djevojkadana/'>", "<link rel='preconnect' href='https://mojtv.hr/tv-navigator/'>", "<link rel='preconnect' href='https://api.twitch.tv/'>", "<link rel='preconnect' href='https://upload.wikimedia.org/'>", "<link rel='canonical' href='https://simpleicons.org/'>", "<link rel='canonical' href='https://cybermap.kaspersky.com/en/widget'>", "<link rel='canonical' href='https://www.accuweather.com/sr/ba/doboj/35305/current-weather/35305'>", "<link rel='canonical' href='https://www.livescore.bz/sr-rs/'>", "<link rel='canonical' href='https://naslovi.net/tehnologija/'>", "<link rel='canonical' href='https://store.steampowered.com/'>", "<link rel='canonical' href='https://www.twitch.tv/'>");
        $(this).append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css'>", "<script src='https://www.google.com/recaptcha/api.js'></script>"/*, "<script src='https://oap.accuweather.com/launch.js' defer></script>", "<script src='https://www.livescore.bz/api.livescore.0.1.js' api='livescore' async></script>"*/);
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
    $("button#loginBtn").on("click", function () {
        switch ($("input#password").val()) {
            case "baleshevich88":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#vicDanaToast").attr("data-autohide", "false").toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").attr("data-delay", "3500").toast("show");
                break;
            case "demo":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#vicDanaToast").attr("data-autohide", "false").toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").toast("hide").hide();
                $("div.carousel-item").last().hide();
                $("a[data-target='#sluzbeni'],a#djevojkaDanaBtn.nav-link").addClass("disabled");
                $("optgroup[label='Steamy Streamers']").attr("disabled", "disabled");
        }
    }).addClass("btn btn-primary mt-1 g-recaptcha").attr({ "type": "button", "data-sitekey": "6LfGtPspAAAAANIjkM8CHWkePJivd8DREQyCgQRS", "data-callback": "onSubmit", "data-action": "submit" });
    $("button#loginResetBtn").on("click", function () {
        $("input#password").trigger("focus");
    }).addClass("btn btn-danger mt-1").attr("type", "reset");
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
    }).addClass("btn btn-primary btn-sm").attr("type", "button");
    $("select#KickUsername").on("click", function () {
        $("iframe#KickPlayer").attr({ "src": function (index, src) { return 'https://player.kick.com/' + $("select#KickUsername").val() }, "allowfullscreen": "true" }).addClass("border-0 overflow-hidden rounded-lg");
    }).addClass("form-control bg-dark text-white");
    $("select#url").on("click", function () {
        $("iframe#urlOutput").attr("src", $("#url").val());
    }).addClass("form-control bg-dark text-white");
    $("[src*='simpleicons'],[src*='wikimedia']:gt(2),[alt='BaleshSrle Logo'],[alt='SPC_logo']").height(32).width(32);
    //$("img.devojkaCarouselIMG").addClass("mx-auto d-block w-auto rounded-lg").attr("loading", "lazy");
    $("img").filter("[src*='website'],[src*='w3c']").attr("src", function (index, src) { return src + '&cacheSeconds=1800' });
    $("img[alt^='GitHub']").attr("src", function (index, src) { return src + '?logo=github&labelColor=181717' });
    $("iframe").addClass("d-block mx-auto border-0").attr("loading", "lazy");
    $("iframe:last,img#AutoHrIMG").attr("loading", "eager");
    $("[src*='fibacarousel']").attr({ "src": function (index, src) { return src + '&amp;lng=en' }, "height": "263" }).addClass("w-100 overflow-hidden");
    $("[src*='steampowered']").attr({ "height": "190", "width": "646" }).addClass("my-1");
    //$("iframe[src*='blberza']").slice(0, 2).addClass("rounded-bottom");
    $("iframe[src*='blberza']").parent("div.card-body").slice(0, 2).addClass("bg-white rounded-bottom");
    $("iframe[src*='blberza']").slice(2).height(110).width(200).addClass("overflow-hidden rounded-lg");
    $("div.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        ride: 'carousel',
        touch: false
    });
    $("nav.navbar").delay("slow").fadeIn().css({ "background-color": "#adb5bd", "padding": "2px 16px" });
    $("a.nav-link").each(function () {
        $(this).find("i").attr("role", "img").css("font-size", "x-large").addClass("d-inline-block align-middle");
        $(this).find("span").addClass("pl-1 d-md-none");
    });
    $("mark.bg-secondary,a#time_is_link,label:gt(2)").addClass("text-white");
    $("a#time_is_link,span[id$='z609'],span[id$='z600'],span[id$='z60a'],span[id$='z726'],span[id$='z716'],span[id$='z18a'],span[id$='z123'],span[id$='z12b']").css("font-size", "16px");
    $("span").each(function () {
        $(this).filter(".fi-au,.fi-ba,.fi-ca,.fi-eu,.fi-gb,.fi-nz,.fi-us").addClass("mr-1");
        $(this).filter(".badge").addClass("badge-dark");
        $(this).filter(".badge").children("i").addClass("bi bi-fire text-warning");
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
        $(this).addClass("py-0");
        $(this).children("img").addClass("mr-1");
        $(this).children("button.close").addClass("ml-2 mb-1").attr({ "type": "button", "data-dismiss": "toast", "aria-label": "Zatvori" });
    });
    $("div.toast-body").each(function () {
        $(this).addClass("p-2");
        $(this).children("iframe").addClass("m-0 overflow-hidden border-0 w-100").css({ "min-height": "54px", "max-height": "102px" });
    });
    $("div.modal").each(function () {
        $(this).children("div").attr("role", "document");
        $(this).filter("#mailSettings,#sluzbeni").children("div").addClass("modal-dialog modal-sm modal-dialog-centered");
        $(this).filter("#calculator").children("div").addClass("modal-dialog modal-dialog-centered");
        $(this).filter("#tvguide,#kick,#FamilyNotes").children("div").addClass("modal-dialog modal-lg modal-dialog-centered");
        $(this).filter("#time,[id^='Obracun'],#FujitsuLifeBookS751").children("div").addClass("modal-dialog modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#weather,#livescore,#TechNewsNasloviNET,#steam_games,#programs").children("div").addClass("modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#FIBAlivescore,#imgRotate,#twitch").children("div").addClass("modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#time").children("div").addClass("mx-auto");
        $(this).filter("#calculator").find("div.modal-content").addClass("bg-dark border-dark");
        $(this).find("div.modal-header").children("button.close").addClass("btn btn-danger my-0 ml-auto mr-0 py-2 text-white").attr({ "type": "button", "data-dismiss": "modal", "aria-label": "Zatvori" });
        $(this).filter("#TechNewsNasloviNET,#steam_games,#twitch,#programs,#Obracun1Modal").find("div.modal-header").addClass("d-lg-none");
        $(this).filter("#time,#weather,#FIBAlivescore,#livescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni,#Obracun2Modal").find("div.modal-header").addClass("py-0 pr-0");
        $(this).filter("#TechNewsNasloviNET,#twitch").find(".modal-header").addClass("p-0");
        $(this).filter("#calculator").find("div.modal-header").addClass("px-1 pb-0");
        $(this).find("div").filter(".modal-header,.modal-footer").addClass("border-secondary");
        $(this).not("#loginModal").find("h5.modal-title").addClass("mt-1");
        $(this).filter("#tvguide,#TechNewsNasloviNET,#programs").find("div.modal-body").addClass("p-0");
        $(this).filter("#sluzbeni,#steam_games").find("div.modal-body").addClass("p-1");
        $(this).filter("#loginModal,#imgRotate,#twitch,#calculator,#FujitsuLifeBookS751,#kick,#FamilyNotes").find("div.modal-body").addClass("p-2");
        $(this).filter("#time").find("div.modal-body").addClass("py-2");
        $(this).filter("#mailSettings").find("div.modal-body").addClass("px-2 py-1");
        $(this).find("div.modal-footer").addClass("py-1");
        $(this).find("div.modal-footer").find("a").addClass("text-light");
    });
    $("div.col-sm,div.col-sm-3,div.col-sm-4,div.col-sm-8,output").addClass("pt-2");
    $("div").filter(".col-sm,.col-sm-3,.col-sm-4,.col-sm-8").addClass("px-2");
    $("div").filter(".row:eq(1),.btn-group-vertical").addClass("mx-auto");
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
    $("div.card-header").not(":eq(22),:eq(28)").addClass("py-2 text-white");
    $("div.card-header").filter(":eq(21),:eq(28)").addClass("pt-1 text-white");
    $("div.card-header").filter(":lt(6),:lt(23):gt(19),:lt(28):gt(23),:lt(34):gt(31)").addClass("border-bottom border-secondary");
    $("div.card-header").filter(":lt(19):gt(14),:eq(23),:eq(28),:lt(32):gt(29)").addClass("border-bottom border-dark");
    $("div.card-header").filter(":eq(14)").addClass("border-bottom border-white");
    $("div.card-header").filter(":lt(34):gt(29)").addClass("text-center");
    $("div#TwitchStatus").each(function () {
        $(this).children("div.card").not(":last").addClass("mb-2");
        $(this).find("img").attr({ "src": function (index, src) { return src + '&style=plastic&logo=twitch&logoColor=white&labelColor=9146ff&cacheSeconds=600' }, "alt": "Twitch Status" }).addClass("p-1");
    });
    $("div.card-columns").parent("div.card-body").addClass("p-3");
    //$("div.card-columns").find("div.card-body").slice(12, 14).addClass("bg-white");
    $("div.card-body").children("div.mojtvprogram").addClass("mx-2 my-3 px-1");
    $("h6.card-subtitle").addClass("mb-1 text-muted ubuntu-bold-italic");
    $("div.card-footer").addClass("border-top border-secondary text-muted text-right");
    $("div.list-group.list-group-flush").slice(1).addClass("overflow-auto");
    $("div#aw-ad-container").remove();
    $("h2,h6:gt(1)").addClass("mb-0");
    $("p.card-text").filter(":eq(2),:eq(5),:eq(8),:eq(11)").addClass("mb-0")
    $("h6").slice(20).addClass("text-wrap");
    $("div.input-group").each(function () {
        $("div.input-group").slice(1, 3).addClass("mb-2 mr-sm-2");
        $("div.input-group").filter(":eq(0),:lt(6):gt(2)").addClass("mb-2");
        $("div.input-group").filter(":gt(5)").addClass("mb-0");
        $("div.input-group").filter(":lt(6):gt(3)").addClass("input-group-sm");
    });
    $("ul.list-group").filter(".list-group-flush, .pt-1, .pb-1").children("li").slice(0, -6).addClass("list-group-item-dark");
    $("ul.list-group").filter(".list-group-flush, .pt-1, .pb-1").children("li").slice(0, -6).addClass("px-2 py-0");
    $("ul.list-group").filter(".list-group-flush, .pt-1, .pb-1").children("li").slice(-6).addClass("px-2 py-1");
    $("ul.list-group").filter(".list-group-flush").children("li").slice(0, -10).addClass("d-flex justify-content-between align-items-center");
    $("ul.list-group").filter(".list-group-flush").children("li").slice(-10).addClass("d-flex flex-fill align-items-center justify-content-around");
    $("ul.nav").each(function () {
        $(this).parent().removeClass("py-2").addClass("pt-1");
        $(this).children().removeClass("px-2 py-1");
        $(this).addClass("d-flex flex-nowrap text-nowrap").css({ "overflow-y": "hidden", "overflow-x": "auto" }).attr("role", "tablist");
    });
    $("ul[id$='List']").find("a").on("click", function (e) {
        e.preventDefault()
        $(this).tab("show");
    }).addClass("py-1").attr({ "data-toggle": "tab", "role": "tab" });
    $("li.list-group-item,a.list-group-item").filter(":eq(124), :eq(133), :eq(177), :eq(180)").addClass("rounded-0");
    $("div.list-group.list-group-horizontal").filter(":gt(2)").addClass("p-1");
    $("div.list-group").children("a").slice(6).addClass("list-group-item-action");
    $("div.list-group").children("a").filter(":lt(11):gt(5),:eq(27)").addClass("list-group-item-primary");
    $("div.list-group").children("a").filter(":lt(13):gt(10),:lt(30):gt(27)").addClass("list-group-item-secondary");
    $("div.list-group").children("a").not(":lt(15):gt(5),:lt(31):gt(26)").addClass("list-group-item-dark");
    $("div.list-group").children("div").slice(2).addClass("d-flex justify-content-center flex-wrap mx-auto");
    $("div.list-group").children("div").children("a").addClass("list-group-item-dark");
    $("a").filter(".list-group-item:eq(1),.list-group-item:eq(4)").addClass("border-top-0");
    $("a").filter("#time_is_link,.list-group-item,.navbar-brand:eq(1),.dropdown-item:lt(17),.btn").not("[data-toggle='collapse'],[data-toggle='modal'],.nav-link").attr("target", "_blank");
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
    $("table.table").addClass("table-sm table-hover table-dark text-center mb-1");
}); 