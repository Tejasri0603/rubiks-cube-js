class Cube {
  constructor() {
    this.faces = {
      U: Array(9).fill('w'), // White
      D: Array(9).fill('y'), // Yellow
      F: Array(9).fill('g'), // Green
      B: Array(9).fill('b'), // Blue
      L: Array(9).fill('o'), // Orange
      R: Array(9).fill('r')  // Red
    };
    this.steps = [];
  }

  rotateFaceClockwise(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[6], f[3], f[0],
      f[7], f[4], f[1],
      f[8], f[5], f[2]
    ];
    this.steps.push(`Rotate ${face} clockwise`);
  }

  scramble(moves = 5) {
    this.steps = [];
    const faces = ['U', 'D', 'F', 'B', 'L', 'R'];
    for (let i = 0; i < moves; i++) {
      const face = faces[Math.floor(Math.random() * 6)];
      this.rotateFaceClockwise(face);
    }
  }

  solve() {
    this.steps.push('Solving not implemented, showing reset.');
    this.constructor(); 
  }

  toString() {
    return Object.values(this.faces).map(f => f.join('')).join('');
  }

  getSvgString() {
    return `
      U: ${this.faces.U.join(' ')}
      R: ${this.faces.R.join(' ')}
      F: ${this.faces.F.join(' ')}
      D: ${this.faces.D.join(' ')}
      L: ${this.faces.L.join(' ')}
      B: ${this.faces.B.join(' ')}
    `.replace(/\s+/g, ' ');
  }
}

const cube = new Cube();

function scrambleAndShow() {
  cube.scramble();
  showCube();
}

function solveAndShow() {
  cube.solve();
  showCube();
}

function showCube() {
  document.getElementById("cube-output").innerHTML = `<pre>${cube.getSvgString()}</pre>`;
  document.getElementById("steps").textContent = cube.steps.join('\n');
}
