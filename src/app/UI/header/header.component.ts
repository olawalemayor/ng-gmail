import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  logo: string = '../../../assets/images/gmail transparent logo.png';

  showInfo = (icons: HTMLDivElement) => {
    icons.children[1].classList.add('showInfo');
  };

  hideInfo = (icons: HTMLDivElement) => {
    icons.children[1].classList.remove('showInfo');
  };

  ngOnInit(): void {}
}
