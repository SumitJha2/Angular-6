import {Role} from './role.model'
export class User {
    UserId :string;
    Password :string;
    Token :string;
    DateTime :Date;
    RoleList:Role[];
   
}
