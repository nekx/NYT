// ==UserScript==
// @name        Advertise this you assholes
// @namespace   Violentmonkey Scripts
// @match       https://www.nytimes.com*
// @grant       none
// @version     1.0
// @author      -
// @description 1/31/2022, 4:35:55 PM
// ==/UserScript==

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    removeStupidAdvertisingShit();
  }
}

function removeStupidAdvertisingShit(){
  // remove overlay containers
  document.getElementById('gateway-content').remove();
  document.getElementById('app').firstChild.firstChild.childNodes[2].remove();
  
  // enable scroll
  document.getElementById('app').firstChild.childNodes[0].style.overflow = "scroll";
}
