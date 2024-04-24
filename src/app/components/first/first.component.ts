import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  _id: string;

  @Input()
  set id(heroId: string) {
    this._id = 'id_' + heroId;
  }
}
