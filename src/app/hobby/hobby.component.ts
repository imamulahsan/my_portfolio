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

  public visitedCountries: { name: string, latLng: [number, number] }[] = [
    { name: 'Bangladesh', latLng: [23.6850, 90.3563] },
    { name: 'Indonesia', latLng: [-0.7893, 113.9213] },
    { name: 'Austria', latLng: [47.5162, 14.5501] },
    { name: 'Germany', latLng: [51.1657, 10.4515] },
    { name: 'Switzerland', latLng: [46.8182, 8.2275] },
    { name: 'Poland', latLng: [51.9194, 19.1451] },
    { name: 'Turkey', latLng: [38.9637, 35.2433] },
    { name: 'Czech Republic', latLng: [49.8175, 15.4730] }
  ];

  // Define an array to hold photography image paths
  public photographyPhotos: string[] = [
    'assets/images/photography/photo1.JPG',
    'assets/images/photography/photo2.JPG',
    'assets/images/photography/photo3.jpg',
    // Add more photo paths as needed
  ];

  // Array of favorite dishes
  public favoriteDishes: { name: string, description: string, image: string }[] = [
    {
      name: 'Halim',
      description: 'HALIM_DESCRIPTION', // Use the translation key
      image: 'assets/images/photography/halim.jpg'
    },
    {
      name: 'Shorshe Ilish',
      description: 'SHORSHE_ILISH_DESCRIPTION', // Use the translation key
      image: 'assets/images/photography/ilish.jpg'
    },
    {
      name: 'Kacchi Biriyani',
      description: 'KACCHI_BIRIYANI_DESCRIPTION', // Use the translation key
      image: 'assets/images/photography/kacchi.jpg'
    },
    // Add more dishes as needed
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

    this.map = L.map('map').setView([51.1657, 10.4515], 4);

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
