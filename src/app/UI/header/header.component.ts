import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  toggled = false;
  toggleState = false;

  logo: string = '../../../assets/images/gmail transparent logo.png';

  showInfo = (icons: HTMLDivElement) => {
    icons.children[1].classList.add('showInfo');
  };

  hideInfo = (icons: HTMLDivElement) => {
    icons.children[1].classList.remove('showInfo');
  };

  toggle() {
    this.toggled = !this.toggled;
    this.toggleState = !this.toggleState;
    this.toggleIcon.emit(this.toggled);
    this.toggleStates.emit(this.toggleState);
  }

  @Output() toggleIcon: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleStates: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}
}
