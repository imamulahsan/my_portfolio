import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  selectedCategory: string = 'all';


  /* =========================================================
     Project Categories
  ========================================================= */

  categories = [
    {
      key: 'all',
      label: 'All Projects'
    },
    {
      key: 'ai',
      label: 'AI & Computer Vision'
    },
    {
      key: 'fullstack',
      label: 'Full Stack'
    },
    {
      key: 'frontend',
      label: 'Frontend'
    }
  ];


  /* =========================================================
     Projects
  ========================================================= */

  projects = [

    /* ---------------------------------------------------------
       AI Language Tool
    --------------------------------------------------------- */

    {
      id: 1,

      title: 'AI Language Tool using OpenAI API',

      description: 'AI_TOOL_DESCRIPTION',

      category: 'ai',

      categoryLabel: 'Generative AI',

      featured: true,

      image: 'assets/images/project-images/ai_tool.jpg',

      technologies: [
        {
          name: 'React',
          imgUrl: 'assets/images/logos/react.png'
        },
        {
          name: 'Node.js',
          imgUrl: 'assets/images/logos/node.png'
        },
        {
          name: 'Express.js',
          imgUrl: 'assets/images/logos/express.png'
        },
        {
          name: 'MongoDB',
          imgUrl: 'assets/images/logos/mongodb.png'
        },
        {
          name: 'JavaScript',
          imgUrl: 'assets/images/logos/javascript.png'
        }
      ],

      liveLink:
        'https://www.youtube.com/watch?v=U0N5khyGdQ4&t=52s',

      githubLink:
        'https://github.com/imamulahsan/AI-language-tool-openai'
    },


    /* ---------------------------------------------------------
       Facial Recognition
    --------------------------------------------------------- */

    {
      id: 2,

      title: 'Facial Recognition Based Attendance System',

      description: 'FACIAL_RECOGNITION_DESCRIPTION',

      category: 'ai',

      categoryLabel: 'Computer Vision',

      featured: true,

      image:
        'assets/images/project-images/facial.gif',

      technologies: [
        {
          name: 'Python',
          imgUrl: 'assets/images/logos/python.png'
        },
        {
          name: 'OpenCV',
          imgUrl: 'assets/images/logos/opencv.png'
        },
        {
          name: 'Flask',
          imgUrl: 'assets/images/logos/flask.png'
        },
        {
          name: 'HTML5',
          imgUrl: 'assets/images/logos/html.png'
        }
      ],

      liveLink:
        'https://github.com/imamulahsan/facial_recognition_based_attendance_system',

      githubLink:
        'https://github.com/imamulahsan/facial_recognition_based_attendance_system'
    },


    /* ---------------------------------------------------------
       People Detection
    --------------------------------------------------------- */

    {
      id: 3,

      title: 'Real-Time People Detection',

      description: 'PEOPLE_DETECTION_DESCRIPTION',

      category: 'ai',

      categoryLabel: 'Computer Vision',

      featured: false,

      image:
        'assets/images/project-images/person.gif',

      technologies: [
        {
          name: 'Python',
          imgUrl: 'assets/images/logos/python.png'
        },
        {
          name: 'OpenCV',
          imgUrl: 'assets/images/logos/opencv.png'
        },
        {
          name: 'Flask',
          imgUrl: 'assets/images/logos/flask.png'
        },
        {
          name: 'HTML5',
          imgUrl: 'assets/images/logos/html.png'
        }
      ],

      liveLink:
        'https://github.com/imamulahsan/people_detection',

      githubLink:
        'https://github.com/imamulahsan/people_detection'
    },


    /* ---------------------------------------------------------
       Chemnitz Interactive Map
    --------------------------------------------------------- */

    {
      id: 4,

      title: 'Chemnitz Interactive Map',

      description: 'CHEMNITZ_DESCRIPTION',

      category: 'fullstack',

      categoryLabel: 'Full Stack',

      featured: true,

      image:
        'assets/images/project-images/chemnitz.jpg',

      technologies: [
        {
          name: 'Angular',
          imgUrl: 'assets/images/logos/angular.png'
        },
        {
          name: 'Node.js',
          imgUrl: 'assets/images/logos/node.png'
        },
        {
          name: 'Express.js',
          imgUrl: 'assets/images/logos/express.png'
        },
        {
          name: 'MongoDB',
          imgUrl: 'assets/images/logos/mongodb.png'
        },
        {
          name: 'TypeScript',
          imgUrl: 'assets/images/logos/typescript.png'
        }
      ],

      liveLink:
        'https://chemnitz-interactive-map.netlify.app/',

      githubLink:
        'https://github.com/imamulahsan/chemnitz-interactive-map'
    },


    /* ---------------------------------------------------------
       Berliner Tehari
    --------------------------------------------------------- */

    {
      id: 5,

      title: 'Berliner Tehari',

      description: 'BERLINER_DESCRIPTION',

      category: 'fullstack',

      categoryLabel: 'Full Stack',

      featured: false,

      image:
        'assets/images/project-images/berliner.jpg',

      technologies: [
        {
          name: 'React',
          imgUrl: 'assets/images/logos/react.png'
        },
        {
          name: 'Node.js',
          imgUrl: 'assets/images/logos/node.png'
        },
        {
          name: 'Express.js',
          imgUrl: 'assets/images/logos/express.png'
        },
        {
          name: 'MongoDB',
          imgUrl: 'assets/images/logos/mongodb.png'
        },
        {
          name: 'JavaScript',
          imgUrl: 'assets/images/logos/javascript.png'
        }
      ],

      liveLink:
        'https://react-berliner-tehari-restaurant.netlify.app/',

      githubLink:
        'https://github.com/imamulahsan/react-berliner-tehari-restaurant'
    },


    /* ---------------------------------------------------------
       Graffiti Community
    --------------------------------------------------------- */

    {
      id: 6,

      title: 'Graffiti Art Community',

      description: 'GRAFFITI_DESCRIPTION',

      category: 'frontend',

      categoryLabel: 'Frontend',

      featured: false,

      image:
        'assets/images/project-images/graffiti.jpg',

      technologies: [
        {
          name: 'Angular',
          imgUrl: 'assets/images/logos/angular.png'
        },
        {
          name: 'TypeScript',
          imgUrl: 'assets/images/logos/typescript.png'
        },
        {
          name: 'Bootstrap',
          imgUrl: 'assets/images/logos/bootstrap.png'
        },
        {
          name: 'HTML5',
          imgUrl: 'assets/images/logos/html.png'
        },
        {
          name: 'CSS3',
          imgUrl: 'assets/images/logos/css.png'
        }
      ],

      liveLink:
        'https://photography-app-angular.netlify.app',

      githubLink:
        'https://github.com/imamulahsan/photography-app-angular'
    }

  ];


  /* =========================================================
     Filtered Projects
  ========================================================= */

  get filteredProjects() {

    if (this.selectedCategory === 'all') {
      return this.projects;
    }

    return this.projects.filter(
      project =>
        project.category === this.selectedCategory
    );

  }


  /* =========================================================
     Filter Projects
  ========================================================= */

  filterProjects(category: string): void {
    this.selectedCategory = category;
  }

}