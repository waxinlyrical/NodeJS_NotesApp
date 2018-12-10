//console.log( 'Starting notes.js' );

const fs = require( 'fs' );

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync( 'note-data.json' );
    return JSON.parse( notesString );
  }
  catch( e ){
    return [];
  }
};

var saveNotes= ( notes ) =>{
    fs.writeFileSync( 'note-data.json', JSON.stringify( notes ) );
};

var addNote = ( title, body ) => {
  var note = {
    title,
    body
  };

  var notes = fetchNotes();
  var duplicateNotes = notes.filter( ( note ) => note.title === title ); //Compact, single line anon function declaration.
  if ( duplicateNotes.length === 0 ){
    notes.push( note );
    saveNotes( notes );
    return note;
  }
  else{
    console.log( `Existing note with title ${title} already exists!` );
  }

};

var getAll = () => {
  return fetchNotes();
};

var getNote = ( title ) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter( ( note ) => note.title === title );
  return filteredNotes[ 0 ];
};

var removeNote = ( title ) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter( ( note ) => note.title !== title );
  saveNotes( filteredNotes );

  return notes.length !== filteredNotes.length;
};

var logNote = ( note ) => {
  debugger;
  console.log( '-----' );
  console.log( `Title: ${note.title}` );
  console.log( `Body: ${note.body}` );
  console.log( '-----' );
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};

// module.exports.addNote = () =>{
//   console.log( 'addNote' );
//   return 'New Note';
// };
//
//
// module.exports.addFunc = ( arg1, arg2 ) =>{
//   return arg1 + arg2;
// };
