import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  urlBase = 'http://localhost:3000/'
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(user: string, senha: string): Observable<HttpResponse<any>> {
    return this.http.post(`${this.urlBase}user/login`, {
      userName: user,
      password: senha,
    },
    {
      observe: 'response'
    }).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  };
}
