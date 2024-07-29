import { IEventListener } from './Event';
import { WeatherState } from './Weather';

export class WeatherEventListener implements IEventListener<WeatherState> {
  constructor(private name: string) {}

  update({ temp, condition }: Partial<WeatherState>) {
    console.log(`${this.name} onWeatherUpdate`, { temp, condition });

    if (condition === 'Stormy') {
      this.sendSMS(`Alert: Severe weather condition - ${condition}`);
    }
  }

  private sendSMS(message: string) {
    console.log(`Sending SMS: ${message}`);
  }
}

export class HeatEventListener implements IEventListener<WeatherState> {
  constructor(private name: string) {}

  update({ temp }: Partial<WeatherState>) {
    console.log(`${this.name} onHeatUpdate`, temp);

    if (Number(temp?.slice(0, -3)) > 45) {
      console.debug('Alert: it is too hot!');
      // ...
    }
  }
}

export class WindEventListener implements IEventListener<WeatherState> {
  constructor(private name: string) {}

  update({ wind }: Partial<WeatherState>) {
    console.log(`${this.name} onWindUpdate`, { wind });
  }
}
