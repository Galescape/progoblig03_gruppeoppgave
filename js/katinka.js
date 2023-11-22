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
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
drawFigure()

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
drawFigureSvg();
