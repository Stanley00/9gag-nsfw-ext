// A generic onclick callback function.
function genericOnClick(info, tab) {
//  var s = tab.url
  var s = info.linkUrl
  var f = s.substr(s.lastIndexOf('/') + 1)
  var n = "http://d24w6bsrhbeh9d.cloudfront.net/photo/" + f + "_700b.jpg"
  chrome.tabs.create({url: n})
}

// Create one test item for each context type.
var id = chrome.contextMenus.create({"title": "9GAG NSFW", "contexts":["link"],"onclick": genericOnClick});
