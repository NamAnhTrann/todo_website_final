import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Kanban } from '../../model/kanbanModel';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-popup-update-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './popup-update-task.component.html',
  styleUrl: './popup-update-task.component.css'
})
export class PopupUpdateTaskComponent {
  kanbanData: Kanban;
  taskId: string;

  @Output() taskUpdated = new EventEmitter<void>();

  constructor(
    private db: DatabaseService,
    private dialogRef: MatDialogRef<PopupUpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: string; kanbanData: Kanban }
  ) {
    this.taskId = data.taskId;
    this.kanbanData = data.kanbanData;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateTask() {
    if (!this.taskId) {
      console.error("Error: Task ID is missing.");
      return;
    }

    this.db.updateKanbanTask(this.taskId, this.kanbanData).subscribe(() => {
      this.taskUpdated.emit();
      this.closeDialog();
    });
  }

}
