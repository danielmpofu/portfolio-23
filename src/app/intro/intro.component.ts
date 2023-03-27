import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {DOCUMENT} from "@angular/common";

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  // @ts-ignore
  @ViewChild('hiText', {static: true}) hiText: ElementRef<HTMLDivElement> ;
  @ViewChild('myName', {static: true}) myName: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('ibdText', {static: true}) ibdText: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('bio', {static: true}) bio: ElementRef<HTMLDivElement> | undefined;

  ngOnInit() {
  this.initScrollAnimations();
  this.initAnimations();
  }

  initScrollAnimations(){

  }

  initAnimations(){
    gsap.from(
      this.hiText?.nativeElement.childNodes,
      {duration:15,opacity:0,y:-20,stagger:0.2,delay:0.5}
    );

    console.log('-->');
  }

}
