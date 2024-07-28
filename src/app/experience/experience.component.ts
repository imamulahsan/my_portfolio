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
      title: 'Freelance Web Developer',
      company: 'E-commerce Startup',
      duration: '2020 - 2021',
      description: 'Developed and maintained web applications using Angular and other modern technologies.'
    },
    {
      title: 'Teaching Assistant',
      company: 'Tech Academy',
      duration: '2019 - 2020',
      description: 'Assisted in teaching web development courses and providing support to students.'
    },
    {
      title: 'UI/UX Designer',
      company: 'Digital Agency',
      duration: '2018 - 2019',
      description: 'Designed user interfaces and improved user experiences for various clients.'
    },
    {
      title: 'Junior Developer',
      company: 'Software Development Firm',
      duration: '2017 - 2018',
      description: 'Worked on multiple projects as a junior developer, focusing on front-end development.'
    }
  ];

  // You can add similar arrays for education, skills, and about me

  constructor() { }

  ngOnInit(): void {
  }

  filterContent(filter: string): void {
    this.selectedFilter = filter;
  }

}
