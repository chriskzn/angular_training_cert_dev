import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {mockingInterceptor} from '../main';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([mockingInterceptor])),
    provideRouter(routes)
  ]
};
