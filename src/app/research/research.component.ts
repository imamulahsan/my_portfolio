import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {

researchInterests = [

  {
    label: 'RESEARCH_INTEREST_HCI',
    icon: 'fas fa-laptop-code'
  },

  {
    label: 'RESEARCH_INTEREST_SOFTWARE_ENGINEERING',
    icon: 'fas fa-code'
  },

  {
    label: 'RESEARCH_INTEREST_AI_ASSISTED_SE',
    icon: 'fas fa-brain'
  },

  {
    label: 'RESEARCH_INTEREST_AUTOMATED_TESTING',
    icon: 'fas fa-vial'
  },

  {
    label: 'RESEARCH_INTEREST_SOFTWARE_QUALITY',
    icon: 'fas fa-check-circle'
  },

  {
    label: 'RESEARCH_INTEREST_EMPIRICAL_SE',
    icon: 'fas fa-chart-bar'
  },

  {
    label: 'RESEARCH_INTEREST_HUMAN_FACTORS',
    icon: 'fas fa-users'
  },

  {
    label: 'RESEARCH_INTEREST_DEVELOPER_TOOLS',
    icon: 'fas fa-tools'
  }

];


  thesis = {

    title:
      'THESIS_TITLE',

    university:
      'Technische Universität Chemnitz',

    submission:
      'THESIS_SUBMISSION',

    summary:
      'THESIS_SUMMARY',

    points: [
      'THESIS_POINT_1',
      'THESIS_POINT_2',
      'THESIS_POINT_3',
      'THESIS_POINT_4',
      'THESIS_POINT_5'
    ],

    methods: [
      'Empirical User Studies',
      'Usability Evaluation',
      'Hypothesis Testing',
      'Wilcoxon Signed-Rank Test',
      'Python',
      'pandas',
      'SciPy',
      'Angular',
      'FastAPI',
      'REST APIs',
      'ROS'
    ]
  };


  publications = [

    {
      authors:
        '<strong>Ahsan, I.</strong>, Kaden, S., & Röhrbein, F.',

      year: 2026,

      title:
        'Toward Adaptive Human–Robot Interaction: User-Configurable Multimodal Feedback for Balancing Transparency and Simplicity.',

      venue:
        'Mensch und Computer 2026 — Tagungsband',

      type:
        'Conference Publication',

      doi:
        'https://doi.org/10.18420/muc2026-mci-ws107-288'
    },


    {
      authors:
        'Kushol, R., <strong>Ahsan, I.</strong>, & Raihan, M. N.',

      year: 2018,

      title:
        'An Android-Based Useful Text Extraction Framework Using Image and Natural Language Processing.',

      venue:
        'International Journal of Computer Theory and Engineering, 10(3), 77–83.',

      type:
        'Journal Article',

      doi: ''
    },


    {
      authors:
        'Sobhan, M., Chowdhury, M. Z., <strong>Ahsan, I.</strong>, Mahmud, H., & Hasan, M. K.',

      year: 2019,

      title:
        'A Communication Aid System for Deaf and Mute using Vibrotactile and Visual Feedback.',

      venue:
        '2019 International Seminar on Application for Technology of Information and Communication (iSemantic), IEEE, pp. 184–190.',

      type:
        'Conference Publication',

      doi: ''
    }

  ];

}