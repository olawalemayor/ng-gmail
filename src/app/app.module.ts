import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { LeftSidebarComponent } from './UI/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './UI/right-sidebar/right-sidebar.component';
import { InboxComponent } from './views/inbox/inbox.component';
import { StarredComponent } from './views/starred/starred.component';
import { SnoozedComponent } from './views/snoozed/snoozed.component';
import { SentComponent } from './views/sent/sent.component';
import { DraftsComponent } from './views/drafts/drafts.component';
import { ImportantComponent } from './views/important/important.component';
import { ChatsComponent } from './views/chats/chats.component';
import { ScheduledComponent } from './views/scheduled/scheduled.component';
import { AllMailComponent } from './views/all-mail/all-mail.component';
import { SpamComponent } from './views/spam/spam.component';
import { TrashComponent } from './views/trash/trash.component';
import { SocialComponent } from './views/social/social.component';
import { UpdatesComponent } from './views/updates/updates.component';
import { ForumsComponent } from './views/forums/forums.component';
import { PromotionsComponent } from './views/promotions/promotions.component';
import { ManageLabelsComponent } from './views/manage-labels/manage-labels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    InboxComponent,
    StarredComponent,
    SnoozedComponent,
    SentComponent,
    DraftsComponent,
    ImportantComponent,
    ChatsComponent,
    ScheduledComponent,
    AllMailComponent,
    SpamComponent,
    TrashComponent,
    SocialComponent,
    UpdatesComponent,
    ForumsComponent,
    PromotionsComponent,
    ManageLabelsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
