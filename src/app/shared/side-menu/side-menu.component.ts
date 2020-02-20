import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent{

  @Output() navigate: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  selectedItem:string = null;
  logout(): void {

    this.redirectTo('/login');
  }

  redirectTo(uri: string) {
    this.selectedItem = uri
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.navigate.emit(true);
      this.router.navigate([uri]);
    });
  };

}
