import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  techNos: any = ["Html & CSS" , "Angular 12", "Flutter", "Laravel", "Spring Boots"];
  constructor() { }

  ngOnInit(): void {
  }

}