// Ørjan har gjenskapt figurene for dette medlemmet

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const skyBlue = "#add8e6";
const grassGreen = "#6b8e23";
const forestGreen = "#006400";
const brown = "#843c24";
const yellow = "#ffff00";

// Draws Canvas Image:

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

function triangle(x1, y1, x2, y2, x3, y3, color) {
    canvas;

    if (canvas.getContext) {
        ctx;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fill();
    }
}

function drawImage() {
    rectangle(0, 0, 500, 250, skyBlue);
    rectangle(0, 250, 500, 250, grassGreen);
    rectangle(0, 420, 500, 80, brown);
    rectangle(110, 310, 25, 110, brown);
    rectangle(180, 365, 15, 55, brown);
    rectangle(332, 220, 35, 200, brown);
    triangle(110 - 37.5, 310, 110 + 12.5, 230, 110 + 62.5, 310, forestGreen);
    triangle(180 - 15, 365, 180 + 7.5, 330, 180 + 30, 365, forestGreen);
    triangle(332 - 57.5, 220, 332 + 17.5, 90, 332 + 92.5, 220, forestGreen);
    circle(450, 50, 30, yellow);
}

drawImage();

const erikSVG = document.getElementById("erikSVG");
erikSVG.setAttribute("width", "500");
erikSVG.setAttribute("height", "500");
erikSVG.style.border = "1px solid black";

function rectangleSVG(x, y, width, height, color) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", color);
    erikSVG.appendChild(rect);
    return rect;
}

function circleSVG(x, y, radius, color) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
    erikSVG.appendChild(circle);
    return circle;
}

function triangleSVG(x1, y1, x2, y2, x3, y3, color) {
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", `${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3}`);
    triangle.setAttribute("fill", color);
    erikSVG.appendChild(triangle);
    return triangle;
}

function drawImageSVG () {
    rectangleSVG(0, 0, 500, 250, skyBlue);
    rectangleSVG(0, 250, 500, 250, grassGreen);
    rectangleSVG(0, 420, 500, 80, brown);
    rectangleSVG(110, 310, 25, 110, brown);
    rectangleSVG(180, 365, 15, 55, brown);
    rectangleSVG(332, 220, 35, 200, brown);
    triangleSVG(110 - 37.5, 310, 110 + 12.5, 230, 110 + 62.5, 310, forestGreen);
    triangleSVG(180 - 15, 365, 180 + 7.5, 330, 180 + 30, 365, forestGreen);
    triangleSVG(332 - 57.5, 220, 332 + 17.5, 90, 332 + 92.5, 220, forestGreen);
    circleSVG(450, 50, 30, yellow);
}

drawImageSVG();