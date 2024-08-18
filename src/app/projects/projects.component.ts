import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  projects = [
    {
      id: 1,
      title: 'Chemnitz Interactive Map',
      description: 'A MEAN stack application to show educational institutions and set as own for the city of Chemnitz. User can login to the application and set his location. Based to his requirement he can select his Point of Interest such as school or kindergarten',
      technologies: [
        { name: 'MongoDB', imgUrl: 'assets/images/logos/mongodb.png' },
        { name: 'Express', imgUrl: 'assets/images/logos/express.png' },
        { name: 'Angular', imgUrl: 'assets/images/logos/angular.png' },
        { name: 'Node', imgUrl: 'assets/images/logos/node.png' },
      ],
      image: 'assets/images/project-images/chemnitz.jpg',
      liveLink: 'https://chemnitz-interactive-map.netlify.app/',
      githubLink: 'https://github.com/imamulahsan/chemnitz-interactive-map'
    },
    {
      id: 2,
      title: 'Berliner Tehari',
      description: 'A React application about food ordering and reservation in a restaurant. Here the user can User can view food menu, reserve a Table and Contact the Restaurant',
      technologies: [
        { name: 'MongoDB', imgUrl: 'assets/images/logos/mongodb.png' },
        { name: 'Express', imgUrl: 'assets/images/logos/express.png' },
        { name: 'React', imgUrl: 'assets/images/logos/react.png' },
        { name: 'Node', imgUrl: 'assets/images/logos/node.png' },
      ],
      image: 'assets/images/project-images/berliner.jpg',
      liveLink: 'https://react-berliner-tehari-restaurant.netlify.app/',
      githubLink: 'https://github.com/imamulahsan/react-berliner-tehari-restaurant'
    },
    {
      id: 3,
      title: 'Frontend Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: [
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
        { name: 'CSS', imgUrl: 'assets/images/logos/css.png' },
        { name: 'Angular', imgUrl: 'assets/images/logos/angular.png' }
      ],
      image: 'assets/images/iut.jpg',
      liveLink: '#',
      githubLink: '#'
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true
  };

  ngAfterViewInit() {
    // Initialize slick carousel after view initialization
    $('.carousel').slick(this.slideConfig);
  }

  ngAfterViewChecked() {
    // Recalculate the slick carousel layout if necessary
    $('.carousel').slick('setPosition');
  }
}
