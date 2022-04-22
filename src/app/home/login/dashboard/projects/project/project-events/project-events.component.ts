import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-events',
  templateUrl: './project-events.component.html',
  styleUrls: ['./project-events.component.css'],
  
})
export class ProjectEventsComponent implements OnInit {

  constructor() { }
  selected: Date | null | undefined;
  ngOnInit(): void {
  }

}
