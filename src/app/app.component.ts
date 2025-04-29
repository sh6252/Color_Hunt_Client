import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreatePalleteComponent } from './pages/create-pallete/create-pallete.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,CreatePalleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-hunt-client';
}
