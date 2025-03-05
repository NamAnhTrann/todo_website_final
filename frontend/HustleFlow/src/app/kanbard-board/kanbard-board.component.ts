import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-kanbard-board',
  standalone: true,
  imports: [RouterLink, SideNavbarComponent, HeaderComponent],
  templateUrl: './kanbard-board.component.html',
  styleUrl: './kanbard-board.component.css'
})
export class KanbardBoardComponent {
  isSidebarOpen: boolean = true;


}
