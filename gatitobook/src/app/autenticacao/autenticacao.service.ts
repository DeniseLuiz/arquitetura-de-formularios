import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  urlBase = 'http://localhost:3000/'
  constructor( private http: HttpClient ) { }

  autenticar(user: string, senha: string): Observable<any> {
    return this.http.post(`${this.urlBase}user/login`, {
      userName: user,
      password: senha,
    });
  };
}
