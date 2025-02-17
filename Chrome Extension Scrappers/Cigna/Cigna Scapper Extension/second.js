


window.addEventListener('load', function() {
    console.log("Page loaded! Running scraper...");

    // Check if jQuery is already loaded
    if (typeof jQuery === 'undefined') {
        // If jQuery is not loaded, dynamically load it
        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
        script.onload = function () {
            console.log("jQuery loaded successfully");
            ReviewScrapper(); // Call the scraper function once jQuery is loaded
        };
        document.head.appendChild(script);
    } else {
        // If jQuery is already loaded, just call the function
        console.log("jQuery is already loaded");
        ReviewScrapper();
    }

    // Scraping function
    async function ReviewScrapper() {
        console.log('Scraping page...');
        await new Promise(resolve => setTimeout(resolve, 400));

        var bussinessName = jQuery('[data-test-id="header-practice-name"]').text().trim();
        var completeAddress = jQuery('[data-test-id="text-contact-address"]').text().trim();
        var address2 = jQuery('[data-test-id="text-address-city"]').text();
        const addressDetails = address2.split(',');
        const city = addressDetails[0]?.trim() || '';
        const stateZip = addressDetails[1]?.trim().split(' ') || [];
        const state = stateZip[0]?.trim() || '';
        const zipCode = stateZip[1]?.trim() || '';
        const phone = jQuery('[data-test-id="text-phone-number"]').text();
        const insurance = 'Cigna';
        const distance = 'nil';
        const specialties = jQuery('cigna-provider-profile-specialties li.ng-star-inserted').text().trim();

        const getGmail = jQuery('[data-test-id="text-digital-contact-email"]').text().trim();
        const email = getGmail === '' ? 'nil' : getGmail;
        const website = window.location.href;
        const NPI = jQuery('[data-test-id="text-national-provider-id"]').text();
        const id = zipCode + NPI;
        const name1 = jQuery('[data-test-id="provider-practice-name"]').text().trim();
        const name = name1.split(',');
        const firstName = name[0]?.trim() || '';
        const secondName = 'nil';

        console.log('First Name:', firstName);
        console.log('Last Name:', secondName);
        console.log('Address Line 1:', completeAddress);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Zip Code:', zipCode);
        console.log('Phone:', phone);
        console.log('Distance:', distance);
        console.log('Specialties:', specialties);
        console.log('email:', email);
        console.log('id:', id);
        console.log('stateZip:', stateZip);
        console.log('website:', website);
        console.log('insurance:', insurance);
        console.log('bussinessName:', bussinessName);

        var csv = {};
        csv["id"] = id;
        csv["firstName"] = firstName;
        csv["secondName"] = secondName;
        csv["completeAddress"] = completeAddress;
        csv["city"] = city;
        csv["state"] = state;
        csv["zipCode"] = zipCode;
        csv["phone"] = phone;
        csv["distance"] = distance;
        csv["specialties"] = specialties;
        csv["email"] = email;
        csv["insurance"] = insurance;
        csv["bussinessName"] = bussinessName;

        // Just to visualize data
        jQuery('body').css('background', 'red');
        console.log(csv);

        // Uncomment if needed for posting data (ensure endpoint works and secure)
        // var data = { source: 'providers.online.metlife.com/', csv: csv, user_id: id };
        // var json_data = JSON.stringify(data);
        // console.log(json_data);
        // jQuery.post('https://slategray-skunk-713260.hostingersite.com/Hen_data/hen_metlife/metlife_endpoint.php?action=hen_metlife_data_idgwjksghg', { data: json_data }, function(response) {
        //     console.log(response);
        // });
    }
});
