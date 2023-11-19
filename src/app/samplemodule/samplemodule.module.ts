import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SamplemoduleModule { 
  constructor(){
    console.log("Sample module constructor called")
  }
}
