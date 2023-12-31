import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  constructor() {}

  @Output() diceNumber = new EventEmitter<number>();
  num: number = 0;
  hold: boolean = false;

  generateNumber(){
    let ranNum = Math.random() * (5-1+1)+1;
    this.num = Math.round(ranNum)
   }

   holdNumber(dice_value:number){
    this.hold = true;
   }

   sendNumber() {
    this.diceNumber.emit(this.num);
    this.hold=true;
   }
}
