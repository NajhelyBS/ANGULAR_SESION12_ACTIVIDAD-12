import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appValidar3]'
})
export class Validar3Directive implements OnInit {

  constructor(private element:ElementRef) {

   }

   ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor ="rgba(128, 128, 128, 0.219)";

   }

   @HostListener('keyup')  onkeyup () {

    var validar = this.element.nativeElement.value.length;

    if (validar > 0){
      this.element.nativeElement.style.backgroundColor ="#11862e65";
      this.element.nativeElement.style.color = "green";
      this.element.nativeElement.style.borderBottom = "2px solid green";
      this.element.nativeElement.style.fontWeight = "570";
    
    }else {
      this.element.nativeElement.style.borderBottom = "2px solid red";
      this.element.nativeElement.style.backgroundColor = "#ed424265";
      this.element.nativeElement.style.color = "red";
      this.element.nativeElement.style.fontWeight = "570";    }

   }
}
