import React from "react";
import NoteHead from "./NoteHead";
import NotePageNav from "./NotePageNav";
import "./NotePage.css";
import ApiContext from "../ApiContext";
import PropTypes from 'prop-types'
class NotePage extends React.Component {
  render() {
    
    return(
    <ApiContext.Consumer>
      {({notes})=>{
    return (
      <div>
        {notes
          .filter(note => note.id === (this.props.match.params.note_id))
          .map(note => {
            return (
              <div key={note.id}>
                <NotePageNav  note={note}  history={this.props.history}/>
                <NoteHead note={note} history={this.props.history}/>
                {note.content.split("\n \r").map((para, index) => (
                  <p key={index} className="note-para">
                    {para}
                  </p>
                ))}
              </div>
            );
          })}
      </div>
    );
        }}
    </ApiContext.Consumer>
    )
  }
}


export default NotePage;
NotePage.defaultProps = {
  notes: []
}

NotePage.propTypes = {
  note_id: PropTypes.string
}