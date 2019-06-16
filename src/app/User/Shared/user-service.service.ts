import { Injectable } from '@angular/core';
import {User} from '../Shared/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
public selectedUser:User
  constructor() { 
    this.selectedUser=new User();
  }
}
