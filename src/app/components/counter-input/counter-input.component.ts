import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {
  // @ts-ignore
  @Input() min: number;
  // @ts-ignore
  @Input() max: number;

  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    if (typeof this.max === 'undefined' || this.value < this.max) {
      this.value++;
    }
  }

  decrease() {
    if (typeof this.min === 'undefined' || this.value > this.min) {
      this.value--;
    }
  }


}
