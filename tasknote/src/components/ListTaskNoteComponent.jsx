import React, { Component } from 'react';
import TaskNoteService from '../services/TaskNoteService';

class ListTaskNoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasknotes : []
        }
        this.addTaskNote = this.addTaskNote.bind(this);
        this.editTaskNote = this.editTaskNote.bind(this);
        this.deleteTaskNote = this.deleteTaskNote.bind(this);
    }
    editTaskNote(id){
        this.props.history.push(`/update-tasknote/${id}`);
    }
    componentDidMount(){
        TaskNoteService.getTaskNote().then((res) => {
            this.setState({tasknotes:res.data});
        });
    }
    addTaskNote(){
        this.props.history.push('/add-tasknote')
    }
    deleteTaskNote(id){
        TaskNoteService.deleteTaskNote(id).then(res => {
            this.setState({tasknotes: this.state.tasknotes.filter(tasknote => tasknote.seqNum!=id)});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">TODO List</h2>
                <div className='button'>
                    <button style={{marginBottom: '5px', marginLeft: '-10px'}} className='btn btn-primary' onClick={this.addTaskNote}>Add Task</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasknotes.map(
                                    tasknote => 
                                    <tr key = {tasknote.seqNum}>
                                        <td>{tasknote.title}</td>
                                        <td>{tasknote.description}</td>
                                        <td width='16%'>
                                            <button onClick={()=>this.editTaskNote(tasknote.seqNum)} className='btn btn-info'>Update</button>
                                            <button style={{marginLeft: '10px'}} onClick={()=>this.deleteTaskNote(tasknote.seqNum)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTaskNoteComponent;