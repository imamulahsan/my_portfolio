import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  selectedFilter: string = 'work';


  /* =========================================================
     Professional Experience
  ========================================================= */

  experiences = [
    {
      title: 'Software Engineer (Working Student)',
      company: 'Bosch Rexroth',
      location: 'Ulm, Germany',
      duration: 'Mar 2024 — Present',
      logo: 'assets/images/bosch-rexroth.jpg',

      expanded: false,

      highlights: [
        'EXPERIENCE_BOSCH_HIGHLIGHT_1',
        'EXPERIENCE_BOSCH_HIGHLIGHT_2',
        'EXPERIENCE_BOSCH_HIGHLIGHT_3',
        'EXPERIENCE_BOSCH_HIGHLIGHT_4',
        'EXPERIENCE_BOSCH_HIGHLIGHT_5'
      ],

      technologies: [
        'Angular',
        'PHP',
        'MySQL',
        'REST API',
        'Docker',
        'GitLab CI/CD'
      ]
    },

    {
      title: 'Lecturer, Department of Computer Science and Engineering',
      company: 'Prime University',
      location: 'Dhaka, Bangladesh',
      duration: 'Feb 2019 — May 2021',
      logo: 'assets/images/prime-university.png',

      expanded: false,

      highlights: [
        'EXPERIENCE_PRIME_HIGHLIGHT_1',
        'EXPERIENCE_PRIME_HIGHLIGHT_2',
        'EXPERIENCE_PRIME_HIGHLIGHT_3'
      ],

      technologies: [
        'Software Engineering',
        'Artificial Intelligence',
        'Web Development',
        'Teaching',
        'Project Supervision',
        'Academic Mentoring'
      ]
    }
  ];


  /* =========================================================
     Education
  ========================================================= */

education = [
  {
    title: 'Master in Automotive Software Engineering',
    company: 'Technical University of Chemnitz',
    location: 'Chemnitz, Germany',
    duration: 'Apr 2022 — 2026',
    description: 'EDUCATION_CHEMNITZ_DESCRIPTION',
    logo: 'assets/images/tu-chemnitz.jpg',

    expanded: false,

    technologies: [
      'Software Engineering',
      'Database Systems',
      'Web Technologies',
      'Empirical Software Engineering',
      'Data Analysis'
    ]
  },

  {
    title: 'Bachelor of Science in Computer Science and Engineering',
    company: 'Islamic University of Technology',
    location: 'Gazipur, Bangladesh',
    duration: 'Oct 2014 — 2018',
    description: 'EDUCATION_IUT_DESCRIPTION',
    logo: 'assets/images/iut.jpg',

    expanded: false,

    technologies: [
      'Artificial Intelligence',
      'Machine Learning',
      'Web Engineering',
      'Algorithms',
      'Software Engineering'
    ]
  }
];


  /* =========================================================
     Artificial Intelligence & Data Science
  ========================================================= */

  datascienceai = [
    {
      name: 'Python',
      logo: 'assets/images/logos/python.png'
    },
    {
      name: 'OpenCV',
      logo: 'assets/images/logos/opencv.png'
    },
    {
      name: 'Flask',
      logo: 'assets/images/logos/flask.png'
    }
  ];


  /* =========================================================
     Backend Technologies
  ========================================================= */

  backendSkills = [
    {
      name: 'Node.js',
      logo: 'assets/images/logos/node.png'
    },
    {
      name: 'PHP',
      logo: 'assets/images/logos/php.png'
    },
    {
      name: 'MySQL',
      logo: 'assets/images/logos/mysql.png'
    },
    {
      name: 'Express.js',
      logo: 'assets/images/logos/express.png'
    },
    {
      name: 'MongoDB',
      logo: 'assets/images/logos/mongodb.png'
    },
    {
      name: 'Firebase',
      logo: 'assets/images/logos/firebase.png'
    },
    {
      name: 'Django',
      logo: 'assets/images/logos/django.png'
    }
  ];


  /* =========================================================
     Frontend Technologies
  ========================================================= */

  frontendSkills = [
    {
      name: 'Angular',
      logo: 'assets/images/logos/angular.png'
    },
    {
      name: 'React',
      logo: 'assets/images/logos/react.png'
    },
    {
      name: 'HTML5',
      logo: 'assets/images/logos/html.png'
    },
    {
      name: 'CSS3',
      logo: 'assets/images/logos/css.png'
    },
    {
      name: 'JavaScript',
      logo: 'assets/images/logos/javascript.png'
    },
    {
      name: 'TypeScript',
      logo: 'assets/images/logos/typescript.png'
    },
    {
      name: 'Vue.js',
      logo: 'assets/images/logos/vuejs.png'
    },
    {
      name: 'Bootstrap',
      logo: 'assets/images/logos/bootstrap.png'
    }
  ];


  /* =========================================================
     DevOps & Version Control
  ========================================================= */

  devOpsAndVersionControlSkills = [
    {
      name: 'Docker',
      logo: 'assets/images/logos/docker.png'
    },
    {
      name: 'AWS',
      logo: 'assets/images/logos/aws.png'
    },
    {
      name: 'Azure',
      logo: 'assets/images/logos/azure.png'
    },
    {
      name: 'Git',
      logo: 'assets/images/logos/git.png'
    },
    {
      name: 'GitHub',
      logo: 'assets/images/logos/github.png'
    },
    {
      name: 'CI/CD',
      logo: 'assets/images/logos/cicd.png'
    }
  ];


  /* =========================================================
     About Me
  ========================================================= */

  aboutMe = {
    name: 'Imamul Ahsan',
    photo: 'assets/images/my-image.png'
  };


  constructor() { }


  ngOnInit(): void {
  }


  /* =========================================================
     Experience Page Navigation
  ========================================================= */

  filterContent(filter: string): void {
    this.selectedFilter = filter;
  }


  /* =========================================================
     Expand / Collapse Professional Experience
  ========================================================= */

  toggleExperience(index: number): void {
    this.experiences[index].expanded =
      !this.experiences[index].expanded;
  }

  toggleEducation(index: number): void {
  this.education[index].expanded =
    !this.education[index].expanded;
}

}