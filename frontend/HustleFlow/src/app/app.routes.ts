import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { KanbardBoardComponent } from './kanbard-board/kanbard-board.component';

export const routes: Routes = [
  {path: "", component:DashboardComponent},
  {path: "dashboard-main", component:DashboardMainComponent},
  {path: "kanban-board", component:KanbardBoardComponent}
];
