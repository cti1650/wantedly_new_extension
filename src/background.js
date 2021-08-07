chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  let url = tab.url;
  if (~url.indexOf('https://www.wantedly.com/projects')) {
    if (~url.indexOf('type=mixed')) {
      url = url.replace('type=mixed', 'type=recent');
      chrome.tabs.update(tabId, { url: url });
    } else if (url === 'https://www.wantedly.com/projects') {
      chrome.tabs.update(tabId, { url: url + '?type=recent' });
    }
  }
});
