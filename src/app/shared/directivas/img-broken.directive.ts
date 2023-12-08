import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true,
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const img = this.elHost.nativeElement;
    console.log('revento');
    img.src = 'assets/svg/imgBroken.svg';
  }

  constructor(private elHost: ElementRef) {}
}
