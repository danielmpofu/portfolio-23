import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {DOCUMENT} from "@angular/common";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(@Inject(DOCUMENT) private document:Document){
  }

  ngOnInit(): void {
  }

}
