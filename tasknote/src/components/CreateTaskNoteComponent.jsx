import React, { Component } from 'react';
import TaskNoteService from '../services/TaskNoteService';

class CreateTaskNoteComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:'',
            description:''
        }
        this.changeTitleHandler= this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler= this.changeDescriptionHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }
    saveTask= (e) =>{
        e.preventDefault();
        let tasknote = {title: this.state.title, description: this.state.description};
        console.log('tasknote => ' + JSON.stringify(tasknote));
        TaskNoteService.createTaskNote(tasknote).then(res =>{
            this.props.history.push('/tasknotes');
        });
    }
    changeTitleHandler= (event) =>{
        this.setState({title: event.target.value});
    }
    changeDescriptionHandler= (event) =>{
        this.setState({description: event.target.value});
    } 
    cancel(){
        this.props.history.push('/tasknotes');
    }
    render() {
        return (
            <div>
               <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Task</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Title </label>
                                        <input placeholder='Title' name='title' className='form-control'
                                            value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div style={{marginBottom: '10px'}} className='form-group'>
                                        <label> Description </label>
                                        <input placeholder='Description' name='description' className='form-control'
                                            value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveTask}>Save</button>
                                    <button className='btn btn-success' onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default CreateTaskNoteComponent;