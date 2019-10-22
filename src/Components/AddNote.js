import React from "react";
import ApiContext from "../ApiContext";
import ValidationError from "./ValidationError";
import "./AddNote.css"
class AddNote extends React.Component {
  static contextType = ApiContext;
  constructor() {
    super();
    this.state = {
      title: {
        name: " ",
        touched: false
      },
      folder_name: " ",
      content: {
        noteContent: " ",
        touched: false
      },
      success: ' '
    };
  }
  handleTitle(title) {
    this.setState({ title: { name: title, touched: true } });
  }

  handleContent(content) {
    this.setState({ content: { noteContent: content ,touched:true} });
  }
  handleNoteFolder(f) {
      
      
    this.setState({ folder_name: f });
  }

  handleSubmitNote(event) {
    event.preventDefault();
      this.setState({  success: `Great!! You have created a new  note named "${this.state.title.name}" ` } )
    this.context.addNote(this.state.title.name ,this.state.content.noteContent,this.state.folder_name)
    
  }

  handleTitleValidation() {
    const name = this.state.title.name.trim();
    let checkName = this.context.notes.filter(note => name === note.name);

    if (name.length === 0) {
      return "Name is Required !";
    } else if (name.length < 3) {
      return "Name must be atleast 3 characters long !";
    }
    if (checkName.length !== 0) {
      return "Sorry ! The Note name already exists!";
    }
  }

  handleContentValidation() {
    const content =this.state.content.noteContent

    if(content.length===0){
        return  " Note content cannot be blank"
    }
  }

  render() {
    
    
    return (
      <div className="add-note">
        <form
          className="add-note-form"
          onSubmit={e => this.handleSubmitNote(e)}
        >
          <label htmlFor="note-name">Title:</label>
          <input
            type="text"
            id="folder-name"
            className="folder-name"
            defaultValue="fizzbuzz "
            label="Input for new note title"
            required={true}
            onChange={e => this.handleTitle(e.target.value)}
          />
          
          <label htmlFor="note-content">Content: </label>
          <textarea
            id="note-content"
            name="note-content"
            className="note-content"
            label="Input for content of new note"
            required={true}
            onChange={e => this.handleContent(e.target.value)}
          />
          <label htmlFor="note-folder">Folder name: </label>
          <select
            id="note-folder"
            className="note-folder"
            label="Select Folder from Options"
            required={true}
            onChange={e => this.handleNoteFolder(e.target.value)}
          >
            {
              <option key="0" value="0">
                Please select a folder...
              </option>
            }
            {this.context.folders.map(folder => {
              return (
                <option key={folder.id} value={folder.id}
                     >
                  {folder.name}
                </option>
              );
            })}
          </select>
          <button className="submit-note-button" type="submit">
            Submit
          </button>
         {this.state.title.touched && (
                    <ValidationError message={this.handleTitleValidation()} />
                )}
                {this.state.content.touched && (
                    <ValidationError message={this.handleContentValidation()} />
                )}


                <section className="success"><p>{this.state.success}</p></section>

        </form>
      </div>
    );
  }
}

export default AddNote;
