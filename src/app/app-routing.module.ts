import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }, {
    path: '',
    loadChildren: () => import('./ui/ui.module').then(m => m.UiModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
