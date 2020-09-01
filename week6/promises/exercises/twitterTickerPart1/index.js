const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("Ticker"));

app.get("/data.json", (req, res) => {
    console.log("There was a req to data.json");
    getToken()
        .then((token) => {
            getTweets(token)
                .then((tweets) => {
                    const filteredTweets = filterTweets(tweets);
                    return res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log("err in the getTweets", err);
                });
        })
        .catch((err) => {
            console.log("err in getToken", err);
            return;
        });
});

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
