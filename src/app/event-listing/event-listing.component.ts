import { Component, OnInit } from '@angular/core';

import { CrudService } from '../crud.service';
import { IEventList, IEvent } from '../interface/interface';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css'],
})
export class EventListingComponent implements OnInit {
  showOverlay: boolean = false;
  showSidebar: boolean = false;
  showModal: boolean = false;
  errorList = [];
  weather: string = '';
  loading = true;

  eventsList: any = <IEventList[]>{};

  currentEvent: any = <IEventList>{};

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getList();
  }

  handleModal() {
    this.showOverlay = !this.showOverlay;
  }

  handleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  getList() {
    this.crudService
      .showEvents()
      .subscribe((response) => (this.eventsList = response));
  }

  editEvent(event: IEventList) {
    this.currentEvent = event;
    this.showModal = true;
  }

  onSubmit(event: any) {
    event.preventDefault();
    let obj: IEventList = {
      name: event.target.name.value,
      location: event.target.location.value,
      date: event.target.date.value,
      expectedWeather: this.weather,
      eventId: this.currentEvent.eventId,
      createdAt: this.currentEvent.createdAt,
      _id: this.currentEvent._id,
    };
    this.createEvent(obj);
  }

  createEvent(event: IEventList) {
    this.crudService.updateEvent(event).subscribe(
      (response) => {
        //Next callback
        console.log('response received', response);
        this.getList();
        this.handleModal();
      },
      (error) => {
        console.log(error.error, 'the error list');
        this.errorList = error?.error?.error;
        this.loading = false;
        this.handleModal();
      }
    );
  }

  deleteEvent(event: IEventList) {
    this.crudService.deleteEvents(event).subscribe(
      (response) => {
        console.log('its a successful dele', response);
        this.getList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveWeather() {
    this.weather = 'rainy days ahead';
  }
}
