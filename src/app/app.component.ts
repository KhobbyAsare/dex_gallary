import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of, concatMap } from 'rxjs';
import { AutoScrollComponent } from "./components/auto-scroll/auto-scroll.component";
import { InteractiveNavigatioBarComponent } from "./components/interactive-navigatio-bar/interactive-navigatio-bar.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.concatMapExample();
  }

  getData1() {
    return this.http.get('https://api.example.com/data1');
  }

  concatMapExample() {
    of(1, 2, 3)
      .pipe(concatMap((val) => 'hello'))
      .subscribe((data) => {
        console.log('concatMap:', data);
      });
  }
}
