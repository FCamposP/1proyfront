import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/chat';
import { ChatService } from 'src/app/services/chat.service';
import { ToastrService } from 'ngx-toastr';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userList:IUser[]=[]; 
  showM = false;
  userDM: IUser;
  textMessage:string;
  echo:Echo;
  auth: IUser= JSON.parse(localStorage.getItem('user'));

  constructor(private chatService:ChatService,
    private ts:ToastrService) {
    this.echo=chatService.getSockets();
   }

  ngOnInit(): void {
    this.getDirectMessage();
  }
  showModal(user: IUser){
    if (user.id === this.auth.id) {
      return;
    }
    this.showM = true;
    this.userDM = user;
  }

  closeModal(){
    this.showM = false;
  }

  enviarMessage() {
    
     const socketsID = this.echo.socketId();

    this.chatService.sendDirectMessage(this.textMessage, this.userDM.id, socketsID)
      .subscribe( (resp: any) => {
        console.log(resp);
      })
      this.closeModal();
    this.textMessage = '';
  }

  
  getDirectMessage() {
    console.log('fabri');
    this.echo.private(`channel-direct.${this.auth.id}`)
      .listen('DirectMessageEvent', ((resp: any ) => {
        this.ts.success(resp.response.message, `Mensaje de: ${resp.response.from.name}`, {
          timeOut: 10000,
          positionClass: 'toast-top-center'
        });
      }));
  }

}
