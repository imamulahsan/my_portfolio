import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
