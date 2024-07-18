
/*     var post_data = {'seoStoreId' : '10001','seoLangId' : '-1','seoCatId' : '10051','searchkey' : oem};

    var search_url = "https://www.staples.com/"+oem+"/directory_"+oem;
    var _old_url = "http://www.staples.com/office/supplies/StaplesSearch";

    jQuery.ajax({url:search_url, type:'get',async: true}).done(function(responseText){

        var response = jQuery(responseText);
       
           alert(responseText);
        
    }).fail(function() {
        iCount--;
        if(iCount==0 && sCount==0){
            var url = 'data:application/csv;base64,' + btoa(CSV);
            chrome.downloads.download({
                url: url,
                filename: 'instant_scrapped_data.csv'
            });
        }
    });
 */