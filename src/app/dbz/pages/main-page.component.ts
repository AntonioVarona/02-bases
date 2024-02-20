import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPagesComponent {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 95000
  },{
    name:'Vejeta',
    power: 75000
  }];

  onNewCharacter(character:Character){
    console.log('MainPage');
    console.log(character);

  }
}
