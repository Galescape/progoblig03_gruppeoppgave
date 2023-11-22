// Bibliotek med funksjoner

// Ørjan:

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Defines the colors being used as string

const greenOne = "#2e8b57";
const greenTwo = "#3cb370";
const greenThree = "#70d890";
const greenFour = "#98fb98";
const yellowOne = "#fafad2";
const offWhite = "#fffff0";
const darkGreen = "#156401";

// CANVAS API IMAGE:

// Draws and fills a rectangle at a given position

function rectangle(x, y, width, height, fillColor) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = fillColor;
        ctx.fillRect(x, y, width, height);
    }
}

// Draws and fills a circle at a given position

function circle(x, y, radius, fillColor) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Draws and fills a triangle at given coordinates

function triangle(x1, y1, x2, y2, x3, y3, fillColor) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fill();
    }
}

// Draws the JavaScript image I created for this task

function drawImage() {
    rectangle(0, 0, 540, 135, greenOne);
    rectangle(0, 135, 540, 135, greenTwo);
    rectangle(0, 135 * 2, 540, 135, greenThree);
    rectangle(0, 135 * 3, 540, 135, greenFour);
    circle(270, 135, 100, yellowOne);
    circle(270, 135, 80, offWhite);
    triangle(80, 540, 270, 135, 460, 540, darkGreen);
    triangle(-30, 540, 70, 250, 170, 540, darkGreen);
    triangle(370, 540, 470, 250, 570, 540, darkGreen);
}

// Calls the drawImage function

//
//
//

// SVG API IMAGE:

// Defines the SVG element's attributes

const svgCanvas = document.getElementById("svgCanvas");
svgCanvas.setAttribute("width", "540");
svgCanvas.setAttribute("height", "540");
svgCanvas.style.border = "1px solid black";

// Draws and fills a rectangle at a given position

function rectangleSVG(x, y, width, height, fillColor) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fillColor);
    svgCanvas.appendChild(rect);
    return rect;
}

// Draws and fills a circle at a given position

function circleSVG(x, y, radius, fillColor) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", fillColor);
    svgCanvas.appendChild(circle);
    return circle;
}

// Draws and fills a triangle at given coordinates

function triangleSVG(x1, y1, x2, y2, x3, y3, fillColor) {
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", `${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3}`);
    triangle.setAttribute("fill", fillColor);
    svgCanvas.appendChild(triangle);
    return triangle;
}

// Draws the SVG image I created for this task

function drawImageSVG() {
    rectangleSVG(0, 0, 540, 135, greenOne);
    rectangleSVG(0, 135, 540, 135, greenTwo);
    rectangleSVG(0, 135 * 2, 540, 135, greenThree);
    rectangleSVG(0, 135 * 3, 540, 135, greenFour);
    circleSVG(270, 135, 100, yellowOne);
    circleSVG(270, 135, 80, offWhite);
    triangleSVG(80, 540, 270, 135, 460, 540, darkGreen);
    triangleSVG(-30, 540, 70, 250, 170, 540, darkGreen);
    triangleSVG(370, 540, 470, 250, 570, 540, darkGreen);
}

//
//
//

/*

// Function that is supposed to mirror overlay-xy() in pyret, but doesn't behave exactly like it

function insertImgXY(img1, x, y, img2) {
    if (img2.tagName.toLowerCase() === "rect") {
        img2.setAttribute("x", x);
        img2.setAttribute("y", y);
        img1.appendChild(img2);
    } else if (img2.tagName.toLowerCase() === "circle") {
        img2.setAttribute("cx", x);
        img2.setAttribute("cy", y);
        img1.appendChild(img2);
    }
}

// Modified to work with insertImgXY()


function rectangleSVG(width, height, mode, color) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);


    if (mode === "outline") {
        rect.setAttribute("stroke", color);
        rect.setAttribute("stroke-width", "2");
        rect.setAttribute("fill", "none");
    } else if (mode === "solid") {
        rect.setAttribute("fill", color);
    }

    svgCanvas.appendChild(rect);
    return rect;
}

function circleSVG2(radius, mode, color) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", radius);

    if (mode === "outline") {
        circle.setAttribute("stroke", color);
        circle.setAttribute("stroke-width", "2");
        circle.setAttribute("fill", "none");
    } else if (mode === "solid") {
        circle.setAttribute("fill", color);
    }

    svgCanvas.appendChild(circle)
    return circle;
}

insertImgXY(svgCanvas, 270, 135, circleSVG2(100, "solid", yellowOne));

*/

//
//
//

// Katinka:

/*
    ctx.fillStyle = "darkblue";
    ctx.fillRect(10, 10, 125, 1000);

    ctx.strokeStyle = "steelblue";
    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(74, 55);
    ctx.lineTo(35, 110);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "mediumblue";
    ctx.beginPath();
    ctx.moveTo(35, 55);
    ctx.lineTo(74, 110);
    ctx.lineTo(110, 55);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "aliceblue";
    ctx.strokeRect(64, 73, 20, 20)
*/

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

const red = "#FF0000"
const blue = "#0000FF"
const darkblue = "#00008B"
const aliceblue = "#F0F8FF"
const royalblue = "#4169E1"
const steelblue = "#4682B4"

function circle (x, y, radius, color) {
    canvas;
    if (canvas.getContext) {
        ctx;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

// circle(150, 150, 100, red);

function rectangle (x, y, width, height, mode, color) {
    canvas;

    if (canvas.getContext) {
        ctx;

        if (mode === "outline") {
            ctx.strokeStyle = color;
            ctx.strokeRect(x, y, width, height);
        } else if (mode === "solid") {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, width, height);
        }
    }
}

// rectangle(100, 10, 20, 250, "solid", blue);

function triangle (x1, y1, x2, y2, x3, y3, color) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
    }
}

// triangle(0, 0, 50, 0, 25, 50, red);
// triangle(0, 0, 60, 0, 25, 60, blue);

function drawFigure() {
   rectangle(0, 0, 250, 300, "solid", darkblue);
   triangle(40, 215, 130, 100, 220, 215, steelblue);
   triangle(40, 100, 130, 215, 220, 100, royalblue);
   rectangle(105, 133, 50, 50, "outline", aliceblue);
}
// 

// Circle SVG 

const svg = document.getElementById("minKreativeFigur");
// const ctx = svg.getContext("2d");

svg.setAttribute("width", "250");
svg.setAttribute("height", "300");
svg.style.border = "1px solid black";

function circlesvg(cx, cy, r, color) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", color);
    svg.appendChild(circle);
    return circle;
}

// circlesvg(0, 0, 5, red);

// Rectangle SVG

function rectanglesvg (x, y, width, height, mode, color) {
  const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rectangle.setAttribute("x", x);
  rectangle.setAttribute("y", y);
  rectangle.setAttribute("width", width);
  rectangle.setAttribute("height", height);
  
  if (mode === "outline") {
    rectangle.setAttribute("stroke", color);
    rectangle.setAttribute("stroke-width", "1");
    rectangle.setAttribute("fill", "none");
  } else if (mode === "solid") {
    rectangle.setAttribute("fill", color)
  }

  svg.appendChild(rectangle);
  return rectangle;
}

// rectanglesvg(0, 0, 250, 300, "outline", red)

// Triangle SVG

function polygonsvg (x1, y1, x2, y2, x3, y3, mode, color) {
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon"); 
    polygon.setAttribute("points", `${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3}`)

    if (mode === "outline") {
        polygon.setAttribute("stroke", color);
        polygon.setAttribute("stroke-width", "1");
        polygon.setAttribute("fill", "none");
    } else if (mode === "solid") {
        polygon.setAttribute("fill", color);
    }

    svg.appendChild(polygon);
    return polygon;
}

 // polygonsvg (100, 10, 40, 190, 160, 190, "solid", red);

function drawFigureSvg() {
    rectanglesvg(0, 0, 250, 300, "solid", darkblue);
    polygonsvg(40, 215, 130, 100, 220, 215, "outline", steelblue);
    polygonsvg (40, 100, 130, 215, 220, 100, "outline", royalblue);
    rectanglesvg(105, 133, 50, 50, "outline", aliceblue);
}

