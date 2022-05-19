import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isMenuClicked: boolean = false;

  constructor() { }

  public openDropDownMenu(): void {
    this.isMenuClicked ? this.isMenuClicked = false : this.isMenuClicked = true;
  }

}
