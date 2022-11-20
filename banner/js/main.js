function addElements() {
    var imgHost = $("img#hosting");
    const month = new Date().getMonth() + 1;

    if (month == 12 || month == 1) {
        imgHost.attr({"src":"img/dobojcaffe.png", "alt":"Web hosting by DobojCaffe.com"});
        imgHost.addClass("img-fluid mx-auto d-block");
    } else {
        imgHost.attr({"src":"img/docaffe.jpg", "alt":"Web hosting by DobojCaffe.com"});
        imgHost.addClass("img-fluid mx-auto d-block");
    }
}
