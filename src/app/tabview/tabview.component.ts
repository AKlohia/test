import { Component ,Input,OnInit} from '@angular/core';
import { ImagescomponetsComponent } from '../imagescomponets/imagescomponets.component';

@Component({
  selector: 'app-tabview',
  standalone: true,
  imports: [ImagescomponetsComponent],
  templateUrl: './tabview.component.html',
  styleUrl: './tabview.component.scss'
})
export class TabviewComponent implements OnInit{
  list:string[] = ["Home","products","contact","about","login"];

ngOnInit(){
this.list
}
}
