chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (!changeInfo.status) return;
  let url = tab.url;
  if (!~url.indexOf('www.wantedly.com')) return;
  if (!~url.indexOf('https://www.wantedly.com/projects')) return;
  if (~url.indexOf('type=mixed')) {
    url = url.replace('type=mixed', 'type=recent');
    chrome.tabs.update(tabId, { url: url });
  } else if (url === 'https://www.wantedly.com/projects') {
    chrome.tabs.update(tabId, { url: url + '?type=recent' });
  }
  chrome.scripting.insertCSS(
    {
      target: { tabId: tabId },
      files: ['content.css'],
    },
    () => {
      console.log('insert css');
    }
  );
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      files: ['script.js'],
    },
    () => {
      console.log('insert script');
    }
  );
});
