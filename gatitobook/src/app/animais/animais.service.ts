import { environment } from './../../environments/environment.prod';
import { Animais, Animal } from './animais';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private http: HttpClient) { }

  getUserList(userName: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${userName}/photos`);
  }

  getAnimalId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe: 'response'}).
    pipe(
      mapTo(true),
      catchError((err) => {
        return err.status === NOT_MODIFIED ? of(false) : of(true);
      })
    );
  }

}
