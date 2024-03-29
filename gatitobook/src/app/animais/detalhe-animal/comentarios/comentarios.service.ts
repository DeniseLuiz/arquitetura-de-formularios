import { Comentario, Comentarios } from './comentario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

const API =   environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  addComment(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, commentText)
  }
}
