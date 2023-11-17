import { Component } from '@angular/core';

// this is root component whose html content is pased in index.html file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello World</h1>',         // either give templateUrl or directly provide html
  styleUrls: ['./app.component.css']       // local css file
})
export class AppComponent { 
  title = 'myapp';
}
