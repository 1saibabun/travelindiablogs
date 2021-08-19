import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public uiClickYouTube(): void {
    window.open('https://www.youtube.com/c/SaiJyotiVlogs', '_blank');
  }
}
