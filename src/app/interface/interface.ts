export interface ICarousel {
  imageFile: string;
  title: string;
  text: string;
}

export interface ICard {
  title: string;
  subtitle: string;
  description: string;
}

export interface IEvent {
  name: string;
  location: string;
  expectedWeather: string;
  date: string;
}

export interface IEventList {
  name: string;
  location: string;
  expectedWeather: string;
  date: string;
  _id: string;
  eventId: string;
  createdAt: string;
}
