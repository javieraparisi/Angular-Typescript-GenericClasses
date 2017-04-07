//our root app component
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Hero} from './Hero';
import {SuperTeam} from './SuperTeam';
import {SuperPower} from './SuperPower';



@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html'
})

export class App {
  fakeArray = new Array(12);
  public members:Hero[];
  
  constructor() {
    
    //Strong typed ***********************************************************
    //********************** Hero ********************************************
    //Type Hero
    var captainAmerica = new Hero("Captain America");
    var thor = new Hero("Thor"); 
    var ironMan = new Hero("Iron Man"); 
    //Type SuperTeam   
    var avengers = new SuperTeam([captainAmerica,thor,ironMan],captainAmerica);
    //Type SuperPower
    this.members = avengers.members; 
    
	}

}  

bootstrap(App);