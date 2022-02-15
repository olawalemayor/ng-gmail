import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logo: string = '../assets/images/gmail transparent logo.png';
  contentIsLoaded: boolean = true;
  toggleIcon: boolean = false;
  toggleState: boolean = false;
  statedClass = '';
  pageStyleClass = '';

  changeToggle(event: any) {
    this.toggleIcon = event;
  }

  setToggleState(event: any) {
    this.toggleState = event;
  }

  hoverSidebar = () => {
    if (this.toggleState)
      setTimeout(() => {
        this.toggleIcon = !this.toggleIcon;
        this.statedClass = ' position-leftbar';
        this.pageStyleClass = 'padded-page';
      }, 500);
    this.statedClass = '';
    this.pageStyleClass = '';
  };

  toggleClass = () => {
    return this.toggleIcon ? 'adjust-leftbar' : 'left-sidebar';
  };

  ngOnInit(): void {}
}
