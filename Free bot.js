// ==UserScript==
// @name         Spammmer Key2
// @namespace    Dipper. main.
// @version      0.1.0
// @description  Plays MIDI files!
// @author       Wolfy.
// @include      /^https?://www\.multiplayerpiano\.com*/
// @include      /^https?://multiplayerpiano\.(com|net)*/
// @include      /^https?://mppclone\.com*/
// @match        https://mppclone.com/The%20Roleplay%20Room
// @match        https://mppclone.com/%E2%8B%88
// @match        https://www.mppclone.com/
// @match        https://mppclone.com/
// @match        https://multiplayerpiano.com/
// @match        https://app.multiplayerpiano.com/
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYhNSu39BHaShHIaQSBqGdOk2lAty_0EUX4koq23_bIrAelxP:https://t1.rbxcdn.com/10a1f86b96b7d5ba053dcfaf20f34eef&usqp=CAU
// @grant        GM_info
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @resource     MIDIPlayerJS https://raw.githubusercontent.com/grimmdude/MidiPlayerJS/master/browser/midiplayer.js
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';

"Test"

var isOwner = MPP.client.isOwner();


MPP.client.on('a', function(msg) {
  if (msg.a === ';help') { //if (msg.a === 'Prefix Here') {
    MPP.chat.send("Help: Hello here are my commands: | ;test | ;ps (Piano Spam) | ;discord ");
  }

//Bot Owner
    if (msg.a === ';botowner') {
    MPP.chat.send("Bot Owner: (Put your name here) ");
    }

  //for testing purposes

  if (msg.a === ';test') {
    MPP.chat.send('BOT: Test Successful! This bot is working.');
  }

//imformation.

    if (msg.a === ';discord') {
    MPP.chat.send('My discord: Slime Wolf#6454');
  }

  if (msg.a === ';js') {
    MPP.chat.send('Here is my bot code: https://github.com/nickdason33-lang/Free-MPP-script/blob/main/Free%20bot.js');
  }

//Hello, Please contact my discord for more support on my bot!^^

    if (msg.a === ';ps') {
for(var i = 8; i--;) setTimeout(()=>Object.keys(MPP.piano.keys).forEach((a, b) => setTimeout(MPP.press, b * 10, a, 2)), i * 10);
MPP.chat.send(';ps');

  }

});
})();
