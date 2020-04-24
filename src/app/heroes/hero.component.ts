import {Component, OnInit} from '@angular/core';

import { Hero }from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

heroes: Hero[];

selectedHero : Hero;
  
  constructor(private heroService:HeroService, private messageService:MessageService) { }

onselect(hero: Hero ):void
{
  this.selectedHero = hero;
  this.messageService.add('HeroService :Selected hero id =${hero.id}');
}

getHeroes():void{
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
}
  ngOnInit() {
    this.getHeroes();
  }

}