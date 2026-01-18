const https = require('https');

const urls = [
    "https://www.dropbox.com/scl/fi/8q56kfmxm4sglltm3axjn/IMGP2729.JPG?rlkey=zlfiilxjftl76qp5nemmxnw5x&st=h8asvjzz&raw=1",
    "https://www.dropbox.com/scl/fi/urgxwidi711zytkgl79r4/20221104_220907.jpg?rlkey=4g5mxnthjmfzelitvzvc4a5et&st=1m28xbgw&raw=1",
    "https://www.dropbox.com/scl/fi/4l3pfnoj0afg0ln96cnhq/3149446C-CE04-40A4-A33A-DA19E37C0EB3.jpeg?rlkey=4pw1105l0aqqmaouixq40shws&st=iy8eblpr&raw=1",
    "https://www.dropbox.com/scl/fi/xc8deosj4qra9rjl65lcu/IMG_4847.jpg?rlkey=59ny4unvj05ztxosmsetgbfwk&st=susixzx9&raw=1",
    "https://www.dropbox.com/scl/fi/z851ymdvc5q476az9db5e/Mrvj-Gpe1-a8.jpg?rlkey=zl8zcqin1qa58v16ap80r4tt1&st=bnekutdt&raw=1",
    "https://www.dropbox.com/scl/fi/ixcw3h4uhj59m0xtvxtj2/IMG_5395.JPG?rlkey=eeucr2rcdema9x1rooq8b6ujf&st=y5g6u1jk&raw=1",
    "https://www.dropbox.com/scl/fi/hc363otmf84ozwh7oo6j7/IMG_9863.jpg?rlkey=dut2cu3nrf2tv6y4id0bmih18&st=sjxizhrn&raw=1",
    "https://www.dropbox.com/scl/fi/yocsem26icr39ysf5zr32/Famissio-200.jpg?rlkey=025bb00n4c5w9zn0g2682hwr0&st=0inl8xgg&raw=1",
    "https://www.dropbox.com/scl/fi/6ggc9yacwjt5fhswmqeul/Famissio-234.jpg?rlkey=lxxdkbshjez6t5qu4juacj2m&st=jawtkled&raw=1",
    "https://www.dropbox.com/scl/fi/d0bnse1rzrl4jkxwtcm66/Famissio-244.jpg?rlkey=u2r1n4oayntsgpwp4u0yjb43w&st=bp8syrqt&raw=1",
    "https://www.dropbox.com/scl/fi/rbz472voufins5450ws7j/Famissio-248.jpg?rlkey=y8dqnskasufwrrbrq54encsrc&st=yczgn063&raw=1",
    "https://www.dropbox.com/scl/fi/osl7opps7ooqgntv8hv5g/Famissio-262.jpg?rlkey=g0q63s8ylo1zla1xl6wl8lqcr&st=3giyy775&raw=1",
    "https://www.dropbox.com/scl/fi/171tst1fymncan4xiqeks/Famissio-264.jpg?rlkey=k5jeolrqpu2nqccvwk9exbuj8&st=e7gzvo8m&raw=1",
    "https://www.dropbox.com/scl/fi/q8bjmcqalbky9385056no/Famissio-274.jpg?rlkey=0f2rkfftvgfvv1bdmwzua3f46&st=npjtw24t&raw=1"
];

let checkCount = 0;

urls.forEach((url, i) => {
    const req = https.get(url, (res) => {
        console.log(`Index ${i} Status: ${res.statusCode} URL: ${url.substring(0, 40)}...`);
        if (res.statusCode === 404 || res.statusCode === 400 || res.statusCode === 403 || res.statusCode === 410) {
            console.log(`BROKEN_URL_FOUND: Index ${i} Code ${res.statusCode} URL: ${url}`);
        }
        res.resume();
    });

    req.on('error', (e) => {
        console.error(`Index ${i} Error: ${e.message}`);
    });
});
