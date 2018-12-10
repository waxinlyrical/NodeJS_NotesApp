//console.log( 'Starting app.js!' );

const fs = require('fs');
const os = require( 'os' );
const _ = require( 'lodash' );
const yargs = require( 'yargs' );

const notes = require( './notes.js' );

const requiredTitleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const requiredBodyOption = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

var argsv = yargs
.command( 'add', 'Add a new note', {
  title: requiredTitleOption,
  body: requiredBodyOption
})
.command( 'list', 'Print out all currently stored notes' )
.command( 'read', 'Print out the note of a specified title', {
  title: requiredTitleOption
} )
.command( 'remove', 'Remove the note of a specified title', {
  title: requiredTitleOption
} )
.help()
.argv;
var command = argsv._[0];
//console.log( 'Yargs argv: ', argsv );

switch( command )
{
  case 'add':
  {
    var noteAddResult = notes.addNote( argsv.title, argsv.body );
    if( !noteAddResult ){
      console.log( 'No note was added!' );
    }
    else{
      console.log( `Note successfully added!` );
      notes.logNote( noteAddResult );
    }
    break;
  }

  case 'list':
  {
    var allNotes = notes.getAll();
    console.log( `Printing ${allNotes.length} note(s)` );
    allNotes.forEach( ( note ) => notes.logNote( note ) );
    break;
  }

  case 'read':
  {
    var readNote = notes.getNote( argsv.title );
    if( readNote ){
      console.log( 'Requested Note: ' );
      notes.logNote( readNote );
    }
    else{
      console.log( `No Note with title ${argsv.title} found!` );
    }
    break;
  }

  case 'remove':
  {
    var noteRemoved = notes.removeNote( argsv.title );
    var message = noteRemoved? `Note with title ${argsv.title} removed ` : `Note with title ${argsv.title} not found, no operation done` ;
    console.log( message );
    break;
  }

  default:
  {
    console.log( `Command ${command} not recognized!` );
  }
}

// if ( command === "add" )
// {
//   console.log( 'Adding note' );
// }
// else if( command == "list" )
// {
//   console.log( 'Listing all notes' );
// }
// else if( command == "read" )
// {
//   console.log( 'Reading note' );
// }
// else if( command == "remove" )
// {
//   console.log( 'Removing note' );
// }
// else
// {
//   console.log( 'Command not recognized!' );
// }

// var filteredArray = _.uniq( [ 1, 2, 1, 4, 2, 3, 'Chin', 'Ryoko', 'Chin', 'Jiahui' ] );
// /console.log( filteredArray );
// console.log( _.isString('string') );
// console.log( _.isString(1) );
// console.log( notes.addFunc(1, 3) );

// var user = os.userInfo();
//
// fs.appendFile( 'greetings.txt', `Hello there ${user.username}. your age is ${notes.age}. \n`, function( err ){
//   if (err)
//   {
//     console.log('Unable To Write To File!');
//   }
// });
