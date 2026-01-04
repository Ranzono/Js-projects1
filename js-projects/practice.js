class Triangle{
constructor(a,b,c){
   for (let side of [ a, b, c,]){
    if (!Number.isFinite(side) || side <= 0){
        throw new Error ('Sides must be Positive numbers!');
    }
   }
   console.log('Tri constructor')
   this.a = a;
   this.b = b;
   this.c = c;
}
    greet(){
    console.log('Hello B*tch')
}
display(){
      return  `Triangle with sides of ${this.a} and ${this.b}, and ${this.c}.`
}
getArea(){
    const { a, b, c,} = this;
    const s = ( a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c) );
}
isBig(){
    return this.getArea() > 50;
}
};

// const t1 = new Triangle(3, 4, 5);
// const t2 = new Triangle(5, 9, 10);
// const t3 = new Triangle(30, 40, 50);

class RightTriangle extends Triangle{
constructor(a,b,c){
   if (a * a + b * b !== c * c){
    throw new Error('Invalid C side');
   }
   console.log('Right Tri constructor')
   super(a, b, c);
   this.hypot = c;
}
isRightTriangle(){
    return true;
}
display(){
   return 'Right ' + super.display();
};
};

const tr1 = new RightTriangle(3, 4, 5);