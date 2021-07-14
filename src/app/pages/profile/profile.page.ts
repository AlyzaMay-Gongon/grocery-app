import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  storePage(){
    this.router.navigate(['storePage'])
  }

  homepagePage(){
    this.router.navigate(['homepage'])
  }

  recentsPage(){
    this.router.navigate(['recents'])
  }

  favoritesPage(){
    this.router.navigate(['favorites'])
  }

  profilePage(){
    this.router.navigate(['profile'])
  }

}
