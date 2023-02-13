console.info("Glavna skripta je pokrenuta.");
$("html").attr("lang", navigator.language);
$("head").append("<meta name='author' content='Baleševi&#263; Sr&#273;an, srdjan.b%40teol.net'>");
$("head").append("<meta name='designer' content='Servis računara &quot;BALEŠEVIĆ&quot;'>");
$("head").append("<meta name='reply-to' content='baleshevichcompany%40dobojcaffe.com'>");
$("head").append("<meta name='language' content='sr'>");
$("head").append("<meta name='host' content='www.dobojcaffe.com'>");
$("head").append("<meta name='MSThemeCompatible' content='yes'>");
$("head").append("<meta name='geo.region' content='BA-SRP'>");
$("head").append("<meta name='geo.placename' content='Добој'>");
$("head").append("<meta name='twitter:creator' content='@BaleshSrle'>");
$("head").append("<meta name='twitter:site' content='@BaleshSrle'>");
$("head").append("<meta http-equiv='cleartype' content='on'>");
$("head").append("<meta http-equiv='x-dns-prefetch-control' content='on'>");
$("head").append("<meta http-equiv='Cache-control' content='no-cache'>");
$("head").append("<meta http-equiv='Pragma' content='no-cache'>");
$("head").append("<meta http-equiv='Expires' content='-1'>");
$("head").prepend("<link rel='preconnect' href='https://fonts.googleapis.com'>");
$("head").prepend("<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>");
$("head").prepend("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' media='all'>");
$("head").prepend("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css' crossorigin='anonymous' media='all'>");
$("head").append("<link rel='icon' href='https://cdn.jsdelivr.net/gh/BaleshSrle/ICBL_Project_Assignment_01@main/images/logo.png'>");
$("body").css("font-family", "Ubuntu");

function reloadPage() {
    location.reload();
}

function backPage() {
    history.back();
}
