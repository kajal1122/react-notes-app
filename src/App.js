import { useState } from 'react';
import uuid from 'react-uuid';
import ReactMarkdown from 'react-markdown';
import './App.css';
import Main from './Main';
import SideBar from './SideBar';
function App() {
  const [notes, setNotes] = useState([]);
  const [ activeNote, setActiveNote] = useState(false);
  const onAddClick = ()=>{
    var currNoteObj ={
      id:uuid(),
      title:"Title",
      body:"This is test Body ",
      lastModifiedDate:Date.now(),
    }

    setNotes([currNoteObj, ...notes]);
    
  }

  const onDeleteClick = (currNoteId)=>{
    {
      setNotes(notes.filter(({id})=>id !== currNoteId));
    }

  }

  const getCurrentActiveNote = ()=>{
    //console.log('setting active note');
    return notes.find((note)=>note.id === activeNote);

  }

  const onUpdateNote = (updatedNote) =>{
    const updateNoteArray = notes.map((note)=>{
      if(note.id === activeNote){
        return updatedNote;
      }
      return note;


      

    })
    //console.log(updateNoteArray);
    setNotes(updateNoteArray);

  }
  return (
    <div className="App">
      <SideBar  
      notes={notes} 
      onAddClick={onAddClick} 
      onDeleteClick={onDeleteClick}
      activeNote = {activeNote}
      setActiveNote = {setActiveNote}
      />
      <Main 
      currentActiveNote={getCurrentActiveNote()}
      onUpdateNote = {onUpdateNote}
      />
    </div>
  );
}

export default App;
