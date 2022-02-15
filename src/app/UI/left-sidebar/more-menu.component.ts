import { Component, Input } from '@angular/core';

@Component({
  selector: 'more-menu',
  styleUrls: ['../left-sidebar/left-sidebar.component.css'],
  template: `
    <div
      class="more-menu-item"
      [routerLink]="moreItem.path || null"
      [routerLinkActive]="'active-menu'"
    >
      <div class="icon">
        <span class="material-icons">{{ moreItem.icon }}</span>
        <span
          class="indicator-ball"
          *ngIf="moreItem.indicator > 0 && toggleIcon"
        ></span>
      </div>
      <div class="item" *ngIf="!toggleIcon">
        {{ moreItem.menu }}
      </div>
      <div class="indicator" *ngIf="moreItem.indicator > 0 && !toggleIcon">
        {{ moreItem.indicator | number }}
      </div>
    </div>
  `,
})
export class MoreMenuComponent {
  @Input() handleMenu: any;
  @Input() moreItem: any;
  @Input() toggleIcon: any;
}
