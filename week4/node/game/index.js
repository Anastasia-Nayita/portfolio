const readline = require("readline");

console.log("Let's Cure ourselves");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let conversation = {
    q: "Is it friday?",
    answers: {
        yes: "It's Friday, I'm in love♥️ ♥️ ♥️", //if user answers 'yes' - response 'yay'
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
        etc: "Do-do, do-do, do-do, do... Oh, oh, whoa, whoa",
    },
};

//console.log(conversation.q); //print q
// console.log(
//     "conversation.answers.no.answers[0]",
//     conversation.answers.no.answers[]
// );

function askQuestion(convoObj) {
    rl.question(convoObj.q, (answer) => {
        /// const. question ( 'string', callback-function (any var this time it's 'answer)

        if (
            convoObj.answers[answer] &&
            typeof convoObj.answers[answer] === "string"
        ) {
            if (convoObj.answers["yes"]) {
                console.log(convoObj.answers[answer]);
                rl.close();
            }
        } else if (
            convoObj.answers[answer] &&
            typeof convoObj.answers[answer] === "object"
        ) {
            askQuestion(convoObj.answers[answer]);

            //  convoObj.answers.no.answers[answer]) {
            //     console.log(convoObj.answers.no.answers[answer]);
            //     askQuestion(convoObj.answers.no);
            // } else {
            //     console.log("GIRL SOMETHING IS HAPPENING HERE");
            // }
        } else {
            askQuestion(convoObj); //when we want ask a?
        }
    });
}

askQuestion(conversation);
