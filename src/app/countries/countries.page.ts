import { Component, OnInit } from '@angular/core';

import { Config } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  // countries: any[] = [];
  // constructor(private http: HTTP) {}
  // async ngOnInit() {
  //   try {
  //     const res = await this.http.get(
  //       'https://restcountries.com/v2/all',
  //       {},
  //       {}
  //     );
  //     this.countries = JSON.parse(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  constructor(private http: HttpClient) {}
  loading = true;
  countryName = '';
  countries: any[] = [];
  // currency variables
  cur_obj: any;
  currency: any;
  cur_code: any;
  //lang var
  lang_obj: any;
  lang_code: any;
  lang_code1: any;
  lang_name1: any;
  lang_name2: any;

  //cca3 var
  cca3: any;
  //native var
  native_name: any;
  //capital var
  capital: any;
  // flag var
  flag_obj: any;
  flag: any;
  // area variables
  area: any;
  //name var
  name: any;
  //region sub var
  region: any;
  subregion: any;
  //timezone var
  timezone: any;
  ngOnInit() {
    try {
      this.http.get('https://restcountries.com/v2/all').subscribe((data) => {
        console.log(data);
        const obj = JSON.stringify(data);
        this.countries = JSON.parse(obj);
      });
    } catch (error) {
      console.log('Error');
    }
    this.http
      .get(`https://restcountries.com/v3.1/name/${this.countryName}`)
      .subscribe((res) => {
        const obj = JSON.stringify(res);
        const obj1 = JSON.parse(obj);

        // Getting currency
        this.cur_obj = obj1['0']['currencies'];
        this.cur_code = Object.keys(this.cur_obj)[0];
        this.currency = obj1['0']['currencies'][this.cur_code];
        //Name
        this.name = obj1['0']['name']['common'];
        // Getting Flag
        this.flag_obj = obj1['0']['flags'];
        //Getting cca3
        this.cca3 = obj1['0']['cca3'];
        //getting native name
        this.native_name = obj1['0']['name']['nativeName']['eng'];
        //Getting area
        this.area = obj1['0']['area'];
        //getting capital
        this.capital = obj1['0']['capital'];
        //getting lang
        this.lang_obj = obj1['0']['languages'];
        this.lang_code = Object.keys(this.lang_obj)[0];
        this.lang_code1 = Object.keys(this.lang_obj)[1];
        this.lang_name1 = obj1['0']['languages'][this.lang_code];
        this.lang_name2 = obj1['0']['languages'][this.lang_code1];
        //region and sub
        this.region = obj1['0']['region'];
        this.subregion = obj1['0']['subregion'];
        //timezone
        this.timezone = obj1['0']['timezones']['0'];
        this.loading = false;
        //console.log(Object.keys(this.currency)[0]);
        console.log(res);
        // console.log(this.currency);
        // console.log(this.area);
      });
  }
}
