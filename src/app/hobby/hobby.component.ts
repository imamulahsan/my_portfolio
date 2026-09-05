import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Map,
  Marker,
  Popup,
  NavigationControl,
  LngLatBounds
} from 'maplibre-gl';


interface Hobby {
  key: 'traveling' | 'photography' | 'cooking';
  label: string;
  image: string;
  icon: string;
  subtitle: string;
}


interface Country {
  name: string;

  /*
   * MapLibre coordinates:
   * [longitude, latitude]
   */
  coordinates: [number, number];
}


interface PhotographyPhoto {
  image: string;
  alt: string;
}


interface Dish {
  name: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit, OnDestroy {

  /* =========================================================
     Selected Hobby
  ========================================================= */

  selectedHobby: Hobby['key'] = 'traveling';


  /* =========================================================
     MapLibre
  ========================================================= */

  private map: Map | null = null;

  private markers: Marker[] = [];

  selectedCountry: string | null = null;


  /* =========================================================
     Hobby Navigation
  ========================================================= */

  hobbies: Hobby[] = [
    {
      key: 'traveling',
      label: 'TRAVELING',
      image: 'assets/images/logos/travel.png',
      icon: 'fas fa-plane',
      subtitle: 'Places, cultures & experiences'
    },
    {
      key: 'photography',
      label: 'PHOTOGRAPHY',
      image: 'assets/images/logos/photography.png',
      icon: 'fas fa-camera',
      subtitle: 'Moments through my lens'
    },
    {
      key: 'cooking',
      label: 'COOKING',
      image: 'assets/images/logos/cooking.png',
      icon: 'fas fa-utensils',
      subtitle: 'Food, experiments & tradition'
    }
  ];


  /* =========================================================
     Countries Visited
  ========================================================= */

  visitedCountries: Country[] = [
    {
      name: 'Bangladesh',
      coordinates: [90.3563, 23.6850]
    },
    {
      name: 'Indonesia',
      coordinates: [113.9213, -0.7893]
    },
    {
      name: 'Austria',
      coordinates: [14.5501, 47.5162]
    },
    {
      name: 'Germany',
      coordinates: [10.4515, 51.1657]
    },
    {
      name: 'Switzerland',
      coordinates: [8.2275, 46.8182]
    },
    {
      name: 'Poland',
      coordinates: [19.1451, 51.9194]
    },
    {
      name: 'Turkey',
      coordinates: [35.2433, 38.9637]
    },
    {
      name: 'Czech Republic',
      coordinates: [15.4730, 49.8175]
    }
  ];


  /* =========================================================
     Photography
  ========================================================= */

  photographyPhotos: PhotographyPhoto[] = [
    {
      image: 'assets/images/photography/photo1.JPG',
      alt: 'Travel photography'
    },
    {
      image: 'assets/images/photography/photo2.JPG',
      alt: 'Travel photography'
    },
    {
      image: 'assets/images/photography/photo3.jpg',
      alt: 'Travel photography'
    }
  ];


  /* =========================================================
     Cooking
  ========================================================= */

  favoriteDishes: Dish[] = [
    {
      name: 'Halim',
      description: 'HALIM_DESCRIPTION',
      image: 'assets/images/photography/halim.jpg'
    },
    {
      name: 'Shorshe Ilish',
      description: 'SHORSHE_ILISH_DESCRIPTION',
      image: 'assets/images/photography/ilish.jpg'
    },
    {
      name: 'Kacchi Biriyani',
      description: 'KACCHI_BIRIYANI_DESCRIPTION',
      image: 'assets/images/photography/kacchi.jpg'
    }
  ];


  /* =========================================================
     Lifecycle
  ========================================================= */

  ngOnInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 0);
  }


  ngOnDestroy(): void {
    this.destroyMap();
  }


  /* =========================================================
     Hobby Selection
  ========================================================= */

  selectHobby(
    hobby: Hobby['key']
  ): void {

    if (this.selectedHobby === hobby) {
      return;
    }


    this.selectedHobby = hobby;


    if (hobby === 'traveling') {

      setTimeout(() => {
        this.initMap();
      }, 0);

    } else {

      this.destroyMap();

    }
  }


  /* =========================================================
     Initialize Map
  ========================================================= */

  private initMap(): void {

    const mapContainer =
      document.getElementById('travel-map');


    if (!mapContainer) {
      return;
    }


    if (this.map) {

      this.map.resize();

      return;
    }


    this.map = new Map({

      container: mapContainer,

      /*
       * Inline raster map style.
       *
       * This avoids external style.json problems.
       */
      style: {
        version: 8,

        sources: {

          osm: {
            type: 'raster',

            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],

            tileSize: 256,

            attribution:
              '© OpenStreetMap contributors'
          }

        },

        layers: [

          {
            id: 'osm-raster-layer',

            type: 'raster',

            source: 'osm',

            minzoom: 0,

            maxzoom: 19
          }

        ]
      },

      /*
       * Starting location.
       */
      center: [24, 42],

      zoom: 2.4,

      /*
       * Tilted perspective.
       */
      pitch: 35,

      bearing: -8,

      /*
       * Better UX inside portfolio page.
       */
      scrollZoom: false

    });


    /* =====================================================
       Controls
    ====================================================== */

    this.map.addControl(

      new NavigationControl({
        visualizePitch: true
      }),

      'top-right'

    );


    /* =====================================================
       Error Logging
    ====================================================== */

    this.map.on(
      'error',
      event => {

        console.error(
          'MapLibre error:',
          event.error
        );

      }
    );


    /* =====================================================
       Map Loaded
    ====================================================== */

    this.map.on(
      'load',
      () => {

        console.log(
          'Travel map loaded successfully'
        );


        this.addCountryMarkers();


        setTimeout(() => {

          this.map?.resize();

          this.fitVisitedCountries();

        }, 250);

      }
    );


    /* =====================================================
       Resize after Angular rendered the map container
    ====================================================== */

    setTimeout(() => {

      this.map?.resize();

    }, 400);

  }


  /* =========================================================
     Add Markers
  ========================================================= */

  private addCountryMarkers(): void {

    if (!this.map) {
      return;
    }


    /*
     * Clear existing markers.
     */
    this.markers.forEach(
      marker => marker.remove()
    );


    this.markers = [];


    this.visitedCountries.forEach(
      country => {

        /* ===============================================
           Custom marker element
        ================================================ */

        const markerElement =
          document.createElement('button');


        markerElement.type =
          'button';


        markerElement.className =
          'travel-map-marker';


        markerElement.setAttribute(
          'aria-label',
          `Show ${country.name} on map`
        );


        markerElement.innerHTML = `
          <span class="travel-map-marker-dot"></span>
        `;


        /* ===============================================
           Popup
        ================================================ */

        const popup =
          new Popup({
            offset: 22,
            closeButton: false,
            closeOnClick: true
          })
            .setHTML(`
              <div class="travel-popup">

                <span class="travel-popup-label">
                  Visited
                </span>

                <strong>
                  ${country.name}
                </strong>

              </div>
            `);


        /* ===============================================
           Marker
        ================================================ */

        const marker =
          new Marker({
            element: markerElement,
            anchor: 'bottom'
          })
            .setLngLat(
              country.coordinates
            )
            .setPopup(
              popup
            )
            .addTo(
              this.map!
            );


        /* ===============================================
           Marker Click
        ================================================ */

        markerElement.addEventListener(
          'click',
          () => {

            this.selectedCountry =
              country.name;


            this.flyToCountry(
              country
            );

          }
        );


        this.markers.push(
          marker
        );

      }
    );

  }


  /* =========================================================
     Fit All Countries
  ========================================================= */

  private fitVisitedCountries(): void {

    if (
      !this.map ||
      this.visitedCountries.length === 0
    ) {
      return;
    }


    const bounds =
      new LngLatBounds();


    this.visitedCountries.forEach(
      country => {

        bounds.extend(
          country.coordinates
        );

      }
    );


    this.map.fitBounds(
      bounds,
      {

        padding: {
          top: 70,
          right: 70,
          bottom: 70,
          left: 70
        },

        maxZoom: 3.2,

        duration: 1200

      }
    );

  }


  /* =========================================================
     Select Country From List
  ========================================================= */

  focusCountry(
    country: Country
  ): void {

    this.selectedCountry =
      country.name;


    this.flyToCountry(
      country
    );

  }


  /* =========================================================
     Fly To Country
  ========================================================= */

  private flyToCountry(
    country: Country
  ): void {

    if (!this.map) {
      return;
    }


    this.map.flyTo({

      center:
        country.coordinates,

      zoom:
        5,

      pitch:
        45,

      bearing:
        -12,

      speed:
        1.05,

      curve:
        1.4,

      essential:
        true

    });

  }


  /* =========================================================
     Reset Map
  ========================================================= */

  resetMap(): void {

    this.selectedCountry = null;


    if (!this.map) {
      return;
    }


    this.map.easeTo({

      pitch: 35,

      bearing: -8,

      duration: 650

    });


    setTimeout(() => {

      this.fitVisitedCountries();

    }, 80);

  }


  /* =========================================================
     Destroy Map
  ========================================================= */

  private destroyMap(): void {

    this.markers.forEach(
      marker => marker.remove()
    );


    this.markers = [];


    if (this.map) {

      this.map.remove();

      this.map = null;

    }


    this.selectedCountry = null;

  }

}