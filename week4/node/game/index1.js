const readline = require("readline");

console.log(`Feel Better Checklist 🙌`);
const chalk = require("chalk");

const bot = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let conversation = {
    q: "how are you? [good | sucks]",
    answers: {
        good: "You're beautiful wild flower🌸... Keep going!",
        sucks: {
            q: chalk.yellow("Did you ate in last 4 hours? [yes | no]"),
            answers: {
                no: "You better do. You need energy!🍲",
                yes: {
                    q: chalk.gray(
                        "How many hours did you sleep last night? [2-6 | 6-8]"
                    ),
                    answers: {
                        "2-6":
                            "Sleep a little. 💤 Try to sleep as much as you can. But if it's not possible just lay down with eyes closed for 15 minutes.",
                        "6-8": {
                            q: chalk.green(
                                "Very good! Let's continue going. Do you have any physical pain? [yes | no] "
                            ),
                            answers: {
                                yes:
                                    "If you have prescription for painkiller💊, take it. If not and pain is consistent, think about going to the doctor. Also you can apply a heating pad or ice pack to the sore spot.",
                                no: {
                                    q: chalk.yellow(
                                        "Very good! Let's continue going. Maybe you are annoyed, upset, angry about something in the environment? [yes | no]"
                                    ),
                                    answers: {
                                        no:
                                            "We checked the physiological reasons. Maybe it's emotional. Try meditating or set a timer for 5 minutes and letting the stream of consciousness out onto paper.",
                                        yes: {
                                            q: chalk.gray(
                                                "Is it comfortable temperature around? [tooHot | tooCold | end]"
                                            ),
                                            answers: {
                                                tooHot:
                                                    "If you're too hot, dress cooler, turn on the fan, open the window, or adjust the air conditioner.",
                                                tooCold:
                                                    "If you are too cold, dress warmly🧣, turn on the heater, adjust the air conditioner, wrap yourself in a blanket, and / or hug your pet🐈 or other person.",
                                                end:
                                                    "You are going to be alright. Keep listenning to yourself.👑",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

function askQuestion(convObj) {
    bot.question(convObj.q, (answer) => {
        if (
            convObj.answers[answer] &&
            typeof convObj.answers[answer] === "string"
        ) {
            console.log(chalk.cyanBright(convObj.answers[answer]));
            bot.close();
        } else if (
            convObj.answers[answer] &&
            typeof convObj.answers[answer] === "object"
        ) {
            convObj = convObj.answers[answer];
            askQuestion(convObj);
        }
        // else if (
        //     convObj.answers[answer] &&
        //     typeof convObj.answers[answer] === "object"
        // ) {
        //     askQuestion(convObj.answers.yes);
        // }
        else {
            console.log(chalk.bgMagenta("That's it for today!"));
            bot.close();
        }
    });
}

askQuestion(conversation);
