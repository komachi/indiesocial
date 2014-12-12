# IndieSocial
JavaScript library which let you use social share links without foreign scripts. Control all your data, protect your privacy.
* Without foreign scripts.
* Protect privacy.
* Easy customizable with CSS and JS.
* Works perfectly with [Fontello](http://fontello.com/).
* Released under CC0 License.
* Near 1 KB minified and gzipped.

## How to use
1. Load indiesocial.js.
2. Place element with id="indiesocial-init" where you want see buttons.
3. Configure it.

You can also install IndieSocial with [bower](http://bower.io).

    bower install indiesocial

## Parameters
1. Enable social share links: data-indieSocialServices. Set to all if you want use all services.
2. Add Fontello icons to share links: data-addFontelloIcon Possible values: true or false. Default: false.
3. Add text to share links: data-addText Possible values: true or false. Default: false.
4. Set URL for share: data-URL. Default: window.location.
5. Set title: data-title. Not work with Google+, use [OpenGraph](http://ogp.me/).

## Supported services
1. Facebook
2. Twitter
3. VK
4. Odnoklassniki
5. Google+
6. FriendFeed
7. LinkedIn
8. Tumblr
9. Blogger
10. Diigo
11. Reddit
12. Delicious
13. Digg
14. StumbleUpon
15. Pinterest
16. Evernote
17. Instapaper
18. Hacker News
