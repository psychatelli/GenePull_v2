


class Polygon {
    constructor(width, height) {
     var width = width;
     var height = height;
    }
  }
  
  class Rectangle extends Polygon {
    constructor(width, height) {
     super(width, height);
       this._color = '';
    }
  
    get area() {
      return this.width * this.height;
    }
    get color() {
      return this._color;
    }
    set color(value) {
      this._color = value;
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
      this._color = '';
    }
  
    get area() {
     return super.area;
    }
    get color() {
      return this._color;
    }
    set color(value) {
      this._color = value;
    }
  }
  let r1 = new Rectangle(2,3);
  
  /* console message #1 */
  console.log('area = ' + r1.area);
  
  r1.color = 'red';
  
  /* console message #2 */
  console.log('color = ' + r1.color);
  
  let s1 = new Square(10);
  
  /* console message #3 */
  console.log('square side = ' + s1.side);
  
  /* console message #4 */
  console.log('square area = ' + s1.area);


  export default Square;