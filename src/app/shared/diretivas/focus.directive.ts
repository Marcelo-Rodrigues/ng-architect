import { Directive, Input, OnChanges, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myFocus]'
})
export class FocusDirective implements OnChanges {

  @Input('myFocus') myFocus: boolean;

  constructor(private elementRef: ElementRef,
    private renderer: Renderer) { }

  ngOnChanges() {
    if (this.myFocus) {
      this.renderer
        .invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
    }
  }
}
