import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      fullName: ['',
      [Validators.required,
      Validators.minLength(4)]
    ],
      userName: ['', [Validators.required, minusculoValidator]],
      password: [''],
    });
  };

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }

}
