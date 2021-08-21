import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router, public utilService: UtilService) { }

  ngOnInit(): void {
  }
  public uiClickYouTube(): void {
    this.utilService.scrollToTop();
    window.open('https://www.youtube.com/c/SaiJyotiVlogs', '_blank');
  }
  public uiContactUs(): void {
    this.utilService.scrollToTop();
    this.router.navigate(['../contactDetails']);
  }
}
