const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function (n) {
    //gets bearerToken from tweeter
    return new Promise((resolve, reject) => {
        let creds = `${Key}:${Secret}`;
        let encodedCreds = Buffer.from(creds).toString("base64");
        const options = {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        const cb = function (response) {
            if (response.statusCode != 200) {
                //smth is wrong
                // throw new Error(
                //     "something is wrong in cb.response",
                //     response.statusCode
                // );
                reject(response.statusCode);
            }
            let body = "";
            response.on("data", function (chunk) {
                body += chunk;
            });
            response.on("end", function () {
                const parsedBody = JSON.parse(body);
                // console.log("parsedBody.access_token: ", parsedBody.access_token);
                resolve(parsedBody.access_token);
            });
        };
        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function (bearerToken, screen_name, name) {
    return new Promise((resolve, reject) => {
        //uses token to get tweets
        //https.open("GET","https://api.twitter.com/1.1/statuses/user_timeline.json")
        const pathVal =
            "/1.1/statuses/user_timeline.json?screen_name=" +
            screen_name +
            "&tweet_mode=extended";

        const options = {
            host: "api.twitter.com",
            path: pathVal,
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };

        const req = https.request(options, cb);
        function cb(res) {
            if (res.statusCode != 200) {
                //smth is wrong
                reject(res.statusCode);
            }
            let body = "";
            res.on("data", function (chunk) {
                body += chunk;
            });
            res.on("end", function () {
                const parsedBody = JSON.parse(body);
                console.log("parsedBody :", parsedBody);
                resolve(parsedBody);
            });
        }
        req.end();
    });
};
module.exports.filterTweets = function (tweets) {
    let arr = [];
    let filteredTweets = tweets.filter(
        (tweet) => tweet.entities.urls.length == 1
    );

    filteredTweets.forEach((tweet) => {
        let { user, full_text, entities } = tweet;
        // console.log("name: ", name);
        let text = user.name + ": " + full_text.split("https")[0].slice(0, -2);
        // console.log("text: ", text);
        let href = entities.urls[0].url;
        const result = { text, href };
        arr.push(result);
    });

    return arr;
};
