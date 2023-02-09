import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Hero} from "../../shared/models/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {id: 1, name: "herroe afd"},
    {id: 2, name: "herroe afd"},
    {id: 3, name: "herroe afd"},
    {id: 4, name: "herroe afd"},
    {id: 5, name: "herroe afd"},
    {id: 6, name: "herroe afd"},
    {id: 7, name: "herroe afd"},
    {id: 8, name: "herroe afd"},
    {id: 9, name: "herroe afd"},
    {id: 10, name: "herroe afd"},
    {id: 11, name: "herroe afd"},
    {id: 12, name: "herroe afd"},
    {id: 13, name: "herroe afd"},
    {id: 14, name: "herroe afd"},
    {id: 15, name: "herroe afd"},
    {id: 16, name: "herroe afd"},
    {id: 17, name: "herroe afd"},
  ];

  constructor() {
  }

  public getHeroes(): Observable<Hero[]> {
    setTimeout(() => {
      console.log("a")
    }, 1000);
    return of(this.heroes);
  }

  public updateHero(newhero: Hero) {
    let hero: Hero = this.heroes.find(value => value.id == newhero.id)!;
    if (hero) {
      hero.name = newhero.name;
    }
  }

}
