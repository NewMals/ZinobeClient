import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  CreateUser(): void{
    this.userService.Create(this.user);
    this.router.navigate(['/home']);
  }


}
