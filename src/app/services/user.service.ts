import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  Get(): Array<User> {
    let users: Array<User>;
    const local = localStorage.getItem('users');
    users = (local !== null) ? JSON.parse(local) as Array<User> : new Array<User>();
    return users;
  }

  Create(user: User): void {
    let users: Array<User> = new Array<User>();
    users = this.Get();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

}
