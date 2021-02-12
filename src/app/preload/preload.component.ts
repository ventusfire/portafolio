import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {
  public load = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 110); /*11000*/
  }

}
