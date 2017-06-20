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
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { FormsModule } from '@angular/forms';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';


@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailsComponent, ContactsEditorComponent],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ContactService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}
