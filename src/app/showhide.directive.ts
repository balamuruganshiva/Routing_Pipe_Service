import { Directive , ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowhide]'
})
export class ShowhideDirective implements OnInit {

  @Input() appShowHide: string;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.display = this.appShowHide;
   }


}
