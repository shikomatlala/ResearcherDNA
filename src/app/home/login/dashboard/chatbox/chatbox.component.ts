import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor( public datepipe: DatePipe) { }
  @ViewChild('inputChatBox') inputChatBox: any;
  @ViewChild('chatBoxPage') chatBoxPage:any;

  myChat = {
    senderEmail: "shikomatlala@tut.ac.za",
    message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
    datetime: "13:06 09 Apr 2022",
    privilege: true,
    isSender:true
  };


  chats = [{
    senderEmail: "shikomatlala@tut.ac.za",
    message: `Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala\nAll the same awesomeness of SVG comes along for the ride, like flexibility while retaining sharpness. Plus you can do anything a raster graphic can do, like repeat.
    In this video we look at applying a “ripped paper edge” effect to the bottom of a module via background-image on an a pseudo element. Kind of a neat way to do it so the main element itself can have a solid background color we can match and let the page background bleed through the negative space in the SVG. Plus not need any markup to do it.\n
    All the same awesomeness of SVG comes along for the ride, like flexibility while retaining sharpness. Plus you can do anything a raster graphic can do, like repeat.

In this video we look at applying a “ripped paper edge” effect to the bottom of a module via background-image on an a pseudo element. Kind of a neat way to do it so the main element itself can have a solid background color we can match and let the page background bleed through the negative space in the SVG. Plus not need any markup to do it.`,
    datetime: "13:06 09 Apr 2022",
    privilege: true,
    isSender: false
  },
  {
    senderEmail: "leratomatlapa@tut.ac.za",
    message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
    datetime: "10:06 10 Apr 2022",
    privilege: false,
    isSender:false
  },
  {
    senderEmail: "tsholofeloitumeleng@tut.ac.za",
    message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
    datetime: "12:06 10 Apr 2022",
    privilege: false,
    isSender:false
  },
  {
    senderEmail: "jameslivingston@tut.ac.za",
    message: "Morning colleagues I wanted to ask something about research ethics, I have noticed that I am actually allowed to copy someones work - I wanted to confirm the truthfulness of this new discovery \nKindly Shiko Matlala",
    datetime: "8:06 11 Apr 2022",
    privilege: false,
    isSender:false
  }];


  date = new Date();
  sendMessage()
  {
    if(this.inputChatBox.nativeElement.value != "")
    {

      let newChat ={
        senderEmail: "shikomatlala@tut.ac.za",
        message: this.inputChatBox.nativeElement.value,
        datetime: this.datepipe.transform(this.date, 'h:mm a') + " | " + this.datepipe.transform(this.date, ' dd MMM yy'),
        privilege: true,
        isSender: true};
      this.chatBoxPage.nativeElement.scrollTop = this.chatBoxPage.nativeElement.scrollHeight;
      this.chats.push(newChat);
      console.log(this.chats);
      console.log("Scoll Top"+ this.chatBoxPage.nativeElement.scrollTop);
      this.inputChatBox.nativeElement.value = "";
      let height = 0;
      height =  this.chatBoxPage.nativeElement.scrollHeight + 100;
      this.chatBoxPage.nativeElement.scrollTop = height;
    }
  }
  deleteChatMessage()
  {
    
  }
  auto_grow() {
    this.inputChatBox.nativeElement.style.height = "5px";
    this.inputChatBox.nativeElement.style.height = (this.inputChatBox.nativeElement.scrollHeight) + "px";
  }
  ngOnInit(): void {

  }

}
