import { Component,input } from '@angular/core';
import { Pallete } from '../../modules/interfaces';
import { CommonModule } from '@angular/common';
import { PALLETES_SIZES } from '../../modules/enums';

@Component({
  selector: 'app-one-pallete',
  imports: [CommonModule],
  templateUrl: './one-pallete.component.html',
  styleUrl: './one-pallete.component.css'
})
export class OnePalleteComponent {
  pallete = input<Pallete>()
  size=input<PALLETES_SIZES>(PALLETES_SIZES.MEDIUM)

  getPXSize(){
    return this.size()+'px'
  }
  getBGColorString(value:string|number[]){
    if(typeof value==='string'){
      return value
    }
    else
    return  `rgb(${value.join(',')})`
  }
}
