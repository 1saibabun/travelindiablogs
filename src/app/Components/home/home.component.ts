import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpServiceService } from 'src/app/services/common-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public details: any;
  public travelDetails: any;
  constructor(public commonHttpServiceService: CommonHttpServiceService, public router: Router) { }

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
