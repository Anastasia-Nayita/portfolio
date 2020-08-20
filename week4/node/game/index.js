const readline = require("readline");

console.log(`Let's Cure 
ourselves
`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let conversation = {
    q: "Is it friday?",
    answers: {
        yes: "It's Friday, I'm in love♥️ ♥️ ♥️", //if user answers 'yes' - response 'yay'
        etc: "Do-do, do-do, do-do, do... Oh, oh, whoa, whoa",
        no: {
            q: "what day is it?",
            answers: {
                monday: "I don't care if Monday's blue",
                tuesday: "Tuesday's grey and",
                wednesday: "and Wednesday too",
                thursday: "Thursday, I don't care about you",
                saturday: "Saturday, wait",
                sunday: "And Sunday always comes too late",
                etc: "Do-do, do-do, do-do, do... Oh, oh, whoa, whoa",
            },
        },
    },
};

function askQuestion(convoObj) {
    rl.question(convoObj.q, (answer) => {
        /// const. question ( 'string', callback-function (any var this time it's 'answer)

        if (
            convoObj.answers[answer] &&
            typeof convoObj.answers[answer] === "string"
        ) {
            console.log(convoObj.answers[answer]);
            // rl.close();
        } else if (
            convoObj.answers[answer] &&
            typeof convoObj.answers[answer] === "object"
        ) {
            askQuestion(convoObj.answers.no);
        } else {
            console.log("this is the last console log");
        }
    });
}

askQuestion(conversation);
