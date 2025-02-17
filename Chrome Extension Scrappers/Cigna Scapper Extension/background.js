chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url && tab.url.includes("https://hcpdirectory.cigna.com/web/public/consumer/directory/dentists/")) {
        chrome.tabs.executeScript(tabId, { file: 'second.js' });
    }
});