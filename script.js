document.addEventListener('DOMContentLoaded', function () {
    startTypingAnimation();
});

function startTypingAnimation() {
    var introText = "An I.T Student from the Philippines";
    var linuxUserText = " Linux User";
    var interestsText = "Main topics that interest me are about Privacy and Computers";

    var typingSpeed = 100;
    var cursorSpeed = 500;

    animateText('typingText', introText, typingSpeed, function () {
        animateTextWithCursor('linuxUserText', linuxUserText, typingSpeed, cursorSpeed, function () {
            animateTextWithCursor('interests', interestsText, typingSpeed, cursorSpeed);
        });
    });
}

function animateText(elementId, text, speed, callback) {
    var index = 0;
    var element = document.getElementById(elementId);

    var typingInterval = setInterval(function () {
        element.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            clearInterval(typingInterval);

            if (callback) {
                callback();
            }
        }
    }, speed);
}

function animateTextWithCursor(elementId, text, speed, cursorSpeed, callback) {
    var index = 0;
    var element = document.getElementById(elementId);
    var cursorVisible = true;

    var typingInterval = setInterval(function () {
        element.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            clearInterval(typingInterval);

            // Start cursor blinking
            var cursorInterval = setInterval(function () {
                cursorVisible = !cursorVisible;
                element.textContent = cursorVisible ? text + '|' : text;

                if (callback) {
                    callback();
                }
            }, cursorSpeed);
        }
    }, speed);
}
function goToHome() {
    window.location.href = 'index.html'; // Replace 'index.html' with the actual path to your home page
}
