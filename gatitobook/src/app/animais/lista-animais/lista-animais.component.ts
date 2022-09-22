import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais !: Animais;

  constructor(
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => this.animais = this.activatedRouter.snapshot.data['animais']);
    // this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //   switchMap((user) => {
    //     const userName = user.name ?? '';
    //     return this.animaisService.getUserList(userName);
    //   })
    // )
  }
}
