/* eslint-disable no-undef */

var box = $("#input");
box[0].addEventListener("input", function () {
    save();
});

function save() {
    var val = JSON.stringify(box.value);
    localStorage.setItem("text", val);
}
load();
$(window).on("ready", function () {
    load();
});
function load() {
    box.value = localStorage.getItem("text");
    console.log(box.value);
    return box.value;
}

// (function () {})();

// textArea.on("keydown", function (e) {
//     var myValue = textArea.val();
//     console.log(myValue);
// var oldInput = localStorage.getItem(textArea, myValue);
//     try {
//         if (e.keyCode === 13) {
//             myValue = JSON.stringify(myValue);

//             localStorage.setItem(textArea, myValue);
//             var oldInput = localStorage.getItem(textArea, myValue);

//             console.log(oldInput);
//             $(window).bind("onload", function () {
//                 // var textArea = $("#textArea");
//                 // var myValue = textArea.val();
//                 // myValue = oldInput;
//                 // localStorage.setItem(textArea, myValue);
//                 textArea.push(oldInput);
//                 alert(localStorage.getItem(textArea, myValue));
//                 return;
//             });
//         }
//     } catch (er) {
//         console.log("oopsy");
//     }
// });

// setValue(localStorage.getItem(textArea, value));
