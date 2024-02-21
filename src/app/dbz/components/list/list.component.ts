import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power: 10000
  }]

@Output()
public onDelete: EventEmitter<number> = new EventEmitter()
  onDeleteCharacter(index: number):void{
    this.onDelete.emit(index);

  }
}
