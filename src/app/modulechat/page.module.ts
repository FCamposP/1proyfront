import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ToastrModule} from 'ngx-toastr';
import { VaciooComponent } from './vacioo/vacioo.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChatComponent,
    UserListComponent,
    ChatBodyComponent,
    VaciooComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ]
})
export class PageModule { }
