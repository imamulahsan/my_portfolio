import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit, OnDestroy {

  private map: L.Map | null = null;
  selectedHobby: string | null = null;  // To track the selected hobby

  private visitedCountries: { name: string, latLng: [number, number] }[] = [
    { name: 'France', latLng: [46.603354, 1.888334] },
    { name: 'Japan', latLng: [36.204824, 138.252924] },
    { name: 'USA', latLng: [37.09024, -95.712891] },
    { name: 'Brazil', latLng: [-14.235004, -51.92528] },
  ];

  ngOnInit(): void {
    // No need to load the map initially
  }

  ngOnDestroy(): void {
    this.destroyMap();  // Clean up the map instance if the component is destroyed
  }

  onCardClick(hobby: string): void {
    if (this.selectedHobby === hobby) {
      // If the user clicks on the same card, collapse the section
      this.selectedHobby = null;
      this.destroyMap();  // Clean up the map instance when hiding the section
    } else {
      this.selectedHobby = hobby;
      if (hobby === 'traveling') {
        // Delay to ensure the map container is available in the DOM
        setTimeout(() => {
          this.initMap();
        }, 0);
      } else {
        this.destroyMap();  // Clean up the map instance if another section is selected
      }
    }
  }

  private initMap(): void {
    if (this.map) {
      this.map.invalidateSize();  // If the map exists, ensure it resizes correctly
      return;
    }

    this.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.visitedCountries.forEach(country => {
      L.marker(country.latLng).addTo(this.map!)
        .bindPopup(`<b>${country.name}</b>`);
    });
  }

  private destroyMap(): void {
    if (this.map) {
      this.map.remove();  // Remove the map and clean up resources
      this.map = null;
    }
  }
}
