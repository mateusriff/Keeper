import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App () {

    const [notes, setNotes] = useState([]);
    
    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote]
        });
    };

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onSubmitNote={addNote}/>
            {notes.map((noteItem, index) =>        
                <Note 
                    key={index} 
                    id={index} 
                    title={noteItem.title} 
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            )}
            <Footer />
        </div>
    );

}