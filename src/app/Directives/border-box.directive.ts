import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderStyle]'
})
export class BorderBoxDirective implements OnChanges {
@Input() hoverColor:string="#0004";
@Input() newHover:string="#0f14";
  constructor(private elem:ElementRef) {
    
    elem.nativeElement.style.border=`2px solid lightblue`;

   }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`3px solid ${this.hoverColor}`
  }

  //  @HostListener('event') functionName(){}
   @HostListener('mouseover') onMouseOver(){
    this.elem.nativeElement.style.boxShadow=`-1px 2px 9px 5px ${this.hoverColor}`
   }
   @HostListener('mouseout') onMouseOut(){
    this.elem.nativeElement.style.boxShadow=`-1px 2px 9px 5px ${this.newHover}`;
   }

}
