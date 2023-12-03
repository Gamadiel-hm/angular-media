import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '@share/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
