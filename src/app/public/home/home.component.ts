import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth >= 1200 && screen.width>screen.height){
      let body = document.body;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = '';
      script.src="assets/main.js";
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    }
  }
  

}
