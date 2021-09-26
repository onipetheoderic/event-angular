import { Component, OnInit } from '@angular/core';

import { CrudService } from '../crud.service';
import { IEvent } from '../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  constructor(private crudService: CrudService, private router: Router) {}
  loading = true;
  successMsg = '';
  isSuccess = false;
  errorList = [];
  weather: string = '';

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault();
    let obj: IEvent = {
      name: event.target.name.value,
      location: event.target.location.value,
      date: event.target.date.value,
      expectedWeather: this.weather,
    };
    this.createEvent(obj);
  }

  createEvent(event: IEvent) {
    this.crudService.createEvent(event).subscribe(
      (response) => {
        //Next callback
        console.log('response received', response);
        this.successMsg = 'event created successfully';
        this.loading = false;
        this.isSuccess = true;
        this.errorList = [];
        this.router.navigate(['/event_listing']);
      },
      (error) => {
        console.log(error.error, 'the error list');
        this.errorList = error?.error?.error;
        this.loading = false;
      }
    );
  }

  saveWeather() {
    this.weather = 'rainy days ahead';
  }
}
