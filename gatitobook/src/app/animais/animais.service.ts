import { environment } from './../../environments/environment.prod';
import { Animais, Animal } from './animais';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private http: HttpClient) { }

  getUserList(userName: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${userName}/photos`);
  }

  getAnimalId(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }
}
