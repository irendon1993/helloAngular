import { Component } from "@angular/core";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  displayInfo = false;

  displayDetails() {
    if(this.displayInfo === false) {
      this.displayInfo = true;
    }
    else {
      this.displayInfo = false;
    }
   
  }
}

