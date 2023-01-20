import React, { useState } from "react";

export default function CreateArea (props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { value, name } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
        <form className="create-note">
            <input 
            name="title"
            onChange={handleChange}
            value={note.title} 
            type="text" 
            placeholder="Title"
            spellCheck="false"
            />
            <textarea 
            onChange={handleChange}
            value={note.content} 
            name="content" id="" 
            cols="30" 
            rows="3" 
            placeholder="Take a note..."
            spellCheck="false" />
            <button 
            type="submit"
            onClick={(event) => {
                props.onSubmitNote(note);
                event.preventDefault();
                setNote({
                    title: "",
                    content: ""
                });
            }}>Add</button>
        </form>
    );

}