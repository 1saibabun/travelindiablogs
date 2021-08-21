import { Component, OnInit } from '@angular/core';
import { CommonHttpServiceService } from 'src/app/services/common-http-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public imageDetails: any;
  constructor(public commonHttpServiceService: CommonHttpServiceService) { }

  ngOnInit(): void {
    this.getGalleryLists();
  }
  public getGalleryLists(): void {
    const url = '/assets/data/static/images.json'
        this.commonHttpServiceService.getData(url).subscribe((result: any) => {
            if (result) {
                this.imageDetails = result;
            }
        });
  }
}
