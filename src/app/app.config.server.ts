import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { MyServiceService } from './my-service.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),MyServiceService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
