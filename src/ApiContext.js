import React from "react";

export default React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  addFolder :()=> {},
  addNote : () =>{}
});
