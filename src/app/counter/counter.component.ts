import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number = 0;

  increment() {
    console.log('increment called');
    this.counter = this.counter + 2;
  }

  decrement() {
    console.log('decrement called');
    this.counter = this.counter - 2;
  }

  reset() {
    console.log('reset called');
    this.counter = 0;
  }

}
