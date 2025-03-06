import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { HeaderComponent } from "../header/header.component";
import { Kanban } from '../model/kanbanModel';
import { DatabaseService } from '../services/database.service';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopupAddTaskComponent } from '../popup/popup-add-task/popup-add-task.component';

@Component({
  selector: 'app-kanbard-board',
  standalone: true,
  imports: [RouterLink, SideNavbarComponent, HeaderComponent, FormsModule, DragDropModule, MatDialogModule],
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
  constructor(private dialog: MatDialog, private db: DatabaseService, private router: Router) {}

  ngOnInit(){
    this.fetchKanbanTask()
  }

  addTask() {
    const dialogRef = this.dialog.open(PopupAddTaskComponent, {
      width: '400px',
      disableClose: false,
      panelClass: 'custom-dialog-container',
      backdropClass: 'custom-backdrop',
    });

    dialogRef.componentInstance.taskAdded.subscribe(() => {
      this.fetchKanbanTask();
    });
  }

  //TODO
  dropItem(event: CdkDragDrop<Kanban[]>, newStatus: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const moveTask = event.previousContainer.data[event.previousIndex];

      if (moveTask._id) {
        moveTask.kanbanEnum = newStatus;
        this.db.updateKanbanTask(moveTask._id, {kanbanEnum: newStatus}).subscribe(
          (response) => {
            console.log("Task updated successfully:", response);
          },
          (error) => {
            console.error("Error updating task:", error);
          }
        );
      } else {
        console.error("Task_id is undefined, cannot update task.");
      }
    }

    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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

  deleteTask(taskId:string){
    this.db.deleteKanbanTask(taskId).subscribe((res)=>{
      console.log(res)
      this.fetchKanbanTask()
    })
    }
  }





