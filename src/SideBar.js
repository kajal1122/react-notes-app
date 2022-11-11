import React from "react";

export default function SideBar({ notes, onAddClick , onDeleteClick, activeNote, setActiveNote}) {
    // const onDelete = (id)=>{
    //     onDeleteClick(id);
    // }
    const recentUpdateNote = notes.sort((a,b) => b.lastModifiedDate - a.lastModifiedDate);
    return (
        
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddClick}>Add</button>

            </div>
            <div className="app-sidebar-notes">
                {recentUpdateNote.map(({id, title, body, lastModifiedDate}, i) => (
                   <div className={`app-sidebar-note ${activeNote === id && "active"}`} onClick={()=>setActiveNote(id)}> 
                    <div className="sidebar-note-title">
                        <strong>{title}</strong>
                        <button onClick={(e)=>onDeleteClick(id)}>Delete</button>
                    </div>
                    <p>{body && body.substr(0, 100) + "..."}</p>
                    <small className="note-meta">Last Modified {new Date(lastModifiedDate).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}</small>

                    </div>
            


                ))}
            </div>

        </div>
    )
}