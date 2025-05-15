import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  standalone: false,
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  city: string = '';
  forecastData: any;

  constructor(private weatherService: WeatherService) { }

  getForecast() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.forecastData = data;
      }
    );
  }
}
