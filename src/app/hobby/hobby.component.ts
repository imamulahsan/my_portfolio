import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  private map!: L.Map;

  // Define coordinates as a tuple with exactly two elements [latitude, longitude]
  private visitedCountries: { name: string, latLng: [number, number] }[] = [
    { name: 'France', latLng: [46.603354, 1.888334] },
    { name: 'Japan', latLng: [36.204824, 138.252924] },
    { name: 'USA', latLng: [37.09024, -95.712891] },
    { name: 'Brazil', latLng: [-14.235004, -51.92528] },
  ];

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.visitedCountries.forEach(country => {
      L.marker(country.latLng).addTo(this.map)
        .bindPopup(`<b>${country.name}</b>`)
        .openPopup();
    });
  }
}
