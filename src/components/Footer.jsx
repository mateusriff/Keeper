import React from "react";

export default function Footer () {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© Mateus Riff {currentYear}</p>
        </footer>
    );

}