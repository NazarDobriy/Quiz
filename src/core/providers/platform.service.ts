import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable()
export class PlatformService {
  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
}
