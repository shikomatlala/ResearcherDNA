import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/services/navs/sidenav.service';
import { DatePipe } from '@angular/common';
import {ApiserviceService} from './../../../../../apiservice.service';
import { ProjectObjectService } from '../project-object.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public sidenavService: SidenavService,public globalProjectObject: ProjectObjectService, private service: ApiserviceService, public datepipe: DatePipe) { }
  //Variables to use to update the note.
  @ViewChild('inputNoteTitle') inputNoteTitle: any;
  @ViewChild('inputNoteText') inputNoteText:any;
  @ViewChild('noteDate') noteDate:any;
  @ViewChild('inputSearchNotes') inputSearchNotes:any;
  public innerWidth: any;
  public innerHeight: any;
  showClear = false;
  notesData: any;
  date = new Date();
  testVariable = "shikomatlala@gmail.com";
  noteObject = ProjectObjectService.noteObject;
  ngOnInit(): void {
    this.service.notes().subscribe((res)=>{
      console.log(res.notes, "res==>");
      this.notesData = res.notes;
      this.innerWidth = (window.innerWidth * 0.823) + "px";
      this.innerHeight= (window.innerHeight * 0.78) + "px";

    })
    if(ProjectObjectService.projectOpened)
    {
      this.noteObject = ProjectObjectService.noteObject;
      this.openNoteFromProjects();
      console.log(this.noteObject);
      console.log("We are here");
    }
  }
  clearInputSearch()
  {
    this.inputSearchNotes.nativeElement.value = "";
    this.showClear = false;
  }
  updateClearButton()
  {
    if(this.inputSearchNotes.nativeElement.value !="")
    {
      this.showClear = true;
    }
    else
    {
      this.showClear = false;
    }
  }
  updateNote(id:any)
  {
    //Check if the note is not empty

  }

  formatDate(date:any)
  {

    return this.datepipe.transform(date, ' dd/MMM/yy');
  }
  formatTime(date:any)
  {
    return this.datepipe.transform(date, ' h:mm a');
  }
  clearNote()
  {
    this.inputNoteText.nativeElement.value = "";
    this.inputNoteTitle.nativeElement.value = "";
    this.noteDate.value = "";
  }

  openNote(id : any)
  { 
    this.service.getNote(id).subscribe((res)=>{
      console.log(res.note, "res==>");
      this.noteObject = res.note;
      this.inputNoteTitle.nativeElement.value = res.note.text;
    })
    //Now when we get the a specific note that we are looking for 
    //Get the elment Id
    //Create a note object somewhere.
    //In order for us to open the note, we firstly need to get the note ID that we want to open and then using that note ID we are going to get the actual note that we are looking for.
  }
  openNoteFromProjects()
  {
    this.noteObject = ProjectObjectService.noteObject;
  }


}
