//1

function search(select) {
    var elements = document.querySelectorAll(select);
    for (var i = 0; i < elements.length; i++) {
        // elements.forEach(function (element) {
        elements[i].style.fontStyle = "italic";
        elements[i].style.fontWeight = "bold";
        elements[i].style.textDecoration = "underline";
    }
}

//2

function returnArray(className) {
    var t = [];
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        t.push(elements[i]);
    }
    return t;
}

//3
