import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  isSidebarOpen: boolean = true;

  // Event to notify parent component
  @Output() sidebarToggled = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggled.emit(this.isSidebarOpen); // Emit updated state
  }
}
