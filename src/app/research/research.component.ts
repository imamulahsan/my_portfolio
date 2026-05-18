import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {

  thesis = {
    title: 'Development of a Web Interface for a Human–Robot Workplace',
    university: 'Technische Universität Chemnitz',
    submission: 'Expected submission: Jun 2026',

    points: [
      'Designed and developed a configurable web-based interface for multimodal feedback in collaborative robotic assembly environments.',

      'Conducted a two-phase empirical user study investigating transparency, usability, cognitive workload, and user-driven configuration behavior.',

      'Collected and analyzed questionnaire responses, interaction logs, and user behavior using descriptive statistics and Wilcoxon signed-rank tests.',

      'Evaluated configurable software behavior and user interaction patterns in collaborative software systems through empirical analysis.',

      'Integrated web-based frontend systems with ROS-based robotic infrastructure through REST APIs and runtime reconfiguration mechanisms.'
    ],

    methods:
      'Empirical user studies, usability evaluation, hypothesis testing, descriptive statistics (Python, pandas, scipy), Angular, FastAPI, REST APIs, ROS integration.'
  };

  publications = [
    {
      authors: 'Kushol, R., Ahsan, I., & Raihan, M. N.',
      year: 2018,
      title:
        'An Android-Based Useful Text Extraction Framework Using Image and Natural Language Processing.',
      venue:
        'International Journal of Computer Theory and Engineering, 10(3), 77–83.'
    },

    {
      authors:
        'Sobhan, M., Chowdhury, M. Z., Ahsan, I., Mahmud, H., & Hasan, M. K.',
      year: 2019,
      title:
        'A Communication Aid System for Deaf and Mute using Vibrotactile and Visual Feedback.',
      venue:
        '2019 International Seminar on Application for Technology of Information and Communication (iSemantic), IEEE, pp. 184–190.'
    }
  ];

}