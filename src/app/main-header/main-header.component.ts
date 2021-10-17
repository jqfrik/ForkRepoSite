import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @ViewChild("cookieBanner", { static: false })
  cookieBanner: ElementRef | undefined;
  constructor() { }
  closeButton() {
    this.cookieBanner?.nativeElement.parentNode.remove();
  }
  ngOnInit(): void {
  }

}
