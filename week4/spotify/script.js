(function () {
    var submitButton = $(".subButton");
    var nextUrl;
    submitButton.on("click", function () {
        var userInput = $("input[name= 'search']").val();
        var artistOrAlbum = $(".artist-or-album").val();
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (payload) {
                //we care about 'name', img and external url(link)
                payload = payload.artists || payload.albums;

                var nameImgs = "";
                if (payload.next) {
                    nextUrl = payload.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );
                }

                console.log("nextUrl", nextUrl);
                for (var i = 0; i < payload.items.length; i++) {
                    console.log(payload.items[i]);

                    if (payload.items[i].images.length > 0) {
                        nameImgs +=
                            "<div class='nameImg'><a href=' " +
                            payload.items[i].external_urls.spotify +
                            " ' ><p class='name' >" +
                            payload.items[i].name +
                            '<img src=" ' +
                            payload.items[i].images[0].url +
                            "'></p></a></div>";
                    } else {
                        nameImgs += '<div><img src="question-mark.png"></div>';
                    }

                    $(".resContainer").html(nameImgs);
                }
            }, ///results for input,val and No results for 'tratra'
        });
    })();
});
