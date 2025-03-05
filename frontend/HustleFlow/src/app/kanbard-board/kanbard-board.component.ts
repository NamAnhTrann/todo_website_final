import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { HeaderComponent } from "../header/header.component";
import { Kanban } from '../model/kanbanModel';
import { DatabaseService } from '../services/database.service';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanbard-board',
  standalone: true,
  imports: [RouterLink, SideNavbarComponent, HeaderComponent, FormsModule, DragDropModule],
  templateUrl: './kanbard-board.component.html',
  styleUrl: './kanbard-board.component.css'
})
export class KanbardBoardComponent {
  isSidebarOpen: boolean = true;
  kanban: Kanban[] = [];
  toDo: any[] = [];
  pending: any[] = [];
  completed: any[] = [];


  taskData: Kanban = new Kanban()
  //userId = '';
  constructor(private db:DatabaseService, private router: Router){}


  ngOnInit(){
    this.fetchKanbanTask()
  }

  addTask(){
    this.router.navigate(["/add-task"])
  }


  //TODO
  dropItem(event: CdkDragDrop<Kanban[]>, newStatus:string ){
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      const moveTask = event.previousContainer.data[event.previousIndex];
      moveTask.kanbanEnum = newStatus;

    }

  }

  fetchKanbanTask(){
    this.db.listAllKanbanTask().subscribe((data:any)=>{
      console.log("data");
      this.kanban = data;
      this.toDo = this.kanban.filter(task => task.kanbanEnum === "TO_DO");
      this.pending = this.kanban.filter(task => task.kanbanEnum === "PENDING");
      this.completed = this.kanban.filter(task => task.kanbanEnum === "COMPLETED");

    })
  }


}
