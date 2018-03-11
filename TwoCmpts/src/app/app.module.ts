import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1 } from './comp1/comp1.component';
import { Comp2 } from './comp2/comp2.component';
import { SourceComp } from './source-comp/source-comp.component';

import { CompoService } from './services/compo.service';

@NgModule({
  declarations: [
  	Comp1,
  	Comp2,
    SourceComp,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CompoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
