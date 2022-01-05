import axios from "axios";
const apiUrl = "http://localhost:3001/";

export function getTasks() {
    return axios.get(apiUrl+"api/v1/0_chns");
}

export function addTask(task) {
    return axios.get(apiUrl+"iecho?text="+task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
