import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public myClass = 'red';
  public blockHeight = 200;

  constructor() {
    setTimeout(() => {
      this.myClass = 'green';

      setTimeout(() => {
        this.myClass = 'blue';
        this.blockHeight = 300;
      }, 2000);
    }, 2000);
  }

  ngOnInit() {
  }

}
