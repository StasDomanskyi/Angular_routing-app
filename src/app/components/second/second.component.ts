import { Component, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TOKEN } from './token';
import { TokenType } from '@angular/compiler';
import { CommonModule } from '@angular/common';

const user = {
  firstName: 'John',
  lastName: 'Carter'
}

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  providers: [{provide: TOKEN, useValue: user}]
})
export class SecondComponent {
  _id: string;
  user;

  @Input()
  set id(heroId: string) {
    this._id = '_' + heroId;
  }

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              @Inject(TOKEN) user: TokenType
            ) {
              this.user = user;
            }

  goToFirst(): void {
    this._router.navigate(['../', 'first-component', '3'], {relativeTo: this._route})
  }
}
