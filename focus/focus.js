var txt = document.getElementById("randomText");
var goback = document.getElementById("goback")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var randomText = [
    'Is this important?',
    'Hey!',
    'Are you sure?',
    'Don\'t break your focus!',
    'Stay focused!',
    'Keep your focus going!',
    'Oops!'
]

var index = getRandomInt(randomText.length)

txt.textContent = randomText[index]

goback.addEventListener("click", function() {
    history.back()
})

const urlParams = new URLSearchParams(window.location.search);
const currentURL = urlParams.get('url');

var urlBtn = document.getElementById("url")

urlBtn.href = currentURL

var urlTag = document.getElementById("code")

urlTag.textContent = currentURL