import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  carousel = [
    {
      imageFile: 'back-1.png',
      title: 'Grab 100% up to €200 & 200 Free Spins',
      text: 'Get ready to party with us! Unlock hundreds in bonus cash and collect piles of free spins for 10 days on your first deposit of €20 or more.',
    },
    {
      imageFile: 'back-2.jpg',
      title: 'Win and enjoy!',
      text: 'Get the most of your wins and enjoy your holiday!',
    },
    {
      imageFile: 'back-3.png',
      title: 'Ready for the thrill?',
      text: " Isn't it exciting to win whilst you're enjoying from home.  Then come visit our portal and get your chance to win unlimited prizes that can change your life from today to tomorrow!  Are you ready?",
    },
  ];
}
