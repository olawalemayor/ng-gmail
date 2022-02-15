import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import {
  CategoryMenuComponent,
  ExtraMenuComponent,
  LeftSidebarComponent,
  MainMenuComponent,
  MoreMenuComponent,
} from './left-sidebar';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
    MainMenuComponent,
    MoreMenuComponent,
    CategoryMenuComponent,
    ExtraMenuComponent,
    RightSidebarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainMenuComponent,
    MoreMenuComponent,
    CategoryMenuComponent,
    ExtraMenuComponent,
    FooterComponent,
  ],
})
export class UIModule {}
