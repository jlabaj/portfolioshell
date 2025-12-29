import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ServerDataService } from 'store';
import { firebaseConfig } from './environments/firebase.config';
import { routes } from './app.routes';
import { ServerManagerComponent } from './app/server-manager.component';

export async function bootstrapRemote(container: HTMLElement) {

// Manually attach the component
  // Move the component root element into the shell container
  if (!container) throw new Error('Container not found');

// create the element that Angular will bootstrap
const hostElement = document.createElement('sm-root');
container.appendChild(hostElement);
	const appRef = await bootstrapApplication(ServerManagerComponent, {providers: [importProvidersFrom(BrowserAnimationsModule), provideHttpClient(), provideRouter(routes), provideFirebaseApp(() => initializeApp(firebaseConfig)),
	provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()),
	{
		provide: APP_INITIALIZER,
		useFactory: () => {
			const serverDataService = inject(ServerDataService);
			serverDataService.list()();
			return () => { };
		},
		multi: true,
	},]});

	

  return appRef;
}
