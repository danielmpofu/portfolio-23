import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {DOCUMENT} from "@angular/common";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'me-ng';

  // @ts-ignore
  @ViewChild('menu',{static:true}) menu:ElementRef<HTMLDListElement>;
  // @ts-ignore
  @ViewChild('socialIcons',{static:true}) socialIcons:ElementRef<HTMLDListElement>;

constructor(@Inject(DOCUMENT) private document:Document){
}

  ngOnInit(): void {
  gsap.from(
    this.menu.nativeElement.childNodes,
    {duration:2,opacity:0,stagger:0.2,delay:0.5}
  );

    gsap.from(
      this.socialIcons.nativeElement.childNodes,
      {duration:2,opacity:0,stagger:0.2,delay:2.5}
    );

  }

}
