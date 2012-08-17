/* IndieSocial
An JavaScript library for making social sharing links without foreign scripts
License: New BSD License, http://opensource.org/licenses/BSD-3-Clause 
Repo: https://github.com/komachi/indiesocial */
function getInnerValue(icon,title) {
    var innerValue = "";
    if (document.getElementById("indiesocial-init").getAttribute("data-addFontelloIcon") == "true") {
        var innerValue = innerValue + '<i class="' + icon + '"></i>';
    }
    if (document.getElementById("indiesocial-init").getAttribute("data-addText") == "true") {
        var innerValue = innerValue + title;
    }
    return innerValue;
}

function getURL() {
    if (document.getElementById("indiesocial-init").getAttribute("data-URL")) {
        return document.getElementById("indiesocial-init").getAttribute("data-URL");
    }
    else {
        return window.location;
    }
}

function indieSocialFacebook() {
    var facebook = document.createElement("a");
    document.getElementById("indiesocial-init").appendChild(facebook);
    facebook.setAttribute("href", "https://www.facebook.com/sharer.php?u=" + getURL());
    facebook.setAttribute("class", "indiesocial-facebook");
    facebook.setAttribute("title", "Facebook");
    facebook.innerHTML = getInnerValue("icon-facebook","Facebook");
}

function indieSocialTwitter() {
    var twitter = document.createElement("a");
    document.getElementById("indiesocial-init").appendChild(twitter);
    twitter.setAttribute("href", "https://twitter.com/share?url=" + getURL());
    twitter.setAttribute("class", "indiesocial-twitter");
    twitter.setAttribute("title", "Twitter");
    twitter.innerHTML = getInnerValue("icon-twitter","Twitter");
}

function indieSocialVK() {
    var vk = document.createElement("a");
    document.getElementById("indiesocial-init").appendChild(vk);
    vk.setAttribute("href", "http://vk.com/share.php?url=" + getURL());
    vk.setAttribute("class", "indiesocial-vk");
    vk.setAttribute("title", "VK");
    vk.innerHTML = getInnerValue("icon-vkontakte-rect","VK");
}

function indieSocialOdnoklassniki() {
    var odnoklassniki = document.createElement("a");
    document.getElementById("indiesocial-init").appendChild(odnoklassniki);
    odnoklassniki.setAttribute("href", "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=" + getURL());
    odnoklassniki.setAttribute("class", "indiesocial-odnoklassniki");
    odnoklassniki.setAttribute("title", "Одноклассники");
    odnoklassniki.innerHTML = getInnerValue("icon-odnoklassniki","Одноклассники");
}

function indieSocialGooglePlus() {
    var googleplus = document.createElement("a");
    document.getElementById("indiesocial-init").appendChild(googleplus);
    googleplus.setAttribute("href", "https://plus.google.com/share?url=" + getURL());
    googleplus.setAttribute("class", "indiesocial-googleplus");
    googleplus.setAttribute("title", "Google+");
    googleplus.innerHTML = getInnerValue("icon-googleplus-rect","Google+");
}

function indieSocialYaRu() {
    var yaru = document.createElement("a");
    document.getElementById("indiesocial-init").appendChild(yaru);
    yaru.setAttribute("href", "http://my.ya.ru/posts_add_link.xml?URL=" + getURL());
    yaru.setAttribute("class", "indiesocial-yaru");
    yaru.setAttribute("title", "Я.ру");
    yaru.innerHTML = getInnerValue("icon-yandex","Я.ру");
}

function indieSocialInit() {
    var socialServices = document.getElementById("indiesocial-init").getAttribute("data-indieSocialServices");
    if (socialServices.indexOf("facebook") != "-1") {
        indieSocialFacebook();
    }
    if (socialServices.indexOf("twitter") != "-1") {
        indieSocialTwitter();
    }
    if (socialServices.indexOf("vk") != "-1") {
        indieSocialVK();
    }
    if (socialServices.indexOf("odnoklassniki") != "-1") {
        indieSocialOdnoklassniki();
    }
    if (socialServices.indexOf("googleplus") != "-1") {
        indieSocialGooglePlus();
    }
    if (socialServices.indexOf("yaru") != "-1") {
        indieSocialYaRu();
    }
}

window.onload = indieSocialInit();
