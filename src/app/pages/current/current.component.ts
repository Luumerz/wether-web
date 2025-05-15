import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current',
  standalone: false,
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
  providers: [WeatherService]
})
export class CurrentComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeatherData() {
    if (!this.city) return;
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      }
    );
  }
}
