import React from "react";
import { Link } from "react-router-dom";
import DateModified from "./DateModified";
import "./MainPage.css";
import ApiContext from "../ApiContext";

class MainPage extends React.Component {
  render() {
    return(
        <ApiContext.Consumer>
          {({notes})=>{
              return (
                <div className="main-page">
                  {notes.map(note => {
                    return (
                      <div key={note.id} className="main-page-div">
                        <Link to={`/notes/${note.id}`} style={{ textDecoration: "none" }}>
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

MainPage.defaultProps ={
  notes :[]
}

export default MainPage;
