// get current hour and minute

function getTime() {

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    // convert 24 hour time to 12 hour time

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
    }

    return [hour, minute];

}

// convert hour integer to word representation (to target classes)

function numToWord(number) {

    if (number === 1) {
        return "one";
    } else if (number === 2) {
        return "two";
    } else if (number === 3) {
        return "three";
    } else if (number === 4) {
        return "four";
    } else if (number === 5) {
        return "five";
    } else if (number === 6) {
        return "six";
    } else if (number === 7) {
        return "seven";
    } else if (number === 8) {
        return "eight";
    } else if (number === 9) {
        return "nine";
    } else if (number === 10) {
        return "ten";
    } else if (number === 11) {
        return "eleven";
    } else if (number === 12 || number === 0) {
        return "twelve";
    }

}

// set of functions to add/remove .on class from classes

function addA() {
    var a = document.getElementsByClassName("letter a");
    for (var i = 0; i < a.length; i++) {
        if (a[i].classList.contains("on")) {
            continue;
        } else {
            a[i].classList.add("on");
        }
    }
}

function removeA() {
    var a = document.getElementsByClassName("letter a");
    for (var i = 0; i < a.length; i++) {
        if (a[i].classList.contains("on")) {
            a[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addQuarter() {
    var quarter = document.getElementsByClassName("letter quarter");
    for (var i = 0; i < quarter.length; i++) {
        if (quarter[i].classList.contains("on")) {
            continue;
        } else {
            quarter[i].classList.add("on");
        }
    }
}

function removeQuarter() {
    var quarter = document.getElementsByClassName("letter quarter");
    for (var i = 0; i < quarter.length; i++) {
        if (quarter[i].classList.contains("on")) {
            quarter[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addTwenty() {
    var twenty = document.getElementsByClassName("letter twenty");
    for (var i = 0; i < twenty.length; i++) {
        if (twenty[i].classList.contains("on")) {
            continue;
        } else {
            twenty[i].classList.add("on");
        }
    }
}

function removeTwenty() {
    var twenty = document.getElementsByClassName("letter twenty");
    for (var i = 0; i < twenty.length; i++) {
        if (twenty[i].classList.contains("on")) {
            twenty[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addFiveM() {
    var fivem = document.getElementsByClassName("letter fivem");
    for (var i = 0; i < fivem.length; i++) {
        if (fivem[i].classList.contains("on")) {
            continue;
        } else {
            fivem[i].classList.add("on");
        }
    }
}

function removeFiveM() {
    var fivem = document.getElementsByClassName("letter fivem");
    for (var i = 0; i < fivem.length; i++) {
        if (fivem[i].classList.contains("on")) {
            fivem[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addHalf() {
    var half = document.getElementsByClassName("letter half");
    for (var i = 0; i < half.length; i++) {
        if (half[i].classList.contains("on")) {
            continue;
        } else {
            half[i].classList.add("on");
        }
    }
}

function removeHalf() {
    var half = document.getElementsByClassName("letter half");
    for (var i = 0; i < half.length; i++) {
        if (half[i].classList.contains("on")) {
            half[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addTen() {
    var ten = document.getElementsByClassName("letter ten");
    for (var i = 0; i < ten.length; i++) {
        if (ten[i].classList.contains("on")) {
            continue;
        } else {
            ten[i].classList.add("on");
        }
    }
}

function removeTen() {
    var ten = document.getElementsByClassName("letter ten");
    for (var i = 0; i < ten.length; i++) {
        if (ten[i].classList.contains("on")) {
            ten[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addTo() {
    var to = document.getElementsByClassName("letter to");
    for (var i = 0; i < to.length; i++) {
        if (to[i].classList.contains("on")) {
            continue;
        } else {
            to[i].classList.add("on");
        }
    }
}

function removeTo() {
    var to = document.getElementsByClassName("letter to");
    for (var i = 0; i < to.length; i++) {
        if (to[i].classList.contains("on")) {
            to[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addPast() {
    var past = document.getElementsByClassName("letter past");
    for (var i = 0; i < past.length; i++) {
        if (past[i].classList.contains("on")) {
            continue;
        } else {
            past[i].classList.add("on");
        }
    }
}

function removePast() {
    var past = document.getElementsByClassName("letter past");
    for (var i = 0; i < past.length; i++) {
        if (past[i].classList.contains("on")) {
            past[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

function addOClock() {
    var oclock = document.getElementsByClassName("letter oclock");
    for (var i = 0; i < oclock.length; i++) {
        if (oclock[i].classList.contains("on")) {
            continue;
        } else {
            oclock[i].classList.add("on");
        }
    }
}

function removeOClock() {
    var oclock = document.getElementsByClassName("letter oclock");
    for (var i = 0; i < oclock.length; i++) {
        if (oclock[i].classList.contains("on")) {
            oclock[i].classList.remove("on");
        } else {
            continue;
        }
    }
}

// function to add/remove .on class based on time

function tellTime(currentTime) {

    var hour = currentTime[0];
    var minute = currentTime[1];

    if (minute >= 55) { // five to

        removeA();
        removeQuarter();
        removeTwenty();
        addFiveM();
        removeHalf();
        removeTen();
        addTo();
        removePast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour + 1));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 50) { // ten to

        removeA();
        removeQuarter();
        removeTwenty();
        removeFiveM();
        removeHalf();
        addTen();
        addTo();
        removePast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour + 1));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 45) { // quarter to

        addA();
        addQuarter();
        removeTwenty();
        removeFiveM();
        removeHalf();
        removeTen();
        addTo();
        removePast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour + 1));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 40) { // twenty to

        removeA();
        removeQuarter();
        addTwenty();
        removeFiveM();
        removeHalf();
        removeTen();
        addTo();
        removePast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour + 1));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 30) { // half past

        removeA();
        removeQuarter();
        removeTwenty();
        removeFiveM();
        addHalf();
        removeTen();
        removeTo();
        addPast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour - 1));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 20) { // twenty past

        removeA();
        removeQuarter();
        addTwenty();
        removeFiveM();
        removeHalf();
        removeTen();
        removeTo();
        addPast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour - 1));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 15) { // quarter past

        addA();
        addQuarter();
        removeTwenty();
        removeFiveM();
        removeHalf();
        removeTen();
        removeTo();
        addPast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour - 1));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 10) { // ten past

        removeA();
        removeQuarter();
        removeTwenty();
        removeFiveM();
        removeHalf();
        addTen();
        removeTo();
        addPast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour - 1));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 05) { // five past

        removeA();
        removeQuarter();
        removeTwenty();
        addFiveM();
        removeHalf();
        removeTen();
        removeTo();
        addPast();
        removeOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour - 1));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }

    } else if (minute >= 00) {        // on the hour

        removeA();
        removeQuarter();
        removeTwenty();
        removeFiveM();
        removeHalf();
        removeTen();
        removeTo();
        removePast();
        addOClock();

        var nextHour = document.getElementsByClassName(numToWord(hour));
        for (var i = 0; i < nextHour.length; i++) {
            if (nextHour[i].classList.contains("on")) {
                continue;
            } else {
                nextHour[i].classList.add("on");
            }
        }

        var prevHour = document.getElementsByClassName(numToWord(hour - 1));
        for (var i = 0; i < prevHour.length; i++) {
            if (prevHour[i].classList.contains("on")) {
                prevHour[i].classList.remove("on");
            } else {
                continue;
            }
        }
    }

}

function updateClock() {

    var time = getTime();
    tellTime(time);
    setTimeout(updateClock, 60000);

}

updateClock();