import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.getAnimalId(this.animalId);
  }

  like() {
    this.animaisService.like(this.animalId).subscribe((like) => {
      if(like){
        this.animal$ = this.animaisService.getAnimalId(this.animalId);
      }
    })
  }

  deletePhoto() {
    this.animaisService.deleteAnimal(this.animalId).subscribe(() => {
      this.router.navigate(['/animais/']);
    }, (err)=> {
      console.log(err);
    })
  }
}
