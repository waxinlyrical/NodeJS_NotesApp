var square = ( arg1 ) => arg1 * arg1;

console.log( square( 9 ) );

var user = {
  name: 'Chin',
  sayHi: () => console.log( `${this.name} says Hello World!` ),
  sayHiAlt() {
    console.log( arguments );
    console.log( `${this.name} says Hello World!` );
  }
}

user.sayHiAlt(1, 2, 3);
