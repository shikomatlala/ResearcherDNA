import { Component, OnInit, ViewChild} from '@angular/core';
//I need to work with services
import { SidenavService } from 'src/app/services/navs/sidenav.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})


export class SidenavComponent implements OnInit {

  constructor(public sideNavService: SidenavService) { 
    
  }
  @ViewChild('profileElement') profileElement: any;
  @ViewChild('projectElement') projectElement: any;
  @ViewChild('chatBoxElement') chatBoxElement: any;


  ngOnInit(): void {
    this.activateProjectElement();
    this.changeSideNav();
    this.navProperties = SidenavService.navProperties;
  }
  
  navProperties =  SidenavService.navProperties;
  changeSideNav()
  {
     this.sideNavService.changeSideNav();
     this.navProperties = SidenavService.navProperties;
  }
  activateProfileElement()
  {
    this.profileElement.nativeElement.style.backgroundColor="rgb(0, 132, 255)";
    this.profileElement.nativeElement.style.color="white";
    this.deactivateProjectElement();
    this.deactivateChaboxElement();
  }
  deactivateProfileElement()
  {
    this.profileElement.nativeElement.style.backgroundColor="white";
    this.profileElement.nativeElement.style.color="black";

  }

  activateProjectElement()
  {
    this.projectElement.nativeElement.style.backgroundColor="rgb(0, 132, 255)";
    this.projectElement.nativeElement.style.color="white";
    this.deactivateProfileElement();
    this.deactivateChaboxElement();
  }

  deactivateProjectElement()
  {
    this.projectElement.nativeElement.style.backgroundColor="white";
    this.projectElement.nativeElement.style.color="black";
  }

  activateChatboxElement()
  {
    this.chatBoxElement.nativeElement.style.backgroundColor="rgb(0, 132, 255)";
    this.chatBoxElement.nativeElement.style.color="white";
    this.deactivateProfileElement();
    this.deactivateProjectElement()
  }

  deactivateChaboxElement()
  {
    this.chatBoxElement.nativeElement.style.backgroundColor="white";
    this.chatBoxElement.nativeElement.style.color="black";
  }


  

}
