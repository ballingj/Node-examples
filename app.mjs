//this is the ES6 version of import exporting modules - similar to what we have been doing in React
import { perimeter, area } from './rectangle-alt.mjs'

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  if (l <= 0 || w <= 0) {
      console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
  } else {
      console.log(`Area of rectangle: ${area(l, w)}`);
      console.log(`Perimeter of rectangle: ${perimeter(l, w)}`);
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);