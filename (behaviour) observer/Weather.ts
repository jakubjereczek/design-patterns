import { EventManager } from './Event';

const weatherConditions = ['Sunny', 'Rainy', 'Cloudy', 'Snowy', 'Stormy'];

export interface WeatherState {
  temp: string;
  condition: string;
  wind: string;
  ts: number;
}

export class WeatherController extends EventManager<WeatherState> {
  constructor() {
    super();
    window.setInterval(() => {
      this.notify('weatherUpdate', {
        temp: `${Math.floor(Math.random() * 35)} °C`,
        condition:
          weatherConditions[
            Math.floor(Math.random() * weatherConditions.length)
          ],
        ts: Date.now(),
      });
      this.notify('heatUpdate', {
        temp: `${Math.floor(Math.random() * 50)} °C`,
        ts: Date.now(),
      });
      this.notify('windUpdate', {
        wind: `${Math.floor(Math.random() * 50)} km/h`,
        ts: Date.now(),
      });    
    }, 10000);
  }
}
