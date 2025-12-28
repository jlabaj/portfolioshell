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
import { ServiceManagerComponent } from './app/server-manager.component';

bootstrapApplication(ServiceManagerComponent, {
	providers: [importProvidersFrom(BrowserAnimationsModule), provideHttpClient(), provideRouter(routes), provideFirebaseApp(() => initializeApp(firebaseConfig)),
	provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()),
	{
		provide: APP_INITIALIZER,
		useFactory: () => {
			const serverDataService = inject(ServerDataService);
			serverDataService.list()();
			return () => { };
		},
		multi: true,
	},],
}).catch((err) => console.error(err));
