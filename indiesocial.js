/* IndieSocial
JavaScript library which provide social sharing links without foreign scripts
License: CC0 1.0, https://creativecommons.org/publicdomain/zero/1.0/ 
Repo: https://github.com/komachi/indiesocial */
var services = {
  'facebook': {
    'URL': 'https://facebook.com/sharer.php?u=',
    'title' : '&t=',
    'fontello': 'facebook',
    'name' : 'Facebook'
  },
  'twitter' : {
    'URL': 'https://twitter.com/share?url=',
    'title': '&text=',
    'fontello': 'twitter',
    'name' : 'Twitter'
  },
  'vk' : {
    'URL': 'http://vk.com/share.php?url=',
    'fontello': 'vkontakte-rect',
    'title' : '&title=',
    'name' : 'VK'
  },
  'googleplus' : {
    'URL': 'https://plus.google.com/share?url=',
    'fontello': 'googleplus-rect',
    'name' : 'Google+'
  },
  'odnoklassniki' : {
    'URL': 'http://odnoklassniki.ru/dk?st.cmd=addShare&st._surl=',
    'title' : '&title=',
    'fontello': 'odnoklassniki',
    'name' : 'Одноклассники'
  },
  'friendfeed' : {
    'URL': 'http://friendfeed.com/?url=',
    'title' : '&title=',
    'fontello': 'friendfeed',
    'name' : 'FriendFeed'
  },
  'linkedin' : {
    'URL': 'http://linkedin.com/shareArticle?mini=true&url=',
    'title' : '&title=',
    'fontello': 'linkedin',
    'name' : 'LinkedIn'
  },
  'tumblr' : {
    'URL': 'http://tumblr.com/share/link?url=',
    'title' : '&name=',
    'fontello': 'tumblr',
    'name' : 'Tumblr'
  },
  'blogger' : {
    'URL': 'http://blogger.com/blog_this.pyra?u=',
    'title' : '&n=',
    'fontello': 'blogger',
    'name' : 'Blogger'
  },
  'diigo' : {
    'URL': 'https://www.diigo.com/post?url=',
    'title' : '&title=',
    'fontello': 'diigo',
    'name' : 'Diigo'
  },
  'reddit' : {
    'URL': 'http://reddit.com/submit?url=',
    'title' : '&title=',
    'fontello': 'reddit',
    'name' : 'Reddit'
  },
  'delicious' : {
    'URL': 'http://delicious.com/post/?url=',
    'title' : '&title=',
    'fontello': 'delicious',
    'name' : 'Delicious'
  },
  'digg' : {
    'URL': 'http://digg.com/submit?phase=2&url=',
    'title' : '&title=',
    'fontello': 'digg',
    'name' : 'Digg'
  },
  'stumbleupon' : {
    'URL': 'http://www.stumbleupon.com/submit?url=',
    'title' : '&title=',
    'fontello': 'stumbleupon',
    'name' : 'StumbleUpon'
  },
  'pinterest' : {
    'URL': 'http://pinterest.com/pin/create/link/?url=',
    'title' : '&description=',
    'fontello': 'pinterest',
    'name' : 'Pinterest'
  },
  'evernote' : {
    'URL': 'http://www.evernote.com/clip.action?url=',
    'title' : '&title=',
    'fontello': 'evernote',
    'name' : 'Evernote'
  },
  'instapaper' : {
    'URL': 'http://www.instapaper.com/edit?url=',
    'title' : '&title=',
    'fontello': 'instapaper',
    'name' : 'Instapaper'
  },
  'hackernews' : {
    'URL': 'http://news.ycombinator.com/submitlink?u=',
    'title' : '&t=',
    'fontello': 'hackernews',
    'name' : 'Hacker News'
  }
};

if (window.addEventListener) {
  window.addEventListener("load", indieSocial, false);
} else if(window.attachEvent) {
  window.attachEvent("onload", indieSocial);
} else {
  document.addEventListener("load", indieSocial, false);
}

function indieSocial() {

  var init = document.getElementById("indiesocial-init");
  if (!init) { // if no container was created kill execution
    return; 
  }

  var initServices = init.getAttribute("data-indieSocialServices");
  if (!initServices) { // no initServices attribute was created, kill
    return;
  } else {
    var seperator = "";
    if (initServices.indexOf(", ") !== -1) {
      seperator = ", ";
    } else if (initServices.indexOf(",") !== -1) {
      seperator = ",";
    } else {
      seperator = " ";
    }
    initServices = initServices.split(seperator);
  }

  var dataURL = init.getAttribute("data-URL");
  var title = init.getAttribute("data-title");
  var fontelloIcon = init.getAttribute("data-addFontelloIcon");
  var addText = init.getAttribute("data-addText");

  if (initServices[0] === "all") {
    for (var serv in services) {
      createElementService(serv);
    }
  } else {
    for (var i = 0, len = initServices.length; i < len; i++) {
      var serv = initServices[i];
      if (serv in services) {
        createElementService(serv);
      }
    }
  }

  function createElementService(service) {
    var aElement = document.createElement("a");

    if (dataURL) {
      var URL = services[service]['URL'] + dataURL;
    } else {
      var URL = services[service]['URL'] + window.location;
    }

    var titlelink = "";
    if (services[service]['title'] !== undefined && title) {
      var titlelink = services[service]['title'] + title;
    }

    aElement.setAttribute("href", encodeURI(URL + titlelink));
    aElement.setAttribute("class", "indiesocial-" + service);
    aElement.setAttribute("title", services[service]['name']);
    aElement.setAttribute("target", "_blank");

    var innerValue = "";
    if (fontelloIcon == "true") {
      var innerValue = innerValue + '<i class="icon-' + services[service]['fontello'] + '"></i>';
    }
    if (addText == "true") {
      var innerValue = innerValue + services[service]['name'];
    }

    aElement.innerHTML = innerValue;
    init.appendChild(aElement);
  }
}
