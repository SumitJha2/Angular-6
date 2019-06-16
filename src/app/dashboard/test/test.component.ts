import { Component, OnInit, Input } from '@angular/core';
import {SetbackgroundDirective} from '../Directives/setbackground.directive'


@Component({
  selector: 'child-test',
  template: "<div appSetbackground (mouseover)=mousehover($element)>{{parentCount}}</div>",
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Input() parentCount:number;

  constructor() { }

  ngOnInit() {
    this.parentCount=this.parentCount+1;
  }
  mousehover(t:HTMLElement)
  {
    alert(t.innerHTML)
    //t.style.backgroundColor = 'red';  
    
  }
}
