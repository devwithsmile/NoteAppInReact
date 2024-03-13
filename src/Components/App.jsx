import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    var [notes,setNotes] = useState([]);


    function addNote(note) {
        console.log("addNote Called");
        setNotes([...notes,note]);
    }

    function deleteNote(id){
        console.log("deleteNote called" + id);
        
        setNotes((previosNotes) => {
            return previosNotes.filter((noteItem,index)=> {
                return index !==id;
            })
        });
    }

    

  return (
    <div>
      <Header />
      <CreateArea notes = {notes} onAdd = {addNote} />
      {notes.map((note,index)=> 
      <Note 
        key={index} 
        index = {index} 
        deleteNote = {deleteNote}
        title = {note.title}
        content = {note.content}
        >
        </Note>)}
      <Footer />
    </div>
  );
}

export default App;
