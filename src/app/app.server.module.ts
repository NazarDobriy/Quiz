import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LocalStorageService } from 'src/core/providers/local-storage.service';
import { LocalStorageServer } from 'src/core/providers/local-storage.server';

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
