import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationStyleDirective } from './directive/validation-style.directive';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent,
    ValidationStyleDirective,
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
