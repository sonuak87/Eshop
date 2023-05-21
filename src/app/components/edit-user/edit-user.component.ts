import { UserDetailsService } from './../../services/user-details.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
 @Input() user?: UserDetails;
 @Output() userUpdated = new EventEmitter<UserDetails[]>();

  constructor(private userDetailsService: UserDetailsService) { }
  ngOnInit(): void { }
  updateUserDetails(user: UserDetails) {
    this.userDetailsService
      .updateUserDetails(user)
      .subscribe((users: UserDetails[]) => this.userUpdated.emit(users));
  }
  deleteUser(user: UserDetails) {
    this.userDetailsService
      .deleteUser(user)
      .subscribe((users: UserDetails[]) => this.userUpdated.emit(users));
  }
  createUser(user: UserDetails) {
    this.userDetailsService
      .createUser(user)
      .subscribe((users: UserDetails[]) => this.userUpdated.emit(users));
  }
}
