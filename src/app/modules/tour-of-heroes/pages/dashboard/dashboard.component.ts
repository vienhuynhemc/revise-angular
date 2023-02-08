import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../../shared/models/hero";
import {HeroService} from "../../../../core/services/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public heros: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      value => this.heros = value
    );
    this.heros = this.heros.slice(0, 3);
  }


}
