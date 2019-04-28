import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items: string[];

  constructor() { }

  ngOnInit() {
    const nums = Array.apply(null, new Array(16)).map((elem, index) => index + 1)
    this.items = nums.map(d => `avatars:svg-${d}`)
  }

}
