/*┌────────────────────────────────────────────────┐
 *│                                                │*
 *│             --> Emoji Flasher <--              │*
 *│                   * By Dan *                   │*
 *│                     v1.0.2                     │*
 *│                                                │*
 *│ ---------------------------------------------- │*
 *│                                                │*
 *│  TODO:                                         │*    
 *│   - Unit Tests                                 │*
 *│   - Date Ranges                                │* 
 *│                                                │*
 *└────────────────────────────────────────────────┘*/

document.addEventListener("DOMContentLoaded", function () {

    // Set the HTML tag
    var emojiTag = document.createElement('my-emoji');

    // Get the day and month
    var getMonth = getTheMonth();
    var getDay = getTheDay();

    // Get the season    
    var getEmoji = getSeason(getDay, getMonth);

    // Check if we have a season ... 
    if (getEmoji) {

    // Render the emoji and greeting message
        renderEmoji(getEmoji);
        showTooltipGreeting(greeting);
        var greeting = getGreeting(getDay, getMonth);
        document.getElementById("greeting").innerHTML = greeting; 

    } else {
        document.getElementById("greeting").innerHTML = "Nothing to celebrate 😐"; 
    }
    
});

function renderEmoji(emoji) {

    var seasonal = document.getElementsByTagName('My-Emoji');

    for (var i = 0; i < seasonal.length; i++) {

        // Renders emojis
        var render = seasonal[i].innerHTML = emoji;
        

    }

    // Sets the timer for the emoji to flash
    setInterval(function () {

        for (var i = 0; i < seasonal.length; i++) {

            var setOpacity = seasonal[i].style.opacity = seasonal[i].style.opacity == "0.15" ? "1.0" : "0.15";

        }

    }, 1000);

}

function getTheMonth() {

    var date = new Date();
    var month = date.getMonth();

    return month;
}

function getTheDay() {

    var date = new Date();
    var day = date.getDate();

    return day;
}

function getSeason(day, month) {

    var emoji;


    // Is it Easter 
    month == 3 && day == 12 ? emoji = '🐣' : '';
    // Is it Halloween?
    month == 9 && day == 31 ? emoji = '🎃' : '';
    // Is it Crimbo?
    month == 11 ? emoji = '🎄' : '';
    // Is it New Year?
    month == 0 ? emoji = '🎉' : '';

    return emoji;

}

function getGreeting(day, month) {
    
    var greeting;

    // Is it Easter 
    month == 3 && day == 12 ? greeting = 'Happy Easter!' : '';
    // Is it Halloween?
    month == 9 && day == 31 ? greeting = 'Happy Halloween!' : '';
    // Is it Crimbo?
    month == 11 ? greeting = 'Merry Christmas!' : '';
    // Is it New Year?
    month == 0 ? greeting = 'Happy New Year!' : '';

    return greeting;

}

function showTooltipGreeting(greeting) {

    // Set data attributes for Bootstrap tooltip
    document.querySelector('My-Emoji').setAttribute("data-toggle", "tooltip"); 
    document.querySelector('My-Emoji').setAttribute("data-placement", "bottom"); 
    document.querySelector('My-Emoji').setAttribute("title", `${greeting}`);

}
