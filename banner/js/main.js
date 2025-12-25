$(document).ready(() => {
    $("link").on("error", function() {
        $(this).attr("src", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.csss");
    });
    $("script:eq(1)").on("error", function() {
        $(this).attr("src", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.bundle.min.js");
    });
    $("script:eq(2)").on("error", function() {
        $(this).attr("src", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js");
    });
    $("body").addClass("bg-dark text-white");
    $("main").addClass("container");
    $("div.card").addClass("bg-dark w-25 mx-auto mt-5 border-secondary");
    $("div.card-header").addClass("border-bottom border-secondary").children("h6").addClass("mb-0");
    (moment().isBetween("2025-12-02", "2026-01-16")) ? $("img#hosting").attr("src","img/dobojcaffe.png") : $("img#hosting").attr("src","img/docaffe.jpg");
    $("img#hosting").addClass("img-fluid d-block mx-auto").attr({"alt": "Web hosting by DobojCaffe.com", "loading": "lazy"}).wrap($("<a></a>").attr({"href": "https://www.dobojcaffe.com", "hreflang": "sr-YU", "target": "_blank", "rel": "alternate"}));
    document.normalize();
});