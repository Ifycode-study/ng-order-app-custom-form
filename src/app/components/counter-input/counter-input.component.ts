import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements OnInit {
  // @ts-ignore
  @Input() min: number;
  // @ts-ignore
  @Input() max: number;

  disabled = false;

  value = 0;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit(): void { }

  increase() {
    if (typeof this.max === 'undefined') {
      this.value++;
      this.onChange(this.value);
    } else if (this.value < this.max) {
      this.value++;
      this.onChange(this.value);
    }
  }

  decrease() {
    if (typeof this.min === 'undefined') {
      this.value--;
      this.onChange(this.value);
    } else if (this.value > this.min) {
      this.value--;
      this.onChange(this.value);
    }
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
