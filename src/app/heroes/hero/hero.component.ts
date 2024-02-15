import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman'
  public age: number = 45

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  get HeroDescription():string{
    return this.name+" - "+this.age+" años"
  }
}
