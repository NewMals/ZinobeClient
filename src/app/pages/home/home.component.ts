import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User>;

  constructor(private userService: UserService) {
    this.users = new Array<User>();
    this.GetUsers();
  }

  ngOnInit(): void {
  }

  GetUsers(): void {
    this.users = this.userService.Get();
  }
}
