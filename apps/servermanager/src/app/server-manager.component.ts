import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ServerDataService } from 'store';
import { NavigationTopComponent } from './components/navigation-top/navigation-top.component';


@Component({
	selector: 'sm-root',
	standalone: true,
	templateUrl: './server-manager.component.html',
	styleUrls: ['./../styles.scss', './server-manager.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, NavigationTopComponent, MatToolbarModule, RouterModule],
})
export class ServerManagerComponent {

	// public serverDataService = inject(ServerDataService);
	// public dataSource$$ = this.serverDataService.list();
}
