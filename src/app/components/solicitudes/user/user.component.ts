import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Output() NewUser = new EventEmitter<User>();
  @Input() user: User;
  @Input() Habilitar: boolean;

  constructor(
    private userService: UserService
  ) {
    this.user = new User();
    this.Habilitar = true;
  }

  ngOnInit(): void {}

  ConsultarUsuario(): void {
    const user = this.userService.GetUserXCedula(this.user.Cedula);
    if (user !== undefined) {
      this.user = user;
      this.Habilitar = false;
    } else {
      this.Habilitar = true;
    }
  }

  EmitirUser(): void {
    this.NewUser.emit(this.user);
  }
}
