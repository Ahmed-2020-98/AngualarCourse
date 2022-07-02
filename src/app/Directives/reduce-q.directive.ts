import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appReduceQ]'
})
export class ReduceQDirective {

  constructor(private elem:ElementRef) { 


  }

 
}
