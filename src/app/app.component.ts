import { UserDetailsService } from './services/user-details.service';
import { Component, NgModule } from '@angular/core';
import { UserDetails } from './models/user-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eShop-sangram';
  users: UserDetails[] = [];
   userToEdit?: UserDetails;
  constructor(private userDetailsService: UserDetailsService) { }
  ngOnInit(): void{
    this.userDetailsService.getUserDetails().subscribe((result:UserDetails[])=>(this.users=result));
   
  }
   updateUserList(users: UserDetails[]) {
    this.users = users;
  }

  initNewUser() {
    this.userToEdit = new UserDetails();
  }

  editUser(hero: UserDetails) {
    this.userToEdit = hero;
  }
  
}
