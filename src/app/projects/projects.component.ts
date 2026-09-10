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
      key: 'xr',
      label: 'XR & HRI'
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

    /* =========================================================
       01 — MUC XR
    ========================================================= */

{
  id: 1,

  title: 'MUC-XR: Human–Robot Interaction Prototype',

  description: 'MUC_XR_DESCRIPTION',

  category: 'xr',

  categoryLabel: 'XR · HRI Research',

  featured: true,

  year: '2026',

  image:
    'assets/images/webxr_prototype.png',

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
      name: 'A-Frame',
      imgUrl: 'assets/images/logos/a-frame.png'
    },
    {
      name: 'WebXR',
      imgUrl: 'assets/images/logos/webxr.svg'
    },
    {
      name: 'HTML5',
      imgUrl: 'assets/images/logos/html.png'
    }
  ],

  liveLink:
    'https://mucxr.netlify.app/',

  githubLink:
    'https://github.com/imamulahsan/MuC_XR'
},


    /* =========================================================
       02 — TensorFlow.js Object Detection
    ========================================================= */

    {
      id: 2,

      title:
        'Real-Time Object Detection, Classification & Gesture Recognition',

      description: 'OBJECT_DETECTION_TF_DESCRIPTION',

      category: 'ai',

      categoryLabel: 'Browser AI · Computer Vision',

      featured: true,

      year: '2024',

      image:
        'assets/images/vision_x.png',

      technologies: [
        {
          name: 'TensorFlow.js',
          imgUrl: 'assets/images/logos/Tensorflow_logo.svg.webp'
        },
        {
          name: 'Angular',
          imgUrl: 'assets/images/logos/angular.png'
        },
        {
          name: 'MediaPipe',
          imgUrl: 'assets/images/logos/mediapipe-64px.png'
        },
        {
          name: 'TypeScript',
          imgUrl: 'assets/images/logos/typescript.png'
        },
        {
          name: 'JavaScript',
          imgUrl: 'assets/images/logos/javascript.png'
        }
      ],

      liveLink:
        'https://simpledetectors.netlify.app/',

      githubLink:
        'https://github.com/imamulahsan/object_detection_tensorflow_angular'
    },


    /* =========================================================
       03 — AI Language Tool
    ========================================================= */

    {
      id: 3,

      title: 'AI Language Tool using OpenAI API',

      description: 'AI_TOOL_DESCRIPTION',

      category: 'ai',

      categoryLabel: 'Generative AI',

      featured: true,

      year: '2024',

      image:
        'assets/images/project-images/ai_tool.jpg',

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


    /* =========================================================
       04 — Facial Recognition
    ========================================================= */

    {
      id: 4,

      title:
        'Facial Recognition Based Attendance System',

      description:
        'FACIAL_RECOGNITION_DESCRIPTION',

      category:
        'ai',

      categoryLabel:
        'Computer Vision',

      featured:
        false,

      year:
        '2023',

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

      liveLink: '',

      githubLink:
        'https://github.com/imamulahsan/facial_recognition_based_attendance_system'
    },


    /* =========================================================
       05 — Chemnitz Interactive Map
    ========================================================= */

    {
      id: 5,

      title:
        'Chemnitz Interactive Map',

      description:
        'CHEMNITZ_DESCRIPTION',

      category:
        'fullstack',

      categoryLabel:
        'Full Stack',

      featured:
        false,

      year:
        '2023',

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


    /* =========================================================
       06 — People Detection
    ========================================================= */

    {
      id: 6,

      title:
        'Real-Time People Detection',

      description:
        'PEOPLE_DETECTION_DESCRIPTION',

      category:
        'ai',

      categoryLabel:
        'Computer Vision',

      featured:
        false,

      year:
        '2023',

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

      liveLink: '',

      githubLink:
        'https://github.com/imamulahsan/people_detection'
    },


    /* =========================================================
       07 — Berliner Tehari
    ========================================================= */

    {
      id: 7,

      title:
        'Berliner Tehari',

      description:
        'BERLINER_DESCRIPTION',

      category:
        'fullstack',

      categoryLabel:
        'Full Stack',

      featured:
        false,

      year:
        '2022',

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


    /* =========================================================
       08 — Graffiti Community
    ========================================================= */

    {
      id: 8,

      title:
        'Graffiti Art Community',

      description:
        'GRAFFITI_DESCRIPTION',

      category:
        'frontend',

      categoryLabel:
        'Frontend',

      featured:
        false,

      year:
        '2022',

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
     Filter
  ========================================================= */

  filterProjects(
    category: string
  ): void {

    this.selectedCategory =
      category;

  }

}