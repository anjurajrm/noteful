import React from "react";
import "./MainSidebar.css";
import { NavLink } from "react-router-dom";
import ApiContext from "../ApiContext"
class MainSidebar extends React.Component {
  render() {
    return(
        <ApiContext.Consumer>
            {({folders})=>{
          return (
            <div>
              
              <ul className="side-nav">
                {folders.map((folder, index) => {
                  return (
                    <li key={folder.id}>
                      <NavLink
                        key={index}
                        exact
                        to={`/folders/${folder.id}`}
                        style={{ textDecoration: "none", color: "white" }}
                        activeStyle={{ color: "yellow" }}
                      >
                        {folder.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <ul className="add">
                <NavLink to={'/add-folder'} style={{ textDecoration: "none"}}>
                  <li>+Folder</li>
                </NavLink>
                <NavLink to={'/add-note'} style={{ textDecoration: "none" }}>
                  <li>+Note</li>
                </NavLink>
              </ul>
            </div>
      
            )
              
            }}
        </ApiContext.Consumer>
    ) 
  }
}
export default MainSidebar;
