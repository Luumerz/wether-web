import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//key: 552ZVWLNSEBBVUP7NVQPF738Y

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = "552ZVWLNSEBBVUP7NVQPF738Y";
  private apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    const url = `${this.apiUrl}${location}?key=${this.apiKey}`;
    return this.http.get(url);
  }
}
