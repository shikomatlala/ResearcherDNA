import { Component, OnInit, ViewChild } from '@angular/core';
import {ApiserviceService} from './../../../../../apiservice.service';
import { ProjectObjectService } from '../project-object.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public globalProjectObject: ProjectObjectService, private service: ApiserviceService) { }
  //Variables to use to update the note.
  @ViewChild('inputNoteTitle') inputNoteTitle: any;
  @ViewChild('inputNoteText') inputNoteText:any;
  //Notes Data
  // newNoteObject: any;
  notesData: any;
  noteObject = ProjectObjectService.noteObject;
  ngOnInit(): void {
    this.service.notes().subscribe((res)=>{
      console.log(res.notes, "res==>");
      this.notesData = res.notes;
    })
    if(ProjectObjectService.projectOpened)
    {
      this.noteObject = ProjectObjectService.noteObject;
      this.openNoteFromProjects();
      console.log(this.noteObject);
      console.log("We are here");
    }
  }
  updateNote(id:any)
  {
    //Check if the note is not empty

  }

  clearNote()
  {
    this.inputNoteText.nativeElement.value = "";
    this.inputNoteTitle.nativeElement.value = "";
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
