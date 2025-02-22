import { Component,input,Input,signal } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
headline = 'Home Page! ';
signalMessage=signal('Signal message from HomeComponent'); //Signal variable

changeMessage() {
  console.log("changeMessage called");
  this.signalMessage.update(() => 'You clicked the button');
  //this.headline = 'You clicked the button';
}
@Input() message: string = 'Hello from child HomeComponent';
}

