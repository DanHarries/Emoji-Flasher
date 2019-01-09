/*┌────────────────────────────────────────────────┐
 *│                                                │*
 *│ --> Super Sickening Seasonal Emoji Flasher <-- │*
 *│                   * By Dan *                   │*
 *│                     v1.0.1                     │*
 *│                                                │*
 *└────────────────────────────────────────────────┘*/

document.addEventListener("DOMContentLoaded", function () {

    
    var emojiTag = document.createElement('my-emoji');
    var getMonth = getDate();
    var greeting = getGreeting(getMonth);
    document.getElementById("greeting").innerHTML = greeting;   
    
    var getEmoji = getSeason(getMonth);
    renderEmoji(getEmoji);
    showTooltipGreeting(greeting);
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

function getDate() {

    var date = new Date();
    var month = date.getMonth();

    return month;
}

function getSeason(month) {

    var emoji;

    // Is it Halloween?
    month == 9 ? emoji = '🎃' : '';
    // Is it Crimbo?
    month == 11 ? emoji = '🎄' : '';
    // Is it New Year?
    month == 0 ? emoji = '🎉' : '';

    return emoji;

}

function getGreeting(month) {

    var greeting;

    // Is it Halloween?
    month == 9 ? greeting = 'Happy Halloween!' : '';
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
