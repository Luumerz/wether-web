import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  city: string = '';
  startDate: string = '';
  endDate: string = '';
  historyData: any;

  constructor(private weatherService: WeatherService) { }

  getHistory() {
    if (!this.city || !this.startDate || !this.endDate) return;

    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.historyData = data;
      }
    );
  }
}
