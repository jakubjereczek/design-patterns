import {
  HeatEventListener,
  WeatherEventListener,
  WindEventListener,
} from './Listener';
import { WeatherController } from './Weather';

const controller = new WeatherController();

const weather = new WeatherEventListener('Weather');
const heat = new HeatEventListener('Heat');
const wind = new WindEventListener('Wind');

controller.subscribe('weatherUpdate', weather);
controller.subscribe('heatUpdate', heat);
controller.subscribe('windUpdate', wind);

controller.unsubscribe('windUpdate', wind);
