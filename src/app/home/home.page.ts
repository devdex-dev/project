import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

//const API_URL = '8af0adb76c8e90b9dda6af09b238f8cb';
//const API_KEY = 'https://api.openweathermap.org/data/2.5/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //displayweather
  weatherTemp: any;
  todayDate: Date = new Date();
  cityName = '';
  weatherIcon: any;
  weatherDetails: any;
  name = '';
  weather: any;
  loading = true;
  constructor(public httpClient: HttpClient) {
    //this.loadData();
  }

  loadData() {
    this.httpClient
      .get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`)

      .subscribe((results) => {
        console.log(results);
        const obj = JSON.stringify(results);
        const obj1 = JSON.parse(obj);
        this.weatherTemp = obj1['main'];
        this.name = obj1['name'];
        this.weather = obj1['weather'];
        this.weatherDetails = obj1['weather'][0];
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
        this.loading = false;
      });
  }
}
