import React from "react";
import config from "../config"
import ApiContext from "../ApiContext"
import "./DeleteButton.css"
class DeleteButton extends React.Component {
    static contextType = ApiContext;
   

    handleDelete(e){
        e.preventDefault()
        let noteId = this.props.note.id

        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                this.context.deleteNote(noteId)
                // allow parent to perform extra behaviour
                this.props.onDeleteNote(noteId)
            })
            .catch(error => {
                console.error({ error })
            })
    }
   

    render() {
        return (
            <div className="delete-button">
                <button className="delete-note" type="button" onClick={(e)=>this.handleDelete(e)}>
                    Delete
                </button>
            </div>
        );
     
    }
}
export default DeleteButton
