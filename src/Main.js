import React from "react";
import ReactMarkdown from 'react-markdown';

export default function Main({currentActiveNote , onUpdateNote }){
    //console.log('current active node',currentActiveNote);
    const onEditField =(key, value)=>{
        
        onUpdateNote({
            ...currentActiveNote,
            [key]:value,
            lastModifiedDate:Date.now(),
        });

        
    }
    if(!currentActiveNote){
        return(<div className="no-active-note">No note selected !</div>)
    }
    return(
        <div className="app-main">

            <div className="app-main-note-edit">
                <input type="text" id="title" 
                value={currentActiveNote.title} 
                onChange = {(e)=>{onEditField("title", e.target.value)}}
                autoFocus />
                <textarea id="body" 
                value={currentActiveNote.body}
                onChange = {(e)=>{onEditField("body", e.target.value)}}
                placeholder="write something here.."/>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{currentActiveNote.title}</h1>
                <ReactMarkdown className="markdown-preview">{currentActiveNote.body}</ReactMarkdown>
            </div>

        </div>

    
    
    )
}