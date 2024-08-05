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
      description: 'Developed and maintained web applications using Angular,PHP and MySQL.',
      logo: 'assets/images/bosch-logo.png' // Add company logo path here
    },
    {
      title: 'Lecturer',
      company: 'Prime University',
      location: 'Dhaka, Bangladesh',
      duration: 'February, 2019 - May, 2021',
      description: 'Assisted in teaching web development courses and providing support to students.',
      logo: 'assets/images/prime-university.png' // Add company logo path here
    },
    
  ];

  education = [
    {
      title: 'Master in Automotive Software Engineering',
      company: 'Technical University of Chemnitz',
      location: 'Chemnitz, Germany',
      duration: 'April, 2021 - Present',
      description: 'Completed courses like Database and Web Techniques, Empirical Software Engineering'
    },
    {
      title: 'Bachelor of Science in Computer Science and Engineering',
      company: 'Islamic University of Technology',
      location: 'Gazipur, Bangladesh',
      duration: 'September, 2019 - October, 2018',
      description: 'Completed courses like Artifical Intelligence, Web Engineering and Machine Learning'
    },
    
  ];

  skills = [
    { name: 'Angular', logo: 'assets/images/logos/angular.png' },
    { name: 'TypeScript', logo: 'assets/images/logos/typescript.png' },
    { name: 'JavaScript', logo: 'assets/images/logos/javascript.png' },
    { name: 'HTML', logo: 'assets/images/logos/html.png' },
    { name: 'CSS', logo: 'assets/images/logos/css.png' },
    { name: 'PHP', logo: 'assets/images/logos/php.png' },
    { name: 'MySQL', logo: 'assets/images/logos/mysql.png' }
  ];

  aboutMe = {
    name: 'Imamul Ahsan',
    photo: 'assets/images/my-image.png',
    description: `I am a passionate software engineer with experience in developing web applications 
                  using various technologies. I enjoy learning new things and tackling challenging problems. 
                  When I’m not coding, I love hiking, reading books, and exploring new technologies.`,
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
