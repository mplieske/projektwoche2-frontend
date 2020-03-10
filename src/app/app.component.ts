import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ok } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projektwoche';
  loggedIn = false;
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    this.ifhome();

  }
  ifhome(){
    if(this.loggedIn == false){
      this.router.navigate(['/login'])


console.log("d")
    }
    console.log("z")
  }
  ok(lloggedIn) {
    console.log("hier")
    this.loggedIn = lloggedIn;
  }
}
