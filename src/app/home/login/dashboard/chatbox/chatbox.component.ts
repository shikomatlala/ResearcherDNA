import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor(public datepipe: DatePipe) { }
  @ViewChild('inputChatBox') inputChatBox: any;
  @ViewChild('chatBoxPage') chatBoxPage: any;

  // chatGroups = 





  myChat = {
    senderEmail: "shikomatlala@tut.ac.za",
    message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
    datetime: "13:06 09 Apr 2022",
    privilege: true,
    isSender: true,
    chatGroup: 1,
  };

  chatGroups = [{title: "Noticeboard",groupId: 1,departmentId: 1},
                 {title: "Chat",groupId: 2,departmentId: 1}];

  chats =   [{senderEmail: "shikomatlala@tut.ac.za",
  message: `Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala\nAll the same awesomeness of SVG comes along for the ride, like flexibility while retaining sharpness. Plus you can do anything a raster graphic can do, like repeat.
  In this video we look at applying a “ripped paper edge” effect to the bottom of a module via background-image on an a pseudo element. Kind of a neat way to do it so the main element itself can have a solid background color we can match and let the page background bleed through the negative space in the SVG. Plus not need any markup to do it.\n
  All the same awesomeness of SVG comes along for the ride, like flexibility while retaining sharpness. Plus you can do anything a raster graphic can do, like repeat.
  In this video we look at applying a “ripped paper edge” effect to the bottom of a module via background-image on an a pseudo element. Kind of a neat way to do it so the main element itself can have a solid background color we can match and let the page background bleed through the negative space in the SVG. Plus not need any markup to do it.`,
  datetime: "13:06 09 Apr 2022",
  privilege: true,
  isSender: false,
  groupId: 1,
  chatId: 1
},
{
  senderEmail: "leratomatlapa@tut.ac.za",
  message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
  datetime: "10:06 10 Apr 2022",
  privilege: false,
  isSender: false,
  groupId: 1,
  chatId: 2
},
{
  senderEmail: "tsholofeloitumeleng@tut.ac.za",
  message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
  datetime: "12:06 10 Apr 2022",
  privilege: false,
  isSender: false,
  groupId: 1,
  chatId: 3
},
{
  senderEmail: "jameslivingston@tut.ac.za",
  message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
  datetime: "8:06 11 Apr 2022",
  privilege: false,
  isSender: false,
  groupId: 1,
  chatId: 4
}];


  date = new Date();
  sendMessage() {
    if (this.inputChatBox.nativeElement.value != "") {

      let newMessageId: number = 0;
      newMessageId += this.chats.length;
      console.log("New Message ID " + newMessageId++)
      let newChat = {
        senderEmail: "shikomatlala@tut.ac.za",
        message: this.inputChatBox.nativeElement.value,
        datetime: this.datepipe.transform(this.date, 'h:mm a') + " | " + this.datepipe.transform(this.date, ' dd MMM yy'),
        privilege: true,
        isSender: true,
        groupId: 1,
        chatId: newMessageId
      };
      let scrollTop = this.chatBoxPage.nativeElement.scrollHeight * 2;
      this.chatBoxPage.nativeElement.scrollTop = scrollTop;
      // this.chatBoxPage.nativeElement.scrollTop = (this.chatBoxPage.nativeElement.scrollHeight + parseInt(myNumber));
      this.chats.push(newChat);
      // console.log(this.chats);
      // console.log("Scoll Top " + this.chatBoxPage.nativeElement.scrollTop);
      this.inputChatBox.nativeElement.value = "";
      // this.chatBoxPage.nativeElement.scrollTop;
      // console.log(" new Scoll Top " + this.chatBoxPage.nativeElement.scrollTop);
      // console.log( typeof this.chatBoxPage.nativeElement.scrollTop);

      // (parseInt(this.chatBoxPage.nativeElement.scrollTop) + 200) + "  is the new top")
      // console.log("Scroll top value is " + this.chatBoxPage.nativeElement.scrollTop + 200);
    }
    // this.chatBoxPage.nativeElement.scrollTop = this.chatBoxPage.nativeElement.scrollHeight;
  }
  deleteChatMessage(chatId:number) {
    // delete this.chats[chatId-1];
    console.log(this.chats);
    this.chats.splice(chatId-1, 1);
    console.log(this.chats);
    console.log("I am deleting " + chatId);
    console.log(chatId-1);
    console.log(this.chatBoxPage.nativeElement.scrollTop);
  }

  scrollDown()
  {
    let scrollTop = this.chatBoxPage.nativeElement.scrollHeight * 2;
    this.chatBoxPage.nativeElement.scrollTop = scrollTop;
    this.inputChatBox.nativeElement.style.height = "unset";

  }

  openChatGroup(chatId: any)
  {
    
  }
  auto_grow() {
    this.inputChatBox.nativeElement.style.height = "5px";
    this.inputChatBox.nativeElement.style.height = (this.inputChatBox.nativeElement.scrollHeight) + "px";
  }
  ngOnInit(): void {

  }

}
