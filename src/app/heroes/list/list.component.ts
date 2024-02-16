import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heronNames:string[]=['Spiderman','Ironman','Hulk','Thor','Ant-Man','She-Hulk']
  public deleteHero?: string = ''

  removeLastHero():void{
    this.deleteHero=this.heronNames.pop()
  }
}
