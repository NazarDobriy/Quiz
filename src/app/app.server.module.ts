import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LocalStorageServer } from '@a-core/providers/local-storage.server';
import { LocalStorageService } from '@a-core/providers/local-storage.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocalStorageService,
      useClass: LocalStorageServer
    }
  ]
})
export class AppServerModule {}
