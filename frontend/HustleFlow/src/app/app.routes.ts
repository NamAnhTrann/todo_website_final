import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { KanbardBoardComponent } from './kanbard-board/kanbard-board.component';
import { StockOverviewComponent } from './stock-overview/stock-overview.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  {path: "", component:DashboardComponent},
  {path: "dashboard-main", component:DashboardMainComponent},
  {path: "kanban-board", component:KanbardBoardComponent},
  {path: "stock-overview", component:StockOverviewComponent},
  {path: "login", component:LoginComponent},



];
