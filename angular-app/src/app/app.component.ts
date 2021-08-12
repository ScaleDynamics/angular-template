import { Component, OnInit } from '@angular/core';

import Backend from 'backend';
const { hello } = new Backend() as any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  message = '';

  ngOnInit() {
    hello().then((msg: string) => {
      this.message = msg;
    });
  }
}
