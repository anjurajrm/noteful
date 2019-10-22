import React from "react";
import "./NotePage.css";
import ApiContext from "../ApiContext"
import PropTypes from 'prop-types'
class NotePageNav extends React.Component {
  
  static contextType = ApiContext;
  
  render() {
  
    return (
      <ApiContext.Consumer>
         
        {({ folders }) => {
                let folder = folders.find(
                  folder => folder.id === this.props.note.folderId
                );

          return (
            <div className="note-page-nav">
              <button className="button-back" tag="button" role="link" onClick={() => this.props.history.goBack()}>
                Back
              </button>
              <h2>{folder.name}</h2>
            </div>
          );
        }}
    </ApiContext.Consumer>
    )
  }
}
NotePageNav.propTypes = {
  folder: PropTypes.object
};
export default NotePageNav;
