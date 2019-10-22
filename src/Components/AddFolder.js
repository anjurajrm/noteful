
import React, { Component } from 'react';
import ApiContext from "../ApiContext"
import ValidationError from "./ValidationError"
import "./AddFolder.css"
class AddFolder extends Component{

    static contextType=ApiContext;

    constructor(){
        super()
        this.state ={
            foldername :{
                name:' ',
                touched : false,
                success : ' '
            }

        }
    }

    
    handleNameChange(fname){
        this.setState({foldername :{name :  fname ,touched :true}})
    }


    handleSubmitFolder(event){
        event.preventDefault();

        this.setState({foldername:{success : `Great!! You have created a new  folder named "${this.state.foldername.name}" `}})
        this.context.addFolder(this.state.foldername.name)
    }


    handleValidation(){
        const name = this.state.foldername.name.trim();
         let checkName = this.context.folders.filter(folder => name=== folder.name)
    
        if(name.length===0){
            return  "Name is Required !"
        }else if(name.length<3){
            return "Name must be atleast 3 characters long !"
        }
        if(checkName.length!==0){
            return "Sorry ! The folder name already exists!"
        }
        
    }
    render(){
        return(
            <div className="addfolder">
                <form className="add-folder-form" onSubmit={(e)=>this.handleSubmitFolder(e)}>
                    <label htmlFor="folder-name">Folder Name:</label>
                    <input type="text"
                           id="folder-name"
                           className="folder-name"
                           defaultValue="MyFolder3 "
                            label="Input for new folder name"
                            required={true}
                            onChange = {(e)=>this.handleNameChange(e.target.value)}
                            />
                    <button
                        className="submit-folder-button"
                        type="submit">
                        Submit
                    </button >
                    {this.state.foldername.touched && <ValidationError message={this.handleValidation()}/>}
                     <section className="success"><p>{this.state.foldername.success}</p></section>
                </form>

            </div>
        )
    }
}
export default AddFolder