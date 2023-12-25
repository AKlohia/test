import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabviewComponent } from './tabview/tabview.component';
import { AttractionCartsComponent } from './attraction-carts/attraction-carts.component';
import { ButtonComponent } from './button/button.component';
import { ThingsToCartsComponent } from './things-to-carts/things-to-carts.component';
import { MyServiceService } from './my-service.service';
// import { FormAppComponent } from './form-app/form-app.component';
// import { FormAppComponent } from './form-app/form-app.component';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TabviewComponent,AttractionCartsComponent,ButtonComponent,ThingsToCartsComponent,
 ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',providers:[MyServiceService]
})



export class AppComponent  {
  title = 'app';
  paginationImage_next = "../assets/Path 13.png"
  pageination_prev = "../assets/Path 11.png"
  Image_next_background = "#0D67B3 0% 0% no-repeat padding-box"
  Image_Prev_background = "#0D67B3 0% 0% no-repeat padding-box"
  message:string= "";
product:Product[] = []
constructor (myservic:MyServiceService){

}

 


}




