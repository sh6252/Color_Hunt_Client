import { Component } from '@angular/core';
import { Pallete } from '../../modules/interfaces';
import { PALLETES_SIZES } from '../../modules/enums';
import { OnePalleteComponent } from '../../components/one-pallete/one-pallete.component';

@Component({
  selector: 'app-create-pallete',
  imports: [OnePalleteComponent],
  templateUrl: './create-pallete.component.html',
  styleUrl: './create-pallete.component.css'
})
export class CreatePalleteComponent {
newPallete:Pallete={colors:[[225,225,225],[218,218,218],[185,185,185],[164,164,164]]}
palleteSize=PALLETES_SIZES.LARGE
}
