const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("Ticker"));

app.get("/data.json", (req, res) => {
    console.log("There was a req to data.json");
    getToken()
        .then((token) => {
            return Promise.all([
                getTweets(token, "Drake", "Drizzy"),
                getTweets(token, "Beyonce", "BEYONCÉ"),
                getTweets(token, "taylorswift13", "Taylor Swift"),
            ])
                .then((results) => {
                    const mergedResults = [
                        ...results[0],
                        ...results[1],
                        ...results[2],
                    ];
                    const sortedTweets = mergedResults.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const filteredTweets = filterTweets(sortedTweets);
                    return res.json(filterTweets);
                })
                .catch((err) => console.log("err in the results", err));
        })
        .catch((err) => {
            console.log("err in the catch", err);
            res.sendStatus(500);
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
