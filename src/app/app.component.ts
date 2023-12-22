import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabviewComponent } from './tabview/tabview.component';
import { AttractionCartsComponent } from './attraction-carts/attraction-carts.component';
import { ButtonComponent } from './button/button.component';
import { ThingsToCartsComponent } from './things-to-carts/things-to-carts.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TabviewComponent,AttractionCartsComponent,ButtonComponent,ThingsToCartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  paginationImage_next = "../assets/Path 13.png"
  pageination_prev = "../assets/Path 11.png"
  Image_next_background = "#0D67B3 0% 0% no-repeat padding-box"
  Image_Prev_background = "#0D67B3 0% 0% no-repeat padding-box"

}
