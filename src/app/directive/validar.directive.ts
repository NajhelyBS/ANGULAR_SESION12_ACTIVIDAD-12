import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[validar]'
})
export class ValidarDirective implements OnInit {

  constructor(private miElemento:  ElementRef) { 
    console.log('Directiva input works')
  }

  ngOnInit(): void {
    this.miElemento.nativeElement.style.backgroundColor ="rgba(128, 128, 128, 0.219)";

  }

  @HostListener('keyup') onkeyup() {

    let valLength = this.miElemento.nativeElement.value.length;
   
    if(valLength >= 12){
      this.miElemento.nativeElement.style.backgroundColor ="#11862e65";
      this.miElemento.nativeElement.style.color = "green";
      this.miElemento.nativeElement.style.borderBottom = "2px solid green";
      this.miElemento.nativeElement.style.fontWeight = "570";
    } else{
      this.miElemento.nativeElement.style.borderBottom = "2px solid red";
      this.miElemento.nativeElement.style.backgroundColor = "#ed424265";
      this.miElemento.nativeElement.style.color = "red";
      this.miElemento.nativeElement.style.fontWeight = "570";
      
    }

  }


}