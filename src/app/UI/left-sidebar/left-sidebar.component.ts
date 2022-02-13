import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gm-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  showSubmenu = false;
  showMoreMenu = false;

  handleMenu(item: any, menuItem: HTMLDivElement) {
    const nav = `/${item.menu.toLowerCase()}`;
    if (item.submenu) {
      this.showSubmenu = !this.showSubmenu;
    } else if (item.moreMenu) {
      this.showMoreMenu = !this.showMoreMenu;
      item.menu = this.showMoreMenu ? 'Less' : 'More';
      item.icon = this.showMoreMenu
        ? 'keyboard_arrow_up'
        : 'keyboard_arrow_down';
    } else if (item.action) {
      console.log('I am working');
    } else {
      this.router.navigate([`${item.menu.toLowerCase()}`]);
      if (nav !== this.router.url) menuItem.classList.remove('active-menu');
      console.log(nav, ' is ', this.route.pathFromRoot);
      menuItem.classList.add('active-menu');
    }
  }

  categories = [
    { icon: 'people', menu: 'Social', indicator: 2163 },
    { icon: 'update', menu: 'Updates', indicator: 3918 },
    { icon: 'forum', menu: 'Forum', indicator: 11 },
    { icon: 'sell', menu: 'Promotions', indicator: 2890 },
  ];

  moreMenu = [
    { icon: 'label_important', menu: 'Important', indicator: 0 },
    { icon: 'chat', menu: 'Chats', indicator: 0 },
    { icon: 'schedule_send', menu: 'Scheduled', indicator: 0 },
    { icon: 'mail', menu: 'All Mail', indicator: 0 },
    { icon: 'warning', menu: 'Spam', indicator: 0 },
    { icon: 'restore_from_trash', menu: 'Trash', indicator: 0 },
    {
      icon: 'more',
      menu: 'Category',
      submenu: this.categories,
    },
  ];

  items: any[] = [
    { icon: 'inbox', menu: 'Inbox', indicator: 4055 },
    { icon: 'star', menu: 'Starred', indicator: 0 },
    { icon: 'snooze', menu: 'Snoozed', indicator: 0 },
    { icon: 'send', menu: 'Sent', indicator: 0 },
    { icon: 'drafts', menu: 'Drafts', indicator: 0 },
    {
      icon: 'keyboard_arrow_down',
      menu: 'More',
      moreMenu: this.moreMenu,
    },
  ];

  extra: any[] = [
    { icon: 'settings', menu: 'Manage labels' },
    { icon: '+', menu: 'Create new label', action: true },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
