$(document).ready(function () {
    $("body").css("background", "#f1f1f1");
    $("form").attr("method", "post").css({ "text-align": "center", "padding": "16px 0px" });
    $("select#url").on("click", function () {
        $("iframe#urlOutput").attr("src", $("#url").val());
    });
    $("div.laptop").css({ "-webkit-transform-origin": "0 0", "transform-origin": "0 0", "-webkit-transform": "scale(.6) translate(-50%)", "transform": "scale(.6) translate(-50%)", "left": "50%", "position": "absolute", "width": "1366px", "height": "800px", "border-width": "24px 24px 80px", "border-radius": "6px" });
    $("div.laptop").children().css({ "width": "1366px", "height": "800px", "overflow": "hidden", "border": "0 none" });
    $("div.smartphone").css({ "width": "360px", "height": "640px" });
    $("div.smartphone").children().css({ "width": "360px", "height": "640px" });
    $("div.tablet").css({ "width": "768px", "height": "1024px" });
    $("div.tablet").children().css({ "width": "768px", "height": "1024px", "margin": "-1px" });
    $("div").filter(".laptop,.smartphone,.tablet").css({ "border-style": "solid", "border-color": "black" });
    $("div").filter(".laptop,.smartphone,.tablet").children().css("background", "white");
    $("div").filter(".smartphone,div.tablet").css({ "position": "relative", "margin": "auto", "border-width": "60px 16px", "border-radius": "36px" });
    $("iframe").css({ "width": "100%", "height": "100%", "border": "0 none" });
});