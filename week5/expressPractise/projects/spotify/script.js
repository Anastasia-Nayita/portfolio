(function () {
    /////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    /////////////
    var submitButton = $(".subButton");
    var nextUrl;
    // var userInput = $("input[name='search']").val();
    // var artistOrAlbum = $(".artist-or-album").val();
    submitButton.on("click", function () {
        var userInput = $("input[name='search']").val();
        var artistOrAlbum = $(".artist-or-album").val();
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (payload) {
                payload = payload.artists || payload.albums;

                if (payload.items.length > 0) {
                    $(".resContainer").html(
                        '<div class ="resFor"> search results for "' +
                            userInput +
                            '" </div>'
                    );
                } else {
                    $(".resContainer").html(
                        '<div class ="resFor"> no results for "' +
                            userInput +
                            '" </div>'
                    );
                }
                setNextUrl(payload.next);

                if (location.search.indexOf("scroll=infinite") > 1) {
                    $(".more-results").hide();
                    checkScrollPosition();
                }

                $(".resContainer").html(getResultStr(payload.items));
                // nextUrl = payload.next.replace(
                //
            }, // closes success
        }); // closes ajax
    }); // closes click

    $(document).on("click", ".more-results", getMoreResults);

    function getMoreResults() {
        $.ajax({
            url: nextUrl,
            success: function (payload) {
                payload = payload.artists || payload.albums;
                setNextUrl(payload.next);
                $(".resContainer").append(getResultStr(payload.items));
            },
        });
    }

    function setNextUrl(next) {
        if (next) {
            nextUrl =
                next &&
                next.replace(
                    "https://api.spotify.com/v1/search",
                    "https://spicedify.herokuapp.com/spotify"
                );
        } else {
            nextUrl = "";
        }
        if (!nextUrl) {
            $(".more-results").hide();
        } else {
            $(".more-results").show();
        }
    }
    function getResultStr(items) {
        for (var i = 0; i < items.length; i++)
            if (items[i].images[0]) {
                var cards = {
                    image: items[i].images[0].url,
                    name: items[i].name,
                    link: items[i].external_urls.spotify,
                };
            } else {
                cards = {
                    image: "question-mark.png",
                    name: items[i].name,
                    link: items[i].external_urls.spotify,
                };
            }
        $(".resContainer").html(Handlebars.templates.resultId(cards));

        // for (var i = 0; i < items.length; i++) {
        //     if (items[i].images[0]) {
        //         card +=
        //             '<img src=" ' +
        //             items[i].images[0].url +
        //             ' ">' +
        //             "<a href=' " +
        //             items[i].external_urls.spotify +
        //             " '><p>" +
        //             items[i].name +
        //             "</p></a>";
        //     } else {
        //         card +=
        //             '<div><img src="question-mark.png"></div>' +
        //             "<a href=' " +
        //             items[i].external_urls.spotify +
        //             " '><p>" +
        //             items[i].name +
        //             "</p></a>";
        //     }
        // } // closes for loop
        // return card;
    }

    function checkScrollPosition() {
        setTimeout(function () {
            if (
                $(window).height() + $(document).scrollTop() <=
                $(document).height() - 200
            ) {
                getMoreResults();
            } else {
                checkScrollPosition();
            }
        }, 500);
    }
})(); // closes iife
