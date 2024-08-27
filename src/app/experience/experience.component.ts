import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  selectedFilter: string = 'work';

  experiences = [
    {
      title: 'Full-stack Software Developer Intern',
      company: 'Bosch Rexroth',
      location: 'Ulm, Germany',
      duration: 'March, 2024 - October, 2024',
      description: 'EXPERIENCE_BOSCH_DESCRIPTION',  // Translation key
      logo: 'assets/images/bosch-rexroth.jpg'
    },
    {
      title: 'Lecturer',
      company: 'Prime University',
      location: 'Dhaka, Bangladesh',
      duration: 'February, 2019 - May, 2021',
      description: 'EXPERIENCE_PRIME_DESCRIPTION',  // Translation key
      logo: 'assets/images/prime-university.png'
    }
  ];

  education = [
    {
      title: 'Master in Automotive Software Engineering',
      company: 'Technical University of Chemnitz',
      location: 'Chemnitz, Germany',
      duration: 'April, 2021 - Present',
      description: 'EDUCATION_CHEMNITZ_DESCRIPTION', // Translation key
      logo: 'assets/images/tu-chemnitz.jpg' // Add company logo path here
    },
    {
      title: 'Bachelor of Science in Computer Science and Engineering',
      company: 'Islamic University of Technology',
      location: 'Gazipur, Bangladesh',
      duration: 'September, 2019 - October, 2018',
      description: 'EDUCATION_IUT_DESCRIPTION', // Translation key
      logo: 'assets/images/iut.jpg' // Add company logo path here
    }
  ];

  frontendSkills = [
    { name: 'Angular', logo: 'assets/images/logos/angular.png' },
    { name: 'React', logo: 'assets/images/logos/react.png' },
    { name: 'HTML5', logo: 'assets/images/logos/html.png' },
    { name: 'CSS3', logo: 'assets/images/logos/css.png' },
    { name: 'JavaScript', logo: 'assets/images/logos/javascript.png' },
    { name: 'TypeScript', logo: 'assets/images/logos/typescript.png' },
    { name: 'Vue.js', logo: 'assets/images/logos/vuejs.png' },
    { name: 'Bootstrap', logo: 'assets/images/logos/bootstrap.png' },
  ];

  backendSkills = [
    { name: 'Node.js', logo: 'assets/images/logos/node.png' },
    { name: 'PHP', logo: 'assets/images/logos/php.png' },
    { name: 'MySQL', logo: 'assets/images/logos/mysql.png' },
    { name: 'Express.js', logo: 'assets/images/logos/express.png' },
    { name: 'MongoDB', logo: 'assets/images/logos/mongodb.png' },
    { name: 'Firebase', logo: 'assets/images/logos/firebase.png' },
    { name: 'Django', logo: 'assets/images/logos/django.png' },
    
  ];

  devOpsAndVersionControlSkills = [
    { name: 'Docker', logo: 'assets/images/logos/docker.png' },
    { name: 'AWS', logo: 'assets/images/logos/aws.png' },
    { name: 'Azure', logo: 'assets/images/logos/azure.png' },
    { name: 'Git', logo: 'assets/images/logos/git.png' },
    { name: 'GitHub', logo: 'assets/images/logos/github.png' },
    { name: 'CI/CD', logo: 'assets/images/logos/cicd.png' },
  ];

  datascienceai = [
    { name: 'Python', logo: 'assets/images/logos/python.png' },
    { name: 'OpenCV', logo: 'assets/images/logos/opencv.png' },
    { name: 'Flask', logo: 'assets/images/logos/flask.png' },
    
  ];




  aboutMe = {
    name: 'Imamul Ahsan',
    photo: 'assets/images/my-image.png',
    description: `
      I have a strong interest in both web and mobile technologies. I love to analyze various web applications, find meaningful insights, develop a prototype, and show the outcome through a web application. 
      I have over two years of experience as a full stack developer and lecturer at Prime University, where I built and taught web technologies using <strong>React</strong> and <strong>Node.js</strong>. 
      
      Due to my passion for web technologies, I have developed some knowledge in both frontend and backend development. I have good knowledge of frontend frameworks and libraries such as <strong>Angular</strong>, <strong>React</strong>, <strong>Flask</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux</strong>. 
      I also have experience in backend development with <strong>PHP</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>RESTful API</strong>. 
      I am well-versed with test automation tools like <strong>Jest</strong> and am familiar with Git-based version control. Furthermore, I am currently learning <strong>React Native</strong> and want to learn about the deployment environment for a hybrid mobile app.`,
    hobbies: ['Hiking', 'Reading', 'Traveling'],
  };

  // You can add similar arrays for education, skills, and about me

  constructor() { }

  ngOnInit(): void {
  }

  filterContent(filter: string): void {
    this.selectedFilter = filter;
  }

}
