class Pen {
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }
}

const myPen = new Pen (0.7, 'black');
console.log(myPen) // Pen { point: 0.7, color: 'black', ink: 100 }

const redPen = new Pen (1, 'red', 80);
console.log(redPen); // Pen { point: 1, color: 'red', ink: 80 }

const bluePen = new Pen(0.5, 'blue',100);
console.log(bluePen); // Pen { point: 0.5, color: 'blue', ink: 100 }