const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function (callback) {
    //gets bearerToken from tweeter
    let creds = `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");
    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    const req = https.request(options, cb);

    function cb(response) {
        if (response.statusCode != 200) {
            //smth is wrong
            console.log(
                "something is wrong in cb.response",
                response.statusCode
            );
            callback(response.statusCode);
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            const parsedBody = JSON.parse(body);
            // console.log("parsedBody.access_token: ", parsedBody.access_token);
            callback(null, parsedBody.access_token);
        });
    }

    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function (bearerToken, callback) {
    //uses token to get tweets
    //https.open("GET","https://api.twitter.com/1.1/statuses/user_timeline.json")
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=breakingcatnews&tweet_mode=extended",
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    const req = https.request(options, cb);
    function cb(res) {
        if (res.statusCode != 200) {
            //smth is wrong
            console.log("something is wrong in cb.response", res.statusCode);
            callback(res.statusCode);
        }
        let body = "";
        res.on("data", function (chunk) {
            body += chunk;
        });
        res.on("end", function () {
            const parsedBody = JSON.parse(body);
            console.log("parsedBody :", parsedBody);

            callback(null, parsedBody);
        });
    }
    req.end();
};
module.exports.filterTweets = function (tweets) {
    //filter tweets
    //response from tweeter
    let arr = [];

    let filteredTweets = tweets.filter(
        (tweet) => tweet.entities.urls.length == 1
    );

    filteredTweets.forEach((tweet) => {
        let { full_text, entities } = tweet;

        let text = full_text.split("https")[0].slice(0, -2);
        console.log("text: ", text);
        let href = entities.urls[0].url;

        const result = { text, href };
        arr.push(result);
    });

    return arr;
};
