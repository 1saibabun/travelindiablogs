import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public scrollToTop():  void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
