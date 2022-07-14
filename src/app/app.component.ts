import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/core/providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Quiz';

  static isBrowser = new BehaviorSubject<boolean | null>(null);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private userService: UserService
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(this.platformId));
  }

  ngOnInit(): void {
    if (!this.userService.hasId) {
      this.userService.generateId();
    }
  }

}
