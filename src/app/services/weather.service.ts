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
    const url = `${this.apiUrl}${location}?unitGroup=metric&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getForecast(city: string) {
    const url = `${this.apiUrl}/${city}?unitGroup=metric&include=days&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getHistory(city: string, start: string, end: string){
    const url = `${this.apiUrl}/${city}/${start}/${end}?unitGroup=metric&include=days&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
