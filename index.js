const fs = require('fs').promises;
async function makeApiCall() {

  let response = fetch("https://nobat.mex.co.ir/v2/service/turn/get/date", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "fa",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "_ga=GA1.1.1285258697.1707583459; _ga_9ZKFPNBD4N=GS1.1.1707801887.2.1.1707801969.0.0.0; vertx-web.session=541f9af57a786d8eff9e11e20d3e6b05; __arcsco=4b38b093e354fcc51867000279700c25",
      "Referer": "https://nobat.mex.co.ir/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"date\":14021125}",
    "method": "POST"
  });
  

  let data = await response.text();

  await fs.writeFile('api-result.json', data);
}
makeApiCall();