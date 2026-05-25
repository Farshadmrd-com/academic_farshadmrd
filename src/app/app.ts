import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly name = signal('Farshad Moradi');
  protected readonly title = signal('Cybersecuirty Researcher');
  protected readonly photo = signal('/farshad_img.jpg');
  protected readonly email = signal('farshad.moradi.sh@gmail.com');
  protected readonly linkedin = signal('https://www.linkedin.com/in/farshadmoradi/');
  protected readonly cvSafeUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      '/FarshadMoradi_CV.pdf#toolbar=0&navpanes=0',
    ),
  );

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

  protected readonly openProject = signal<string | null>(null);

  protected isProjectOpen(id: string): boolean {
    return this.openProject() === id;
  }

  protected toggleProject(id: string): void {
    this.openProject.set(this.openProject() === id ? null : id);
  }
}
