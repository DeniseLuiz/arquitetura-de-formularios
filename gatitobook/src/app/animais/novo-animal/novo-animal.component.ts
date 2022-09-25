import { Router } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  animalForm!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private fb: FormBuilder,
    private animaisService: AnimaisService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalForm = this.fb.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    })
  }

  upload() {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';
    this.animaisService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() => this.router.navigate(['animais']))
        ).subscribe((ev: HttpEvent<any>) => {
          if(ev.type === HttpEventType.UploadProgress){
            const total = ev.total ?? 1;
            this.percentualConcluido = Math.round(100*(ev.loaded/total));
          }
        }, (error) => console.log(error));
  }

  gravaArquivo(ev: any) {
    const [file] = ev?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (evt: any) =>(this.preview = evt.target.result);
    reader.readAsDataURL(file);
  }
}
