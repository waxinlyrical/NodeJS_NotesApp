// var obj = {
//   name: 'Chin'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log( typeof stringObj );
// console.log( stringObj );

// var personString = '{ "name" : "Chin", "age": 34 }';
// var person = JSON.parse( personString );
//
// console.log( typeof person );
// console.log( person );


const fs = require( 'fs' );

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify( originalNote );
fs.writeFileSync( 'notes.json', originalNoteString );
// fs.writeFile( 'notes.json', originalNoteString, function( error ){
//   if(error){
//     console.log( 'Error writing to file notes.json!' );
//   }
// });

 var noteString = fs.readFileSync( 'notes.json');
 var note = JSON.parse( noteString );

// var noteString = fs.readFile( 'notes.json', function( error ){
//   if( error ){
//     console.log( 'Error reading file notes.json!' );
//   }
// });

console.log( `Readfile string is: ${note.title}` );
