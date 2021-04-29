// hjelpevariable for både view og controller
var contentDiv = document.querySelector('#content');
    
// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar; // Variabel for hvilken stolpe som er valgt
let inputValue; // Variabel for hva som er skrevet i input-feltet
let barBorder;
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
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="addBar()">Legg til stolpe</button>
        <button ${chosenBar ? chosenBar : "disabled"}>Endre valgt stolpe</button><br />
        <button ${chosenBar ? chosenBar : "disabled"} onclick="removeBar()">Fjerne valgt stolpe</button>
    `;
}

function createBar(number, barNo) {
    const barArrPos = barNo - 1; //bar position in numbers array.
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect onclick="clickedBar(${barArrPos})" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" class="${chosenBar == barArrPos ? "chosen" : ""}"></rect>`;
    
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
    }else {
        console.log("posInArray is: ", posInArray)
        
        chosenBar = posInArray;
        resultBar = `${chosenBar + 1}`;
        console.log("resultBar is: ", resultBar)
        // enableBtn.disabled = false;
    }
    show();
}

function removeBar(barNo) {
    const barArrPos = barNo - 1;
    numbers.pop(barArrPos, 1);
    show;
}


function addBar() {
    numbers.push(`${inputValue}`);
    show()
}


//OBS start på øverst punkt!!!!! gå steg for steg!

//Border på søyle, kanskje bruke stroke? tips

//thing === true ? "Do this if true" : "Do this if false";

//barNo = parameter