import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Production optimizations
if (typeof window !== 'undefined') {
  // Disable console logs in production
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    console.log = () => {};
    console.warn = () => {};
    console.info = () => {};
  }
}

bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error('Error starting application:', err);
    // Fallback error handling
    document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;"><h1>Something went wrong</h1><p>Please refresh the page or try again later.</p></div>';
  });
