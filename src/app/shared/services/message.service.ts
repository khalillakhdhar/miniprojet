import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Message } from '../classes/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db: AngularFirestore) { }
  createMessage(msg:any)
  {
    return this.db.collection("Messages").add(msg);
  }
  readMessages()
  {
    return this.db.collection("Messages",ref=>ref.orderBy('date')).snapshotChanges().pipe(
      map(actions => {
      return actions.map((a:any) => {
      const data = a.payload.doc.data() as Message;
      const id = a.payload.doc.id;
      return { id, ...data };
      });
      })
      ); }


  deleteMessage(id:any)
  {
    return this.db.doc("Messages/"+id).delete();
  }
  updateMessage(id:any,msg:any)
  {
    return this.db.doc("Messages/"+id).update(msg);
  }
}
