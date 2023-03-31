import axios from "axios";

const TASKNOTE_API_BASE_URL = "http://localhost:8080/api/v1/tasknotes";
class TaskNoteService {
    getTaskNote(){
        return axios.get(TASKNOTE_API_BASE_URL);
    }

    createTaskNote(tasknote){
        return axios.post(TASKNOTE_API_BASE_URL, tasknote);
    }

    getTaskNoteById(id){
        return axios.get(TASKNOTE_API_BASE_URL+'/'+id);
    }

    updateTaskNote(tasknote, id){
        return axios.put(TASKNOTE_API_BASE_URL+'/'+id, tasknote);
    }

    deleteTaskNote(id){
        return axios.delete(TASKNOTE_API_BASE_URL+'/'+id);
    }
}

export default new TaskNoteService();