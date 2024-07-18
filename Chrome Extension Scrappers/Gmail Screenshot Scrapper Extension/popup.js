function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        /* chrome.tabs.executeScript(tabs[0].id, { file: "content_script.js" }); */
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['content_script.js'],
        });
    });
}
injectTheScript();