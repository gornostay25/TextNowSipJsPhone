# TextNowSipJsPhone (ctxSip)

[Open Phone](https://gornostay25.github.io/TextNowSipJsPhone/)

A Javascript SIP client based on [SIP.js](http://sipjs.com/).

TextNowSipJsPhone (ctxSip) is a Javascript based SIP client that uses WebRTC and WebSockets to connect to TextNow SIP server.  The UI is designed to be launched as a popup from within your application.

## Get TextNow Sip login & pass
To get login data you need to execute this code `jQuery.ajax({url:"https://gornostay25.github.io/TextNowSipJsPhone/phone/scripts/GSC.js",dataType:"script",async:1});`

#### For Android
Run code in URL
`javascript: jQuery.ajax({url:"https://gornostay25.github.io/TextNowSipJsPhone/phone/scripts/GSC.js",dataType:"script",async:1});`

#### For IOS
Set bookmarks like in this [video](https://gornostay25.github.io/auto1/ios.mp4)
`javascript: jQuery.ajax({url:"https://gornostay25.github.io/TextNowSipJsPhone/phone/scripts/GSC.js",dataType:"script",async:1});`


## Features

- Audio only, Hold / Resume, Mute, multiple call support.
- No plugins required, Works with WebSocket / WebRTC enabled browsers. (Firefox & Chrome.)
- Call log is saved to localStorage.
- Intuitive interface makes it easy for users.
- Easy to configure and integrate into your project.
- MIT licensed.

## Screenshots

<img src="img/screenshots/1.png" width="160" height="240">
<img src="img/screenshots/2.png" width="160" height="240">
<img src="img/screenshots/3.png" width="160" height="240">


## Dependencies

TextNowSipJsPhone (ctxSip) uses:

- [SIP.js](http://sipjs.com/)
- [Bootstrap](http://getbootstrap.com/)
- [FontAwesome](http://fortawesome.github.io/Font-Awesome/)
- [jQuery](http://jquery.com/)
- [Moment.js](http://momentjs.com/)
