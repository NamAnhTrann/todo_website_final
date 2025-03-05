import { Component } from '@angular/core';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [SideNavbarComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css'
})
export class DashboardMainComponent {

}
