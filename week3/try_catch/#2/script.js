(function () {
    try {
        translateNumberToGerman();

        function translateNumberToGerman() {
            var number = askForNumber();
            var translations = [
                "null",
                "eins",
                "zwei",
                "drei",
                "vier",
                "fünf",
                "sechs",
                "sieben",
                "acht",
                "neun",
                "zehn",
            ];
            for (var i = 0; i <= translations.length; i++) {
                if (i == number) {
                    alert(number + "=" + translations[i]);
                }
            }
        }
        function askForNumber() {
            var num = prompt("Please enter a number between 1 and 10");
            if (num >= 1 && num <= 10 && num == parseInt(num)) {
                return num;
            }
        }
    } catch (e) {
        console.log(e);
        alert(e);
        translateNumberToGerman();
    }
})();
