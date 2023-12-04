import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from '@share/components/media-player/media-player.component';
import { SideBarComponent } from '@share/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SideBarComponent, RouterModule, MediaPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
