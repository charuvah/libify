function logTabs(tabs) {
    let tab = tabs[0]; // Safe to assume there will only be one result
    var url = tab.url;
    var regexp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/g;
    url = url.replace('https', 'http');
    var urlParts = regexp.exec(url);
    url = url.replace(urlParts[3], urlParts[3]+'.gate.lib.buffalo.edu');
    browser.tabs.create({
        url: url
    });
}

function libify() {
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);
}
  
browser.browserAction.onClicked.addListener(libify);