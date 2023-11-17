import { Component } from '@angular/core';

// this is root component whose html content is pased in index.html file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello World</h1>',          // either give templateUrl or directly inline html
  styleUrls: ['./app.component.css']            // local css file
  // styles: ['h1{background-color:pink}']      // can provide inline css here
})
export class AppComponent { 
  title = 'myapp';
  constructor (){
    console.log("AppComponent constructor called")
  }
}
