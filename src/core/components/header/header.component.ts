import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public isMenuClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openDropDownMenu(): void {
    this.isMenuClicked ? this.isMenuClicked = false : this.isMenuClicked = true;
  }

}
