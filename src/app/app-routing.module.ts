import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'starred', component: StarredComponent },
  { path: 'snoozed', component: SnoozedComponent },
  { path: 'sent', component: SentComponent },
  { path: 'drafts', component: DraftsComponent },
  { path: 'important', component: ImportantComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'scheduled', component: ScheduledComponent },
  { path: 'all mail', component: AllMailComponent },
  { path: 'spam', component: SpamComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'social', component: SocialComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'manage labels', component: ManageLabelsComponent },
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
