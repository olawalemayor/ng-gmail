import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  styleUrls: ['../left-sidebar/left-sidebar.component.css'],
  template: `
    <div
      class="menu-item"
      [routerLink]="item.path || null"
      [routerLinkActive]="'active-menu'"
    >
      <div class="icon">
        <span class="material-icons">{{ item.icon }}</span>
        <span class="indicator" *ngIf="item.indicator > 0 && toggleIcon">{{
          item.indicator
        }}</span>
      </div>
      <div class="item" *ngIf="!toggleIcon">
        {{ item.menu }}
      </div>
      <div class="indicator" *ngIf="item.indicator > 0 && !toggleIcon">
        {{ item.indicator | number }}
      </div>
    </div>
  `,
})
export class MainMenuComponent {
  @Input() handleMenu: any;
  @Input() item: any;
  @Input() toggleIcon: any;
}
