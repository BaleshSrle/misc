$(document).ready(function () {
    $("body").css("background", "#f1f1f1");
    $("form").attr("method", "post").css({ "text-align": "center", "padding": "16px 0px" });
    $("select#url").on("click", function () {
        $("iframe#urlOutput").attr("src", $("#url").val());
    });
    $("div.laptop").css({ "-webkit-transform-origin": "0 0", "transform-origin": "0 0", "-webkit-transform": "scale(.6) translate(-50%)", "transform": "scale(.6) translate(-50%)", "left": "50%", "position": "absolute", "border-width": "24px 24px 80px", "border-radius": "6px" }).width(1366).height(800);
    $("div.laptop").children().css({ "overflow": "hidden", "border": "0 none" }).width(1366).height(800);
    $("div.smartphone").width(360).height(640);
    $("div.smartphone").children().width(360).height(640);
    $("div.tablet").width(768).height(1024);
    $("div.tablet").children().css("margin", "-1px").width(768).height(1024);
    $("div").filter(".laptop,.smartphone,.tablet").css({ "border-style": "solid", "border-color": "black" });
    $("div").filter(".laptop,.smartphone,.tablet").children().css("background", "white");
    $("div").filter(".smartphone,div.tablet").css({ "position": "relative", "margin": "auto", "border-width": "60px 16px", "border-radius": "36px" });
    $("iframe").css("border", "0 none").width("100%").height("100%");
});