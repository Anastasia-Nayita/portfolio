const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("Ticker"));

app.get("/data.json", (req, res) => {
    console.log("There was a req to data.json");
    getToken(function (err, bearerToken) {
        if (err) {
            console.log("err in getToken", err);
            return;
        }
        // console.log("bearerToken in index.js", bearerToken);
        // 2. Use this token, to make a request for tweets

        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("err in getTweets", err);
                return;
            }
            // 3. Filter the tweets. (clean them up)

            const filteredTweets = filterTweets(tweets);

            // 4. send back a json response (of filtered tweets)

            res.json(filteredTweets);
        });
    });
});

// app.get("/1.1/statuses/user_timeline.json", (req, res) => {
//     console.log("req in timeline is working");
// });

app.listen(8080, () => console.log("Twitter ticker is listenning..."));

// [
//     {
//         link:
//             "https://www.breakingcatnews.com/comic/welcome-to-breaking-cat-news/",
//         text: "Welcome to Breaking Cat News!",
//     },
//     {
//         link:
//             "https://www.breakingcatnews.com/comic/sunday-with-elvis-puck-and-lupin/",
//         text: "Sunday with Elvis, Puck, and Lupin...",
//     },
//     {
//         link: "https://www.breakingcatnews.com/about-breaking-cat-news/",
//         text: "Meet our news crew!",
//     },
//     {
//         link:
//             "https://www.breakingcatnews.com/comic/heres-elvis-with-the-weather/",
//         text: "Here’s Elvis with the weather report...",
//     },
// ]
