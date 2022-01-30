//Function which return the row, column or square coordinate class of a cell (case)
jQuery.fn.extend(
    {
        getCoordinateRCS: function (x) {
            if ($(this).hasClass(x + "1")) {
                return "." + x + "1";
            }
            else if ($(this).hasClass(x + "2")) {
                return "." + x + "2";
            }
            else if ($(this).hasClass(x + "3")) {
                return "." + x + "3";
            }
            else if ($(this).hasClass(x + "4")) {
                return "." + x + "4";
            }
            else if ($(this).hasClass(x + "5")) {
                return "." + x + "5";
            }
            else if ($(this).hasClass(x + "6")) {
                return "." + x + "6";
            }
            else if ($(this).hasClass(x + "7")) {
                return "." + x + "7";
            }
            else if ($(this).hasClass(x + "8")) {
                return "." + x + "8";
            }
            else if ($(this).hasClass(x + "9")) {
                return "." + x + "9";
            }
        }
    })

//Document ready
$(function () {
    //For the current focused cell (case)
    $("table").delegate(".case", "focus blur", function () {
        var e = $(this);

        //Color the current row/column
        $(e.getCoordinateRCS("r")).add(e.getCoordinateRCS("c")).not(e).toggleClass("inline", e.is(":focus"));
        //Color the current square
        $(e.getCoordinateRCS("s")).not(e).toggleClass("insquare", e.is(":focus"));

        //Color the current cell (case)
        e.toggleClass("focused", e.is(":focus"));
    });

    //At any value change or new focus
    $(".case").on('input focus', function () {
        var focused = $(this);
        var focusedVal = focused.val();

        //Remove all current errors
        $(".case").removeClass("error");

        //Check if integer from 1-9
        if ($.isNumeric(focusedVal) && Math.floor(focusedVal) == focusedVal && focusedVal >= 1 && focusedVal <= 9) {

            //Big numbers display
            focused.removeClass("small");

            //Check equalities
            $(".inline, .insquare").each(function () {
                if ($(this).val() == focusedVal) {

                    //Add errors
                    $(this).add(focused).addClass("error");
                }
            });
        } else {
            //Small numbers display
            focused.addClass("small");
        }
    });

    //At any focus loss
    $(".case").blur(function () {
        //Remove current errors
        $(".case").removeClass("error");
    });

    //Verify
    $("#verify").click(function () {
        var casesOk = 0;

        //Verify all cells (cases) by focusing them and checking their css classes
        $(".case").each(function () {
            $(this).focus();

            //If is not from 1-9 (.small) or if has error (.error)
            if ($(this).hasClass("small") || $(this).hasClass("error")) {
                //Leave
                alert("Sudoku failed...");
                return false;
            } else {
                //Cell (case) ok, count
                casesOk = casesOk + 1;
            }
        });

        //Check there are as many ok cells (cases) than their total amount
        if (casesOk == $(".case").length) {
            alert("Sudoku completed!");
        }

    });

    //Refresh
    $("#refresh").click(function () {

        location.reload();
    });
});