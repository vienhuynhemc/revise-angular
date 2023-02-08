import {Component} from '@angular/core';
import {Hero} from "../../../../shared/models/hero";
import {HeroService} from "../../../../core/services/hero.service";
import {ActivatedRoute, Route} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  public hero!: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    let heros: Hero[] = [];
    this.heroService.getHeroes().subscribe(
      value => heros = value
    );
    let idParam: number = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = heros.find(value => value.id == idParam)!;
  }

  public back(): void {
    this.location.back();
  }

}
