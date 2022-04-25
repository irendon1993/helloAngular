import { Component } from "@angular/core";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  displayInfo = false;
  logArray = [];

  displayDetails() {
    // if(this.displayInfo === false) {
    //   this.displayInfo = true;
    //   this.logArray.push(this.displayInfo)
    //   console.log(this.logArray)
    // }
    // else {
    //   this.displayInfo = false;
    //   this.logArray.push(this.displayInfo)
    //   console.log(this.logArray)
    // }
    this.displayInfo= !this.displayInfo;
    this.logArray.push(this.logArray.length + 1)
   
  }
}

