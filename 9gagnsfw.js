// A generic onclick callback function.
function genericOnClick(info, tab) {
//  var s = tab.url
  var s = info.linkUrl
  if (s.indexOf("9gag.com")>-1)
  {
    var f = s.substr(s.lastIndexOf('/')).split(/[/?]/)[1]
    var n = "http://img-9gag-ftw.9cache.com/photo/" + f + "_700b.jpg"
    var m = "http://img-9gag-ftw.9cache.com/photo/" + f + "_460sv.mp4"
    chrome.tabs.create({url: n})
    chrome.tabs.create({url: m})
  }
}

// Create one test item for each context type.
var id = chrome.contextMenus.create({"title": "9GAG NSFW", "contexts":["link"],"onclick": genericOnClick});
