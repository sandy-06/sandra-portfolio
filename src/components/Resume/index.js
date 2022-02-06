import React from "react"

function Resume() {
    return (
        <header className="flex-row px-1">
            <h1> Sandra Sanders' Resume</h1>
            <h3> To view hit the link </h3>
            <a button href=('./assets/Sandra sanders resume.pdf') onClick={() => setContactSelected(false)}>
        </header>
    )

}


export default Resume;