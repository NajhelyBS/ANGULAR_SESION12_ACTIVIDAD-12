import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidarDirective } from '../directive/validar.directive';
import { Validar2Directive } from '../directive/validar2.directive';
import { Validar3Directive } from '../directive/validar3.directive';



@NgModule({
  declarations: [
    HomeComponent,
    ValidarDirective,
    Validar2Directive,
    Validar3Directive,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    HomeComponent,
    ValidarDirective,
  ]
})
export class WebModule { }
