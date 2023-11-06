import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chage-number',
  templateUrl: './chage-number.component.html',
  styleUrls: ['./chage-number.component.css']
})
export class ChageNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()
  constructor(){ }
  ngOnInit(): void{

  }
  handleClick(): void{
    this.changeNumber.emit();
  }
}
