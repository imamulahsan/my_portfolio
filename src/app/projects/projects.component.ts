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
      description: 'CHEMNITZ_DESCRIPTION', // Use the translation key
      technologies: [
        { name: 'MongoDB', imgUrl: 'assets/images/logos/mongodb.png' },
        { name: 'Express', imgUrl: 'assets/images/logos/express.png' },
        { name: 'Angular', imgUrl: 'assets/images/logos/angular.png' },
        { name: 'Node', imgUrl: 'assets/images/logos/node.png' },
        { name: 'Typescript', imgUrl: 'assets/images/logos/typescript.png' },
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
        { name: 'CSS', imgUrl: 'assets/images/logos/css.png' },
      ],
      image: 'assets/images/project-images/chemnitz.jpg',
      liveLink: 'https://chemnitz-interactive-map.netlify.app/',
      githubLink: 'https://github.com/imamulahsan/chemnitz-interactive-map'
    },
    {
      id: 2,
      title: 'Berliner Tehari',
      description: 'BERLINER_DESCRIPTION', // Use the translation key
      technologies: [
        { name: 'MongoDB', imgUrl: 'assets/images/logos/mongodb.png' },
        { name: 'Express', imgUrl: 'assets/images/logos/express.png' },
        { name: 'React', imgUrl: 'assets/images/logos/react.png' },
        { name: 'Node', imgUrl: 'assets/images/logos/node.png' },
        { name: 'Javascript', imgUrl: 'assets/images/logos/javascript.png' },
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
        { name: 'CSS', imgUrl: 'assets/images/logos/css.png' },
      ],
      image: 'assets/images/project-images/berliner.jpg',
      liveLink: 'https://react-berliner-tehari-restaurant.netlify.app/',
      githubLink: 'https://github.com/imamulahsan/react-berliner-tehari-restaurant'
    },
    {
      id: 3,
      title: 'AI Language Tool using OpenAI API',
      description: 'AI_TOOL_DESCRIPTION', // Use the translation key
      technologies: [
        { name: 'MongoDB', imgUrl: 'assets/images/logos/mongodb.png' },
        { name: 'Express', imgUrl: 'assets/images/logos/express.png' },
        { name: 'React', imgUrl: 'assets/images/logos/react.png' },
        { name: 'Node', imgUrl: 'assets/images/logos/node.png' },
        { name: 'Javascript', imgUrl: 'assets/images/logos/javascript.png' },
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
        { name: 'CSS', imgUrl: 'assets/images/logos/css.png' },
      ],
      image: 'assets/images/project-images/ai_tool.jpg',
      liveLink: 'https://www.youtube.com/watch?v=U0N5khyGdQ4&t=52s',
      githubLink: 'https://github.com/imamulahsan/AI-language-tool-openai'
    },
    {
      id: 4,
      title: 'Angular App of a Graffiti Art Community',
      description: 'GRAFFITI_DESCRIPTION', // Use the translation key
      technologies: [
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
        { name: 'CSS', imgUrl: 'assets/images/logos/css.png' },
        { name: 'Angular', imgUrl: 'assets/images/logos/angular.png' },
        { name: 'Bootstrap', imgUrl: 'assets/images/logos/bootstrap.png' },
        { name: 'Typescript', imgUrl: 'assets/images/logos/typescript.png' },
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
        { name: 'CSS', imgUrl: 'assets/images/logos/css.png' },
      ],
      image: 'assets/images/project-images/graffiti.jpg',
      liveLink: 'https://photography-app-angular.netlify.app',
      githubLink: 'https://github.com/imamulahsan/photography-app-angular'
    },
    {
      id: 5,
      title: 'Facial Recognition Based Attendance System',
      description: 'FACIAL_RECOGNITION_DESCRIPTION', // Use the translation key
      technologies: [
        { name: 'Python', imgUrl: 'assets/images/logos/python.png' },
        { name: 'OpenCV', imgUrl: 'assets/images/logos/opencv.png' },
        { name: 'Flask', imgUrl: 'assets/images/logos/flask.png' },
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
      ],
      image: 'assets/images/project-images/facial.gif',
      liveLink: 'https://github.com/imamulahsan/facial_recognition_based_attendance_system',
      githubLink: 'https://github.com/imamulahsan/facial_recognition_based_attendance_system'
    },
    {
      id: 6,
      title: 'People Detection using Python, Flask and OpenCV',
      description: 'PEOPLE_DETECTION_DESCRIPTION', // Use the translation key
      technologies: [
        { name: 'Python', imgUrl: 'assets/images/logos/python.png' },
        { name: 'OpenCV', imgUrl: 'assets/images/logos/opencv.png' },
        { name: 'Flask', imgUrl: 'assets/images/logos/flask.png' },
        { name: 'HTML', imgUrl: 'assets/images/logos/html.png' },
      ],
      image: 'assets/images/project-images/person.gif',
      liveLink: 'https://github.com/imamulahsan/people_detection',
      githubLink: 'https://github.com/imamulahsan/people_detection'
    }
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
