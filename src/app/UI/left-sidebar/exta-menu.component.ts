import { Component, Input } from '@angular/core';

@Component({
  selector: 'extra-menu',
  styleUrls: ['../left-sidebar/left-sidebar.component.css'],
  template: `
    <div
      class="extra-menu-item"
      [routerLink]="item.path || null"
      [routerLinkActive]="'active-menu'"
    >
      <div class="icon">
        <span class="material-icons">{{ item.icon }}</span>
      </div>
      <div class="item" *ngIf="!toggleIcon">
        {{ item.menu }}
      </div>
    </div>
  `,
})
export class ExtraMenuComponent {
  @Input() item: any;
  @Input() toggleIcon: any;
}
