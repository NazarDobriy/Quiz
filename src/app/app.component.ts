import { Component, OnInit } from '@angular/core';

import { UserService } from '@a-core/providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (!this.userService.hasId) {
      this.userService.generateId();
    }
  }
}
