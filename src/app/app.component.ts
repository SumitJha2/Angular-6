import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pragati';
  constructor(private router: Router) {}
  ngOnInit()
  {
   
    //this.router.navigate(['/login']);
    let element:HTMLElement=document.getElementById("lgnbtn") as HTMLElement;
    // alert(element);
    // element.click();
  }
}
