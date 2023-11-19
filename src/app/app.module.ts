import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SamplemoduleModule } from './samplemodule/samplemodule.module';
import { Employee } from './employee';

// ngModule decorator basically defines the class AppModule
@NgModule({            // it makes the class AppModule a module
  // below written are metadeta (which help in defining class) 

  declarations: [     //  declare the components that belong to the module   
    AppComponent, 
    StudentComponent   // similar components are grouped in a module
  ],
  imports: [               // mention other angular modules which are used in AppModule
    BrowserModule,
    AppRoutingModule,
    SamplemoduleModule
  ],
  
  // Employee is module lvl class and available to all declared components
  providers: [Employee],                // mention pipe, services, class names

  bootstrap: [AppComponent],    // application kha se boot hoga? phle konsa component load hoga
                // bootstrap metadata is only for root module - AppModule
  exports: []
}) 
export class AppModule { 
  constructor (){
    console.log("AppModule constructor loaded")
  }
}       
