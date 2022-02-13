import { Component } from '@angular/core';

@Component({
  selector: 'gm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logo: string = '../assets/images/gmail transparent logo.png';
  contentIsLoaded: boolean = true;
}
