import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../User/Shared/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    alert('sumit');
  }

}
