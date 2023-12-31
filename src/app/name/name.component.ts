import { Component,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {

  constructor(private router: Router){}

  name: string = '';
  @Output() nameEvent =  new EventEmitter<string>();

  submitForm() {
    this.nameEvent.emit(this.name);
    this.router.navigate(['dice'])
  }
}
