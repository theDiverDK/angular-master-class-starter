import { Contact } from './models/contact';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { ContactService} from './contact.service'

import { ContactsAppComponent } from './app.component';
import { ContactService } from "./contact.service";

@NgModule({
  declarations: [ContactsAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule, MdListModule,
    FlexLayoutModule
  ],
  providers: [ContactService],
  bootstrap: [ContactsAppComponent]
})

export class ContactsModule {
}
