
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Portfolio Shell - Host Application</h1>
      <div #servermanagerContainer></div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    h1 {
      color: #333;
    }
  `],
  imports: [
    RouterOutlet,
    RouterLink,
]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('servermanagerContainer', { static: true }) container!: ElementRef;
  cleanup?: () => void;

  async ngAfterViewInit() {
    try {
      console.log('Loading servermanager remote...');

      const module = await loadRemoteModule({
        remoteName: 'servermanager',
        exposedModule: './ServerManagerComponent'
      }).then(m => m.bootstrapRemote(this.container.nativeElement))
  .catch(err => console.error(err));

      console.log('ServerManager module loaded:', module);

    } catch (error) {
      console.error('Failed to load servermanager remote:', error);
    }
  }

  ngOnDestroy() {
    this.cleanup?.();
  }
}


