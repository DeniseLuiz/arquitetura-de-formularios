import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.getComments(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar() {
    console.log('aqui');
    const comments = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService.addComment(this.id, comments).pipe(
      switchMap(() => this.comentariosService.getComments(this.id)),
      tap(() => {
        this.comentarioForm.reset();
        alert('Comentário salvo!');
      })
    )
  }
}
