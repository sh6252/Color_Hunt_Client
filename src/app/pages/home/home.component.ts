import { Component, inject } from '@angular/core';
import { Pallete } from '../../modules/interfaces';
import { OnePalleteComponent } from '../../components/one-pallete/one-pallete.component';
import { CommonModule } from '@angular/common';
import { PalleteService } from '../../services/pallete.service';

@Component({
  selector: 'app-home',
  imports: [OnePalleteComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly palleteService=inject(PalleteService)
   list:Pallete[]=new Array<Pallete>();

   constructor(){
    //subscribe להרשם לפעולה
    this.palleteService.getAllPalletes().subscribe(response=>this.list=response)
   }
}
