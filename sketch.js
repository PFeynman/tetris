var cellSize = 50;
var rows = 15;
var columns = 8;
var iteration = 0;
var initialPos = 0;

function drawFigure (figure) {
  switch (figure) {
    case 'SQUARE':
      fill('red');
      square(initialPos, iteration*cellSize, cellSize); // TL
      square(initialPos+cellSize, iteration*cellSize, cellSize); // TR
      square(initialPos, iteration*cellSize+cellSize, cellSize); // BL
      square(initialPos+cellSize, iteration*cellSize+cellSize, cellSize); // BR
  }
}

function setup() {
  createCanvas(cellSize*columns, cellSize*rows);
  frameRate(10);
}

function draw() {
  background(0);
  for (i = cellSize; i < cellSize*columns; i += cellSize) {    
    stroke(255);
    line(i, 0, i, cellSize*rows);
  }

  for (j = cellSize; j < cellSize*rows; j += cellSize) {    
    stroke(255);
    line(0, j, cellSize*columns, j);
  }

  //drawFigure('SQUARE');
  iteration++;
  if (iteration == 10) {
    iteration = 0;
  }
  
}
