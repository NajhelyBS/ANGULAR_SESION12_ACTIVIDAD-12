import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidarDirective } from './directive/validar.directive';
import { WebModule } from './web/web.module';
import { Validar2Directive } from './directive/validar2.directive';
import { Validar3Directive } from './directive/validar3.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
