var inp = $("input");
var results = $("#results");

inp.on("input", function () {
    var val = inp.val();

    var matches = [];

    $.ajax({
        url: "https://flame-egg.glitch.me/",
        data: {
            q: val,
        },

        success: function (response) {
            // do something with the data here
            console.log(response);
            var myHtml = "";
            if ((val = inp.val())) {
                for (var i = 0; i < response.length; i++) {
                    var foundCountries = "<div>" + response[i] + "</div>";
                    myHtml += foundCountries;
                }

                console.log(myHtml);
                results.html(myHtml);
            }
            results.html(myHtml || "<div id='noResults'> No results!</div>");
        },
        error: function (err) {
            console.log("error: ", err);
        },
    });
});

// for (var i = 0; i < listCountries.length; i++) {
//     if (listCountries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
//         matches.push(listCountries[i]);
//     }
// }

// matches = matches.slice(0, 4);
// var resultsHtml = "";
// for (i = 0; i < matches.length; i++) {
//     resultsHtml += "<div>" + matches[i] + "</div>";
// }

//     results.html(resultsHtml || "<div id='noResults'> No results!</div>");
// }).on("focus", function (e) {
//     $(e.target).trigger("input");
// });

// $(document).mousedown(function (e) {
//     if (!results.is(e.target) && !inp.is(e.target)) {
//         results.empty();
//     }
// });

// results.on("mouseover", "div", function (e) {
//     $(e.target).addClass("highlight");
// });

// results.on("mouseleave", "div", function (e) {
//     $(e.target).removeClass("highlight");
// });

// inp.blur(function () {
//     results.empty();
// });

// $(document).on("keydown", function (e) {
//     var results = $("#results");
//     var highlight = $(".highlight");
//     if (e.keyCode === 40) {
//         if (highlight.length < 1) {
//             results.eq(0).addClass("highlight");
//         } else if (results.index(highlight) < results.length - 1) {
//             highlight.removeClass("highlight").next().addClass("highlight");
//         }
//     }

//     if (e.keyCode === 38) {
//         if (highlight.length < 1) {
//             results.eq(0).addClass("highlight");
//         } else if (results.index(highlight) > 0) {
//             highlight.removeClass("highlight").prev().addClass("highlight");
//         }
//     }
//     if (e.keyCode === 13) {
//         inp.val($(".highlight").text());
//         results.empty;
//     }
// });
// $(e.target).trigger("keydown");

// if (e.keyCode === 38) {
//     //up
// }
