import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MainMenu,
  OptionsNav,
  listNavInit,
  optionsNavInit,
} from 'src/app/core/ListNav';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  itemsNav: MainMenu = listNavInit;
  optionsNav: OptionsNav[] = optionsNavInit;
}
