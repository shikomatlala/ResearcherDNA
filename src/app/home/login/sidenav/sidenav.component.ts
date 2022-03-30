import { Component, OnInit } from '@angular/core';
//I need to work with services
import { SidenavService } from 'src/app/services/navs/sidenav.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public sideNavService: SidenavService) { }
  ngOnInit(): void {
  
  }
  navProperties =  SidenavService.navProperties;
  changeSideNav()
  {
     this.sideNavService.changeSideNav();
     this.navProperties = SidenavService.navProperties;
  }

}
