import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private localUrl = "http://localhost:1010"

  constructor(private http:HttpClient) { }

  //Kanban Section//
  addKanbanTask(taskData: any){
    return this.http.post(`${this.localUrl}/add/kanban/task/api/`, taskData,httpOptions)
  }
  listAllKanbanTask(){
    return this.http.get(`${this.localUrl}/get/all/kanban/task/`, httpOptions)
  }

  updateKanbanTask(taskId: string, taskData: any) {
    return this.http.put(`${this.localUrl}/edit/kanban/${taskId}`, taskData, httpOptions);
  }
  deleteKanbanTask(taskId: string){
    return this.http.delete(`${this.localUrl}/delete/kanban/${taskId}`, httpOptions)
  }


  //remidner section
  addReminder(reminderData:any){
    return this.http.post(`${this.localUrl}/add/reminder/api/`, reminderData, httpOptions)
  }

  listAllReminder(){
    return this.http.get(`${this.localUrl}/list/reminder/api/`, httpOptions);
  }





}
