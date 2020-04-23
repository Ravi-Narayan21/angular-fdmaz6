import {Component, OnInit} from '@angular/core';
import { Hero }from '../hero';
import { HEROES }from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

heroes = HEROES;
selectedHero : Hero;
  constructor() { }
onselect( hero:Hero ):void
{
this.selectedHero = hero;
}
  ngOnInit() {
    
  }

}