import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  @Output() menuEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  menuChange(options: string) {
    this.menuEvent.emit(options);
  }

  logout() {
    if (confirm (' About to logout?')) {
    // This code should work on any JavaScript page to reload the page
      location.reload();
    }
  }
}
