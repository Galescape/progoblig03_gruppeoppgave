// Ørjan har gjenskapt figurene for dette medlemmet

const blue = "#0000ff";
const black = "#000000";
const white = "#ffffff";
const yellow = "#ffff00";
const orange = "#ffa500";

// Draws Canvas Image:

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function rectangle(x, y, width, height, color) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
}

function circle(x, y, radius, color) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function ellipse (x, y, radiusX, radiusY, color) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function drawImage() {
    rectangle(0, 0, 200, 200, blue);
    rectangle(0, 125, 200, 75, white);
    circle(40, 100, 30, white);
    circle(40, 50, 20, white);
    circle(150, 40, 25, yellow);
    circle(48, 40, 3, black);
    ellipse(50, 50, 10, 2, orange);
}

drawImage();

// Draws SVG Image:

const jonasSVG = document.getElementById("jonasSVG");
jonasSVG.setAttribute("width", "200");
jonasSVG.setAttribute("height", "200");
jonasSVG.style.border = "1px solid black";

function rectangleSVG(x, y, width, height, color) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", color);
    jonasSVG.appendChild(rect);
    return rect;
}

function circleSVG(x, y, radius, color) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
    jonasSVG.appendChild(circle);
    return circle;
}

function ellipseSVG (cx, cy, radiusX, radiusY, color) {
    const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse.setAttribute("cx", cx);
    ellipse.setAttribute("cy", cy);
    ellipse.setAttribute("rx", radiusX);
    ellipse.setAttribute("ry", radiusY);
    ellipse.setAttribute("fill", color);
    jonasSVG.appendChild(ellipse);
    return ellipse;
}

function drawImageSVG () {
    rectangleSVG(0, 0, 200, 200, blue);
    rectangleSVG(0, 125, 200, 75, white);
    circleSVG(40, 100, 30, white);
    circleSVG(40, 50, 20, white);
    circleSVG(150, 40, 25, yellow);
    circleSVG(48, 40, 3, black);
    ellipseSVG(50, 50, 10, 2, orange);
}

drawImageSVG();