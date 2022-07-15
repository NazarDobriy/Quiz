import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LocalStorageService } from 'src/core/providers/local-storage.service';
import { LocalStorageServerService } from 'src/core/providers/local-storage-server.service copy';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocalStorageService,
      useClass: LocalStorageServerService
    }
  ]
})
export class AppServerModule {}
