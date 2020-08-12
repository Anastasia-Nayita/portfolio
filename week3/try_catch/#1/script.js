(function () {
    var textArea = $("#textArea");
    var button = $("button");
    button.on("click", function () {
        try {
            JSON.parse(textArea.val());
            alert("It's a JSON! Good job.");
        } catch (e) {
            alert("It's not a JSON! Try again.");
        }
    });
})();
