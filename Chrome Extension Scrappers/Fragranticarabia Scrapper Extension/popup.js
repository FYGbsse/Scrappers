function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, { file: "content_script.js" });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    function saveUserId() {
        chrome.storage.local.set({ 'manual_scrap_user_id': document.getElementById('manual_user_id').value });
    }
    document.getElementById('manual_user_id').addEventListener('keyup', saveUserId);
    document.getElementById('clickactivity').addEventListener('click', injectTheScript);
    //document.getElementById('add_query_manually').addEventListener('click', addManully);
});

document.addEventListener('DOMContentLoaded', loadOptions);
// When the popup HTML has loaded

function loadOptions() {
    chrome.storage.local.get(['manual_scrap_user_id'], function(data) {
        jQuery('#manual_user_id').val(data.manual_scrap_user_id);
    });
}

/* function addManully() {
    chrome.storage.local.get(['query_added'], function(data) {
        jQuery('#add_query_manually').val(data.query_added);
    });
} */

