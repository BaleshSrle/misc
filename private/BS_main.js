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
$("head").prepend("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css' crossorigin='anonymous' media='all'>");

var pathname = location.pathname;

if (pathname == "private/kontrolna_tabla.html") {
    $("head").prepend("<script src='https://cdn.jsdelivr.net/gh/BaleshSrle/misc@main/private/BS_CP_main.min.js' async onerror='javascript:location.reload()'></script>");
} else {
    $("head").prepend("<script src='https://cdn.jsdelivr.net/gh/BaleshSrle/misc@main/private/BS_site.min.js' async></script>");
}

function reloadPage() {
    location.reload();
}