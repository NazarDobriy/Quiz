import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public isMenuClicked: boolean = false;
  readonly modileWidth: number = 640;

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    if (window.innerWidth > this.modileWidth) {
      this.isMenuClicked = false;
    }
  }

  constructor() { }

  public openDropDownMenu(): void {
    this.isMenuClicked ? this.isMenuClicked = false : this.isMenuClicked = true;
  }

}
