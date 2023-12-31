import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent {
  constructor(private router: Router, private afs: AngularFirestore) {}

  public dice: number[] = [];
  public initial_dice: number[] = []
  public player: string = ''
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5: number = 0;
  num6: number = 0;
  num7: number = 0;
  num8: number = 0;
  num9: number = 0;
  num10: number = 0;
  hold_one:boolean = false;
  hold_two: boolean = false;
  hold_three: boolean = false;
  hold_four: boolean = false;
  hold_five:boolean = false;
  hold_six: boolean = false;
  hold_seven: boolean = false;
  hold_eight: boolean = false;
  hold_nine: boolean = false;
  hold_ten: boolean = false;
  start: boolean = true;
  rolled: boolean = false;
  count: number = 0;
  public intervalId: any;
  isRunning: boolean = false
  timeTaken: any;
  elapsedTime: number = 0;
  tenzied = false;
  stats: Object = {};
  name_entered: boolean = false;

//  receivedNumber(num:number){
//   console.log('allreceived?', num)
//  }

receiveName(name: string)  {
  this.player = name
  this.name_entered = true;
  console.log(name)
}

 startTimer(){
  this.isRunning=true;
  let startTime = Date.now() - this.elapsedTime;

  this.intervalId = setInterval(() => {
    this.elapsedTime = Date.now() - startTime
  },1000);  
 }

 stopTimer() {
  if(this.intervalId){
    this.timeTaken = this.intervalId
    console.log(this.timeTaken)
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isRunning = false;
  }
 }

 rollDice(){
  this.startTimer()
  let initial_roll = [0,0,0,0,0,0,0,0,0,0]
  this.initial_dice = initial_roll.map((num)=>num + this.generateNumber())
  this.num1 = this.initial_dice[0]
  this.num2 = this.initial_dice[1]
  this.num3 = this.initial_dice[2]
  this.num4 = this.initial_dice[3]
  this.num5 = this.initial_dice[4]
  this.num6 = this.initial_dice[5]
  this.num7 = this.initial_dice[6]
  this.num8 = this.initial_dice[7]
  this.num9 = this.initial_dice[8]
  this.num10 = this.initial_dice[9]
  this.start = false;
  this.rolled = true;
  this.isRunning = true;
 }

 rollRemainingDice() {
  this.count++
  console.log(this.dice)
  if(this.dice.every(num=>num==this.dice[0])){
    console.log('matches')
  }
  else{
    alert('Your held dice do not match')
    this.router.navigate(['/'])
    return;
  }
  if(!this.hold_one){
    this.generateRandomNumber1();
  }
  if(!this.hold_two){
    this.generateRandomNumber2();
  }
  if(!this.hold_three){
    this.generateRandomNumber3();
  }
  if(!this.hold_four){
    this.generateRandomNumber4();
  }
  if(!this.hold_five){
    this.generateRandomNumber5();
  }
  if(!this.hold_six){
    this.generateRandomNumber6();
  }
  if(!this.hold_seven){
    this.generateRandomNumber7();
  }
  if(!this.hold_eight){
    this.generateRandomNumber8();
  }
  if(!this.hold_nine){
    this.generateRandomNumber9();
  }
  if(!this.hold_ten){
    this.generateRandomNumber10();
  }
 }

 generateNumber(){
  let ranNum = Math.random() * (5-1+1)+1;
  const num1 = Math.round(ranNum)
  return num1
 }

 generateRandomNumber1() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num1 = Math.round(random_num)
 }

 generateRandomNumber2() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num2 = Math.round(random_num)
 }

 generateRandomNumber3() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num3 = Math.round(random_num)
 }

 generateRandomNumber4() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num4 = Math.round(random_num)
 }

 generateRandomNumber5() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num5 = Math.round(random_num)
 }

 generateRandomNumber6() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num6 = Math.round(random_num)
 }

 generateRandomNumber7() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num7 = Math.round(random_num)
 }

 generateRandomNumber8() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num8 = Math.round(random_num)
 }

 generateRandomNumber9() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num9 = Math.round(random_num)
 }

 generateRandomNumber10() {
  let random_num = Math.random() * (5-1+1)+1;
  this.num10 = Math.round(random_num)
 }

  holdNumber1(dice_value:number){
  this.dice.push(dice_value)
  this.hold_one = true;
 }
 holdNumber2(dice_value:number){
  this.dice.push(dice_value)
  this.hold_two = true;
 }
 holdNumber3(dice_value:number){
  this.dice.push(dice_value)
  this.hold_three = true;
 }
 holdNumber4(dice_value:number){
  this.dice.push(dice_value)
  this.hold_four = true;
 }
 holdNumber5(dice_value:number){
  this.dice.push(dice_value)
  this.hold_five = true;
 }
 holdNumber6(dice_value:number){
  this.dice.push(dice_value)
  this.hold_six = true;
 }
 holdNumber7(dice_value:number){
  this.dice.push(dice_value)
  this.hold_seven = true;
 }
 holdNumber8(dice_value:number){
  this.dice.push(dice_value)
  this.hold_eight = true;
 }
 holdNumber9(dice_value:number){
  this.dice.push(dice_value)
  this.hold_nine = true;
 }
 holdNumber10(dice_value:number){
  this.dice.push(dice_value)
  this.hold_ten = true;
 }
 finished(){
  this.isRunning = false;
  const totalSeconds = Math.floor(this.elapsedTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  this.tenzied = true;
  console.log(minutes,seconds)
  if(this.dice.every(num=>num== this.dice[0]) && this.dice.length==10){
    console.log('Success!!')
    }
  else if(this.dice.length<10){
    alert('You still have dice remaining');
    return
    }
  else{
    alert('Your held dice do not match')
    this.router.navigate(['stats'])
    return;
    }
  if(minutes==0){
    this.timeTaken = `${seconds} seconds`
    console.log(minutes)
    }
  if(minutes>0){
    this.timeTaken = (`${minutes} minutes and ${seconds} seconds`);
    console.log(seconds)
    }
  this.stats = {'Name': this.player, 'Game': 'Tenzies','Attempts': this.count, 'Time': this.timeTaken, 'Date':Date.now()}
  this.afs.collection('stats').add(this.stats)
  this.router.navigate(['stats'])
  }
}
