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
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   console.log('[' + changeInfo.status + '] ' + tab.title);
//   let url = tab.url;
//   if (!~url.indexOf('www.wantedly.com')) return;
//   if (changeInfo.status) return;
//   chrome.scripting.insertCSS(
//     {
//       target: { tabId: tabId },
//       files: ['content.css'],
//     },
//     () => {}
//   );
//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tabId },
//       files: ['script.js'],
//     },
//     () => {}
//   );
// });

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   let url = tab.url;
//   if (!~url.indexOf('www.wantedly.com')) return;
//   if (changeInfo.status) return;
//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tabId },
//       func: () => {
//         console.log('reload');
//         console.log('done script');
//         window.addEventListener('load', () => {
//           wantedlyAddLink();
//         });
//       },
//     },
//     () => {}
//   );
// });
