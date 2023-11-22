// Ørjan har gjenskapt figurene for dette medlemmet

const skyBlue = "#6495ed";
const black = "#000000";
const yellow = "#ffff00";

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
    rectangle(0, 0, 400, 600, skyBlue);
    ellipse(200, 425, 40, 100, black);
    ellipse(290, 425, 50, 10, yellow);
    ellipse(110, 425, 50, 10, yellow);
    circle(200, 300, 25, yellow);
}

drawImage();

// Draws SVG Image:

const furkanSVG = document.getElementById("furkanSVG");
furkanSVG.setAttribute("width", "400");
furkanSVG.setAttribute("height", "600");
furkanSVG.style.border = "1px solid black";

function rectangleSVG(x, y, width, height, color) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", color);
    furkanSVG.appendChild(rect);
    return rect;
}

function circleSVG(x, y, radius, color) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
    furkanSVG.appendChild(circle);
    return circle;
}

function ellipseSVG (cx, cy, radiusX, radiusY, color) {
    const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse.setAttribute("cx", cx);
    ellipse.setAttribute("cy", cy);
    ellipse.setAttribute("rx", radiusX);
    ellipse.setAttribute("ry", radiusY);
    ellipse.setAttribute("fill", color);
    furkanSVG.appendChild(ellipse);
    return ellipse;
}

function drawImageSVG () {
    rectangleSVG(0, 0, 400, 600, skyBlue);
    ellipseSVG(200, 425, 40, 100, black);
    ellipseSVG(290, 425, 50, 10, yellow);
    ellipseSVG(110, 425, 50, 10, yellow);
    circleSVG(200, 300, 25, yellow)
}

drawImageSVG();