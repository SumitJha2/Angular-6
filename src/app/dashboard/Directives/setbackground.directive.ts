import { Directive,ElementRef,AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective  {
  e2Rf:ElementRef;
  constructor(elRf:ElementRef) {
   // this.e2Rf=elRf;
    elRf.nativeElement.style.fontSize ="200px"; 
    elRf.nativeElement.style.color = 'blue';  

    
   }
  //  ngAfterViewInit(): void {  
  
  //   //this.e2Rf.nativeElement.style.fontSize ="500px"; 
  //   }  
}
