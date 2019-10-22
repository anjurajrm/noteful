import React from "react";
import DateModified from "./DateModified";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import PropTypes from 'prop-types'
class SideBar extends React.Component {
  render() {
    return(
    <ApiContext.Consumer>
      {({notes})=>{
        return (
          <div className="main-page">
            {notes
              .filter(note => note.folderId === (this.props.match.params.folder_id))
              .map(note => {
                return (
                  <div key={note.id} className="main-page-div">
                    <Link
                      to={`/notes/${note.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h3>{note.name}</h3>
                    </Link>
                    <DateModified date={note.modified} />
                  </div>
                );
              })}
          </div>
    );
            }
          }
    </ApiContext.Consumer>
    )
  }
}
 


export default SideBar;


SideBar.propTypes = {
  folderId: PropTypes.string
}
