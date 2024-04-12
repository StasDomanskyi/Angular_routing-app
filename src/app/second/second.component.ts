import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  _id: string;

  @Input()
  set id(heroId: string) {
    this._id = '_' + heroId;
  }

  constructor(private _router: Router,
              private _route: ActivatedRoute) { }

  goToFirst(): void {
    this._router.navigate(['../', 'first-component', '3'], {relativeTo: this._route})
  }
}
