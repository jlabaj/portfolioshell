import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, OnDestroy, signal, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { where } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Server, ServerDataService } from 'store';
import { from, Observable, Subscription } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

function signalFromObservable<T>(obs$: Observable<T>, initial?: T) {
  const sig = signal(initial as T);
  obs$.subscribe(val => sig.set(val));
  return sig;
}

@Component({
	selector: 'sm-overview',
	standalone: true,
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, FormsModule, MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatSidenavModule, DashboardComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CardComponent, MatDividerModule],
})
export class OverviewComponent {
	public serverDataService = inject(ServerDataService);
	public servers$$: Signal<Server[]> = this.serverDataService.servers$$;
	private breakpointObserver = inject(BreakpointObserver);
	public isMobile$$ = signalFromObservable(
    this.breakpointObserver.observe(Breakpoints.Handset)
  );
	public query$$ = this.serverDataService.query$$;
	public search = '';
	private overviewQuery$$ = signal<Server[]>([]);
	private subs = new Subscription();

	public constructor() {
		effect(() => {
			if (this.overviewQuery$$().length > 0) {
				this.servers$$ = this.overviewQuery$$;
			}
		});
	}

	public onSearchChange(): void {
		if (this.search) {
			this.subs.add(from(this.serverDataService.queryData(where('label', '>=', this.search), where('label', '<=', this.search + '\uf8ff'))).subscribe((data) => {
				this.overviewQuery$$.set(data);
			}));
		} else {
			this.servers$$ = this.serverDataService.servers$$;
		}
	}

	public clearSearch(): void {
		this.search = '';
		this.servers$$ = this.serverDataService.servers$$;
	}
}
