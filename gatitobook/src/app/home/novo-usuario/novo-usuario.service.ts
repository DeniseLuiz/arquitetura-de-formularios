import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  urlBase = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<any>{
    return this.http.post(`${this.urlBase}/user/signup`, novoUsuario)
  }

  verificaUsuarioExistente (nomeUsuario: string) {
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
