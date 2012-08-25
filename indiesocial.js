/* IndieSocial
An JavaScript library for making social sharing links without foreign scripts
License: New BSD License, http://opensource.org/licenses/BSD-3-Clause 
Repo: https://github.com/komachi/indiesocial */
var indiesocialServices = {
    'facebook': {
        'shareURL': 'https://www.facebook.com/sharer.php?u=',
        'title' : '&t=',
        'fontello': 'icon-facebook',
        'name' : 'Facebook',
    },
    'twitter' : {
        'shareURL': 'https://twitter.com/share?url=',
        'title': '&text=',
        'fontello': 'icon-twitter',
        'name' : 'Twitter',
    },
    'vk' : {
        'shareURL': 'http://vk.com/share.php?url=',
        'fontello': 'icon-vkontakte-rect',
        'title' : '&title=',
        'name' : 'VK',
    },
    'googleplus' : {
        'shareURL': 'https://plus.google.com/share?url=',
        'fontello': 'icon-googleplus-rect',
        'name' : 'Google+',
    },
    'odnoklassniki' : {
        'shareURL': 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=',
        'title' : '&title=',
        'fontello': 'icon-odnoklassniki',
        'name' : 'Одноклассники',
    },
    'yaru' : {
        'shareURL': 'http://my.ya.ru/posts_add_link.xml?URL=',
        'title' : '&title=',
        'fontello': 'icon-yandex',
        'name' : 'Я.ру',
    },
    'friendfeed' : {
        'shareURL': 'http://friendfeed.com/?url=',
        'title' : '&title=',
        'fontello': 'icon-friendfeed',
        'name' : 'FriendFeed',
    },
    'linkedin' : {
        'shareURL': 'http://www.linkedin.com/shareArticle?mini=true&url=',
        'title' : '&title=',
        'fontello': 'icon-linkedin',
        'name' : 'LinkedIn',
    },
    'tumblr' : {
        'shareURL': 'http://www.tumblr.com/share/link?url=',
        'title' : '&name=',
        'fontello': 'icon-tumblr',
        'name' : 'Tumblr',
    },
    'blogger' : {
        'shareURL': 'http://www.blogger.com/blog_this.pyra?u=',
        'title' : '&n=',
        'fontello': 'icon-blogger',
        'name' : 'Blogger',
    },
};
function indiesocialMakeLink(service) {
    var init = document.getElementById("indiesocial-init");
    var aElement = document.createElement("a");
    init.appendChild(aElement);
    var titlelink = "";
    if (init.getAttribute("data-URL")) {
        var URL = indiesocialServices[service]['shareURL'] + init.getAttribute("data-URL");
    }
    else {
        var URL = indiesocialServices[service]['shareURL'] + window.location;
    }
    if (indiesocialServices[service]['title'] !== undefined && init.getAttribute("data-title")) {
         var titlelink = indiesocialServices[service]['title'] + init.getAttribute("data-title");
    }
    aElement.setAttribute("href", encodeURI(URL + titlelink));
    aElement.setAttribute("class", "indiesocial-" + service);
    aElement.setAttribute("title", indiesocialServices[service]['name']);
    aElement.setAttribute("target", "_blank");
    var innerValue = "";
    if (init.getAttribute("data-addFontelloIcon") == "true") {
        var innerValue = innerValue + '<i class="' + indiesocialServices[service]['fontello'] + '"></i>';
    }
    if (init.getAttribute("data-addText") == "true") {
        var innerValue = innerValue + indiesocialServices[service]['name'];
    }
    aElement.innerHTML = innerValue;
};
function indieSocialInit() {
    for (var value in indiesocialServices) {
        if (document.getElementById("indiesocial-init").getAttribute("data-indieSocialServices").indexOf(value) != '-1') {
            indiesocialMakeLink(value);
        }
    }
};
window.onload = indieSocialInit();
