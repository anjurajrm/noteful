import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import MainSidebar from "./Components/MainSidebar";
import MainPage from "./Components/MainPage";
import Sidebar from "./Components/Sidebar";
import NotePage from "./Components/NotePage";
import config from "./config";
import Apicontext from "./ApiContext";
import "./App.css";
import AddFolder from "./Components/AddFolder"
import AddNote from './Components/AddNote';
import ErrorBoundary from "./ErrorBoundary"

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      folders: []
    };
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/folders`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          folders: data
        }))
      .catch(error=>{console.error(error)})
      
    fetch(`${config.API_ENDPOINT}/notes`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          notes: data
        })
      )
      .catch (error=> { console.error(error) })
  }
  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  };

  handleAddFolder(foldername){
    
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: foldername
      })
    })

    fetch(`${config.API_ENDPOINT}/folders`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          folders: data,
          
        }))
      .catch(error => { console.error(error) })
  }
   

  handleAddNote(title ,content,folder){
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        modified :new Date(),
        name : title,
        folderId:folder,
        content :content
 
      })
    })
    fetch(`${config.API_ENDPOINT}/notes`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          notes: data
        }))
      .catch(error => { console.error(error) })
  }


  render() {
    const context = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder :this.handleAddFolder,
      addNote :this.handleAddNote
    };
    return (
      <Apicontext.Provider value={context}>
        <div className="App">
          <Header />
          <div className="App-section">
           
              <nav className="navigation">
                <Route exact path="/" component={MainSidebar} />
              <ErrorBoundary>
                <Route path="/folders/:folder_id" component={MainSidebar} />
                <Route path="/folders/:folder_id" component={Sidebar} />
              </ErrorBoundary>
              </nav>
           
            <main>
              
                <Route exact path="/" component={MainPage} />
              <ErrorBoundary>
                <Route path="/notes/:note_id" component={NotePage} />
                <Route path ="/add-folder" component={AddFolder}/>
                <Route path="/add-note" component={AddNote} />
              </ErrorBoundary>
            </main>
          </div>
        </div>
      </Apicontext.Provider>
    );
  }
}

export default App;
