const puppeteer = require('puppeteer');

function stseach(response, postData){
    console.log('Request handler "stseach" was called.');
    
    
    !(async() => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            const latestDate = await getLatestDate(page, 'https://transit.yahoo.co.jp/search/result?flatlon=&from=%E9%A3%AF%E7%94%B0%E6%A9%8B&tlatlon=%2C%2C22617&to=%E7%A5%9E%E7%94%B0%28%E6%9D%B1%E4%BA%AC%E9%83%BD%29&viacode=&via=&viacode=&via=&viacode=&via=&y=2018&m=09&d=18&hh=09&m2=5&m1=4&type=1&ticket=ic&expkind=1&ws=3&s=0&al=1&shin=1&ex=1&hb=1&lb=1&sr=1&kw=%E7%A5%9E%E7%94%B0%28%E6%9D%B1%E4%BA%AC%E9%83%BD%29')
            console.log('latestDate: ' + latestDate);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(latestDate);
            response.end();

            browser.close();
        } catch(e) {
            console.error(e);
        }
    })();
    
    

}

async function getLatestDate(page, url){
  await page.goto(url);
  
  return await page.evaluate(() => document.getElementsByClassName('routeDetail')[0].getElementsByClassName('station')[0].getElementsByClassName('time')[0].textContent);
}




exports.stseach = stseach;