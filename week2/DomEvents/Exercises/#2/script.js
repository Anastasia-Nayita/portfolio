function replace(event) {
    var textArea = document.getElementById("textarea").value;
    console.log(textArea);
    var theGettysburgAddress =
        "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.";
    console.log(theGettysburgAddress.slice(0, textArea.length));

    event.target.value = theGettysburgAddress.slice(0, textArea.length);
}
var element = document.querySelector("textarea");
element.addEventListener("input", replace);
