function addElements() {
    var a = document.getElementById("hosting");
    var m = new Date().getMonth() + 1;

    if (m == 12 || m == 1) {
        a.src="img/dobojcaffe.png";
        a.alt="Web hosting by DobojCaffe.com";
        a.className="img-fluid mx-auto d-block";
    } else {
        a.src="img/docaffe.jpg";
        a.alt="Web hosting by DobojCaffe.com";
        a.className="img-fluid mx-auto d-block";
    }
}
