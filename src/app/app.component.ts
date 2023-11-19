import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';

// this is root component whose html content is pased in index.html file
@Component({               
  selector: 'app-root',

  templateUrl: './app.component.html',
  // template: '<h1>Hello World</h1>',          // either give templateUrl or directly inline html
  // inline html should be in single line or if u want multiple lines then use ``
  // if we keep both templateUrl and template then templateUrl is loaded

  // local css overrides the global css in styles.css
  styleUrls: ['./app.component.css'],      
  // styleUrls: ['./app.component.css', 'test.css']   // later url overrides the css of previous ones
  // styles: ['h1{background-color:pink}']      // can provide inline css here
  // inline css has more priority than styleUrls

  // By default, Angular trims whitespace characters (such as spaces, tabs, and newlines) in the templates during the compilation process to make the rendered HTML more compact.
  preserveWhitespaces: true,          // provide default space in html template

  // encapsulation: ViewEncapsulation.ShadowDom         // global css will not work in shadowDom
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
  title = 'myapp';

  constructor(private _obj:Employee){         // constructor of Employee class will be called
    _obj.show();
  }

  /*['$event']: This parameter in the @HostListener decorator is used to capture and pass the event object emitted by the event being listened to. It's a reference to the event object itself that holds information about the event, such as the type of event, the target element, key codes, and so on. */
  @HostListener('click', ['$event'])       // HostListner will call the method when click event is listened
  display(){
    alert("hello")
  }
}
