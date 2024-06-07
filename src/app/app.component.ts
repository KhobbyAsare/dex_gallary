import { HttpClient } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { of, concatMap } from 'rxjs';
import { AutoScrollComponent } from './components/auto-scroll/auto-scroll.component';
import { InteractiveNavigatioBarComponent } from './components/interactive-navigatio-bar/interactive-navigatio-bar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    AutoScrollComponent,
    InteractiveNavigatioBarComponent,
    LandingPageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'New_Angular_Space';
  private route = inject(Router);
  constructor(private http: HttpClient) {
    this.route.events.subscribe((event) => {
      // Only store the route if it's not '/'
      // console.log(this.route.url);
      localStorage.setItem('lastRoute', this.route.url);
      // if (this.route.url !== '/') {
      //

      //   this.serviceSurveyId.surveyIdData.subscribe({
      //     next: (res) => {
      //       if (res) {
      //         localStorage.setItem('surId', res);
      //       }
      //     },
      //   });
      // }
    });
  }

  ngOnInit(): void {
    // let currentRoute: string = localStorage.getItem('lastRoute') as string;

    // if (currentRoute) {
    //   this.route.navigateByUrl(currentRoute);
    // }
  }
}
