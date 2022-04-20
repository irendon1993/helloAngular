import { Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})

export class UsernameComponent implements OnInit {
  currentUser = "Their is no current username"
  username = 'Isaac';
 
 ngOnInit() {
 }

updateUsername()  {
    this.currentUser = "New username is " + this.username;
    console.log(this.username.length);
  }
}