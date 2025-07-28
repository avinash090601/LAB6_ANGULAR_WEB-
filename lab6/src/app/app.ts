//Chapter -1 and 2
/*

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Hello Universe {{ city }}, {{ 1 + 1 }} -->
  `,
})
export class App {
  city = 'Toronto';
}

*/
//Chapeter 3
/*import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    Username: {{ username }}
  `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<section><app-user /></section>`,
  imports: [User],
})
export class App {}

bootstrapApplication(App);*/

//Chapeter 4
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class App {
  isServerRunning = true;
}*/

//Chapter 5
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  `,
})
export class App {
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}*/

//Chapter 6
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['app.css'],
  template: `
    <div [contentEditable]="isEditable">You can edit this text if editable is true.</div>
  `,
})
export class App {
  isEditable = true;
}*/

//cHAPETR 7
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      <p>{{ message }}</p>
    </section>
  `,
})
export class App {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}*/

//chapter 8
import { Component, input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>The user's name is {{ name() }}</p>
  `,
})
export class User {
  name = input<string>();
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  template: `
    <app-user name="Avinash"></app-user>
  `,
})
export class App {}

bootstrapApplication(App);

//Chapter 9

/*import { Component, output, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// ✅ Child Component
@Component({
  selector: 'app-child',
  standalone: true,
  styles: [`.btn { padding: 5px; margin-bottom: 10px; }`],
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class Child {
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

// ✅ Parent Component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <ul>
      @for (item of items(); track item) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
})
export class App {
  items = signal<string[]>([]);

  addItem(emoji: string) {
    this.items.update((current) => [...current, emoji]);
  }
}

// ✅ Bootstrap the application
bootstrapApplication(App); */
