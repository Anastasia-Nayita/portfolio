function search(select) {
    var elements = document.querySelectorAll(select);
    elements.forEach(function (element) {
        element.style.fontStyle = "italic";
        element.style.fontWeight = "bold";
    });
}
