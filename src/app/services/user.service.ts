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

  GetUser(id: number): User {
    const users: Array<User> = this.Get();
    const user = users[ users.findIndex(i => i.Id === id)];
    return user;
  }

  GetUserXCedula(cedula: string): User {
    const users: Array<User> = this.Get();
    const user = users[ users.findIndex(i => i.Cedula === cedula)];
    return user;
  }

  Set(user: User): number {
    const users: Array<User> = this.Get();
    user.Id = (users.length > 0) ? users[users.length - 1].Id + 1 : 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user.Id;
  }

}
