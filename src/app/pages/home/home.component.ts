import { Component } from '@angular/core';
import { Pallete } from '../../modules/interfaces';
import { OnePalleteComponent } from '../../components/one-pallete/one-pallete.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [OnePalleteComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   list:Pallete[]=new Array<Pallete>();

   constructor(){
    this.list.push({id:'#002030#103040#103545#104955',colors:['#002030','#103040','#103545','#104955']})
    this.list.push({id:'#155962#207379#259090#30a0a5',colors:['#155962','#207379','#259090','#30a0a5']})
    this.list.push({id:'#155962#207379#259090#30a0a5',colors:['#35a7aa','#35abb0','#40b2c1','#40bfcf']})
    
   }
}
