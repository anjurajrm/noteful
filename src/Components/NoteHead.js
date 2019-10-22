import React from "react";
import DateModified from "./DateModified";
import DeleteButton from"./DeleteButton"
import PropTypes from 'prop-types'
class NoteHead extends React.Component {
  handleDeleteNote(){
    this.props.history.push(`/`)
  }
  render() {
    return (
      <div className="note-head">
        <h2>{this.props.note.name}</h2>
        <DateModified date={this.props.note.modified} />
        <DeleteButton note={this.props.note} onDeleteNote={()=>this.handleDeleteNote()}/>
      </div>
    );
  }
}
NoteHead.propTypes = {
  modified: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  handleDeleteNote: PropTypes.func
};


export default NoteHead;
