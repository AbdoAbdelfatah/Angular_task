import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverScale]',
  standalone: true,
})
export class HoverScaleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'translateY(-10px) scale(1.03)';
    this.el.nativeElement.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'translateY(0) scale(1)';
    this.el.nativeElement.style.boxShadow = '';
  }
}
