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
    const localeOptions = { locale: "sr-Latn-BA", options: { dateStyle: "full", timeStyle: "short" } };

    /* function onSubmit(token) {
        document.querySelector("form#loginForm").submit();
    }*/

    $("head").each(function () {
        $(this).prepend($("<meta>").attr({ "http-equiv": "refresh", "content": "1800" }));
        $(this).append($("<link>").attr({ "rel": "dns-prefetch", "href": "https://api.twitch.tv/" }), $("<link>").attr({ "rel": "dns-prefetch", "href": "https://passport.twitch.tv/" }), $("<link>").attr({ "rel": "dns-prefetch", "href": "https://meta.wikimedia.org/" }), $("<link>").attr({ "rel": "preconnect", "href": "https://www.auti.hr/djevojkadana/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "preconnect", "href": "https://mojtv.hr/tv-navigator/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "preconnect", "href": "https://api.twitch.tv/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "preconnect", "href": "https://upload.wikimedia.org/", "crossorigin": "anonymous" }), $("<link>").attr({ "rel": "canonical", "href": "https://simpleicons.org/" }), $("<link>").attr({ "rel": "canonical", "href": "https://cybermap.kaspersky.com/en/widget" }), $("<link>").attr({ "rel": "canonical", "href": "https://www.accuweather.com/sr/ba/doboj/35305/current-weather/35305" }), $("<link>").attr({ "rel": "canonical", "href": "https://www.livescore.bz/sr-rs/" }), $("<link>").attr({ "rel": "canonical", "href": "https://naslovi.net/tehnologija/" }), $("<link>").attr({ "rel": "canonical", "href": "https://store.steampowered.com/" }), $("<link>").attr({ "rel": "canonical", "href": "https://www.twitch.tv/" }));
        $(this).append($("<link>").attr({ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/flag-icons/css/flag-icons.min.css", "crossorigin": "anonymous" }), /*$.getScript("https://oap.accuweather.com/launch.js"), */$.getScript("https://widget.iqair.com/script/widget_v3.0.js")/*, $.getScript("https://www.google.com/recaptcha/api.js")*/);
        $(this).append($("<style></style>").text("#dictionarySelector160:hover {  background: url(https://www.oxfordlearnersdictionaries.com/external/images/widget_old/lang-hover.png?version=2.3.71) !no-repeat; }\n#search-btn160:hover { background: url(https://www.oxfordlearnersdictionaries.com/external/images/widget_old/search-hover.png?version=2.3.71) !important; }\n#search-btn160:active { background: url(https://www.oxfordlearnersdictionaries.com/external/images/widget_old/search-active.png?version=2.3.71) !important;}"));
    });
    $("script#skin").text("var fm_inf_1 = 'Arial';");
    $("div.accordion").delay("slow").fadeIn().addClass("mt-3");

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
    $("body,:password").on("keydown", function (event) {
        if (event.which === 20) {
            alert("Caps Lock je uključen");
        }
    });
    $("#loginBtn").on("click", function () {
        switch ($("input#password").val()) {
            case "baleshevich88":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#airQualityToast,#vicDanaToast").attr("data-autohide", false).toast("show");
                $("div#DjevojkadanaAutiHRToast.toast").attr("data-delay", "3500").toast("show");
                break;
            case "demo":
                console.clear();
                $("div#loginModal").modal("hide");
                $("div.toast").filter("#WebsiteStatusToast,#churchCalendarToast,#airQualityToast,#vicDanaToast").attr("data-autohide", false).toast("show");
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
    $("div.collapse").each(function () {
        /*$(this).collapse({
            parent: "accordionControlPanel",
            toggle: false
        });*/
        $(this).filter("#index,#links,#blse,#tvguide2").attr("data-parent", "#" + $("div.accordion").attr("id"));
        $(this).filter("#index,#links,#blse,#tvguide2").siblings("div.card-header").addClass("py-2 border-bottom border-secondary");
        $(this).filter(".navbar-collapse").attr("id", $("button.navbar-toggler").attr("data-target").replace("#", ""));
    });
    /* $("div#collapseTwitchStatus.collapse").collapse({
        parent: "#AccordionTwitchStatus",
        toggle: false
    });*/
    $("button#imgRotateApply").on("click", function () {
        $("div.col-md-7").wrapInner($("<img>").attr({ "src": $("#imgUrl").val(), "loading": "lazy" }).height(355).css("transform", "rotate(" + $("#imgAngle").val() + "deg)").addClass("mx-auto d-block w-auto rounded-lg"));
    }).addClass("btn btn-primary mb-2 mr-sm-2").attr("type", "button").text("Primjeni");
    $("button#loadRadioStation").on("click", function () {
        return window.open($("#RadioStation").val());
    }).addClass("btn btn-info").attr("type", "button").append($("<i></i>").addClass("bi bi-broadcast"));
    $("button#loadTvStation").on("click", function () {
        return window.open($("#TvStation").val());
    }).addClass("btn btn-info").attr("type", "button").append("<i></i>").addClass("bi bi-tv");
    /* $("select#TwitchUsername").on("click", function () {
        const TwitchUsername = $("select#TwitchUsername").val();
        $("iframe#TwitchPlayer").attr({ "src": function (index, src) { return 'https://player.twitch.tv/?channel=' + TwitchUsername + '&parent=' + location.host + '&muted=true' }, "allowfullscreen": false }).addClass("border-0 overflow-hidden rounded-lg");
        $("iframe#chat_embed").attr({ "src": function (index, src) { return 'https://www.twitch.tv/embed/' + TwitchUsername + '/chat?parent=' + location.host }, "height": "463.5", "allowfullscreen": false }).addClass("w-100 border-0 overflow-hidden rounded-lg");
    }).addClass("form-control bg-dark"); */
    $("select#KickUsername").on("click", function () {
        $("iframe#KickPlayer").attr("src", function (index, src) { return 'https://player.kick.com/' + $("select#KickUsername").val() + '?muted=true&allowfullscreen=false' }).addClass("embed-responsive-item border-0 overflow-hidden rounded-lg");
    }).addClass("form-control bg-dark");
    $("select#url").on("click", function () {
        $("iframe#urlOutput").attr("src", $("#url").val());
    }).addClass("form-control bg-dark text-white");
    $("[src*='wikimedia'],[src*='wpscdn'],[alt='SPC_logo'],[alt='iqAir_logo']").height(32);
    //$("[src*='simpleicons']").height(32);
    //$("img.devojkaCarouselIMG").addClass("mx-auto d-block w-auto rounded-lg").attr("loading", "lazy");
    $("img").each(function () {
        //$(this).filter("[src*='website'],[src*='w3c']").attr("src", function (index, src) { return src + '&cacheSeconds=1800' });
        //$(this).filter("[src*='uptimerobot']").attr("src", function (index, src) { return src + '&cacheSeconds=3600' });
        //$(this).filter("[alt^='GitHub']").attr({ "src": function (index, src) { return src + '?logo=github&labelColor=181717' }, "loading": "lazy" });
        $(this).filter("[alt$='deployments']").attr({ "src": function (index, src) { return src + '&label=Deployments' }, "loading": "lazy", "crossorigin": "anonymous" });
        //$(this).filter("[src*='shields']").on("error", function () { this.src = this.src; });
    });
    $("img.AppBadge").each(function () {
        const PackageManager = $(this).data("packagemanager");
        const Package = $(this).data("package");
        const Channel = $(this).data("channel");
        const Label = encodeURIComponent($(this).data("label"));
        const Logo = $(this).data("logo") || "";
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const Color = $(this).data("color") || "blue";
        switch (PackageManager) {
            case "Debian":
                $(this).attr({
                    "src": "https://img.shields.io/debian/v/" + Package + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20Debian%20Packages&labelColor=a81d33&color=" + Color, "alt": "Shields.io Debian Package for " + decodeURIComponent(Label), "loading": "lazy", "crossorigin": "anonymous"
                }).wrap($("<a></a>").attr({ "href": "https://packages.debian.org/" + Package, "hreflang": "en", "target": "_blank", "rel": "external" }));
                break;
            case "Fedora":
                $(this).attr({
                    "src": "https://img.shields.io/fedora/v/" + Package + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20Fedora%20Packages&labelColor=51a2da&color=" + Color, "alt": "Shields.io Fedora Package for " + decodeURIComponent(Label), "loading": "lazy", "crossorigin": "anonymous"
                }).wrap($("<a></a>").attr({ "href": "https://packages.fedoraproject.org/search?query=" + Package, "hreflang": "en", "target": "_blank", "rel": "external" }));
                break;
            case "Flatpak":
                $(this).attr({
                    "src": "https://img.shields.io/flathub/v/" + Package + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20Flathub&labelColor=4a90d9&color=" + Color, "alt": "Shields.io Flatpack Badge for " + decodeURIComponent(Label), "loading": "lazy", "crossorigin": "anonymous"
                }).wrap($("<a></a>").attr({ "href": "https://flathub.org/hr/apps/" + Package, "hreflang": "hr", "target": "_blank", "rel": "external" }));
                break;
            case "Snapcraft":
                $(this).attr({
                    "src": "https://img.shields.io/snapcraft/v/" + Package + "/" + Channel + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20Snapcraft&labelColor=e95420&color=" + Color, "alt": "Snapcraft Badge for " + decodeURIComponent(Label), "loading": "lazy", "crossorigin": "anonymous"
                }).on("error", function () {
                    $(this).attr("src", "https://badgen.infra.medigy.com/snapcraft/v/" + Package + "/amd64?label=" + Label + "%20%40%20Snapcraft&labelColor=e95420&color=" + Color)
                }).wrap($("<a></a>").attr({ "href": "https://snapcraft.io/" + Package, "hreflang": "en", "target": "_blank", "rel": "external" }));
                break;
            case "Ubuntu":
                $(this).attr({
                    "src": "https://img.shields.io/ubuntu/v/" + Package + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20Ubuntu%20Packages&labelColor=e95420&color=" + Color, "alt": "Shields.io Ubuntu Package for " + decodeURIComponent(Label), "loading": "lazy", "crossorigin": "anonymous"
                }).wrap($("<a></a>").attr({ "href": "https://packages.ubuntu.com/" + Package, "hreflang": "en", "target": "_blank", "rel": "external" }));
                break;
            default:
                $(this).attr({
                    "src": "https://img.shields.io/winget/v/" + Package + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + Label + "%20%40%20winget&color=" + Color, "loading": "lazy", "crossorigin": "anonymous"
                }).on("error", function () {
                    $(this).attr("src", "https://badgen.net/winget/v/" + Package + "?color=" + Color + "&icon=" + Logo + "&label=" + Label + "%20%40%20winget");
                }).wrap($("<a></a>").attr({ "href": "https://winget.run/pkg/" + Package.replace(".", "/").replace(".sr", ""), "hreflang": "en", "target": "_blank", "rel": "external" }));
        }
    });
    $("img.ExtensionBadge").each(function () {
        const Browser = $(this).data("browser");
        const ExtensionId = $(this).data("extension-id");
        const ExtensionLabel = encodeURIComponent($(this).data("extension-label"));
        const ExtensionColor = $(this).data("extension-color") || "blue";
        switch (Browser) {
            case "Chromium":
                $(this).attr({
                    "src": "https://img.shields.io/chrome-web-store/v/" + ExtensionId + "?logo=chromewebstore&logoColor=white&logoSize=auto&label=" + ExtensionLabel + "%20%40%20Chrome%20Web%20Store&labelColor=4285f4&color=" + ExtensionColor, "loading": "lazy", "crossorigin": "anonymous"
                }).on("error", function () {
                    $(this).attr("src", "https://badgen.net/chrome-web-store/v/" + ExtensionId + "?icon=chrome&label=" + ExtensionLabel + "%20%40%20Chrome%20Web%20Store&labelColor=4285f4&color=" + ExtensionColor);
                }).wrap($("<a></a>").attr({ "href": "https://chromewebstore.google.com/detail/" + ExtensionId, "target": "_blank", "rel": "external" }));
                break;
            case "Firefox":
                $(this).attr({
                    "src": "https://img.shields.io/amo/v/" + ExtensionId + "?logo=firefox&logoColor=white&logoSize=auto&label=" + ExtensionLabel + "%20%40%20Mozilla%20Add-ons&labelColor=ff7139&color=" + ExtensionColor, "loading": "lazy", "crossorigin": "anonymous"
                }).on("error", function () {
                    $(this).attr("src", "https://badgen.net/amo/v/" + ExtensionId + "?color=" + ExtensionColor + "&icon=firefox&label=" + ExtensionLabel + "%20%40%20Mozilla%20Add-ons&labelColor=ff7139");
                }).wrap($("<a></a>").attr({ "href": "https://addons.mozilla.org/hr/firefox/addon/" + ExtensionId, "hreflang": "hr", "target": "_blank", "rel": "external" }));
                break;
            default:
                $(this).attr({
                    "src": "https://img.shields.io/visual-studio-marketplace/v/" + ExtensionId + "?label=" + ExtensionLabel + "%20for%20VS%20Code&labelColor=007acc", "loading": "lazy", "crossorigin": "anonymous"
                }).on("error", function () {
                    $(this).attr("src", "https://badgen.net/vs-marketplace/v/" + ExtensionId + "?icon=visualstudio&label=" + ExtensionLabel + "%20for%20VS%20Code&labelColor=007acc");
                }).wrap($("<a></a>").attr({ "href": "https://marketplace.visualstudio.com/items?itemName=" + ExtensionId, "hreflang": "en", "target": "_blank", "rel": "external" }));
        }
    });
    $("img.ghActionsWorkflow").each(function () {
        const Package = $(this).data("package");
        const Workflow = $(this).data("workflow");
        const WorkflowLabel = $(this).data("workflowlabel");
        const Branch = $(this).data("branch") || "main";
        const Event = $(this).data("event") || "";
        $(this).attr({
            "src": "https://img.shields.io/github/actions/workflow/status/" + Package + "/" + Workflow + ".yml?branch=" + Branch + "&event=" + Event + "&logo=githubactions&logoColor=white&logoSize=auto&label=GitHub%20Actions%20Workflow&labelColor=2088ff", "alt": "GitHub Actions Workflow - " + WorkflowLabel, "loading": "lazy", "crossorigin": "anonymous"
        }).addClass("d-block mx-auto");
    });
    $("img.ghChecks").each(function () {
        const Package = $(this).data("package");
        const Branch = $(this).data("branch") || "main";
        const JobName = $(this).data("jobname") || "";
        $(this).attr({ "src": "https://img.shields.io/github/check-runs/" + Package + "/" + Branch + "?nameFilter=" + JobName + "&logo=github&logoColor=white&logoSize=auto&label=Checks%20" + JobName + "&labelColor=181717", "alt": "GitHub branch check runs", "loading": "lazy", "crossorigin": "anonymous" }).addClass("d-block mx-auto").on("error", function () {
            $(this).attr("src", "https://badgen.net/github/checks/" + Package + "/" + Branch + "/" + JobName + "?icon=github&label=Checks%20" + JobName + "&labelColor=181717");
        });
    });
    $("img.ghCommitActivity").each(function () {
        const Period = $(this).data("period");
        const PeriodLabel = $(this).data("periodlabel");
        const Package = $(this).data("package");
        $(this).attr({ "src": "https://img.shields.io/github/commit-activity/" + Period + "/" + Package + "?logo=github&logoColor=white&logoSize=auto&labelColor=181717", "alt": "GitHub Commit Activity " + PeriodLabel, "loading": "lazy" }).addClass("d-block mx-auto");
        if (Period == "t") {
            $(this).on("error", function () {
                $(this).attr("src", "https://badgen.net/github/commits/" + Package + "?icon=github&labelColor=181717");
            });
        }
    });
    $("img.ghLastCommit").each(function () {
        const Package = $(this).data("package");
        $(this).attr({ "src": "https://img.shields.io/github/last-commit/" + Package + "?logo=github&logoColor=white&logoSize=auto&labelColor=181717", "alt": "GitHub Last Commit", "loading": "lazy" }).addClass("d-block mx-auto").on("error", function () {
            $(this).attr("src", "https://badgen.net/github/last-commit/" + Package + "?icon=github&labelColor=181717");
        });
    });
    $("img.ghPRDetail").each(function () {
        const Package = $(this).data("package");
        const Number = $(this).data("number");
        $(this).attr({
            "src": "https://img.shields.io/github/pulls/detail/state/" + Package + "/" + Number + "?logo=github&logoColor=white&logoSize=auto&label=Pull%20Request%20Detail%20for%20%23" + Number + "&labelColor=181717", "alt": "GitHub PR Detail #" + Number, "loading": "lazy", "crossorigin": "anonymous"
        }).addClass("d-block mx-auto");
    });
    $("img.ghPRStatus").each(function () {
        const Package = $(this).data("package");
        const Number = $(this).data("number");
        $(this).attr({
            "src": "https://img.shields.io/github/status/s/pulls/" + Package + "/" + Number + "?logo=github&logoColor=white&logoSize=auto&label=Pull%20Request%20Status%20%23" + Number + "&labelColor=181717", "alt": "GitHub PR Status #" + Number, "loading": "lazy", "crossorigin": "anonymous"
        }).addClass("d-block mx-auto");
    });
    $("img.LinuxDistroBadge").each(function () {
        const Name = encodeURIComponent($(this).data("name"));
        const Edition = encodeURIComponent($(this).data("edition"));
        const Color = $(this).data("color") || "fcc624";
        const Logo = $(this).data("logo") || "linux";
        $(this).attr({
            "src": "https://img.shields.io/badge/" + Name + "-" + Edition + "%2064--bit-" + Color + "?logo=" + Logo + "&logoColor=white&logoSize=auto", "loading": "lazy", "crossorigin": "anonymous"
        }).on("error", function () {
            $(this).attr("src", "https://badgen.net/static/" + Name + "/" + Edition + "%2064-bit/" + Color);
        });
    });
    $("img.simpleiconsCDN").each(function () {
        const IconName = $(this).data("iconname");
        //const siIconColor = $(this).data("color") || "";
        const IconAlt = $(this).data("alt");
        $(this).attr({
            "src": "https://cdn.simpleicons.org/" + IconName, "height": "32", "alt": IconAlt, "loading": "lazy", "crossorigin": "anonymous"
        });
    });
    $("img.UptimeRobotBadge").each(function () {
        const Key = $(this).data("key");
        const Logo = $(this).data("logo");
        const LogoColor = $(this).data("logocolor") || "";
        const LogoSize = $(this).data("logosize") || "";
        const LabelTxtPrefix = encodeURIComponent($(this).data("labeltxtprefix") || "");
        const LabelColor = $(this).data("labelcolor") || "";
        $(this).attr({
            "src": "https://img.shields.io/uptimerobot/status/" + Key + "?logo=" + Logo + "&logoColor=" + LogoColor + "&logoSize=" + LogoSize + "&label=" + LabelTxtPrefix + "UptimeRobot%20status&labelColor=" + LabelColor + "&cacheSeconds=36000", "alt": "UptimeRobot status", "loading": "lazy", "crossorigin": "anonymous"
        }).on("error", function () {
            $(this).attr("src", "https://badgen.infra.medigy.com/uptime-robot/status/" + Key + "?label=" + LabelTxtPrefix + "UptimeRobot%20status&labelColor=" + LabelColor + "&cacheSeconds=36000")
        });
    });
    $("div.toast-header:eq(0),a.navbar-brand:eq(0)").prepend($("<img>").attr({ "src": "https://cdn.jsdelivr.net/gh/BaleshSrle/baleshsrle.github.io/logo.png", "alt": "BaleshSrle Logo", "crossorigin": "anonymous" }).height(32));
    $("div#churchCalendarToast > div.toast-body").addClass("p-0").append($("<iframe></iframe").attr("src", "https://www.crkvenikalendar.com/banner/0002.php").addClass("my-0 mx-auto overflow-hidden border-0").width(200).height(360));
    //$("div#churchCalendarToast > div.toast-body").addClass("p-2").append($("<iframe></iframe").attr("src", "https://pravoslavnikalendar.rs/kal/pra220.php").addClass("m-0 overflow-hidden border-0 w-100").css({ "min-height": "54px", "max-height": "102px" }));
    $("div#DjevojkadanaAutiHRToast > div.toast-body").addClass("p-2").append($("<img>").attr("src", "https://www.auti.hr/djevojkadana/img/" + year + "-" + month + "/" + day + ".jpg").addClass("mx-auto d-block img-fluid rounded-lg"));
    $("iframe").not("[src*='naslovi'],.steamWidget").addClass("d-block mx-auto border-0").attr("loading", "lazy");
    $("iframe:last,img#AutoHrIMG").attr("loading", "eager");
    $("[src*='fibacarousel']").attr({ "src": function (index, src) { return src + '&amp;lng=en' }, "height": "263" }).addClass("w-100 overflow-hidden");
    //$("iframe[src*='blberza']").slice(0, 2).addClass("rounded-bottom");
    $("iframe[src*='blberza']").parent("div.card-body").slice(0, 2).addClass("bg-white rounded-bottom");
    //$("iframe[src*='blberza']").slice(2).width(200).height(110).addClass("overflow-hidden rounded-lg");
    $("iframe.steamWidget").each(function () {
        const steamGameID = $(this).data("steam-gameid");
        const steamTitle = $(this).data("steam-title") || null;
        $(this).addClass("d-block mx-auto border-0 my-1").attr({ "src": "https://store.steampowered.com/widget/" + steamGameID + "/", "title": steamTitle, "loading": "lazy" }).width(646).height(190);
    });
    $("div.carousel").addClass("carousel-fade").carousel({
        interval: 3000,
        keyboard: false,
        ride: 'carousel',
        touch: false
    });
    $("div.carousel:eq(0) img").each(function () {
        $(this).filter("[alt^='IP2Location'],[alt*='Vivaldi'],[alt$='Kit'],[alt*='W3Schools'],[alt^='AIMP'],[alt^='Boobpedia']").addClass("img-fluid my-4 my-md-3 rounded-lg");
        $(this).filter("[alt^='Simple'],[alt^='Simple']").addClass("img-fluid my-4 my-md-3");
        $(this).filter("[alt^='Joomla']").addClass("img-fluid my-4 my-md-2 rounded-lg");
        $(this).filter("[alt='Discord'],[alt='Bitdefender']").addClass("img-fluid my-3 my-md-0");
        $(this).filter("[alt*='TeamViewer']").addClass("img-fluid my-3");
        $(this).filter("[alt*='Community']").addClass("img-fluid my-1 my-md-0");
        $(this).filter("[alt='LibreOffice']").addClass("img-fluid");
        $(this).filter("[alt*='VLC'], [alt='Postman'],[alt$='OpenOffice'],[alt='Xubuntu'],[alt^='Poslovi']").css("max-height", "90px");
        $(this).filter("[alt^='NetLingo']").addClass("rounded-lg").css("max-height", "90px");
    }).addClass("border-0 d-block mx-auto").attr("loading", "lazy");
    $("div#IQAirCarousel").css({ "width": "313px", "height": "100px" });
    $("nav.navbar").delay("slow").fadeIn().css({ "background-color": "#adb5bd", "padding": "2px 16px" });
    $("mark.bg-secondary,a#time_is_link,label:gt(2)").addClass("text-white");
    $("a#time_is_link,span[id$='z609'],span[id$='z600'],span[id$='z60a'],span[id$='z726'],span[id$='z716'],span[id$='z18a'],span[id$='z123'],span[id$='z12b']").css("font-size", "16px");
    $("span").filter(".fi-au,.fi-ba,.fi-ca,.fi-eu,.fi-gb,.fi-nz,.fi-us").addClass("mr-1");
    $("span.fi-us").parents("div.card-header").siblings("ul").height(200).addClass("overflow-auto");
    $("i").each(function () {
        $(this).filter(".bi-laptop,.bi-laptop,.bi-phone,.bi-tablet,.bi-image,.bi-snapchat,.bi-telegram,.bi-facebook,.bi-messenger,.bi-instagram,.bi-threads,.bi-whatsapp").css("font-size", "xx-large");
        $(this).filter(".bi-mailbox,.bi-headset,.bi-hourglass-split,.bi-globe,.bi-bug,.bi-kanban,.bi-stopwatch,.bi-briefcase,.bi-easel,.bi-shield").css("font-size", "larger").addClass("pr-1 align-middle");
    });
    $("button.btn-link").each(function () {
        $(this).addClass("text-left text-white").attr({ "type": "bottom", "data-toggle": "collapse", "aria-expanded": "false", "aria-controls": $(this).attr("data-target").replace("#", "") });
        //$(this).parents("div.card-header").addClass("py-2 border-bottom border-secondary");
    });
    $("button.btn").filter(".btn-info,.btn-secondary:last").css({ "padding-top": "5px", "padding-bottom": "5px" });
    $("div.toast").each(function (i) {
        $("div.toast").eq(i).attr({ "role": "status", "aria-live": "polite", "aria-atomic": "true" }).addClass("mb-2");
    }).wrapAll($("<div></div>").addClass("position-fixed").css({ "z-index": "5", "right": "0", "bottom": "56px" }).width(350));
    $("div.toast-header").each(function (i) {
        $("div.toast-header").eq(i).addClass("py-0");
        $("div.toast-header").eq(i).children("strong").addClass("mr-auto");
        $("div.toast-header").eq(i).append($("<button></button>").addClass("close ml-2 mb-1").attr({ "type": "button", "data-dismiss": "toast", "aria-label": "Close" }).html("<span aria-hidden='true'>&times;</span>"));
    });
    $("div.toast-header").each(function () {
        $("div.toast-header > img").not(":eq(2)").addClass("mr-1");
        $("div.toast-header > img:eq(2)").addClass("mr-auto");
    })/*.addClass("py-0").append($("<button></button>").addClass("close ml-2 mb-1").attr({ "type": "button", "data-dismiss": "toast", "aria-label": "Zatvori" }).html("<span aria-hidden='true'>&times;</span>"))*/;
    $("div.toast-body").each(function () {
        $("div.toast-body").filter(":eq(0), :eq(3)").addClass("p-2");
        $("div.toast-body").find("li.list-group-item").addClass("px-2 py-1");
        $("div.toast-body").eq(2).addClass("py-2 px-3").css("width", "345px");
        $("div.toast-body").eq(3).addClass("text-body");
    });
    $("div.modal").each(function () {
        $(this).attr("aria-labelledby", $(this).attr("id") + "Label");
        $(this).children("div").addClass("modal-dialog").attr("role", "document");
        $(this).filter("#mailSettings,#sluzbeni").children("div").addClass("modal-sm modal-dialog-centered");
        $(this).filter("#calculator").children("div").addClass("modal-dialog-centered");
        $(this).filter("#tvguide,#FamilyNotes").children("div").addClass("modal-lg modal-dialog-centered");
        $(this).filter("#time,[id^='Obracun'],#FujitsuLifeBookS751").children("div").addClass("modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#weather,#livescore,#TechNewsNasloviNET,#steam_games").children("div").addClass("modal-lg modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#FIBAlivescore,#imgRotate,#twitch,#kick,#programs,#CarService").children("div").addClass("modal-xl modal-dialog-centered modal-dialog-scrollable");
        $(this).filter("#time").children("div").addClass("mx-auto");
        $(this).filter("#calculator").find("div.modal-content").addClass("bg-dark border-dark");
        $(this).filter("#time,#mailSettings,#imgRotate,#tvguide,#TechNewsNasloviNET,#sluzbeni,#twitch,#programs,#kick").find("div.modal-header").append($("<button></button>").addClass("close btn btn-danger my-0 ml-auto mr-0 py-2 text-white").attr({ "type": "button", "data-dismiss": "modal", "aria-label": "Zatvori" }).html("<span aria-hidden='true'>&times;</span>"));
        $(this).filter("#TechNewsNasloviNET,#steam_games,#twitch,#programs,#Obracun1Modal,#kick").find("div.modal-header").addClass("d-lg-none");
        $(this).filter("#time,#weather,#FIBAlivescore,#livescore,#mailSettings,#imgRotate,#tvguide,#sluzbeni,#Obracun2Modal").find("div.modal-header").addClass("py-0 pr-0");
        $(this).filter("#TechNewsNasloviNET,#twitch,#kick").find(".modal-header").addClass("p-0");
        $(this).filter("#calculator").find("div.modal-header").addClass("px-1 pb-0");
        $(this).find("div").filter(".modal-header,.modal-footer").addClass("border-secondary");
        $(this).find("hr").addClass("border-secondary");
        $(this).filter("#loginModal").find("div.modal-header").addClass("py-1").append($("<h5></h5>").addClass("modal-title").text("Prijava na sistem"), $("<i></i>").addClass("bi bi-circle-fill text-danger ml-auto py-1"), $("<i></i>").addClass("bi bi-circle-fill text-primary py-1"), $("<i></i>").addClass("bi bi-circle-fill text-white py-1"));
        $(this).not("#loginModal").find("h5.modal-title").addClass("mt-1");
        $(this).filter("#tvguide,#programs").find("div.modal-body").addClass("p-0");
        $(this).filter("#TechNewsNasloviNET").find("div.modal-body").addClass("p-0").append($("<iframe></iframe>").attr({ "src": "https://naslovi.net/widget/?type=tehnologija&bgcolor=343A40&textcolor=FFFFFF&sourcecolor=FFFFFF80&separatorcolor=6C757D&count=10&", "height": "915", "loading": "lazy" }).addClass("d-block mx-auto border-0 w-100"));
        $(this).filter("#sluzbeni,#steam_games,#CarService").find("div.modal-body").addClass("p-1");
        //$(this).filter("#steam_games").find("iframe").attr({ "width": "646", "height": "190" }).addClass("my-1");
        $(this).filter("#loginModal,#imgRotate,#twitch,#calculator,#FujitsuLifeBookS751,#kick,#FamilyNotes").find("div.modal-body").addClass("p-2");
        $(this).filter("#time").find("div.modal-body").addClass("py-2");
        // $(this).filter("#imgRotate").find("div.col-md-7").wrapInner($("<img>").attr("id", "imgResult"));
        $(this).filter("#mailSettings").find("div.modal-body").addClass("px-2 py-1");
        $(this).find("div.modal-footer").addClass("py-1");
        $(this).find("div.modal-footer").find("a").addClass("text-light");
        $(this).filter("#CarService").find("th:eq(2)").addClass("w-50");
        $(this).filter("#CarService").find("td").filter(":lt(2),:lt(8):gt(5),:lt(14):gt(11)").addClass("align-middle");
        $(this).filter("#CarService").find("time:eq(0)").text(new Date(2024, 5, 18, 8, 53).toLocaleString(localeOptions.locale, localeOptions.options));
        $(this).filter("#CarService").find("time:eq(1)").text(new Date(2025, 0, 22, 15, 4).toLocaleString(localeOptions.locale, localeOptions.options));
        $(this).filter("#CarService").find("time:eq(2)").text(new Date(2025, 0, 28, 14, 22).toLocaleString(localeOptions.locale, localeOptions.options));
        $(this).filter("#CarService").find("time:eq(3)").text(new Date(2025, 4, 23, 14, 16).toLocaleString(localeOptions.locale, localeOptions.options));
        $(this).filter("#CarService").find("time:eq(4)").text(new Date(2025, 4, 24, 14, 0).toLocaleString(localeOptions.locale, localeOptions.options));
        $(this).filter("#CarService").find("time:eq(5)").text(new Date(2025, 7, 6, 12, 4).toLocaleString(localeOptions.locale, localeOptions.options));
    }).attr({ "tabindex": "-1", "role": "dialog" });
    $("div.col-sm-8,output").addClass("pt-2");
    $("div.col-sm-8").addClass("px-2");
    $("div").filter(".row:eq(1),.btn-group-vertical,.toast-body:eq(2),[name^='airvisual']").addClass("mx-auto");
    /* $("div#weatherforecast").append($("<a></a>").attr({ "href": "https://www.accuweather.com/sr/ba/doboj/35305/current-weather/35305", "hreflang": "sr-BA" }).addClass("aw-widget-legal"), $("<div></div>").attr({ "id": "awtd1504180838200", "data-locationkey": "35305", "data-unit": "c", "data-language": "sr", "data-useip": false, "data-uid": "awtd1504180838200", "data-editlocation": true }).addClass("aw-widget-36hour"), $("<script></script>").attr({ "src": "https://oap.accuweather.com/launch.js", "defer": "defer" }));*/
    /* $("div#livescore").append($("<script></script>").attr({ "type": "text/javascript", "src": "https://www.livescore.bz/api.livescore.0.1.js", "api": "livescore", "async": "async" }), $("<a></a>").attr({ "href": "https://www.livescore.bz/rs", "target": "_blank", "sport": "football(soccer)", "data-1": "today", "lang": "rs" }).text("Rezultati uživo")); */
    $("p.text-white-50.small:last,li.navbar-item:eq(3),li.navbar-item:eq(8)").addClass("d-none d-md-block");
    $("div.btn-group-vertical").each(function () {
        $(this).eq(3).addClass("mw-100");
    }).addClass("my-1");
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
    /*$("div.card-header").each(function () {
        $("div.card-header").not(":eq(22),:eq(28)").addClass("py-2 text-white");
        $("div.card-header").filter(":eq(21),:eq(28)").addClass("pt-1 text-white");
        $("div.card-header").filter(":lt(6),:lt(23):gt(19),:lt(28):gt(23),:lt(34):gt(31)").addClass("border-bottom border-secondary");
        $("div.card-header").filter(":lt(19):gt(14),:eq(23),:eq(28),:lt(32):gt(29)").addClass("border-bottom border-dark");
        $("div.card-header").eq(14).addClass("border-bottom border-white");
        $("div.card-header").slice(30).addClass("text-center");
    });*/
    $("div#index").each(function () {
        $(this).find("div.card-header:eq(0)").addClass("py-2 border-bottom border-white");
        $(this).find("div.card-header:gt(0)").addClass("py-2 border-bottom border-dark");
    });
    $("div#links").each(function () {
        $(this).find("div.card-header").not(":eq(3)").addClass("py-2 border-bottom border-secondary");
        $(this).find("div.card-header:eq(3)").addClass("py-2 border-bottom border-dark");
    });
    $("div#blse div.card-header").addClass("py-2 border-bottom border-secondary text-center");
    /*$("div#blse").each(function () {
        $(this).find("div.card-header:eq(2)").addClass("pt-1 text-white border-bottom border-secondary");
    });*/
    //$("iframe#TwitchPlayer").parents("div.col-sm").addClass("mt-2 px-0")
    //$("iframe#TwitchPlayer").parents("div.col-sm").addClass("pt-2 pl-0 pr-2")
    //$("div#TwitchChat").addClass("col-sm-3 collapse width mt-2 pl-1 pr-0");
    /* $("button[data-target='#TwitchChat']").on("click", function () {
        $("iframe#TwitchPlayer").parents("div.col-sm").toggleClass("pl-0 pr-1");
    }); */
    $("div#TwitchStatus, div#KickStatus").each(function () {
        $(this).children("div.card-columns").addClass("mt-1");
        $(this).children("div.card").not(":last").addClass("mb-2");
        $(this).find("div.card-header").addClass("py-2 border-bottom border-secondary");
        $(this).find("ul.list-group").addClass("list-group-flush");
        //$(this).find("li.list-group-item").addClass("justify-content-between");
        //$(this).find("img").attr({ "src": function (index, src) { return src + '&style=plastic&logo=twitch&logoColor=white&logoSize=auto&labelColor=9146ff&cacheSeconds=60' }, "alt": "Twitch Status", "loading": "lazy" }).addClass("p-1").wrap($("<li></li>").addClass("list-group-item list-group-item-dark px-2 py-0 d-flex align-items-center justify-content-between"));
    });
    $("img.StreamBadge").each(function () {
        const Platform = $(this).data("platform");
        const Username = $(this).data("username");
        const Label = encodeURIComponent($(this).data("label"));
        switch (Platform) {
            case "Twitch":
                $(this).attr({ "src": "https://img.shields.io/twitch/status/" + Username + "?style=plastic&logo=twitch&logoColor=white&logoSize=auto&label=" + Label + "&labelColor=9146ff&cacheSeconds=60", "alt": "Twitch Status - " + Label, "loading": "lazy", "crossorigin": "anonymous" }).addClass("p-1").wrap($("<li></li>").addClass("list-group-item list-group-item-dark px-2 py-0 d-flex align-items-center justify-content-between"));
                $(this).filter("[alt$='Develique'],[alt$='MaryyCherryy'],[alt$='2bratty'],[alt$='littlebunny_x'],[alt$='Bunnymontv'],[alt$='Chess'],[alt$='DinaBelenkaya'],[alt$='PUBG_BATTLEGROUNDS'],[alt$='WorldofTanks'],[alt$='XboxOn'],[alt$='QoSpades'],[alt*='FerrariEsports'],[alt$='janifest'],[alt$='AuroraStarr'],[alt$='xoDee'],[alt$='Morgpie'],[alt$='peyzki'],[alt$='luvstruck'],[alt$='pinkwasabitv'],[alt$='KaliRoses'],[alt$='allieraa'],[alt$='EmmaLayne'],[alt$='EmjayPlayss'],[alt$='BuccataX'],[alt$='lauralux'],[alt$='ohKayBunny'],[alt$='xoAeriel'],[alt$='Hannesschan'],[alt$='TrishaHershberger'],[alt$='PulpFictionally'],[alt$='Taylor_Jevaux'],[alt$='juliaburch'],[alt$='thewildlatina'],[alt$='XTASIAEGO'],[alt$='XtasiaTV'],[alt$='Elina'],[alt$='xCandyLashes'],[alt$='kristinemaia'],[alt$='Mellooow_'],[alt$='GemmasTW'],[alt$='Linny'],[alt$='NicolePeachy'],[alt$='lucyya'],[alt$='xXLauoaNXx'],[alt$='di1araas'],[alt$='Ksenia_Noche'],[alt$='MistieSage']")/*.not("[src*='selina_imai']")*/.after($("<span></span>").addClass("badge badge-dark").append($("<i></i>").addClass("bi bi-fire text-warning")));
                break;
            default:
                $(this).attr({ "src": "https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fkick.com%2Fapi%2Fv1%2Fchannels%2F" + Username + "&query=%24.livestream.is_live&logo=kick&logoColor=white&logoSize=auto&label=Live%20Stream%20" + Label + "&labelColor=53fc19&color=red&cacheSeconds=60", "alt": "Kick Status for " + Label, "loading": "lazy", "crossorigin": "anonymous" }).addClass("p-1").wrap($("<li></li>").addClass("list-group-item list-group-item-dark px-2 py-0 d-flex align-items-center justify-content-between"));
        }
    }).parents("ul").each(function (i) {
        if ($("ul").eq(i).children("li").length > 8) {
            $("ul").eq(i).addClass("overflow-auto").height(200);
        } else {
            $("ul").eq(i).removeClass("overflow-auto").height("100%");
        }
    });
    //$("div[id^='Twitch']").addClass("collapse width");
    $("div.card-columns").parent("div.card-body").addClass("p-3");
    //$("div.card-columns").find("div.card-body").slice(12, 14).addClass("bg-white");
    $("div.card-body > div.mojtvprogram").addClass("mx-2 my-3 px-1");
    $("h6.card-subtitle").addClass("mb-1 text-muted ubuntu-bold-italic");
    $("div.card-footer").addClass("border-top border-secondary text-muted text-right");
    $("div#aw-ad-container").remove();
    $("h2,h6:gt(1)").addClass("mb-0");
    $("p.card-text").filter(":eq(2),:eq(5),:eq(8),:eq(11)").addClass("mb-0")
    $("h6").slice(20).addClass("text-wrap");
    $("h6 > i.bi").addClass("mr-1");
    $("hr").slice(0, -2).addClass("my-2");
    $("div.input-group").each(function () {
        $("div.input-group").filter(":lt(3), :lt(6):gt(3)").addClass("mb-2");
        $("div.input-group").filter(":eq(3), :gt(5)").addClass("mb-0");
        $("div.input-group").filter(":eq(0)").addClass("border rounded");
        $("div.input-group").slice(1, 3).addClass("mr-sm-2");
        $("div.input-group").slice(4, 6).addClass("input-group-sm");
    });
    $("ul.list-group.maintenance").each(function () {
        $(this).children("li.list-group-item").addClass("list-group-item-dark px-2 py-0 flex-fill");
        $(this).children("li.list-group-item").filter(":first-of-type,:last-of-type").addClass("rounded-0");
        $(this).find("img, object").addClass("d-block mx-auto");
    }).addClass("list-group-flush list-group-horizontal d-flex justify-content-around flex-wrap");
    $("ul.nav").each(function () {
        $(this).parent().removeClass("py-2").addClass("pt-1");
        $(this).children().removeClass("px-2 py-1");
    }).addClass("d-flex flex-nowrap text-nowrap").css({ "overflow-y": "hidden", "overflow-x": "auto" }).attr("role", "tablist");
    $("ul[id$='List'] a").each(function () {
        $(this).attr("aria-controls", $(this).attr("href").replace("#", ""));
    }).on("click", function (e) {
        e.preventDefault()
        $(this).tab("show");
    }).addClass("py-1").attr({ "data-toggle": "tab", "role": "tab" });
    $("div.tab-content").each(function (i) {
        $("div.tab-content").eq(i).attr("id", $("ul.nav.nav-tabs").eq(i).attr("id") + "Content");
    });
    $("div.tab-pane").each(function (i) {
        $("div.tab-pane").eq(i).attr({ "role": "tabpanel", "aria-labelledby": $("div.tab-pane").eq(i).attr("id") + "-tab" });
    });
    $("div.tab-pane").each(function () {
        $(this).filter("#NewAmountAfterPercetage").children("form").on("input", function () {
            var h = $("#novcaniIznos").val();
            var k = $("#procenatIznos").val();
            var procenat = k / 100;
            var procenat2 = h * procenat;

            switch ($("#vrstaObracunaNovca").val()) {
                case "umanjenjeIznos":
                    var rezUmanjenje = h - procenat2;
                    $("#NoviNovcaniIznos").text("Novi novčani iznos nakon umanjenja za " + k + "% iznosi " + rezUmanjenje.toFixed(2) + " KM.");
                    break;
                case "uvecanjeIznos":
                    var rezUvecanje = +h + +procenat2;
                    $("#NoviNovcaniIznos").text("Novi novčani iznos nakon uvećanja za " + k + "% iznosi " + rezUvecanje.toFixed(2) + " KM.");
            }
        });
        $(this).filter("#DividendCalculator").children("form").on("input", function () {
            var d = $("#cijenaJedneAkcije").val();
            var f = $("#brojAkcija").val();
            var g = d * f;

            $("#iznosDividende").text("Očekivana vrijednost dividende iznosi " + g.toFixed(2) + " KM.");
        });
        $(this).filter("#weatherforecast").append($("<a></a>").attr({ "href": "https://www.accuweather.com/sr/ba/doboj/35305/current-weather/35305", "hreflang": "sr-BA" }).addClass("aw-widget-legal"), $("<div></div>").attr({ "id": "awtd1504180838200", "data-locationkey": "35305", "data-unit": "c", "data-language": "sr", "data-useip": false, "data-uid": "awtd1504180838200", "data-editlocation": true }).addClass("aw-widget-36hour"), $("<script></script>").attr({ "src": "https://oap.accuweather.com/launch.js", "defer": "defer" }));
        $(this).filter("#livescore").append($("<script></script>").attr({ "type": "text/javascript", "src": "https://www.livescore.bz/api.livescore.0.1.js", "api": "livescore", "async": "async" }), $("<a></a>").attr({ "href": "https://www.livescore.bz/rs", "target": "_blank", "sport": "football(soccer)", "data-1": "today", "lang": "rs" }).text("Rezultati uživo"));
        $(this).filter("#PriceChart").append($("<iframe></iframe>").attr({ "src": "https://www.blberza.com/Export/Issuer/IssuerChart.aspx?Code=TLKM-R-A", "loading": "eager" }).width(200).height(110).addClass("d-block mx-auto border-0 overflow-hidden rounded-lg"));
        $(this).filter("#PriceChartLastMonth").append($("<iframe></iframe>").attr({ "src": "https://www.blberza.com/Export/Issuer/IssuerChartLastMonth.aspx?Code=TLKM-R-A", "loading": "lazy" }).width(200).height(110).addClass("d-block mx-auto border-0 overflow-hidden rounded-lg"));
    });
    $("div.list-group").each(function () {
        $("div.list-group").has("a").filter(":lt(4):gt(1),:lt(11):gt(5)").addClass("list-group-horizontal");
        $("div.list-group").has("a").filter(":eq(4),:eq(6),:gt(10)").addClass("list-group-flush");
        $("div.list-group").has("a").filter(":eq(6),:gt(10)").addClass("overflow-auto");
        $("div.list-group").filter(":eq(5),:eq(13)").addClass("p-2");
        $("div.list-group").has("a").slice(7, 11).addClass("p-1");
        $("div.list-group > div").slice(2).addClass("d-flex justify-content-center flex-wrap mx-auto");
        $("div.list-group a.list-group-item").not("[href^='https'],[href^='device_look']").filter(":lt(8):gt(1),:gt(11)").addClass("list-group-item-action");
        $("div.list-group a[href^='https'].list-group-item").filter(":lt(13):gt(4),:lt(47):gt(39),:gt(57)").addClass("list-group-item-action");
        $("div.list-group a.list-group-item").not("[href^='https']").eq(7).addClass("list-group-item-primary");
        $("div.list-group a[href^='https'].list-group-item").slice(4, 9).addClass("list-group-item-primary");
        $("div.list-group a.list-group-item").not("[href^='https']").filter(":lt(10):gt(7)").addClass("list-group-item-secondary");
        $("div.list-group a[href^='https'].list-group-item").slice(9, 11).addClass("list-group-item-secondary");
        $("div.list-group a.list-group-item").not("[href^='https']").eq(10).addClass("list-group-item-info");
        $("div.list-group a.list-group-item").not("[href^='https']").filter(":lt(7),:gt(10)").addClass("list-group-item-dark");
        $("div.list-group a[href^='https'].list-group-item").filter(":lt(4),:gt(12)").addClass("list-group-item-dark");
        $("div.list-group a.list-group-item").not("[href^='https']").eq(0).addClass("border-top-0");
        $("div.list-group a[href^='https'].list-group-item").eq(2).addClass("border-top-0");
        $("div.list-group:eq(6) a.list-group-item").filter(":first,:last").addClass("rounded-0");
    });
    $("li.navbar-item").each(function () {
        $("li.navbar-item").not(":eq(1)").children("a").slice(0, -1).addClass("nav-link").attr({ "href": "#", "role": "button", "data-toggle": "modal", "aria-pressed": true });
        $("li.navbar-item i").attr("role", "img").css("font-size", "x-large").addClass("d-inline-block align-middle");
        $("li.navbar-item span").addClass("pl-1 d-md-none");
    });
    $("div.dropdown-menu:gt(0) > a").not("[data-toggle='collapse']").addClass("dropdown-item").attr("role", "button");
    //$("a").filter("#time_is_link,.list-group-item,.navbar-brand:eq(1),.btn").not("[data-toggle='collapse'],[data-toggle='modal'],.nav-link").attr("target", "_blank");
    $("a[href^='https']").each(function () {
        $("a[href^='https']").filter("#time_is_link, .card-link").addClass("text-light");
        $("a[href^='https'].btn").filter(":lt(7):gt(4),:eq(10),:gt(11)").addClass("btn-primary");
        $("a[href^='https'].btn").filter(":lt(5),:eq(11)").addClass("btn-secondary");
        $("a[href^='https'].btn").eq(9).addClass("btn-success");
        $("a[href^='https'].btn").eq(7).addClass("btn-light");
        $("a[href^='https'].btn").eq(8).addClass("btn-dark");
        $("a[href^='https'].btn").slice(10, 12).addClass("m-1");
    }).attr("target", "_blank");
    $("a[href^='device_look']").addClass("list-group-item-action").attr({ "role": "button", "target": "_blank" });
    $("a[href$='Carousel.html']").addClass("dropdown-item").attr("target", "_blank");
    //$("a.card-link").addClass("text-light");
    $("a[href='#google'],div#google").css("background-color", "#4285f4");
    $("a[href='#microsoft'],div#microsoft").css("background-color", "#5e5e5e");
    $("a[href*='sr']").not(":lt(15):gt(8), :eq(30), :eq(33)").attr("hreflang", "sr");
    $("a[href*='hr']").not(".btn,.list-group-item").attr("hreflang", "hr");
    $("a[data-toggle='collapse']").each(function () {
        $(this).attr({ "aria-controls": $(this).attr("href").replace("#", ""), "aria-expanded": false });
    });
    $("form#oldform").attr({ "action": $("select#dictionary-selector").val(), "method": "get", "name": "oldform", "target": "_blank" }).addClass("d-inline-block").css("margin", "46px 0 0 10px");
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
        $(this).wrap($("<div></div>").addClass("table-responsive"));
        //$(this).find("td").has("br:eq(12)").addClass("align-middle");
        //$(this).find("td").has("br").siblings("td").not(":eq(1),:eq(5),:eq(7),:eq(11),:eq(13),:eq(15),:lt(21):gt(18),:eq(24),:eq(27),:eq(29),:lt(33):gt(30),:eq(35),:eq(46)").addClass("align-middle");
        //$(this).find("th").has("br").siblings("th").addClass("align-middle");
        //$(this).find("td").has("br").siblings("td").addClass("align-middle");
        //$(this).find("img[src*='logo']").attr("src", function (index, src) { return src + '&logoColor=white' });
        //$(this).find("img[src*='logo']").not("[src*='logo=nodedotjs'],[src*='logo=vlcmediaplayer'],[src*='logo=epicgames'],[src*='logo=ubisoft'],[src*='logo=bitdefender']").attr("src", function (index, src) { return src + '&logoSize=auto' });
    });
    $("th").each(function (i) {
        if ($("th").eq(i).children("img").length > 1) {
            $("th").eq(i).children("img").not(":last").after("<br>");
            $("th").eq(i).has("br").siblings("th").addClass("align-middle");
        }
    });
    $("td").each(function (i) {
        if ($("td").eq(i).find("img").length > 1) {
            //$("td").eq(i).find("img").parent("a").not(":last").after("<br>");
            $("td").eq(i).find("img").parent("a").not(":last").after("<br>");
            $("td").eq(i).has("br").siblings("td").not(":empty").addClass("align-middle");
        }
    });
    //document.cookie = "lang=sr; max-age=604800";
});  