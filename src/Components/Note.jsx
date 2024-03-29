import React from "react";

function Note(props) {

  function deleteButton() {
    {props.deleteNote(props.index)}
    
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteButton}>DELETE</button>
    </div>
  );
}

export default Note;
