import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-menu',
  styleUrls: ['../left-sidebar/left-sidebar.component.css'],
  template: `
    <div
      class="submenu-item"
      [routerLink]="menu.path || null"
      [routerLinkActive]="'active-menu'"
    >
      <div class="icon">
        <span class="material-icons">{{ menu.icon }}</span>
        <span
          class="indicator-ball"
          *ngIf="menu.indicator > 0 && toggleIcon"
        ></span>
      </div>
      <div class="item" *ngIf="!toggleIcon">{{ menu.menu }}</div>
      <div class="indicator" *ngIf="menu.indicator > 0 && !toggleIcon">
        {{ menu.indicator | number }}
      </div>
    </div>
  `,
})
export class CategoryMenuComponent {
  @Input() handleMenu: any;
  @Input() menu: any;
  @Input() toggleIcon: any;
}
