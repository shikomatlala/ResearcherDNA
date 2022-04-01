import { Component } from '@angular/core';
// import * as myGlobals from 'globals'; //<==== this one (**Updated**)
import {GlobalVariables} from './globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'frontend';
  // showElement: boolean | undefined;
  showElement =  true;
  ngOnInit(): void {
    // this.showElement = GlobalVariables.isToBeShown;
    console.log("Its to be shown 1 " + this.showElement);
  }

  checkIsToBeShown()
  {
    this.showElement = GlobalVariables.isToBeShown;
  }
}


