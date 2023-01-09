import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Directive({
  selector: '[appValidar2]'
})
export class Validar2Directive  implements OnInit{

  constructor(private email:ElementRef) { }

  ngOnInit(): void {
    this.email.nativeElement.style.backgroundColor ="rgba(128, 128, 128, 0.219)";

    
  }
  
  @HostListener('keyup') onkeyup () {

    var validar  = this.email.nativeElement.value;
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(validar)){
      this.email.nativeElement.style.backgroundColor ="#11862e65";
      this.email.nativeElement.style.color = "green";
      this.email.nativeElement.style.borderBottom = "2px solid green";
      this.email.nativeElement.style.fontWeight = "570";
    } else {
      this.email.nativeElement.style.borderBottom = "2px solid red";
      this.email.nativeElement.style.backgroundColor = "#ed424265";
      this.email.nativeElement.style.color = "red";
      this.email.nativeElement.style.fontWeight = "570";
    }

  }

}
