import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl:string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey:string = 'ea11ac0f0345a0e67c416d88fa799148';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', this.apiKey);

    return this.http.get(this.apiUrl, { params });
  }
}
