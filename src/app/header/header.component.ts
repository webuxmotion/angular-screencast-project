import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public myColor = 'red';
  public myBg = 'grey';

  constructor() {
  }

  ngOnInit() {
  }
  
  changeColor(color = 'blue') {
    this.myColor = color;
  }

  changeBg(color = 'blue') {
    this.myBg = color;
  }

}
