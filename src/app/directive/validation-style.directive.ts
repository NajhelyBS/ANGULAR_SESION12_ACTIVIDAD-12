import { Directive } from '@angular/core';
import { ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';


@Directive({
  selector: '[validation]'
})
export class ValidationStyleDirective implements OnInit {

  constructor(private element:ElementRef) {

   }
  

  @Input() color = 'red';
  @Output() sendMessage = new EventEmitter<any>()


  ngOnInit(): void {

  }
}
