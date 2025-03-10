import { Component, EventEmitter, Output, output } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Kanban } from '../../model/kanbanModel';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-popup-add-task',
  standalone: true,
  imports: [FormsModule, MatDialogModule],
  templateUrl: './popup-add-task.component.html',
  styleUrl: './popup-add-task.component.css'
})
export class PopupAddTaskComponent {
  kanbanData: Kanban = new Kanban();

  @Output()taskAdded = new EventEmitter<void>();


  constructor(private db: DatabaseService, private dialogRef: MatDialogRef<PopupAddTaskComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  addTask() {
    this.db.addKanbanTask(this.kanbanData).subscribe(() => {
      this.taskAdded.emit();
      this.kanbanData = new Kanban();
      this.closeDialog(); // Close
    });
  }
}
