import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly name = signal('Farshad Moradi');
  protected readonly title = signal('Cybersecuirty Engineer');
  protected readonly photo = signal('/farshad_img.jpg');
  protected readonly email = signal('farshad.moradi.sh@gmail.com');
  protected readonly linkedin = signal('https://www.linkedin.com/in/farshadmoradi/');

  protected readonly tabs = ['about', 'publications', 'projects', 'cv'] as const;
  protected readonly activeTab = signal<(typeof this.tabs)[number]>('about');

  protected readonly tabLabels: Record<(typeof this.tabs)[number], string> = {
    about: 'About me',
    publications: 'Publications',
    projects: 'Projects',
    cv: 'CV',
  };

  protected setTab(tab: (typeof this.tabs)[number]): void {
    this.activeTab.set(tab);
  }
}
