import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pallete } from '../modules/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PalleteService {

  private readonly baseUrl ='http://localhost:8080'
  private readonly http = inject(HttpClient)

  constructor() { }

  getAllPalette():Observable<Pallete[]>{
      return this.http.get<Pallete[]>(`${this.baseUrl}/pallete/all`)
  }

  createPalette(pallete: Pallete): Observable<Pallete> {
    return this.http.post<Pallete>(
      `${this.baseUrl}/pallete/create`,
      pallete
    );
  }
}