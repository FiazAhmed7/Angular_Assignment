import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseover') onFocus(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

}
