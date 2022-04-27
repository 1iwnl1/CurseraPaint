var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// рисовать, только если мышь перетаскивается (перемещается, пока нажата кнопка)
var isPainting = false;

function setWidth (value) {
    if (isNumeric(value)) {
        paintcanvas.width = value;
    }
}

function setHeight (value) {
    if (isNumeric(value)) {
        paintcanvas.height = value;
    }
}

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
}

function doPaint(x,y) {
    if(isPainting){
        paintCircle(x,y);
    }
}

function setColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // убедитесь, что каждый раз начинаете новый круг
    context.beginPath();
    // рисуем круг, используя полную (2*PI) дугу вокруг заданной точки
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// проверяем, что заданное значение на самом деле является числом
function isNumeric (value) {
  // стандартная функция JavaScript для определения того, является ли строка недопустимым числом (Not-a-Number)
  return !isNaN(value);
}

