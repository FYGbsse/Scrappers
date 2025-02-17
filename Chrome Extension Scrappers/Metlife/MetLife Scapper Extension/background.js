chrome.cookies.getAll({domain: "https://www.fragranticarabia.com"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
        chrome.cookies.remove({url: "http://https://www.fragranticarabia.com" + cookies[i].path, name: cookies[i].name}, function(deleted_cookie) { console.log(deleted_cookie);});
    }
});