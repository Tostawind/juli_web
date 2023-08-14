import { Component, ViewChild, ViewChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public socialList = [
    {
      icon: 'assets/icons/instagram.svg',
      url: 'www.instagram.com'
    },
    {
      icon: 'assets/icons/spotify.svg',
      url: 'www.spotify.com'
    },
    {
      icon: 'assets/icons/facebook.svg',
      url: 'www.facebook.com'
    },
  ]

  @ViewChild('coverImage', {static: true })
  coverImage!: ElementRef<HTMLDivElement>;

  @ViewChildren('image')
  image!: QueryList<ElementRef>;

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this._initialAnimations();

  }

  private _initialAnimations() {
    // gsap.to(this.coverImage.nativeElement, {
    //   duration: 1,
    //   rotate: 10
    // });
  }
}
