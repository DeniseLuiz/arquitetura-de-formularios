import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario();
  hiddenLogin = true;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

    ngOnInit(): void {
    }

    logout() {
      this.usuarioService.logout();
      this.router.navigate([''])
    }

}
