import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    fromEvent(window, 'resize')
      .pipe(map(() => window.innerWidth))
      .subscribe(this.screenWidth$);
  }

  getScreenWidth() {
    return this.screenWidth$.asObservable();
  }

  isMobile() {
    return this.screenWidth$.asObservable().pipe(map(width => width < 768));
  }
}
