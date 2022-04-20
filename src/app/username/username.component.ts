import { Component, OnInit} from '@angular/core'

@Component({
  selector: 'username',
  templateUrl: './username.component.html'
})

export class UsernameComponent implements OnInit {
  username = '';

  constructor() {
    this.username = 'Tyler';
  }

  ngOnInit() {}

  onUpdateUsername(event: any)  {
    this.username = (<HTMLInputElement>event.target).value;
  }
}