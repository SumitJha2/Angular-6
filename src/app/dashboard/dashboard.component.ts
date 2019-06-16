import { Component, OnInit,EventEmitter, Output,ElementRef, ViewChild } from '@angular/core' ;
declare const myapp:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('test') test:ElementRef;
  constructor() { }

  ngOnInit() {
    myapp(234);
  }

  @Output() valueChange = new EventEmitter<number>();
  public Counter = 0;

  valueChanged() { // You can give any function name

      this.Counter = this.Counter + 1;
      this.valueChange.emit(this.Counter);
  }
  fireEvent(e)
  {
    alert(this.test);
    this.test.nativeElement.value="sumit";
     this.test.nativeElement.style.backgroundColor="Green";
  }


}
