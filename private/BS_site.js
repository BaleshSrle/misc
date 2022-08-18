var siteURL = location.origin;
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();

$("head").prepend("<base href="+siteURL+">");
$("head").append("<meta name='copyright' content='DobojCaffe.com & Servis raДЌunara &quot;BALEЕ EVIД†&quot; &copy;"+year+"'>");
$("head").append("<meta name='GENERATOR' content='Visual Studio Code 1.70.2'>");
$("#godina").text(year);

var imgHost = $("img#hosting");

if (month == 12 || month == 1) {
    imgHost.attr("src", ""+siteURL+"/images/dobojcaffe.png");
} else {
    imgHost.attr("src", ""+siteURL+"/images/docaffe.jpg");
}

var cubeshowvar1;
var cubeshowvar2;
var cubeshowvar3;

jQuery(function($){
    cubeshowvar1 = new jkcubeslideshow({
        id: 'microsoft',
        dimensions: [180, 84],
        pause: 3000,
        images: [
            ['images/MSE.png', 'https://support.microsoft.com/sr-latn-rs/help/14210/security-essentials-download'],
            ['images/win_wallpaper.png', 'https://support.microsoft.com/sr-latn-rs/help/14165/windows-personalize-your-pc'],
            ['images/vscode.png', 'https://code.visualstudio.com']
        ]
    });

    cubeshowvar2 = new jkcubeslideshow({
        id: 'internet',
        dimensions: [180, 180],
        pause: 2800,
        images: [
            ['images/IDL_Shield_badge.png', 'https://internetdefenseleague.org'],
            ['images/World_IPv6_launch.png', 'https://www.worldipv6launch.org/'],
            ['https://tools.ip2location.com/200x200.png', 'https://www.ip2location.com/free/widgets']
        ]
    });

    cubeshowvar3 = new jkcubeslideshow({
        id: 'linux',
        dimensions: [180, 180],
        pause: 2900,
        images: [
            ['https://assets.ubuntu.com/v1/61f4fb91-release-widgetv5.jpg', 'http://ubunt.eu/zesty'],
            ['images/smalllxledark.png', 'https://lxle.net/'],
            ['images/serbian_debian.png', 'https://www.debian-srbija.iz.rs/']
        ]
    });

/*     $("#rss-feeds").rss(
        "https://certrs.org/feed/",
        {
            limit: 5,
            ssl: true,
            support: false,
            layoutTemplate: '<ul class="list-group list-group-flush">{entries}</ul>',
            entryTemplate: '<li class="list-group-item small"><a href="{url}" target="_blank">{title}</a></li>'
        }
    );*/
})