// hjelpevariable for både view og controller
var contentDiv = document.querySelector('#content');
    
// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar; // Variabel for hvilken stolpe som er valgt
let inputValue; // Variabel for hva som er skrevet i input-feltet
let barBorder;
let result = "";
let resultBar = "ingen";
const enableBtn = document.querySelectorAll('.enable-btn');


// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i id="resultBar">${resultBar}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = parseInt(this.value)" />
        <button onclick="addBar()">Legg til stolpe</button>
        <button ${chosenBar ? chosenBar : "disabled"} onclick="changeBar()">Endre valgt stolpe</button><br/>
        <button ${chosenBar ? chosenBar : "disabled"} onclick="removeBar()">Fjerne valgt stolpe</button>
        <div id="result">${result}</div>
    `;
}

function createBar(number, barNo) {
    // const barArrPos = barNo - 1; //bar position in numbers array.
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect onclick="clickedBar(${barNo})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" class="${chosenBar == barNo ? "chosen" : ""}"></rect>`;
    
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}



// controller

// chosenBar.addEventListener('clicked', clickedBar);
function clickedBar(posInArray) {
    if(posInArray == chosenBar) {
        chosenBar = null; 
        resultBar = "ingen";
        // enableBtn.disabled = true;
    } else {
        console.log("posInArray is: ", posInArray)
        
        chosenBar = posInArray;
        resultBar = `${chosenBar}`;
        console.log("resultBar is: ", resultBar)
        // enableBtn.disabled = false;
    }
    show();
}

//removes chosen bar on clicking Fjerne valgt stolpe button. It's a bit wonky, won't show before you click another bar
function removeBar() {
    numbers.splice(chosenBar - 1, 1);
    show();
}

//adds another bar after you've added a value from 1 to and with 10 and clicked Legg til stolpe button
function addBar() {
    if(inputValue <= 10 && inputValue >= 1) {
        numbers.push(inputValue);
    }
    else {
        alert("Oppgi gyldig tall fra 1 til 10")
    }
    show();
}

function changeBar() {
    if(inputValue <= 10 && inputValue >= 1) {
        numbers[chosenBar - 1] = inputValue;
    }
    else {
        alert("Oppgi gyldig tall fra 1 til 10");
    }
    show();
}


//OBS start på øverst punkt!!!!! gå steg for steg!

//Border på søyle, kanskje bruke stroke? tips

//thing === true ? "Do this if true" : "Do this if false";

//barNo = parameter

