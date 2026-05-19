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
}
