import { ResolveFn, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

export const routes: Routes = [
  {
    path: 'first-component/:id',
    component: FirstComponent,
    title: 'First Component Title',
    children: [
      {
        path: 'child-a',
        title: resolvedChildATitle,
        component: ChildAComponent
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent
      }
    ]
  },
  {
    path: 'second-component',
    title: 'Second Component Title',
    component: SecondComponent
  },
  {path: '', redirectTo: '/first-component/1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
