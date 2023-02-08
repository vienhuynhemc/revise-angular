import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../../shared/models/hero";
import {HeroService} from "../../../../core/services/hero.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  public heros: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      value => this.heros = value
    );
  }

}
