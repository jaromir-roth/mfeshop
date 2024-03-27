import { NgClass } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityInputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="container" [ngClass]="size">
      <button class="decrement" (click)="decrement()">-</button>
      <input type="number" [formControl]="quantity" />
      <button class="increment" (click)="increment()">+</button>
    </div>
  `,
  styleUrl: './quantity-input.component.scss',
})
export class QuantityInputComponent implements OnInit, ControlValueAccessor {
  @Input() size: 'small' | 'large' = 'small';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange: (value: number) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched: () => void = () => {};

  // public quantity = 1;
  public touched = false;

  public min = 1;
  public max = 99;

  public quantity = new FormControl(1, { updateOn: 'blur' });

  public get value() {
    return Number(this.quantity.value);
  }

  public get disabled() {
    return Number(this.quantity.disabled);
  }

  public ngOnInit() {
    this.quantity.valueChanges.subscribe((val) => {
      let value = !val ? 1 : Math.trunc(val);
      if (value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      }
      this.quantity.setValue(value, { emitEvent: false });
      this.onChange(value);
    });
  }

  public writeValue(value: number): void {
    this.quantity.setValue(value);
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.quantity.disable() : this.quantity.enable();
  }

  public increment() {
    if (!this.disabled && this.value < this.max) {
      this.markAsTouched();
      this.quantity.setValue(this.value + 1);
    }
  }

  public decrement() {
    if (!this.disabled && this.value > this.min) {
      this.markAsTouched();
      this.quantity.setValue(this.value - 1);
    }
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
