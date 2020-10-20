import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './components/a/a.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '1' },
  { path: '1', component: AComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
