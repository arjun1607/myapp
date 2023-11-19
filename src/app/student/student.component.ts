import { Component } from '@angular/core';
import { Cmplvlclass } from '../cmplvlclass';

// we can create component lvl class here only
class abc {
  constructor(){
      console.log("abc  constructor called......");
  }
  display(name:string){
      console.log("Hello " + name);
  }
}

@Component({
  selector: 'app-student',                // select by element name
  // selector: '.app-student',                  // select by class name
  // selector: '[app-student]',                 // select by attribute
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'], 
  viewProviders: [Cmplvlclass, abc]
})
export class StudentComponent {
  constructor(private _obj:Cmplvlclass, private _obj2:abc){
    _obj.show();
    _obj2.display("Arjun");
  }
}
