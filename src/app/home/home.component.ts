import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit() {
    this.links$.subscribe(links => {
      console.log(links);
    });
  }

}
