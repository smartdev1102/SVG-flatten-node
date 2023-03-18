// import * as svg from 'flatten-svg';

// Draw Container TO Get STarted

var draw = SVG().addTo('.logoContainer').size(200, 200)

// Download SVG File
function downloadSVG() {
    let svgData = draw.svg();
    /// Create a fake <a> element
    let fakeLink = document.createElement("a");
    /// Add image data as href
    fakeLink.setAttribute('href', 'data:image/svg+xml;base64,' + window.btoa(svgData));
    imageName = Math.floor(Math.random() * 1000)
    /// Add download attribute
    fakeLink.setAttribute('download', imageName + '.svg');
    /// Simulate click
    fakeLink.click();
}

/// Draw Shape
/// Spiral, inside out

var cellSize = 50;

//Draw Grid
var rect1 = draw.rect(cellSize, cellSize).move(2 * cellSize, 1 * cellSize).fill('none')
var rect2 = draw.rect(cellSize, cellSize).move(2 * cellSize, 2 * cellSize).fill('none')
var rect3 = draw.rect(cellSize, cellSize).move(1 * cellSize, 2 * cellSize).fill('none')
var rect4 = draw.rect(cellSize, cellSize).move(1 * cellSize, 1 * cellSize).fill('none')
var rect5 = draw.rect(cellSize, cellSize).move(1 * cellSize, 0 * cellSize).fill('none')
var rect6 = draw.rect(cellSize, cellSize).move(2 * cellSize, 0 * cellSize).fill('none')
var rect7 = draw.rect(cellSize, cellSize).move(3 * cellSize, 0 * cellSize).fill('none')
var rect8 = draw.rect(cellSize, cellSize).move(3 * cellSize, 1 * cellSize).fill('none')
var rect9 = draw.rect(cellSize, cellSize).move(3 * cellSize, 2 * cellSize).fill('none')
var rect10 = draw.rect(cellSize, cellSize).move(3 * cellSize, 3 * cellSize).fill('none')
var rect11 = draw.rect(cellSize, cellSize).move(2 * cellSize, 3 * cellSize).fill('none')
var rect12 = draw.rect(cellSize, cellSize).move(1 * cellSize, 3 * cellSize).fill('none')
var rect13 = draw.rect(cellSize, cellSize).move(0 * cellSize, 3 * cellSize).fill('none')
var rect14 = draw.rect(cellSize, cellSize).move(0 * cellSize, 2 * cellSize).fill('none')
var rect15 = draw.rect(cellSize, cellSize).move(0 * cellSize, 1 * cellSize).fill('none')

var group = draw.group()
group.add(rect1)
group.add(rect2)
group.add(rect3)
group.add(rect4)
group.add(rect5)
group.add(rect6)
group.add(rect7)
group.add(rect8)
group.add(rect9)
group.add(rect10)
group.add(rect11)
group.add(rect12)
group.add(rect13)
group.add(rect14)
group.add(rect15)

totalSquares = 15
thisID = 1
nextID = String("rect" + thisID)
nextID2 = window[nextID]
margin = 1;
prevActive = true;

for (let i = 0; i < totalSquares; i++) {

    nextID = String("rect" + thisID)
    nextID2 = window[nextID]

    //algorithm:
    rndm = Math.floor(Math.random() * 10);
    margin = Math.floor(Math.random() * 6);

    if (prevActive == false) {
        rndm -= margin
    }

    if (prevActive == true) {
        rndm += margin
    }

    if (rndm >= 5) {
        nextID2.fill('#000000');
        prevActive = true
    } else {
        nextID2.remove();
        prevActive = false
    }

    thisID += 1
}

const svgEl = document.querySelector("svg");
const svgElText = svgEl.outerHTML;

$.post('/flatten_app', { dom: svgElText }).then(function(data) {
    console.log(data);
    const containerEl = document.getElementsByClassName("logoContainer")[0];
    containerEl.innerHTML = data;
    const radius = 20;

    $("path").attr('stroke-linejoin', 'round');
    $("path").attr('stroke', 'black');
    $("path").attr('stroke-width', radius);
});
