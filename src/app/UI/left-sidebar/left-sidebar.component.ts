import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gm-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  showSubmenu = false;
  showMoreMenu = false;
  @Input() toggleIcon: any;

  styleMenu = (item: any) => {
    return this.router.url === item.menu.toLowerCase() ? 'active-menu' : '';
  };

  handleMenu(item: any) {
    if (item.submenu) {
      this.showSubmenu = !this.showSubmenu;
    } else if (item.moreMenu) {
      this.showMoreMenu = !this.showMoreMenu;
      item.menu = this.showMoreMenu ? 'Less' : 'More';
      item.icon = this.showMoreMenu
        ? 'keyboard_arrow_up'
        : 'keyboard_arrow_down';
    } else {
      // this.router.navigate([currentUrl]);
    }
  }

  categories = [
    { icon: 'people', menu: 'Social', path: 'social', indicator: 2163 },
    { icon: 'update', menu: 'Updates', path: 'updates', indicator: 3918 },
    { icon: 'forum', menu: 'Forum', path: 'forum', indicator: 11 },
    { icon: 'sell', menu: 'Promotions', path: 'promotions', indicator: 2890 },
  ];

  moreMenu = [
    {
      icon: 'label_important',
      menu: 'Important',
      path: 'important',
      indicator: 0,
    },
    { icon: 'chat', menu: 'Chats', path: 'chat', indicator: 0 },
    {
      icon: 'schedule_send',
      menu: 'Scheduled',
      path: 'scheduled',
      indicator: 0,
    },
    { icon: 'mail', menu: 'All Mail', path: 'all mail', indicator: 0 },
    { icon: 'warning', menu: 'Spam', path: 'spam', indicator: 0 },
    { icon: 'restore_from_trash', menu: 'Trash', path: 'trash', indicator: 0 },
    {
      icon: 'more',
      menu: 'Category',
      submenu: this.categories,
    },
  ];

  items: any[] = [
    { icon: 'inbox', menu: 'Inbox', path: 'inbox', indicator: 4055 },
    { icon: 'star', menu: 'Starred', path: 'starred', indicator: 0 },
    { icon: 'snooze', menu: 'Snoozed', path: 'snoozed', indicator: 0 },
    { icon: 'send', menu: 'Sent', path: 'sent', indicator: 0 },
    { icon: 'drafts', menu: 'Drafts', path: 'drafts', indicator: 0 },
    {
      icon: 'keyboard_arrow_down',
      menu: 'More',
      moreMenu: this.moreMenu,
    },
  ];

  extra: any[] = [
    { icon: 'settings', menu: 'Manage labels', path: 'manage labels' },
    { icon: '+', menu: 'Create new label', action: true },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
