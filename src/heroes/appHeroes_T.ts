//our root app component
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Hero} from './Hero';
import {SuperTeam} from '../SuperTeam_T';
import {SuperPower} from '../SuperPower';

@Component({
  selector: 'appHeroes',
  templateUrl: 'src/heroes/appHeroes.html'
})

export class AppHeroes {
  public members:Hero[];
  
  constructor() {
    
    //Strong typed ***********************************************************
    //********************** Hero ********************************************
    //Type Hero
    var captainAmerica = new Hero("Captain America");
    var thor = new Hero("Thor"); 
    var ironMan = new Hero("Iron Man"); 
    //Type SuperTeam<Hero>   
    var avengers = new SuperTeam([captainAmerica,thor,ironMan],captainAmerica);
    //Type Hero[]
    this.members = avengers.members; 
    
	}

}  

bootstrap(AppHeroes);