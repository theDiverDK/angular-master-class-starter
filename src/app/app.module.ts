import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { EventBusService } from './shared/eventBusService';
import { RouterModule } from '@angular/router'
import { APP_ROUTES } from './app.routes'
import { HttpModule } from '@angular/http';

import { Contact } from './models/contact';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './app.component';
import { ContactService } from './contact.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-detail/contacts-detail.component';
import { FormsModule } from '@angular/forms';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';


@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailsComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    ContactsHeaderComponent],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ContactService, EventBusService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}
