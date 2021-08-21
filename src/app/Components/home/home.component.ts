import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpServiceService } from 'src/app/services/common-http-service.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {

  public details: any;
  public travelDetails: any;
  // images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(
      public commonHttpServiceService: CommonHttpServiceService, 
      public router: Router,
      public config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      this.config.interval = 2000;
      this.config.keyboard = true;
      this.config.pauseOnHover = true;
       }

  ngOnInit(): void {
    this.getAllDetails();
    this.getAllTravelLists();
  }

  public getAllDetails(): void {
    const url = '/assets/data/static/details.json'
        this.commonHttpServiceService.getData(url).subscribe((result: any) => {
            if (result) {
                this.details = result;
            }
        });
  }
  public getAllTravelLists(): void {
    const url = '/assets/data/static/travels.json'
        this.commonHttpServiceService.getData(url).subscribe((result: any) => {
            if (result) {
                this.travelDetails = result;
            }
        });
  }
  public clickStateDetails(state): void {
    this.router.navigate(['/stateDetails'],{queryParams: {state: state}})
  }
}
