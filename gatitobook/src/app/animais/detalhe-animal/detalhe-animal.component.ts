import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.getAnimalId(animalId);
  }
}