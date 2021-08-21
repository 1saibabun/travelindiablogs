import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Darshan';
  private scrollPosition: boolean;
  constructor(public locStrat: LocationStrategy, public router: Router){}

  async ngOnInit(){
    this.locStrat.onPopState(() => {
      this.scrollPosition = true;
    });
    this.router.events.subscribe(event => {
      //scroll to top if accessing a page, not via browser history stack
      if(event instanceof NavigationEnd && !this.scrollPosition){
        window.scrollTo(0, 0);
        this.scrollPosition = false;
      }
      //Ensure that scrollPosition is reset
      if(event instanceof NavigationEnd){
        this.scrollPosition = false;
      }
    })
  }
}
