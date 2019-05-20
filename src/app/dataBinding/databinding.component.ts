import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './dataBinding.component.html',
  styleUrls: ['./dataBinding.component.css']
})

export class DataBindingComponent {
  numbersToPrint = [];
  isClicked = false;
  timesClicked = 0;
  clicksToPrint = [];

  displaySecret() {
    this.isClicked = true;
  }

  countClicks() {
    if(!this.isClicked) {
      this.displaySecret();
    }
    this.timesClicked++
    this.clicksToPrint.push(this.timesClicked);
  }


}
