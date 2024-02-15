import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>{{counter}}</h3>

  <button (click)="increasebBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increasebBy(-1)">-1</button>
  <hr>
  `
})

export class CounterComponent {
  counter = 10;

  increasebBy(value:number):void{
    this.counter +=value;
  }

  reset():void{
    this.counter=10
  }
}
