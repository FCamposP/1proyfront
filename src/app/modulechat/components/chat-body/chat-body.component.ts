import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit {

  @Input() messages:IMessage[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
