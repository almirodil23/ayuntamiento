import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes, ExtraOptions } from '@angular/router';
import { routes } from './app.routes';
import { withComponentInputBinding } from '@angular/router';

const routerOptions: ExtraOptions = {
  ...withComponentInputBinding(),
  enableTracing: true // Habilita el rastreo aquí
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
