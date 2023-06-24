import { Component } from '@angular/core';
import { Message } from '../shared/classes/message';
import { MessageService } from '../shared/services/message.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: any;
  message=new Message();
  currentUser=JSON.parse(localStorage.getItem("current")||'')||"";
username=""
  constructor(private messageService: MessageService)
  {
    this.username=this.currentUser.nom+" "+ this.currentUser.prenom;


  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.getMessages();
  }
  getMessages()
  {
    this.messageService.readMessages().subscribe((data:any)=>
    {
      this.messages=data;
      console.log("msg",this.messages)
    }

    )

  }
  send()
  {
    this.message.date=Date.now();
    this.message.sender=this.username;
    let msg=Object.assign({},this.message);
    this.messageService.createMessage(msg);
    this.message=new Message();
  }

  deconnexion()
  {
    localStorage.clear();
    window.location.replace("/auth")
  }
}
