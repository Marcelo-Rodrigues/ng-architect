import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[myClickOutListener]'
})
export class ClickOutListenerDirective {
  @Output() clickedOut = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  handleClick(event) {
    if (!this.isInside(event.target)) {
      this.clickedOut.emit();
    }
  }

  isInside(clickedComponent): boolean {

    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        return true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    return false;
  }
}
