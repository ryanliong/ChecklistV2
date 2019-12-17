import React from 'react'

const NewFruit = (props) => {
    let formFields = {}
    return(
        // e represents an event
        <form onSubmit = { (e) => {
            props.handleFormSubmit(formFields.title.value, formFields.description.value);
            e.target.reset();
        }}>
            <input ref = {input => formFields.title = input} placeholder = "Enter Title" />
            <input ref = {input => formFields.description = input} placeholder = "Enter a Description" />
            <button> Submit </button>
        </form>

    )
}

export default NewFruit