import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Root } from '../models/weather.model';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit{
  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Wellington';
  weatherData?: Root;

  ngOnInit(): void {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  onSubmit() {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
      next: (response) => {
      this.weatherData = response;
      console.log(response);
      }
  });
  }

}
