
import { Router, Routes } from '@angular/router'
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const APP_ROUTES: Routes = [
  { path: 'contact/:id', component: ContactsDetailsComponent },
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: '**', redirectTo: '/' }
]
