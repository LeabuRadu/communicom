import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rocks';
  showNav = true;
  opened = true;

  toggleSideNav() {
    this.opened = !this.opened
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.showNav) {
      if (event.target.innerWidth < 768) {
        this.opened = false;
      } else {
        this.opened = true;
      }
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 768) {
      return true;
    } else {
      return false;
    }
  }


}
