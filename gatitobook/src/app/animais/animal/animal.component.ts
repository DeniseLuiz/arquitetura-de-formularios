import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiUrl;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private urlOriginal = '';
  @Input() descricao = '';
  @Input() set url( url: string) {
    this.urlOriginal = url.startsWith('data') ? url : `${API}/imgs/${url}`;
  }
  get url(): string {
    return this.urlOriginal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
