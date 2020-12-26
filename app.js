var btn = document.querySelector('#translateBtn');
var inputTxt = document.querySelector('#txtHolder');
var output = document.querySelector('#outputDiv');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(input) {
    return serverURL + '?' + 'text=' + input
}

function errorHandler(error) {
    console.log("Error, occured", error);
    alert("Something is wrong on server side")
}

function clickHandler() {
    var input = inputTxt.value;

    fetch(getTranslateURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)
}

btn.addEventListener('click', clickHandler)