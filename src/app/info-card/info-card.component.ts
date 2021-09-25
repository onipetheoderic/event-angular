import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
  //sending out a custom event called greetEvent
  @Output() greetEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  callParentGreet() {
    this.greetEvent.emit();
  }
}
