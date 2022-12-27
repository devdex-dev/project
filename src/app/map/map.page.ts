import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
//import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit{
  map!: L.Map;

  ngOnInit(){
    //Accessing Device Location
      // if(!navigator.geolocation){
      //   console.log('location not supported')
      // }
      // navigator.geolocation.getCurrentPosition((position) => {
      //   let coord = position.coords;
      //   //Accessing Device Location - END

        //Integrate leaflet
    //coor.longitude&coor.latitude to get device location
    // since there's an issue with the android permission we can't use gps
        this.map = L.map('mapId').setView([50.5,-15], 5); 
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          maxZoom: 10,
          minZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">MOpenStreetap</a> contributors'
        }).addTo(this.map),{
             
             
             };
            
        //Marker   
        // L.marker([coord.latitude, coord.longitude]).addTo(this.map)
        // .bindPopup("You're Here")
        // .openPopup();
      // });


      // this.watchPosition();
  }
  // watchPosition(){
  
  //   let id = navigator.geolocation.watchPosition((position) =>{
  //     console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
 
  //   },(err) => {
  //     console.log(err);
  //   },{
  //     enableHighAccuracy: true,
  //     maximumAge: 0,
  //     timeout: 5000
  //   })
  }

  // permit(){
  //   this.permissions.checkPermission(this.permissions.PERMISSION.ACCESS_FINE_LOCATION).then(
  //          result => {
  //           if(!result.hasPermission){
              
  //             console.log('nopermit'),
  //             this.permissions.requestPermission(this.permissions.PERMISSION.ACCESS_FINE_LOCATION);
  //           }
  //          },
  //          err => this.permissions.requestPermission(this.permissions.PERMISSION.ACCESS_FINE_LOCATION)
  //        );
  // }
