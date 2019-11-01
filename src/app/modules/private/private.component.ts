import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  @ViewChild('sidenav', { static: false }) public sidenav;
  public screenWidth: number;


  public constructor() {
    this.screenWidth = window.innerWidth;

    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  sidebarToggle() {
    this.sidenav.toggle();
  }
}
