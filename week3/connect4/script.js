(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        //reverse loop
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }

        if (i === -1) {
            return;
        }

        var rowClicked = i;
        var colClicked = col.index();

        var slotsInRow = $(".row" + i);
        var popUp = $(".popUp");
        var text = $(".textContainer");
        function popUpText() {
            var devilWin =
                "Evil wins." + "<br>" + "<br>" + "Nice guys finish last!";
            var angelWin = "Good wins." + "<br>" + "<br>" + "Not today satan!";
            if (currentPlayer == "player1") {
                text.html(devilWin);
            } else {
                text.html(angelWin);
            }
        }

        if (checkForVictory(slotsInCol)) {
            //  console.log("a column victory for", currentPlayer);
            $("body").addClass("victory");
            popUp.removeClass("disappear");
            popUpText();
        } else if (checkForVictory(slotsInRow)) {
            //  console.log("a row victory for ", currentPlayer);
            $("body").addClass("victory");
            popUp.removeClass("disappear");
            popUpText();
        } else if (checkForDiagonalVictory(rowClicked, colClicked)) {
            // console.log("a diagonal victory for ", currentPlayer);
            $("body").addClass("victory");
            popUp.removeClass("disappear");
            popUpText();
        } else {
            switchPlayer();
        }

        $("button").on("click", function () {
            location.reload();
        });
    });

    // $("#computer").on("click", function playWithComputer() {
    //     if ((currentPlayer = "player2")) {
    //         const randomNum = Math.floor(Math.random() * 6);

    //         console.log("randomNum", randomNum);
    //         var column = $(".column");

    //         console.log("column[step] = ", column[randomNum]);
    //         var col = column[randomNum];
    //         var slotsInCol = col.children();
    //         for (var i = slotsInCol.length - 1; i >= 0; i--) {
    //             if (
    //                 !slotsInCol.eq(i).hasClass("player1") &&
    //                 !slotsInCol.eq(i).hasClass("player2")
    //             ) {
    //                 slotsInCol.eq(i).addClass(currentPlayer);
    //                 break;
    //             }
    //         }

    //         if (i === -1) {
    //             return;
    //         }
    //     }
    // });

    function checkForDiagonalVictory() {
        var board = [];
        var i = 0;
        var j = 0;

        $(".slot").each(function () {
            if (!Array.isArray(board[i])) board[i] = [];
            if ($(this).hasClass(currentPlayer)) board[i][j] = true;
            else board[i][j] = false;
            i++;
            if (i == 6) {
                j++;
                i = 0;
            }
        });

        for (var col = 0; col <= 6; col++) {
            for (var row = 0; row <= 5; row++) {
                // console.log("row, col", row, col);
                if (
                    row < 3 &&
                    col < 4 &&
                    board[row][col] &&
                    board[row + 1][col + 1] &&
                    board[row + 2][col + 2] &&
                    board[row + 3][col + 3]
                ) {
                    return true;
                } else if (
                    row > 3 &&
                    col < 4 &&
                    board[row][col] &&
                    board[row - 1][col + 1] &&
                    board[row - 2][col + 2] &&
                    board[row - 3][col + 3]
                ) {
                    return true;
                }
            }
        }
    }

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            // console.log(slots.eq(i).hasClass(currentPlayer));
            var slot = $(slots[i]);
            if (slot.hasClass(currentPlayer)) {
                count++;
                // console.log("count in row/column : ", count);
                if (count === 4) {
                    return true;
                }
            } else {
                //another player reset to 0
                count = 0;
            }
        }
    }

    function switchPlayer() {
        // console.log("current player:", currentPlayer);

        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }
    // console.log("switch funct before calling :");
    // switchPlayer();
    // console.log("switch funct before calling :");
    // switchPlayer();
})();
