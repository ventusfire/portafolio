import { Component, OnInit } from '@angular/core';

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
    }, 11000); /*11000*/
  }

}
