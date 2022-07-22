const season = document.querySelector('#portfolio');
const winterButton = season.querySelector('#winter-button');
const springButton = season.querySelector('#spring-button');
const summerButton = season.querySelector('#summer-button');
const autumnButton = season.querySelector('#autumn-button');
const portfolioList = document.querySelector('.photo-examples');
const winter = portfolioList.querySelector('#winter');
const spring = portfolioList.querySelector('#spring');
const summer = portfolioList.querySelector('#summer');
const autumn = portfolioList.querySelector('#autumn');


function fotoPort1() {
    winterButton.style.backgroundColor = "#BDAE82";
    winterButton.style.color = "black";
    portfolioList.querySelector("#winter").style.display = "block";

    springButton.style.backgroundColor = "rgba(0,0,0,0)";
    springButton.style.color = "#BDAE82";
    portfolioList.querySelector("#spring").style.display = "none";

    summerButton.style.backgroundColor = "rgba(0,0,0,0)";
    summerButton.style.color = "#BDAE82";
    portfolioList.querySelector("#summer").style.display = "none";

    autumnButton.style.backgroundColor = "rgba(0,0,0,0)";
    autumnButton.style.color = "#BDAE82";
    portfolioList.querySelector("#autumn").style.display = "none";
}

function fotoPort2() {
    springButton.style.backgroundColor = "#BDAE82"
    springButton.style.color = "black";
    portfolioList.querySelector('#spring').style.display = "block";

    winterButton.style.backgroundColor = "rgba(0,0,0,0)"
    winterButton.style.color = "#BDAE82";
    portfolioList.querySelector('#winter').style.display = "none";

    summerButton.style.backgroundColor = "rgba(0,0,0,0)"
    summerButton.style.color = "#BDAE82";
    portfolioList.querySelector('#summer').style.display = "none";

    autumnButton.style.backgroundColor = "rgba(0,0,0,0)"
    autumnButton.style.color = "#BDAE82";
    portfolioList.querySelector('#autumn').style.display = "none";
}

function fotoPort3() {
    summerButton.style.backgroundColor = "#BDAE82"
    summerButton.style.color = "black";
    portfolioList.querySelector('#summer').style.display = "block";

    winterButton.style.backgroundColor = "rgba(0,0,0,0)"
    winterButton.style.color = "#BDAE82";
    portfolioList.querySelector('#winter').style.display = "none";

    springButton.style.backgroundColor = "rgba(0,0,0,0)"
    springButton.style.color = "#BDAE82";
    portfolioList.querySelector('#spring').style.display = "none";

    autumnButton.style.backgroundColor = "rgba(0,0,0,0)"
    autumnButton.style.color = "#BDAE82";
    portfolioList.querySelector('#autumn').style.display = "none";
}

function fotoPort4() {
    autumnButton.style.backgroundColor = "#BDAE82"
    autumnButton.style.color = "black";
    portfolioList.querySelector('#autumn').style.display = "block";

    winterButton.style.backgroundColor = "rgba(0,0,0,0)"
    winterButton.style.color = "#BDAE82";
    portfolioList.querySelector('#winter').style.display = "none";

    springButton.style.backgroundColor = "rgba(0,0,0,0)"
    springButton.style.color = "#BDAE82";
    portfolioList.querySelector('#spring').style.display = "none";

    summerButton.style.backgroundColor = "rgba(0,0,0,0)"
    summerButton.style.color = "#BDAE82";
    portfolioList.querySelector('#summer').style.display = "none";
}

winterButton.addEventListener('click', fotoPort1);
springButton.addEventListener('click', fotoPort2);
summerButton.addEventListener('click', fotoPort3);
autumnButton.addEventListener('click', fotoPort4);
